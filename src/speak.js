/* Speaking simulator: random topics · prep/talk timers · examiner voice · MediaRecorder · IndexedDB library */
(function () {
  'use strict';
  var A = window.APP, SP = window.SPEAK, V = A.V, I = A.I, $ = A.$, $$ = A.$$, esc = A.esc;
  var ALT_URL = 'https://sleeplessss.github.io/b2-teacher-course/';
  var IN_GAS = /googleusercontent\.com$|script\.google\.com$/.test(location.hostname);
  function fmt(id) { return SP.formats.filter(function (f) { return f.id === id; })[0]; }
  function canRecord() { return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder); }
  function mmss(s) { s = Math.max(0, Math.round(s)); return Math.floor(s / 60) + ':' + A.pad(s % 60); }
  function pickRand(arr, avoid) { if (arr.length < 2) return 0; var i; do { i = Math.floor(Math.random() * arr.length); } while (i === avoid); return i; }

  /* ── IndexedDB ── */
  var DB = {
    db: null,
    open: function () {
      var self = this;
      return new Promise(function (res, rej) {
        if (self.db) return res(self.db);
        if (!window.indexedDB) return rej(new Error('no idb'));
        var r = indexedDB.open('b2course-audio', 1);
        r.onupgradeneeded = function () { r.result.createObjectStore('rec', { keyPath: 'id' }); };
        r.onsuccess = function () { self.db = r.result; res(self.db); };
        r.onerror = function () { rej(r.error); };
      });
    },
    tx: function (mode, fn) {
      return this.open().then(function (db) {
        return new Promise(function (res, rej) {
          var t = db.transaction('rec', mode), st = t.objectStore('rec'), out = fn(st);
          t.oncomplete = function () { res(out && out.result !== undefined ? out.result : out); };
          t.onerror = function () { rej(t.error); };
        });
      });
    },
    put: function (o) { return this.tx('readwrite', function (s) { s.put(o); }); },
    del: function (id) { return this.tx('readwrite', function (s) { s.delete(id); }); },
    all: function () { return this.tx('readonly', function (s) { return s.getAll(); }); }
  };

  /* ── audio helpers ── */
  var actx = null;
  function ctx() { if (!actx) { var C = window.AudioContext || window.webkitAudioContext; if (C) actx = new C(); } if (actx && actx.state === 'suspended') actx.resume(); return actx; }
  function beep(freq, ms) {
    var c = ctx(); if (!c) return;
    var o = c.createOscillator(), g = c.createGain();
    o.frequency.value = freq || 880; o.type = 'sine';
    g.gain.setValueAtTime(0.0001, c.currentTime); g.gain.exponentialRampToValueAtTime(0.25, c.currentTime + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + (ms || 220) / 1000);
    o.connect(g); g.connect(c.destination); o.start(); o.stop(c.currentTime + (ms || 220) / 1000 + 0.05);
  }
  function speakP(text, run) {
    return new Promise(function (res) {
      if (!run.voice || !A.TTS.ok) return setTimeout(res, 900);
      var done = false, fin = function () { if (!done) { done = true; res(); } };
      setTimeout(fin, A.words(text) * 520 + 2500);
      A.TTS.speak(text, null, fin);
    });
  }
  function wait(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }

  function Recorder() {
    var self = this; this.stream = null; this.mr = null; this.chunks = []; this.t0 = 0; this.raf = 0; this.an = null;
    this.init = function () {
      return navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true } }).then(function (s) {
        self.stream = s;
        try { var c = ctx(), src = c.createMediaStreamSource(s); self.an = c.createAnalyser(); self.an.fftSize = 512; src.connect(self.an); } catch (e) { }
      });
    };
    this.start = function () {
      try { return this._start(); } catch (e) { this.failed = true; A.toast('เริ่มบันทึกเสียงไม่ได้ — ฝึกต่อแบบจับเวลา'); return false; }
    };
    this._start = function () {
      if (!this.stream) return false;
      var types = ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4', 'audio/aac', 'audio/ogg;codecs=opus'];
      var mt = types.filter(function (t) { return MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported(t); })[0];
      this.chunks = [];
      this.mr = mt ? new MediaRecorder(this.stream, { mimeType: mt }) : new MediaRecorder(this.stream);
      this.mr.ondataavailable = function (e) { if (e.data && e.data.size) self.chunks.push(e.data); };
      this.mr.start(500); this.t0 = Date.now(); this.acc = 0; this.t1 = Date.now();
      return true;
    };
    this.pause = function () { var m = this.mr; if (m && m.state === 'recording' && m.pause) { m.pause(); this.acc += Date.now() - this.t1; } };
    this.resume = function () { var m = this.mr; if (!m) return this.start(); if (m.state === 'paused') { m.resume(); this.t1 = Date.now(); } return true; };
    this.stop = function () {
      return new Promise(function (res) {
        var mr = self.mr;
        if (!mr || mr.state === 'inactive') return res(null);
        var active = self.acc + (mr.state === 'recording' ? Date.now() - self.t1 : 0);
        mr.onstop = function () { res({ blob: new Blob(self.chunks, { type: (mr.mimeType || 'audio/webm').split(';')[0] }), dur: active / 1000 }); };
        try { mr.requestData(); } catch (e) { }
        mr.stop();
      });
    };
    this.meter = function (bar) {
      cancelAnimationFrame(this.raf);
      if (!this.an || !bar) return;
      var buf = new Uint8Array(this.an.fftSize);
      var loop = function () {
        self.an.getByteTimeDomainData(buf); var sum = 0;
        for (var i = 0; i < buf.length; i++) { var v = (buf[i] - 128) / 128; sum += v * v; }
        var lvl = Math.min(1, Math.sqrt(sum / buf.length) * 4);
        bar.style.transform = 'scaleX(' + Math.max(0.03, lvl) + ')';
        self.raf = requestAnimationFrame(loop);
      };
      loop();
    };
    this.release = function () {
      cancelAnimationFrame(this.raf);
      try { if (this.mr && this.mr.state !== 'inactive') this.mr.stop(); } catch (e) { }
      if (this.stream) this.stream.getTracks().forEach(function (t) { t.stop(); });
      this.stream = null;
    };
  }

  /* ── countdown ring ── */
  function countdown(box, secs, label, run, opts) {
    opts = opts || {};
    return new Promise(function (res) {
      var r = 54, c = 2 * Math.PI * r, end = Date.now() + secs * 1000, skipped = false, warned = false;
      box.innerHTML = '<div class="tring ' + (opts.rec ? 'rec' : '') + '"><svg viewBox="0 0 130 130"><circle cx="65" cy="65" r="' + r + '" fill="none" stroke="var(--line)" stroke-width="9"/><circle class="arc" cx="65" cy="65" r="' + r + '" fill="none" stroke-width="9" stroke-linecap="round" stroke-dasharray="' + c + '" stroke-dashoffset="0"/></svg><div class="tv"><b>' + mmss(secs) + '</b><span>' + esc(label) + '</span></div></div>';
      var arc = $('.arc', box), tv = $('.tv b', box);
      var tid = setInterval(function () {
        if (run.dead) { clearInterval(tid); return; }
        var left = (end - Date.now()) / 1000;
        arc.style.strokeDashoffset = c * (1 - Math.max(0, left) / secs);
        tv.textContent = mmss(Math.ceil(left));
        if (!warned && opts.warn && left <= opts.warn && secs > opts.warn + 5) { warned = true; box.firstChild.classList.add('warn'); }
        if (left <= 0 || skipped) { clearInterval(tid); res(skipped ? 'skip' : 'time'); }
      }, 200);
      run.skip = function () { skipped = true; };
    });
  }

  /* ── hub ── */
  V.speak = function (el) {
    A.top({ back: function () { A.go('prep'); }, title: 'Speaking' });
    var groups = {};
    SP.formats.forEach(function (f) { (groups[f.exam] = groups[f.exam] || []).push(f); });
    el.innerHTML = '<div class="uhead"><div class="eyebrow">Speaking Simulator</div><h1>ฝึกพูดเสมือนสอบจริง</h1><p>ระบบสุ่มหัวข้อ ผู้คุมสอบอ่านคำถาม จับเวลาเตรียม/พูด และบันทึกเสียงให้เปิดฟังย้อนหลัง</p></div>' +
      micNote() +
      Object.keys(groups).map(function (g) {
        return '<div class="sec"><h2>' + g + '</h2></div><div class="rows">' + groups[g].map(function (f) {
          return '<button class="row" data-f="' + f.id + '"><span class="dot">' + I.mic.replace('<svg', '<svg width="15" height="15"') + '</span><div class="tx"><b>' + esc(f.name) + '</b><span>' + esc(f.th) + '</span></div>' + I.chev.replace('<svg', '<svg class="chev"') + '</button>';
        }).join('') + '</div>';
      }).join('') +
      '<div class="sec"><h2>คลังเสียงของฉัน</h2></div><div class="rows"><button class="row" id="sp-recs"><div class="tx"><b>ฟังเสียงที่บันทึกไว้</b><span id="sp-count">กำลังโหลด…</span></div>' + I.chev.replace('<svg', '<svg class="chev"') + '</button></div>';
    $$('[data-f]', el).forEach(function (b) { b.onclick = function () { A.go('speakrun', { f: b.dataset.f }); }; });
    $('#sp-recs').onclick = function () { A.go('recs'); };
    DB.all().then(function (a) { var c = $('#sp-count'); if (c) c.textContent = a.length + ' ไฟล์'; }, function () { var c = $('#sp-count'); if (c) c.textContent = 'เบราว์เซอร์นี้เก็บไฟล์เสียงไม่ได้'; });
  };
  function micNote() {
    if (IN_GAS) return '<div class="note warnbox"><b>เวอร์ชัน Google Apps Script บันทึกเสียงไม่ได้</b><br>Google ปิดสิทธิ์ไมโครโฟนในเว็บแอป Apps Script — ยังฝึกแบบจับเวลาได้ แต่ถ้าต้องการบันทึกเสียง เปิดเวอร์ชันนี้แทน:<br><a href="' + ALT_URL + '" target="_blank" rel="noopener">' + ALT_URL + ' ↗</a></div>';
    if (!canRecord()) return '<div class="note warnbox">เบราว์เซอร์นี้ไม่รองรับการบันทึกเสียง แนะนำ Chrome (Android) หรือ Safari (iPhone) เวอร์ชันล่าสุด — ยังฝึกแบบจับเวลาได้</div>';
    if (location.protocol === 'file:') return '<div class="note">เปิดจากไฟล์ในเครื่อง: เบราว์เซอร์จะขออนุญาตใช้ไมโครโฟนเมื่อเริ่มฝึก</div>';
    return '';
  }

  /* ── session ── */
  V.speakrun = function (el) {
    var f = fmt(A.R.f), S = A.S, last = S.spLast || (S.spLast = {});
    var M4 = A.R.m4;
    var back = function () { if (M4) A.go('xset', { x: 'edusynch', id: 'edu-full' }); else A.go(A.R.from ? 'exam' : 'speak', A.R.from ? { x: A.R.from } : null); };
    A.top({ back: back, title: f.exam + ' · ' + f.name });
    var run = { dead: false, voice: S.spVoice !== false && A.TTS.ok, rec: null, skip: function () { } };
    A.leave.push(function () { run.dead = true; if (run.rec) run.rec.release(); if (window.speechSynthesis) speechSynthesis.cancel(); });

    var timing = f.prep || f.talk ? (f.prep ? 'เตรียม ' + mmss(f.prep) + ' นาที · ' : 'ไม่มีเวลาเตรียม · ') + (f.talk ? 'พูด ' + mmss(f.talk) + ' นาที' : 'ตอบข้อละ ' + f.perQ + ' วินาที') : f.id === 'toefl_rep' ? 'ฟัง 1 ครั้ง · พูดตามทันที 7 ประโยค' : 'ตอบข้อละ ' + f.perQ + ' วินาที · ไม่มีเวลาเตรียม';
    el.innerHTML = '<div class="uhead"><div class="eyebrow">' + esc(f.exam) + ' Speaking</div><h1>' + esc(f.name) + '</h1><p>' + esc(f.desc) + '</p></div>' +
      '<div class="card mt"><div class="kv"><span>รูปแบบ</span><b>' + esc(f.th) + '</b></div><div class="kv"><span>เวลา</span><b>' + timing + '</b></div><div class="kv"><span>หัวข้อ</span><b>สุ่มเมื่อกดเริ่ม (ไม่เห็นล่วงหน้า)</b></div>' +
      '<label class="switch"><input type="checkbox" id="sr-voice" ' + (run.voice ? 'checked' : '') + (A.TTS.ok ? '' : ' disabled') + '><span>ผู้คุมสอบอ่านคำถามออกเสียง</span></label></div>' +
      micNote() +
      '<div class="note">ใส่หูฟังจะได้ยินชัดและไม่มีเสียงคำถามติดไปในไฟล์บันทึก · หาที่เงียบ · พูดให้เต็มเวลา</div>' +
      '<div class="btns"><button class="btn" id="sr-go">' + I.mic.replace('<svg', '<svg width="20" height="20"') + ' สุ่มหัวข้อและเริ่มสอบ</button></div>';
    $('#sr-voice').onchange = function () { run.voice = this.checked; S.spVoice = this.checked; A.save(); };
    $('#sr-go').onclick = function () { this.disabled = true; start(); };

    function start() {
      ctx(); // unlock audio on user gesture
      var content = A.R.same || draw();
      var ready = canRecord() && !IN_GAS ? (run.rec = new Recorder()).init().then(function () { return true; }, function (e) { run.rec = null; A.toast('ไม่ได้รับสิทธิ์ไมโครโฟน — ฝึกแบบจับเวลาอย่างเดียว'); return false; }) : Promise.resolve(false);
      ready.then(function (ok) { if (!run.dead) flow(content, ok); });
    }

    function draw() {
      var c = { f: f.id };
      if (f.id === 'ielts1') { var i = pickRand(SP.part1, last.ielts1); last.ielts1 = i; c.title = 'Topic: ' + SP.part1[i].topic; c.qs = SP.part1[i].qs; }
      else if (f.id === 'ielts2' || f.id === 'ielts3') {
        var j = A.R.card != null ? A.R.card : pickRand(SP.cards, last.card); last.card = j; c.card = j;
        var cd = SP.cards[j]; c.title = cd.topic;
        if (f.id === 'ielts2') { c.points = cd.points; c.model = cd.model; } else { c.qs = cd.p3; c.title = 'Discussion: ' + cd.topic.replace(/^Describe /, '').replace(/\.$/, ''); }
      }
      else if (f.id === 'toefl_int') { var k = pickRand(SP.interviews, last.int); last.int = k; c.title = 'Interview: ' + SP.interviews[k].theme; c.qs = SP.interviews[k].qs; }
      else if (f.id === 'toefl_rep') {
        var by = function (n, m) { return A.shuffle(SP.repeat.filter(function (r) { return r.n === n; })).slice(0, m); };
        c.title = 'Listen and Repeat'; c.reps = by(1, 2).concat(by(2, 3), by(3, 2)).map(function (r) { return r.t; });
      }
      else if (f.id === 'edusynch') {
        var ex = A.shuffle(SP.edu.exp)[0], ops = A.shuffle(SP.edu.op).slice(0, 2);
        c.title = 'EduSynch Speaking · 3 questions'; c.qs = [ex].concat(ops);
      }
      else if (f.id === 'cefr') { var o = pickRand(SP.opinions, last.op); last.op = o; c.title = SP.opinions[o]; }
      A.save();
      return c;
    }

    function stage(html) { el.innerHTML = html; window.scrollTo(0, 0); }
    function recBar(on) { return on ? '<div class="recbar"><span class="rdot"></span><span>กำลังบันทึกเสียง</span><div class="meter"><i id="mt"></i></div></div>' : '<div class="recbar off"><span>ไม่ได้บันทึกเสียง (โหมดจับเวลา)</span></div>'; }

    function flow(c, recOK) {
      var p;
      if (f.id === 'ielts2' || f.id === 'cefr') p = cueFlow(c, recOK);
      else if (f.id === 'toefl_rep') p = repeatFlow(c, recOK);
      else if (f.id === 'edusynch') p = eduFlow(c, recOK);
      else p = qFlow(c, recOK);
      p.then(function (out) {
        if (run.dead) return;
        var r = run.rec ? run.rec.stop() : Promise.resolve(null);
        r.then(function (audio) { if (run.rec) run.rec.release(); if (!run.dead) review(c, audio); });
      });
    }

    function cueFlow(c, recOK) {
      var isCard = f.id === 'ielts2';
      var cardHtml = '<div class="cue"><div class="eyebrow">' + (isCard ? 'Candidate task card' : 'Topic') + '</div><h2>' + esc(c.title) + '</h2>' + (c.points ? '<div class="small muted" style="margin:6px 0 2px">You should say:</div><ul>' + c.points.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul>' : '') + '</div>';
      stage(cardHtml + '<div class="stagebox" id="tb"></div><label class="lb" for="notes">โน้ตคีย์เวิร์ด (ไม่ต้องเขียนเป็นประโยค)</label><textarea id="notes" style="min-height:110px" placeholder="keywords…"></textarea><div class="btns"><button class="btn ghost" id="skip">พร้อมแล้ว เริ่มพูดเลย</button></div>');
      $('#skip').onclick = function () { run.skip(); };
      var intro = isCard ? 'I\'m going to give you a topic, and I\'d like you to talk about it for one to two minutes. You have one minute to think about what you are going to say. You can make some notes if you wish.' : 'Here is your topic. You have thirty seconds to prepare.';
      return speakP(intro, run).then(function () {
        if (run.dead) return;
        return countdown($('#tb'), f.prep, 'เวลาเตรียม', run);
      }).then(function () {
        if (run.dead) return;
        var notes = $('#notes') ? $('#notes').value : '';
        c.notes = notes;
        stage(cardHtml + (notes ? '<div class="notes-ro">' + esc(notes) + '</div>' : '') + recBar(recOK) + '<div class="stagebox" id="tb"></div><div class="btns"><button class="btn ghost" id="skip">จบการพูด</button></div>');
        $('#skip').onclick = function () { run.skip(); };
        return speakP(isCard ? 'All right? Remember, you have one to two minutes for this. Please start speaking now.' : 'Please start speaking now.', run);
      }).then(function () {
        if (run.dead) return;
        beep(880); if (run.rec && run.rec.start()) run.rec.meter($('#mt'));
        return countdown($('#tb'), f.talk, 'เวลาพูด', run, { rec: recOK, warn: 15 });
      }).then(function () { if (!run.dead) { beep(520, 300); return speakP('Thank you.', run); } });
    }

    function qFlow(c, recOK) {
      var i = 0;
      function one() {
        if (run.dead || i >= c.qs.length) return Promise.resolve();
        var q = c.qs[i];
        stage('<div class="eyebrow">' + esc(c.title) + '</div><div class="qprog">' + c.qs.map(function (_, k) { return '<i class="' + (k < i ? 'd' : k === i ? 'c' : '') + '"></i>'; }).join('') + '</div>' +
          '<div class="examiner"><span class="av">' + I.user + '</span><div class="qtext" id="qt">' + (run.voice ? '<span class="muted">ผู้คุมสอบกำลังถาม…</span>' : esc(q)) + '</div></div>' + recBar(recOK) +
          '<div class="stagebox" id="tb"></div><div class="btns"><button class="btn ghost" id="skip">' + (i < c.qs.length - 1 ? 'ตอบจบแล้ว ข้อต่อไป' : 'ตอบจบแล้ว') + '</button></div>');
        $('#skip').onclick = function () { run.skip(); };
        if (run.rec) run.rec.meter($('#mt'));
        return speakP(q, run).then(function () {
          if (run.dead) return;
          if (run.rec && !run.rec.mr && !run.rec.failed) run.rec.start();
          var qt = $('#qt'); if (qt) qt.textContent = q;
          beep(880, 150);
          return countdown($('#tb'), f.perQ, 'เวลาตอบ', run, { rec: recOK, warn: 8 });
        }).then(function () { i++; return one(); });
      }
      var intro = f.id === 'ielts1' ? 'Now, in this first part, I\'d like to ask you some questions about yourself. Let\'s talk about ' + c.title.replace('Topic: ', '').toLowerCase() + '.' : f.id === 'ielts3' ? 'We\'ve been talking about ' + c.title.replace('Discussion: ', '') + '. I\'d like to discuss with you some more general questions related to this.' : 'You will be asked four questions. Answer each question as fully as you can.';
      stage('<div class="examiner"><span class="av">' + I.user + '</span><div class="qtext">' + esc(intro) + '</div></div>' + recBar(recOK));
      return speakP(intro, run).then(one).then(function () { if (!run.dead) { beep(520, 300); return speakP('Thank you. That is the end of the speaking test.', run); } });
    }

    function eduFlow(c, recOK) {
      var i = 0, n = c.qs.length;
      function one() {
        if (run.dead || i >= n) return Promise.resolve();
        var q = c.qs[i];
        stage('<div class="eyebrow">Question ' + (i + 1) + ' of ' + n + '</div><div class="qprog">' + c.qs.map(function (_, k) { return '<i class="' + (k < i ? 'd' : k === i ? 'c' : '') + '"></i>'; }).join('') + '</div>' +
          '<div class="cue"><div class="eyebrow">' + (i === 0 ? 'Personal experience' : 'Opinion') + '</div><h2>' + esc(q) + '</h2></div>' +
          '<div id="rb"><div class="recbar off"><span>เตรียมตัว — คิดโครง: จุดยืน/เหตุการณ์ → เหตุผล → ตัวอย่าง</span></div></div>' +
          '<div class="stagebox" id="tb"></div><div class="btns"><button class="btn ghost" id="skip">พร้อมแล้ว เริ่มพูด</button></div>');
        $('#skip').onclick = function () { run.skip(); };
        return speakP(q, run).then(function () {
          if (run.dead) return;
          return countdown($('#tb'), f.prep, 'เวลาเตรียม', run);
        }).then(function () {
          if (run.dead) return;
          beep(880, 150);
          var ok = run.rec && !run.rec.failed && run.rec.resume();
          $('#rb').innerHTML = recBar(!!ok);
          if (ok) run.rec.meter($('#mt'));
          var sk = $('#skip'); sk.textContent = i < n - 1 ? 'พูดจบแล้ว ข้อต่อไป' : 'พูดจบแล้ว';
          return countdown($('#tb'), f.perQ, 'เวลาพูด', run, { rec: !!ok, warn: 10 });
        }).then(function () {
          if (run.rec) run.rec.pause();
          beep(520, 200); i++;
          return wait(400).then(one);
        });
      }
      var intro = 'In this section, you will answer three questions. For each question, you will have fifteen seconds to prepare and forty-five seconds to speak.';
      stage('<div class="examiner"><span class="av">' + I.user + '</span><div class="qtext">' + esc(intro) + '</div></div>');
      return speakP(intro, run).then(one);
    }

    function repeatFlow(c, recOK) {
      var i = 0;
      function one() {
        if (run.dead || i >= c.reps.length) return Promise.resolve();
        var t = c.reps[i], secs = Math.min(14, Math.max(6, Math.round(3 + A.words(t) * 0.7)));
        stage('<div class="eyebrow">Listen and Repeat</div><div class="qprog">' + c.reps.map(function (_, k) { return '<i class="' + (k < i ? 'd' : k === i ? 'c' : '') + '"></i>'; }).join('') + '</div>' +
          '<div class="examiner"><span class="av">' + I.spk + '</span><div class="qtext" id="qt"><span class="muted">ฟังประโยคที่ ' + (i + 1) + '/' + c.reps.length + '…</span></div></div>' + recBar(recOK) + '<div class="stagebox" id="tb"></div><div class="btns"><button class="btn ghost" id="skip">พูดจบแล้ว</button></div>');
        $('#skip').onclick = function () { run.skip(); };
        if (run.rec) run.rec.meter($('#mt'));
        var listen = run.voice ? speakP(t, Object.assign({}, run, { voice: true })) : Promise.resolve($('#qt').textContent = t);
        return Promise.resolve(listen).then(function () {
          if (run.dead) return;
          if (run.rec && !run.rec.mr && !run.rec.failed) run.rec.start();
          var qt = $('#qt'); if (qt) qt.innerHTML = '<b>พูดตามเลย</b>';
          beep(880, 150);
          return countdown($('#tb'), secs, 'พูดตาม', run, { rec: recOK });
        }).then(function () { i++; return wait(300).then(one); });
      }
      stage('<div class="examiner"><span class="av">' + I.user + '</span><div class="qtext">You will hear seven sentences. After each one, repeat it exactly as you heard it.</div></div>');
      return speakP('You will hear seven sentences. After each one, repeat it exactly as you heard it.', run).then(one);
    }

    function review(c, audio) {
      var id = Date.now(), checks = {}, recObj = null;
      var items = c.qs || c.reps || null;
      if (audio && audio.blob && audio.blob.size) {
        recObj = { id: id, ts: id, f: f.id, title: c.title, items: items, points: c.points || null, dur: audio.dur, mime: audio.blob.type, blob: audio.blob, checks: checks };
        DB.put(recObj).catch(function () { A.toast('บันทึกลงคลังไม่ได้ (พื้นที่เบราว์เซอร์)'); });
      }
      var S = A.S; S.spCount = (S.spCount || 0) + 1;
      if (M4 && S.m4cur) { S.m4cur.s = { id: recObj ? recObj.id : null, checks: checks, done: true }; S.m4cur.stage = 'writing'; }
      A.touch();
      var url = recObj ? URL.createObjectURL(audio.blob) : null;
      if (url) A.leave.push(function () { URL.revokeObjectURL(url); });
      var ext = recObj ? (/mp4|aac/.test(recObj.mime) ? 'm4a' : /ogg/.test(recObj.mime) ? 'ogg' : 'webm') : '';
      el.innerHTML = '<div class="uhead"><div class="eyebrow">ผลการฝึก · ' + esc(f.exam) + ' ' + esc(f.name) + '</div><h1>ฟังเสียงตัวเอง</h1><p>' + esc(c.title) + '</p></div>' +
        (url ? '<div class="card mt"><audio controls preload="metadata" src="' + url + '" style="width:100%"></audio><div class="kv" style="margin-top:8px"><span>ความยาว</span><b>' + mmss(audio.dur) + ' นาที</b></div><div class="btns two" style="margin-top:10px"><a class="btn ghost" href="' + url + '" download="speaking-' + f.id + '-' + A.ds(new Date()) + '.' + ext + '">ดาวน์โหลด</a><button class="btn ghost" id="rv-lib">คลังเสียง</button></div><p class="small muted" style="margin:8px 0 0">บันทึกในคลังเสียงของเครื่องนี้แล้ว</p></div>'
          : '<div class="note warnbox">รอบนี้ไม่ได้บันทึกเสียง (ไม่มีสิทธิ์ไมโครโฟน หรือเปิดจาก Apps Script)' + (IN_GAS ? '<br><a href="' + ALT_URL + '" target="_blank" rel="noopener">เปิดเวอร์ชันที่บันทึกเสียงได้ ↗</a>' : '') + '</div>') +
        (c.reps ? '<div class="sec"><h2>ประโยคต้นฉบับ</h2><span class="small muted">เทียบกับเสียงของคุณ</span></div><div class="card">' + c.reps.map(function (t, i) { return '<div class="ex-line">' + A.sayBtn(t) + '<span><b>' + (i + 1) + '.</b> ' + esc(t) + '</span></div>'; }).join('') + '</div>' : '') +
        (c.qs ? '<div class="sec"><h2>คำถามในรอบนี้</h2></div><div class="card">' + c.qs.map(function (q, i) { return '<div class="ex-line">' + A.sayBtn(q) + '<span><b>' + (i + 1) + '.</b> ' + esc(q) + '</span></div>'; }).join('') + '</div>' : '') +
        (M4 ? '<div class="note">ข้อสอบจำลอง 4 ทักษะ · ส่วนที่ 3/4 เสร็จแล้ว — ฟังเสียงตัวเอง แล้วติ๊กเกณฑ์ที่ทำได้ ผลจะนำไปคำนวณระดับ Speaking</div>' : '') +
        (!c.reps ? '<div class="sec"><h2>ประเมินตัวเอง</h2><span class="small muted">ฟังเสียงแล้วติ๊ก</span></div><div class="card checks">' + SP.criteria.map(function (cr) { return '<label class="ck"><input type="checkbox" data-k="' + cr.k + '"><span><b>' + esc(cr.name) + '</b><br><span class="small muted">' + esc(cr.th) + '</span></span></label>'; }).join('') + '<div class="small" id="ck-sum" style="margin-top:8px"></div></div>' : '') +
        (c.model ? '<details class="card mt"><summary class="link" style="list-style:none;cursor:pointer">ดูตัวอย่างคำตอบระดับ B2+</summary><div style="display:flex;justify-content:flex-end;margin:8px 0">' + A.sayBtn(c.model) + '</div><div class="passage" style="font-size:15.5px">' + A.paras(c.model) + '</div></details>' : '') +
        '<details class="card mt"><summary class="link" style="list-style:none;cursor:pointer">สำนวนช่วยพูด (useful phrases)</summary><div class="phr-grid">' +
        [['เริ่มตอบ', 'start'], ['ให้เหตุผล', 'reason'], ['ยกตัวอย่าง', 'example'], ['ซื้อเวลาคิด', 'time'], ['สรุป', 'end']].map(function (g) { return '<div><div class="small muted">' + g[0] + '</div>' + SP.phrases[g[1]].map(function (p) { return '<div class="ph">' + esc(p) + '</div>'; }).join('') + '</div>'; }).join('') + '</div></details>' +
        (M4 ? '<div class="btns"><button class="btn gold" id="rv-m4">ไปส่วนสุดท้าย: Writing →</button></div>' :
        '<div class="btns">' + (f.id === 'ielts2' ? '<button class="btn gold" id="rv-p3">ต่อ Part 3 (หัวข้อเดียวกัน)</button>' : '') + '<button class="btn" id="rv-new">สุ่มหัวข้อใหม่</button><button class="btn ghost" id="rv-same">ลองหัวข้อเดิมอีกครั้ง</button></div>');
      $$('.checks input', el).forEach(function (b) {
        b.onchange = function () {
          checks[b.dataset.k] = b.checked;
          var n = Object.keys(checks).filter(function (k) { return checks[k]; }).length;
          $('#ck-sum').innerHTML = 'ผ่าน <b>' + n + '/5</b> เกณฑ์ ' + (n >= 4 ? '— พร้อมระดับ B2 แล้ว' : n >= 2 ? '— ใกล้แล้ว ฝึกซ้ำหัวข้อเดิมอีกรอบ' : '— ลองฟังตัวอย่างคำตอบและใช้สำนวนช่วยพูด');
          if (recObj) { recObj.checks = checks; DB.put(recObj).catch(function () { }); }
          if (M4 && A.S.m4cur) { A.S.m4cur.s.checks = checks; A.save(); }
        };
      });
      var lib = $('#rv-lib'); if (lib) lib.onclick = function () { A.go('recs'); };
      var p3 = $('#rv-p3'); if (p3) p3.onclick = function () { A.go('speakrun', { f: 'ielts3', card: c.card, from: A.R.from }); };
      var m4b = $('#rv-m4'); if (m4b) { m4b.onclick = function () { A.S.m4cur.stage = 'writing'; A.save(); A.go('m4'); }; return; }
      $('#rv-new').onclick = function () { A.go('speakrun', { f: f.id, from: A.R.from }); };
      $('#rv-same').onclick = function () {
        if (c.card != null) A.go('speakrun', { f: f.id, card: c.card, from: A.R.from });
        else A.go('speakrun', { f: f.id, from: A.R.from, same: { title: c.title, qs: c.qs, reps: c.reps } });
      };
    }
    if (A.R.same) $$('.kv b', el)[2].textContent = 'เดิม: ' + A.R.same.title;
  };

  /* ── library ── */
  V.recs = function (el) {
    A.top({ back: function () { A.go('speak'); }, title: 'คลังเสียงของฉัน' });
    el.innerHTML = '<div class="uhead"><div class="eyebrow">My recordings</div><h1>คลังเสียงของฉัน</h1><p>ฟังย้อนหลังเพื่อเทียบพัฒนาการ ไฟล์เก็บในเบราว์เซอร์ของเครื่องนี้เท่านั้น</p></div><div id="rl" class="mt"><p class="muted">กำลังโหลด…</p></div>';
    var urls = []; A.leave.push(function () { urls.forEach(function (u) { URL.revokeObjectURL(u); }); });
    DB.all().then(function (all) {
      var box = $('#rl'); if (!box) return;
      all.sort(function (a, b) { return b.ts - a.ts; });
      if (!all.length) { box.innerHTML = '<div class="empty"><h2>ยังไม่มีไฟล์เสียง</h2><p class="muted">เริ่มฝึกพูดแล้วเสียงจะถูกเก็บไว้ที่นี่</p><div class="btns"><button class="btn" id="rl-go">ไปฝึกพูด</button></div></div>'; $('#rl-go').onclick = function () { A.go('speak'); }; return; }
      box.innerHTML = all.map(function (r) {
        var u = URL.createObjectURL(r.blob); urls.push(u);
        var f = fmt(r.f) || { exam: '', name: r.f }, n = r.checks ? Object.keys(r.checks).filter(function (k) { return r.checks[k]; }).length : 0;
        return '<div class="card recitem" data-id="' + r.id + '"><div class="ri-h"><div><div class="eyebrow">' + esc(f.exam + ' · ' + f.name) + '</div><b>' + esc(r.title) + '</b><div class="small muted">' + new Date(r.ts).toLocaleString('th-TH', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }) + ' · ' + mmss(r.dur) + (n ? ' · ประเมินตัวเอง ' + n + '/5' : '') + '</div></div><button class="ibtn del" aria-label="ลบ">' + I.trash + '</button></div><audio controls preload="none" src="' + u + '" style="width:100%;margin-top:8px"></audio></div>';
      }).join('') + '<p class="small muted center">' + all.length + ' ไฟล์</p>';
      $$('.del', box).forEach(function (b) {
        var armed = false;
        b.onclick = function () {
          if (!armed) { armed = true; b.classList.add('armed'); A.toast('แตะอีกครั้งเพื่อลบ'); setTimeout(function () { armed = false; b.classList.remove('armed'); }, 2500); return; }
          var card = b.closest('.recitem'); DB.del(+card.dataset.id).then(function () { card.remove(); A.toast('ลบแล้ว'); });
        };
      });
    }, function () { var box = $('#rl'); if (box) box.innerHTML = '<div class="note warnbox">เบราว์เซอร์นี้ไม่อนุญาตให้เก็บไฟล์เสียง (เช่น โหมดไม่ระบุตัวตน)</div>'; });
  };
})();
