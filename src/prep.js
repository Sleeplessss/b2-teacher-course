/* Exam prep hub: TOEIC / IELTS / TOEFL / EF SET practice sets */
(function () {
  'use strict';
  var A = window.APP, X = window.EXAMS, V = A.V, I = A.I, $ = A.$, $$ = A.$$, esc = A.esc;
  var ORDER = ['edusynch', 'toeic', 'ielts', 'toefl', 'efset'];
  var SPK = { edusynch: ['edusynch'], ielts: ['ielts1', 'ielts2', 'ielts3'], toefl: ['toefl_rep', 'toefl_int'] };
  function ex() { var S = A.S; return S.exams || (S.exams = {}); }
  function rec(id) { var e = ex(); return e[id] || (e[id] = {}); }
  function setDone(id) { var r = ex()[id]; return !!(r && (r.done || r.score != null)); }
  function chev() { return I.chev.replace('<svg', '<svg class="chev"'); }
  function fmtById(id) { return window.SPEAK.formats.filter(function (f) { return f.id === id; })[0]; }

  /* ── hub ── */
  V.prep = function (el) {
    A.top();
    el.innerHTML = '<div class="uhead"><div class="eyebrow">Exam Prep</div><h1>เตรียมสอบตามสนาม</h1><p>ฝึกรูปแบบข้อสอบจริงของแต่ละสนาม + ฝึกพูดพร้อมบันทึกเสียง</p></div>' +
      '<button class="feature mt" id="pp-speak"><div class="ft-tx"><span class="eyebrow" style="color:var(--gold)">ใหม่ · Speaking</span><b>ฝึกพูดเสมือนสอบจริง</b><span>สุ่มหัวข้อ · จับเวลาเตรียม/พูด · บันทึกเสียงแล้วเปิดฟังได้</span></div><div class="ft-mic">' + I.mic + '</div></button>' +
      '<div class="sec"><h2>เลือกสนามสอบ</h2><span class="small muted">คะแนนเทียบ B2</span></div><div class="xgrid">' +
      ORDER.map(function (k) {
        var e = X[k], n = e.sets.length, d = e.sets.filter(function (s) { return setDone(s.id); }).length;
        return '<button class="xcard' + (k === 'edusynch' ? ' wide' : '') + '" data-x="' + k + '">' + (k === 'edusynch' ? '<span class="lvchip" style="float:right">ครูนิยมสอบ · ศูนย์ HCEC</span>' : '') + '<div class="xn">' + esc(e.short) + '</div><div class="xs">B2 = ' + esc(e.b2) + '</div><div class="pbar"><i style="width:' + (d / n * 100) + '%"></i></div><div class="small muted">' + d + '/' + n + ' ชุดฝึก</div></button>';
      }).join('') + '</div>' +
      '<div class="sec"><h2>วัดระดับรวม</h2></div><div class="rows">' +
      '<button class="row" data-go="mock"><div class="tx"><b>ข้อสอบจำลองระดับ B2</b><span>25 ข้อ · 35 นาที · อ่าน ฟัง ไวยากรณ์ คำศัพท์</span></div>' + chev() + '</button>' +
      '<button class="row" data-go="recs"><div class="tx"><b>คลังเสียงของฉัน</b><span>ฟังเสียงที่บันทึกไว้ย้อนหลัง เทียบพัฒนาการ</span></div>' + chev() + '</button></div>';
    $('#pp-speak').onclick = function () { A.go('speak'); };
    $$('[data-x]', el).forEach(function (b) { b.onclick = function () { A.go('exam', { x: b.dataset.x }); }; });
    $$('[data-go]', el).forEach(function (b) { b.onclick = function () { A.go(b.dataset.go); }; });
  };

  /* ── single exam page ── */
  V.exam = function (el) {
    var k = A.R.x, e = X[k];
    A.top({ back: function () { A.go('prep'); }, title: e.short });
    var sp = (SPK[k] || []).map(fmtById);
    el.innerHTML = '<div class="uhead"><div class="eyebrow">' + esc(e.name) + '</div><h1>' + esc(e.short) + ' <span class="b2chip">B2 = ' + esc(e.b2) + '</span></h1><p>' + esc(e.about) + '</p></div>' +
      '<div class="card mt"><table class="table"><tr><th>ส่วน</th><th>รูปแบบ</th><th></th></tr>' + e.format.map(function (f) { return '<tr><td><b>' + esc(f[0]) + '</b></td><td>' + esc(f[1]) + '</td><td class="small muted">' + esc(f[2]) + '</td></tr>'; }).join('') + '</table></div>' +
      '<div class="sec"><h2>ชุดฝึกรูปแบบข้อสอบ</h2></div><div class="rows">' +
      e.sets.map(function (s) {
        var r = ex()[s.id] || {}, st = r.score != null ? 'ได้ ' + r.score + '%' : r.done ? 'ทำแล้ว' : '';
        return '<button class="row" data-s="' + s.id + '">' + (setDone(s.id) ? '<span class="dot ok">' + I.check + '</span>' : '<span class="dot">' + kindIcon(s.kind) + '</span>') + '<div class="tx"><b>' + esc(s.title) + '</b><span>' + esc(s.th) + (st ? ' · ' + st : '') + '</span></div>' + chev() + '</button>';
      }).join('') +
      (k === 'toeic' ? '<button class="row" id="ex-voc"><span class="dot">Aa</span><div class="tx"><b>คำศัพท์ธุรกิจ TOEIC</b><span>' + e.vocab.length + ' คำ · ฝึกด้วยแฟลชการ์ด</span></div>' + chev() + '</button>' : '') +
      (k === 'efset' ? '<button class="row" id="ex-mock"><span class="dot">25</span><div class="tx"><b>ข้อสอบจำลองอ่าน + ฟัง</b><span>ใกล้เคียงรูปแบบ EF SET</span></div>' + chev() + '</button>' : '') +
      '</div>' +
      (sp.length ? '<div class="sec"><h2>Speaking</h2><span class="small muted">บันทึกเสียงได้</span></div><div class="rows">' + sp.map(function (f) {
        return '<button class="row" data-f="' + f.id + '"><span class="dot">' + I.mic.replace('<svg', '<svg width="15" height="15"') + '</span><div class="tx"><b>' + esc(f.name) + '</b><span>' + esc(f.th) + '</span></div>' + chev() + '</button>';
      }).join('') + '</div>' : '') +
      '<div class="sec"><h2>เทคนิคทำข้อสอบ</h2></div><div class="card"><ul class="tips">' + e.tips.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul></div>' +
      (k === 'efset' ? '<div class="note">สอบ EF SET จริงได้ฟรีที่ <a href="https://www.efset.org/" target="_blank" rel="noopener" style="color:var(--green);font-weight:600">efset.org ↗</a> · ตรวจสอบกับเขตพื้นที่ว่ายอมรับผลสอบนี้สำหรับการยื่น ก.ค.ศ. หรือไม่</div>' : '') +
      (k === 'toefl' ? '<div class="note">รูปแบบ TOEFL iBT ปรับใหม่ตั้งแต่ 21 ม.ค. 2026 ตรวจรายละเอียดล่าสุดที่ <a href="https://www.ets.org/toefl" target="_blank" rel="noopener" style="color:var(--green);font-weight:600">ets.org ↗</a></div>' : '');
    $$('[data-s]', el).forEach(function (b) { b.onclick = function () { A.go('xset', { x: k, id: b.dataset.s }); }; });
    $$('[data-f]', el).forEach(function (b) { b.onclick = function () { A.go('speakrun', { f: b.dataset.f, from: k }); }; });
    var v = $('#ex-voc'); if (v) v.onclick = function () { A.go('practice', { f: 'T' }); };
    var m = $('#ex-mock'); if (m) m.onclick = function () { A.go('mock'); };
  };
  function kindIcon(kind) { return { mcq: 'Q', write: 'W', cloze: 'C', build: 'B', adaptive: 'A', full4: '4' }[kind] || '•'; }

  /* ── practice set ── */
  V.xset = function (el) {
    var k = A.R.x, e = X[k], s = e.sets.filter(function (z) { return z.id === A.R.id; })[0];
    A.top({ back: function () { A.go('exam', { x: k }); }, title: e.short });
    var head = '<div class="uhead"><div class="eyebrow">' + esc(e.short) + '</div><h1>' + esc(s.title) + '</h1><p>' + esc(s.th) + '</p></div>';
    K[s.kind](el, s, head, k);
  };

  function finishBox(res, s, k, pct, ok, total, extra) {
    var r = rec(s.id); r.score = Math.max(pct, r.score || 0); A.touch();
    res.innerHTML = (extra || '') + '<div class="card mt center"><b style="font-family:var(--f-head);font-size:22px">ถูก ' + ok + ' จาก ' + total + ' ข้อ (' + pct + '%)</b><p class="muted small" style="margin:4px 0 0">' + (pct >= 80 ? 'ระดับ B2 ขึ้นไปในรูปแบบนี้ — เยี่ยม!' : pct >= 60 ? 'ใกล้แล้ว ดูคำอธิบายข้อที่ผิดแล้วลองใหม่' : 'แนะนำให้ทวนเทคนิคด้านบนแล้วลองใหม่') + '</p></div>' +
      '<div class="btns two"><button class="btn ghost" id="xs-retry">ทำอีกครั้ง</button><button class="btn" id="xs-back">ชุดถัดไป</button></div>';
    $('#xs-retry').onclick = function () { A.go('xset', { x: k, id: s.id }); };
    $('#xs-back').onclick = function () {
      var sets = X[k].sets, i = sets.indexOf(s);
      if (i < sets.length - 1) A.go('xset', { x: k, id: sets[i + 1].id }); else A.go('exam', { x: k });
    };
  }

  var K = {};

  K.mcq = function (el, s, head, k) {
    var player = '';
    if (s.script) player = '<div class="card"><div class="player"><button class="play" id="xs-play" aria-label="เล่นเสียง">' + I.play + '</button><div class="tx"><b>ฟังเสียง</b><span class="small muted">' + (k === 'ielts' ? 'สอบจริงฟังได้ครั้งเดียว — ลองฝึกฟังไม่เกิน 2 ครั้ง' : 'อ่านคำถามก่อนกดฟัง จะรู้ว่าต้องฟังหาอะไร') + '</span></div></div><div class="script hide" id="xs-script">' + esc(s.script) + '</div></div>';
    el.innerHTML = head + (s.intro ? '<div class="note" style="margin-top:6px">' + esc(s.intro) + '</div>' : '') +
      (s.passage ? '<div class="card mt"><div class="passage" style="font-size:16px">' + A.paras(s.passage) + '</div></div>' : '') +
      (player ? '<div class="mt">' + player + '</div>' : '') +
      '<div class="sec"><h2>คำถาม</h2><span class="small muted">' + s.qs.length + ' ข้อ</span></div><div class="card" id="xs-qs"></div>';
    var pb = $('#xs-play'); if (pb) pb.onclick = function () { A.TTS.speak(s.script, pb); };
    A.qset($('#xs-qs'), s.qs, function (pct, ok, res) {
      var sc = $('#xs-script'); if (sc) { sc.classList.remove('hide'); sc.insertAdjacentHTML('beforebegin', '<div class="small muted mt">บทพูด (transcript)</div>'); }
      finishBox(res, s, k, pct, ok, s.qs.length);
    });
  };

  function chartSVG(c) {
    var W = 340, H = 220, L = 34, B = 40, T = 14, max = 50, cw = (W - L - 6) / c.cats.length, bw = Math.min(16, cw / 3);
    var cols = ['var(--green-2)', 'var(--gold)'], g = '';
    for (var y = 0; y <= max; y += 10) { var yy = H - B - (y / max) * (H - B - T); g += '<line x1="' + L + '" x2="' + (W - 4) + '" y1="' + yy + '" y2="' + yy + '" stroke="var(--line)"/><text x="' + (L - 6) + '" y="' + (yy + 4) + '" text-anchor="end" font-size="10" fill="var(--muted)">' + y + '</text>'; }
    c.cats.forEach(function (cat, i) {
      var x0 = L + i * cw + cw / 2 - bw;
      c.data.forEach(function (ser, si) {
        var v = ser[i], h = (v / max) * (H - B - T), x = x0 + si * bw;
        g += '<rect x="' + x + '" y="' + (H - B - h) + '" width="' + (bw - 2) + '" height="' + h + '" rx="2" fill="' + cols[si] + '"/>';
        g += '<text x="' + (x + bw / 2 - 1) + '" y="' + (H - B - h - 3) + '" text-anchor="middle" font-size="9" fill="var(--ink)">' + v + '</text>';
      });
      g += '<text x="' + (L + i * cw + cw / 2) + '" y="' + (H - B + 14) + '" text-anchor="middle" font-size="10" fill="var(--ink)">' + esc(cat) + '</text>';
    });
    var lg = c.series.map(function (sn, si) { return '<rect x="' + (L + si * 70) + '" y="' + (H - 14) + '" width="10" height="10" rx="2" fill="' + cols[si] + '"/><text x="' + (L + 14 + si * 70) + '" y="' + (H - 5) + '" font-size="11" fill="var(--ink)">' + esc(sn) + '</text>'; }).join('');
    return '<div class="chart"><div class="small" style="font-weight:600;margin-bottom:4px">' + esc(c.title) + '</div><svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' + esc(c.title) + '">' + g + lg + '</svg></div>';
  }

  K.write = function (el, s, head, k) {
    var r = rec(s.id), left = s.minutes * 60, running = false, tid = null;
    el.innerHTML = head +
      '<div class="card mt"><div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:8px"><span class="eyebrow">Task</span><button class="chip" id="w-timer">⏱ ' + s.minutes + ':00 · เริ่มจับเวลา</button></div>' +
      '<p style="font-family:var(--f-read);font-size:16.5px;margin:0">' + esc(s.prompt) + '</p>' + (s.chart ? chartSVG(s.chart) : '') +
      (s.posts ? '<div class="posts">' + s.posts.map(function (p, i) { return '<div class="post ' + (i === 0 ? 'prof' : '') + '"><b>' + esc(p.who) + '</b><p>' + esc(p.t) + '</p></div>'; }).join('') + '</div>' : '') + '</div>' +
      '<div class="card"><b>โครงสร้าง / เช็กลิสต์</b><ul class="tips" style="margin-top:6px">' + s.tips.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul>' +
      '<div class="small muted mt" style="margin-bottom:6px">สำนวนที่ใช้ได้ (แตะเพื่อแทรก)</div><div class="phr">' + s.phrases.map(function (p) { return '<button class="chip" data-ph="' + esc(p) + '">' + esc(p) + '</button>'; }).join('') + '</div></div>' +
      '<label class="lb" for="w-txt">คำตอบของคุณ</label><textarea id="w-txt" placeholder="Start writing here…">' + esc(r.draft || '') + '</textarea>' +
      '<div class="wc"><span id="w-wc"></span><span>ขั้นต่ำ ' + s.min + ' คำ</span></div>' +
      '<div class="btns"><button class="btn" id="w-save">บันทึกงานเขียน</button><button class="btn ghost" id="w-model">ดูตัวอย่างคำตอบ</button></div>' +
      '<div class="card mt hide" id="w-m"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px"><b>Model answer</b>' + A.sayBtn(s.model) + '</div><div class="passage" style="font-size:15.5px">' + A.paras(s.model) + '</div><div class="small muted">' + A.words(s.model) + ' words</div></div>';
    var ta = $('#w-txt'), wc = $('#w-wc'), dt;
    function upd() { var n = A.words(ta.value); wc.textContent = n + ' คำ'; wc.style.color = n >= s.min ? 'var(--green)' : ''; }
    ta.oninput = function () { upd(); clearTimeout(dt); dt = setTimeout(function () { r.draft = ta.value; A.save(); }, 400); };
    upd();
    $$('[data-ph]', el).forEach(function (b) {
      b.onclick = function () {
        var p = b.dataset.ph.replace(/…/g, ' '), st = ta.selectionStart || ta.value.length;
        ta.value = ta.value.slice(0, st) + p + ta.value.slice(st); ta.focus(); ta.oninput();
      };
    });
    var tb = $('#w-timer');
    function fmt() { return A.pad(Math.floor(left / 60)) + ':' + A.pad(left % 60); }
    tb.onclick = function () {
      running = !running;
      if (running) {
        tid = setInterval(function () {
          left--; tb.textContent = '⏱ ' + fmt() + ' · หยุด';
          if (left <= 0) { clearInterval(tid); running = false; tb.textContent = '⏱ หมดเวลา'; tb.classList.add('on'); A.toast('หมดเวลาแล้ว! ลองนับคำดู'); }
        }, 1000);
        tb.textContent = '⏱ ' + fmt() + ' · หยุด';
      } else { clearInterval(tid); tb.textContent = '⏱ ' + fmt() + ' · ต่อ'; }
    };
    A.leave.push(function () { clearInterval(tid); });
    $('#w-save').onclick = function () {
      r.draft = ta.value; var n = A.words(ta.value);
      if (n < 20) { A.toast('เขียนเพิ่มอีกหน่อยก่อนนะครับ'); return; }
      r.done = true; A.touch(); A.toast(n >= s.min ? 'บันทึกแล้ว ✓' : 'บันทึกแล้ว — สอบจริงต้องได้อย่างน้อย ' + s.min + ' คำ');
      $('#w-m').classList.remove('hide'); $('#w-model').textContent = 'ซ่อนตัวอย่างคำตอบ';
    };
    $('#w-model').onclick = function () { var m = $('#w-m'); m.classList.toggle('hide'); this.textContent = m.classList.contains('hide') ? 'ดูตัวอย่างคำตอบ' : 'ซ่อนตัวอย่างคำตอบ'; };
  };

  K.cloze = function (el, s, head, k) {
    var answers = [], n = 0;
    var html = esc(s.text).replace(/([A-Za-z]+)\[([A-Za-z]+)\]/g, function (_, stem, miss) {
      answers.push(miss); var i = n++;
      return '<span class="cz">' + stem + '<input class="cz-in" data-i="' + i + '" maxlength="' + miss.length + '" style="width:' + (miss.length * 0.6 + 0.9) + 'em" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="ตัวอักษรที่หายไป ' + miss.length + ' ตัว" placeholder="' + Array(miss.length + 1).join('_') + '"></span>';
    });
    el.innerHTML = head + '<div class="note" style="margin-top:6px">' + esc(s.intro) + '</div><div class="card mt"><div class="passage cloze">' + html + '</div></div><div class="btns"><button class="btn" id="cz-check">ตรวจคำตอบ</button></div><div id="cz-res"></div>';
    $('#cz-check').onclick = function () {
      var ok = 0;
      $$('.cz-in', el).forEach(function (inp) {
        var i = +inp.dataset.i, good = inp.value.trim().toLowerCase() === answers[i].toLowerCase();
        if (good) ok++;
        inp.disabled = true; inp.classList.add(good ? 'right' : 'wrong');
        if (!good) inp.insertAdjacentHTML('afterend', '<sup class="fix">' + answers[i] + '</sup>');
      });
      this.parentNode.remove();
      finishBox($('#cz-res'), s, k, Math.round(ok / answers.length * 100), ok, answers.length);
    };
  };

  K.build = function (el, s, head, k) {
    el.innerHTML = head + '<div class="note" style="margin-top:6px">แตะกลุ่มคำเรียงตามลำดับเพื่อสร้างประโยคตอบกลับ แตะคำในช่องคำตอบเพื่อนำออก</div>' +
      s.items.map(function (it, i) {
        var order = A.shuffle(it.parts.map(function (_, j) { return j; }));
        if (order.join() === it.parts.map(function (_, j) { return j; }).join()) order.reverse();
        return '<div class="card bd" data-i="' + i + '"><div class="bubble">' + A.sayBtn(it.ctx) + '<span>' + esc(it.ctx) + '</span></div><div class="slot" aria-label="คำตอบ"></div><div class="bank">' +
          order.map(function (j) { return '<button class="chip tok" data-j="' + j + '">' + esc(it.parts[j]) + '</button>'; }).join('') + '</div><div class="bd-res"></div></div>';
      }).join('') + '<div class="btns"><button class="btn" id="bd-check">ตรวจคำตอบ</button></div><div id="bd-res"></div>';
    $$('.bd', el).forEach(function (card) {
      var slot = $('.slot', card), bank = $('.bank', card);
      $$('.tok', card).forEach(function (t) { t.onclick = function () { if (card.dataset.locked) return; (t.parentNode === bank ? slot : bank).appendChild(t); }; });
    });
    $('#bd-check').onclick = function () {
      var ok = 0;
      $$('.bd', el).forEach(function (card) {
        var it = s.items[+card.dataset.i], got = $$('.slot .tok', card).map(function (t) { return +t.dataset.j; }).join(), good = got === it.parts.map(function (_, j) { return j; }).join();
        if (good) ok++;
        card.dataset.locked = 1; card.classList.add(good ? 'ok' : 'no');
        $('.bd-res', card).innerHTML = '<div class="explain ' + (good ? '' : 'no') + '"><b>' + (good ? 'ถูกต้อง' : 'ยังไม่ถูก') + '</b> — ' + esc(it.parts.join(' ')) + '</div>';
      });
      this.parentNode.remove();
      finishBox($('#bd-res'), s, k, Math.round(ok / s.items.length * 100), ok, s.items.length);
    };
  };

  /* ── EduSynch full 4-skill mock ── */
  var LVN = function (v) { return v == null ? '–' : v < 1.75 ? 'A2' : v < 2.5 ? 'B1' : v < 3.25 ? 'B2' : v < 3.75 ? 'B2+' : 'C1'; };
  function pctLv(p) { return p >= 80 ? 4 : p >= 60 ? 3 : p >= 40 ? 2 : 1; }
  function chkLv(n, max) { var r = n / max; return r <= 0.25 ? 1 : r <= 0.5 ? 2 : r < 1 ? 3 : 3.5; }

  K.full4 = function (el, s, head, k) {
    var S = A.S, cur = S.m4cur, hist = (S.m4hist || []).slice(-5).reverse();
    el.innerHTML = head +
      '<div class="card mt"><table class="table"><tr><th>ลำดับ</th><th>ส่วน</th><th>เวลา</th></tr>' +
      '<tr><td>1</td><td><b>Reading</b> · 3 บทความ 12 ข้อ</td><td>20 นาที</td></tr><tr><td>2</td><td><b>Listening</b> · 3 คลิป 8 ข้อ (ฟังได้คลิปละ 2 ครั้ง)</td><td>10 นาที</td></tr>' +
      '<tr><td>3</td><td><b>Speaking</b> · 3 คำถาม บันทึกเสียง</td><td>~5 นาที</td></tr><tr><td>4</td><td><b>Writing</b> · เรียงความ ≥150 คำ</td><td>20 นาที</td></tr></table>' +
      '<p class="small muted" style="margin:10px 0 0">จำลองตามโครงสร้างทางการของ EduSynch · Reading/Listening ตรวจอัตโนมัติ · Speaking/Writing ประเมินด้วยเกณฑ์ของผู้ตรวจ (ติ๊กประเมินตนเอง) · ระดับรวม = ค่าเฉลี่ย 4 ทักษะ</p></div>' +
      '<div class="note">เตรียม: หูฟัง · ที่เงียบ · เวลาว่างต่อเนื่อง ~1 ชั่วโมง · อนุญาตไมโครโฟนเมื่อถึงส่วน Speaking</div>' +
      '<div class="btns">' + (cur && cur.stage !== 'done' ? '<button class="btn gold" id="m4-resume">ทำต่อจากส่วน ' + { reading: 'Reading', listening: 'Listening', speaking: 'Speaking', writing: 'Writing', wcheck: 'Writing', result: 'ผลสอบ' }[cur.stage] + '</button>' : '') +
      '<button class="btn" id="m4-go">' + (cur && cur.stage !== 'done' ? 'เริ่มชุดใหม่' : 'เริ่มสอบ') + '</button></div>' +
      (hist.length ? '<div class="sec"><h2>ประวัติ</h2></div><div class="rows">' + hist.map(function (h) {
        return '<div class="row"><span class="badge b2" style="min-width:52px;text-align:center">' + h.overall + '</span><div class="tx"><b>R ' + h.R + ' · L ' + h.L + ' · S ' + h.S + ' · W ' + h.W + '</b><span>' + new Date(h.date).toLocaleDateString('th-TH', { day: 'numeric', month: 'short', year: '2-digit' }) + '</span></div></div>';
      }).join('') + '</div>' : '');
    var r = $('#m4-resume'); if (r) r.onclick = function () { A.go('m4'); };
    $('#m4-go').onclick = function () {
      S.m4cur = { t0: Date.now(), stage: 'reading', wi: Math.floor(Math.random() * X.edusynch.mock.writing.length) };
      A.save(); A.go('m4');
    };
  };

  function section(el, title, minutes, groups, kind, onSubmit) {
    var ans = [], flat = [], plays = {};
    groups.forEach(function (g, gi) { g.qs.forEach(function (q, qi) { flat.push({ g: gi, q: q }); ans.push(-1); }); });
    var end = Date.now() + minutes * 60000, tid, armed = false, n = 0;
    el.innerHTML = '<div class="runner-top"><span class="eyebrow" style="flex:1">' + esc(title) + '</span><span class="timer" id="timer"></span></div>' +
      groups.map(function (g, gi) {
        var ctx = kind === 'reading'
          ? '<div class="eyebrow" style="margin-bottom:6px">Text ' + (gi + 1) + '</div><h3 style="font-size:18px;margin-bottom:8px">' + esc(g.title) + '</h3><div class="passage" style="font-size:15.5px">' + A.paras(g.passage) + '</div>'
          : '<div class="player"><button class="play" data-clip="' + gi + '" aria-label="เล่นเสียง">' + I.play + '</button><div class="tx"><b>' + esc(g.title) + '</b><span class="small muted" id="pl' + gi + '">ฟังได้ 2 ครั้ง</span></div></div>';
        return '<div class="card">' + ctx + '</div><div class="card">' + g.qs.map(function (q) {
          var idx = n++, ord = A.shuffle(q.o.map(function (_, i) { return i; }));
          return '<div class="q" data-i="' + idx + '"><div class="qt"><i>' + (idx + 1) + '.</i><span><span class="lvchip">' + esc(q.t) + '</span> ' + esc(q.q) + '</span></div><div class="opts">' +
            ord.map(function (oi, j) { return '<button class="opt" data-oi="' + oi + '"><span class="k">' + 'ABCD'[j] + '</span><span>' + esc(q.o[oi]) + '</span></button>'; }).join('') + '</div></div>';
        }).join('') + '</div>';
      }).join('') + '<div class="btns"><button class="btn" id="sec-sub">ส่งคำตอบส่วนนี้</button></div>';
    function tick() {
      var left = Math.max(0, end - Date.now()), t = $('#timer'), s = Math.round(left / 1000);
      if (t) { t.textContent = A.pad(Math.floor(s / 60)) + ':' + A.pad(s % 60); t.classList.toggle('low', left < 120000); }
      if (left <= 0) { clearInterval(tid); A.toast('หมดเวลา ส่งคำตอบอัตโนมัติ'); submit(); }
    }
    tid = setInterval(tick, 1000); tick();
    A.leave.push(function () { clearInterval(tid); });
    $$('.q', el).forEach(function (qd) {
      var i = +qd.dataset.i;
      $$('.opt', qd).forEach(function (b) { b.onclick = function () { ans[i] = +b.dataset.oi; $$('.opt', qd).forEach(function (x) { x.classList.toggle('sel', x === b); }); }; });
    });
    $$('[data-clip]', el).forEach(function (b) {
      var gi = +b.dataset.clip; plays[gi] = 0;
      b.onclick = function () {
        if (A.TTS.btn === b) { A.TTS.stop(); return; }
        if (plays[gi] >= 2) { A.toast('ฟังครบ 2 ครั้งแล้ว'); return; }
        plays[gi]++; $('#pl' + gi).textContent = plays[gi] >= 2 ? 'ฟังครบ 2 ครั้งแล้ว' : 'ฟังได้อีก 1 ครั้ง';
        A.TTS.speak(groups[gi].script, b);
      };
    });
    var done = false;
    function submit() {
      if (done) return; done = true; clearInterval(tid); A.TTS.stop();
      var ok = 0, rev = [];
      flat.forEach(function (f, i) { if (ans[i] === f.q.a) ok++; else rev.push({ q: f.q.q, pick: ans[i] >= 0 ? f.q.o[ans[i]] : null, right: f.q.o[f.q.a], e: f.q.e }); });
      onSubmit({ ok: ok, n: flat.length, pct: Math.round(ok / flat.length * 100), rev: rev });
    }
    $('#sec-sub').onclick = function () {
      var miss = ans.filter(function (a) { return a < 0; }).length;
      if (miss && !armed) { armed = true; A.toast('ยังไม่ได้ตอบ ' + miss + ' ข้อ — แตะอีกครั้งเพื่อส่ง'); return; }
      submit();
    };
  }

  V.m4 = function (el) {
    var S = A.S, cur = S.m4cur, E = X.edusynch, M = E.mock;
    if (!cur) { A.go('exam', { x: 'edusynch' }); return; }
    var steps = ['reading', 'listening', 'speaking', 'writing'];
    var si = Math.min(3, steps.indexOf(cur.stage === 'wcheck' ? 'writing' : cur.stage));
    A.top({ back: function () { A.go('xset', { x: 'edusynch', id: 'edu-full' }); }, title: 'CEFR 4 ทักษะ · ' + (cur.stage === 'result' || cur.stage === 'done' ? 'ผลสอบ' : 'ส่วนที่ ' + (si + 1) + '/4') });
    var bar = '<div class="qprog" style="margin:0 0 10px">' + steps.map(function (s2, i) { return '<i class="' + (i < si || cur.stage === 'result' || cur.stage === 'done' ? 'd' : i === si ? 'c' : '') + '"></i>'; }).join('') + '</div>';
    if (cur.stage === 'reading' || cur.stage === 'listening') {
      var isR = cur.stage === 'reading';
      el.innerHTML = bar + '<div id="secbox"></div>';
      section($('#secbox'), isR ? 'Part 1 · Reading' : 'Part 2 · Listening', isR ? 20 : 10, isR ? M.reading : M.listening, cur.stage, function (res) {
        cur[isR ? 'r' : 'l'] = res; cur.stage = isR ? 'listening' : 'speaking'; A.touch();
        if (isR) { A.toast('ส่ง Reading แล้ว → Listening'); A.go('m4'); }
        else {
          el.innerHTML = '<div class="qprog" style="margin:0 0 10px"><i class="d"></i><i class="d"></i><i class="c"></i><i></i></div><div class="card mt center"><h2 style="font-size:21px">ต่อไป: Part 3 · Speaking</h2><p class="muted">3 คำถาม · เตรียม 15 วินาที · พูด 45 วินาที ระบบจะขออนุญาตใช้ไมโครโฟน</p></div><div class="btns"><button class="btn" id="go-s">ไปส่วน Speaking</button></div>';
          $('#go-s').onclick = function () { A.go('speakrun', { f: 'edusynch', m4: 1 }); };
        }
      });
      return;
    }
    if (cur.stage === 'speaking') { A.go('speakrun', { f: 'edusynch', m4: 1 }); return; }
    if (cur.stage === 'writing') {
      var w = M.writing[cur.wi], left = 20 * 60, tid;
      el.innerHTML = bar + '<div class="runner-top"><span class="eyebrow" style="flex:1">Part 4 · Writing</span><span class="timer" id="timer">20:00</span></div>' +
        '<div class="cue"><div class="eyebrow">' + esc(w.type) + ' · at least 150 words</div><h2 style="font-size:18px">' + esc(w.prompt) + '</h2></div>' +
        '<textarea id="m4w" class="mt" style="min-height:300px" placeholder="Write your essay here…">' + esc(cur.wtext || '') + '</textarea><div class="wc"><span id="m4wc"></span><span>ขั้นต่ำ 150 คำ</span></div>' +
        '<div class="btns"><button class="btn" id="m4ws">ส่งเรียงความ</button></div>';
      var ta = $('#m4w'), wc = $('#m4wc'), dt, armed = false;
      function upd() { var n = A.words(ta.value); wc.textContent = n + ' คำ'; wc.style.color = n >= 150 ? 'var(--green)' : ''; }
      ta.oninput = function () { upd(); clearTimeout(dt); dt = setTimeout(function () { cur.wtext = ta.value; A.save(); }, 400); }; upd();
      function fin() { clearInterval(tid); cur.wtext = ta.value; cur.w = { words: A.words(ta.value), checks: {} }; cur.stage = 'wcheck'; A.touch(); A.go('m4'); }
      tid = setInterval(function () {
        left--; var t = $('#timer'); if (t) { t.textContent = A.pad(Math.floor(left / 60)) + ':' + A.pad(left % 60); t.classList.toggle('low', left < 120); }
        if (left <= 0) { A.toast('หมดเวลา ส่งเรียงความอัตโนมัติ'); fin(); }
      }, 1000);
      A.leave.push(function () { clearInterval(tid); });
      $('#m4ws').onclick = function () {
        if (A.words(ta.value) < 150 && !armed) { armed = true; A.toast('ยังไม่ถึง 150 คำ — แตะอีกครั้งเพื่อส่ง'); return; }
        fin();
      };
      return;
    }
    if (cur.stage === 'wcheck') {
      var w2 = M.writing[cur.wi];
      el.innerHTML = bar + '<div class="uhead"><div class="eyebrow">Part 4 · Writing</div><h1>ตรวจเรียงความของคุณ</h1><p>' + cur.w.words + ' คำ' + (cur.w.words < 150 ? ' — ต่ำกว่า 150 คำ (สอบจริงจะถูกจำกัดคะแนน)' : '') + '</p></div>' +
        '<div class="card mt"><div class="passage" style="font-size:15px">' + A.paras(cur.wtext || '(ว่าง)') + '</div></div>' +
        '<details class="card mt"><summary class="link" style="list-style:none;cursor:pointer">เทียบกับตัวอย่างคำตอบระดับ B2+</summary><div class="passage mt" style="font-size:15px">' + A.paras(w2.model) + '</div></details>' +
        '<div class="sec"><h2>ประเมินตามเกณฑ์ผู้ตรวจ</h2><span class="small muted">ติ๊กข้อที่ทำได้</span></div><div class="card checks">' +
        E.wcrit.map(function (c) { return '<label class="ck"><input type="checkbox" data-k="' + c.k + '"><span><b>' + esc(c.name) + '</b><br><span class="small muted">' + esc(c.th) + '</span></span></label>'; }).join('') + '</div>' +
        '<div class="btns"><button class="btn gold" id="m4res">ดูผลสอบ 4 ทักษะ</button></div>';
      $$('.checks input', el).forEach(function (b) { b.onchange = function () { cur.w.checks[b.dataset.k] = b.checked; A.save(); }; });
      $('#m4res').onclick = function () { cur.stage = 'result'; A.save(); A.go('m4'); };
      return;
    }
    /* result */
    var cnt = function (o) { return o ? Object.keys(o).filter(function (k) { return o[k]; }).length : 0; };
    var lv = {
      R: cur.r ? pctLv(cur.r.pct) : null,
      L: cur.l ? pctLv(cur.l.pct) : null,
      S: cur.s && cur.s.done ? chkLv(cnt(cur.s.checks), 5) : null,
      W: cur.w ? Math.min(chkLv(cnt(cur.w.checks), 4), cur.w.words < 150 ? 2 : 9) : null
    };
    var vals = ['R', 'L', 'S', 'W'].map(function (k) { return lv[k]; }).filter(function (v) { return v != null; });
    var avg = vals.length ? vals.reduce(function (a, b) { return a + b; }, 0) / vals.length : null, overall = LVN(avg);
    if (cur.stage !== 'done') {
      cur.stage = 'done';
      (S.m4hist = S.m4hist || []).push({ date: Date.now(), overall: overall, R: LVN(lv.R), L: LVN(lv.L), S: LVN(lv.S), W: LVN(lv.W) });
      var rr = ex()['edu-full'] || (ex()['edu-full'] = {}); rr.done = true; A.touch();
    }
    var names = { R: ['Reading', cur.r ? cur.r.ok + '/' + cur.r.n + ' ข้อ' : ''], L: ['Listening', cur.l ? cur.l.ok + '/' + cur.l.n + ' ข้อ' : ''], S: ['Speaking', 'ประเมินตนเอง ' + cnt(cur.s && cur.s.checks) + '/5'], W: ['Writing', cur.w ? cur.w.words + ' คำ · ' + cnt(cur.w.checks) + '/4' : ''] };
    var pass = avg != null && avg >= 3;
    el.innerHTML = bar + '<div class="result"><div class="lvl-big">' + overall + '</div><p style="margin:0"><b>ระดับรวมโดยประมาณ</b> (เฉลี่ย 4 ทักษะ)</p><p class="small muted">' + (pass ? 'ผ่านเกณฑ์ B2 — พร้อมสมัครสอบจริงที่ศูนย์ HCEC' : 'ยังไม่ถึง B2 — ดูทักษะที่ต่ำที่สุดแล้วฝึกเพิ่ม') + '</p>' +
      '<div class="card breakdown">' + ['R', 'L', 'S', 'W'].map(function (k) {
        var v = lv[k], p = v == null ? 0 : Math.min(100, v / 4 * 100);
        return '<div class="ln" style="grid-template-columns:84px 1fr 44px"><span>' + names[k][0] + '<br><small class="muted">' + names[k][1] + '</small></span><div class="t"><i style="width:' + p + '%;background:' + (v >= 3 ? 'var(--green-2)' : v >= 2 ? 'var(--gold)' : 'var(--bad)') + '"></i></div><b>' + LVN(v) + '</b></div>';
      }).join('') + '</div></div>' +
      '<div class="note">Reading/Listening ตรวจอัตโนมัติ · Speaking/Writing มาจากการประเมินตนเองตามเกณฑ์ผู้ตรวจ — ลองให้เพื่อนครูภาษาอังกฤษช่วยฟัง/อ่านเพื่อความแม่นยำ ผลจริงของ EduSynch ใช้สเกลละเอียดกว่านี้</div>' +
      ((cur.r && cur.r.rev.length) || (cur.l && cur.l.rev.length) ? '<div class="sec"><h2>ทบทวนข้อที่ผิด</h2></div><div class="card">' + [].concat(cur.r ? cur.r.rev : [], cur.l ? cur.l.rev : []).map(function (x) {
        return '<div class="q"><div class="qt">' + esc(x.q) + '</div><div class="small">ตอบ: <span style="color:var(--bad)">' + (x.pick ? esc(x.pick) : '— ไม่ได้ตอบ') + '</span><br>ที่ถูก: <b style="color:var(--green)">' + esc(x.right) + '</b></div><div class="explain">' + esc(x.e) + '</div></div>';
      }).join('') + '</div>' : '') +
      '<div class="btns two"><button class="btn ghost" id="m4-recs">ฟังเสียง Speaking</button><button class="btn" id="m4-back">เสร็จสิ้น</button></div>';
    $('#m4-recs').onclick = function () { A.go('recs'); };
    $('#m4-back').onclick = function () { A.go('exam', { x: 'edusynch' }); };
  };

  K.adaptive = function (el, s, head, k) {
    var LV = ['B1', 'B2', 'C1'];
    el.innerHTML = head + '<div class="card mt"><p style="margin:0">ระบบเริ่มที่ระดับ B2 ถ้าตอบถูกข้อถัดไปจะยากขึ้น ตอบผิดจะง่ายลง — เหมือนข้อสอบ EF SET จริง ' + s.n + ' ข้อ ไม่เห็นเฉลยระหว่างทำ</p></div><div class="btns"><button class="btn" id="ad-go">เริ่ม</button></div>';
    $('#ad-go').onclick = function () {
      var lvl = 1, used = { B1: [], B2: [], C1: [] }, hist = [], cur = null, ord = null;
      function pick() {
        var tries = [lvl, lvl + 1, lvl - 1, lvl + 2, lvl - 2].filter(function (x) { return x >= 0 && x < 3; });
        for (var t = 0; t < tries.length; t++) {
          var L = LV[tries[t]], pool = s.bank[L].map(function (_, i) { return i; }).filter(function (i) { return used[L].indexOf(i) < 0; });
          if (pool.length) { var i = pool[Math.floor(Math.random() * pool.length)]; used[L].push(i); return { L: L, q: s.bank[L][i] }; }
        }
      }
      function draw() {
        cur = pick(); ord = A.shuffle(cur.q.o.map(function (_, i) { return i; }));
        el.innerHTML = '<div class="runner-top"><div class="track"><i style="width:' + ((hist.length + 1) / s.n * 100) + '%"></i></div><span>' + (hist.length + 1) + '/' + s.n + '</span><span class="lvchip">' + cur.L + '</span></div>' +
          '<div class="qbig">' + esc(cur.q.q) + '</div><div class="opts">' + ord.map(function (oi, j) { return '<button class="opt" data-oi="' + oi + '"><span class="k">' + 'ABCD'[j] + '</span><span>' + esc(cur.q.o[oi]) + '</span></button>'; }).join('') + '</div>';
        $$('.opt', el).forEach(function (b) {
          b.onclick = function () {
            var good = +b.dataset.oi === cur.q.a; hist.push({ L: cur.L, ok: good, q: cur.q, pick: +b.dataset.oi });
            lvl = Math.max(0, Math.min(2, lvl + (good ? 1 : -1)));
            if (hist.length >= s.n) done(); else draw();
          };
        });
      }
      function done() {
        var st = {}; LV.forEach(function (L) { st[L] = { n: 0, ok: 0 }; });
        hist.forEach(function (h) { st[h.L].n++; if (h.ok) st[h.L].ok++; });
        function acc(L, min) { return st[L].n >= min && st[L].ok / st[L].n >= 0.6; }
        var res = acc('C1', 2) ? 'C1' : acc('B2', 3) || (acc('B2', 2) && st.C1.ok > 0) ? 'B2' : acc('B1', 2) || st.B2.ok >= 2 ? 'B1' : 'A2';
        var band = { A2: '31–40', B1: '41–50', B2: '51–60', C1: '61–70' }[res];
        var ok = hist.filter(function (h) { return h.ok; }).length;
        var r = rec(s.id); r.score = Math.max(Math.round(ok / s.n * 100), r.score || 0); r.level = res; A.touch();
        el.innerHTML = '<div class="result"><div class="lvl-big">' + res + '</div><p style="margin:0">ระดับโดยประมาณ · EF SET ≈ <b>' + band + '</b></p><p class="small muted">ถูก ' + ok + ' จาก ' + s.n + ' ข้อ</p>' +
          '<div class="card breakdown">' + LV.map(function (L) { var p = st[L].n ? Math.round(st[L].ok / st[L].n * 100) : 0; return '<div class="ln"><span>ข้อระดับ ' + L + '</span><div class="t"><i style="width:' + p + '%"></i></div><b>' + st[L].ok + '/' + st[L].n + '</b></div>'; }).join('') + '</div></div>' +
          '<div class="sec"><h2>ทบทวน</h2></div><div class="card">' + hist.map(function (h, i) {
            return '<div class="q"><div class="qt"><i>' + (i + 1) + '.</i><span class="lvchip">' + h.L + '</span> ' + esc(h.q.q) + '</div><div class="small">' + (h.ok ? '<span style="color:var(--green)">✓ ' + esc(h.q.o[h.q.a]) + '</span>' : '<span style="color:var(--bad)">✗ ' + esc(h.q.o[h.pick]) + '</span> → <b style="color:var(--green)">' + esc(h.q.o[h.q.a]) + '</b>') + '</div><div class="explain">' + esc(h.q.e) + '</div></div>';
          }).join('') + '</div>' +
          '<div class="btns two"><button class="btn ghost" id="ad-again">ทำอีกครั้ง</button><button class="btn" id="ad-back">กลับ</button></div>';
        $('#ad-again').onclick = function () { A.go('xset', { x: k, id: s.id }); };
        $('#ad-back').onclick = function () { A.go('exam', { x: k }); };
        window.scrollTo(0, 0);
      }
      draw();
    };
  };
})();
