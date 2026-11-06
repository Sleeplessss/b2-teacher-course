/* B2 Ready for Teachers — app logic (vanilla JS, no dependencies) */
(function () {
  'use strict';
  var C = window.COURSE, U = C.units;
  var KEY = 'b2course.v1';
  var PASS = 70;
  var STEPS = [
    { k: 'vocab', th: 'คำศัพท์', en: 'Vocabulary' },
    { k: 'grammar', th: 'ไวยากรณ์', en: 'Grammar' },
    { k: 'reading', th: 'การอ่าน', en: 'Reading' },
    { k: 'listening', th: 'การฟัง', en: 'Listening' },
    { k: 'writing', th: 'การเขียน', en: 'Writing' },
    { k: 'quiz', th: 'แบบทดสอบท้ายบท', en: 'Unit Quiz' }
  ];

  /* ── icons ── */
  var I = {
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4.5A1.5 1.5 0 0 1 5.5 3H20v15H5.5A1.5 1.5 0 0 0 4 19.5z"/><path d="M4 19.5A1.5 1.5 0 0 0 5.5 21H20"/><path d="M8 7h8M8 11h6"/></svg>',
    cards: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="13" height="15" rx="2"/><path d="M8 3h11a2 2 0 0 1 2 2v13"/></svg>',
    test: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="m8 9 1.5 1.5L12 8M8 15l1.5 1.5L12 14M14.5 9.5H17M14.5 15.5H17"/></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6z"/><path d="m9 12 2 2 4-4"/></svg>',
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>',
    chev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>',
    gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>',
    spk: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 19V5L7.5 9.5z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13a1 1 0 0 0 1.5.9l10.4-6.5a1 1 0 0 0 0-1.8L9.5 4.6A1 1 0 0 0 8 5.5z"/></svg>',
    stop: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6.5" y="6.5" width="11" height="11" rx="2"/></svg>',
    mic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M8.5 21h7"/></svg>',
    user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
    trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/></svg>'
  };

  /* ── storage ── */
  var mem = null;
  function blank() { return { profile: null, units: {}, cards: {}, days: [], mocks: [], rate: 0.95 }; }
  function load() {
    try { var s = JSON.parse(localStorage.getItem(KEY)); return s ? Object.assign(blank(), s) : blank(); }
    catch (e) { return mem || blank(); }
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { mem = S; } }
  var S = load();

  /* ── utils ── */
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function ds(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function paras(t) { return t.trim().split(/\n\s*\n/).map(function (p) { return '<p>' + esc(p).replace(/\n/g, '<br>') + '</p>'; }).join(''); }
  function words(t) { var m = String(t || '').trim().match(/[A-Za-z'’-]+/g); return m ? m.length : 0; }
  function unit(id) { for (var i = 0; i < U.length; i++) if (U[i].id === id) return U[i]; return null; }
  function us(id) { return S.units[id] || (S.units[id] = {}); }
  function touch() { var t = ds(new Date()); if (S.days.indexOf(t) < 0) { S.days.push(t); if (S.days.length > 400) S.days.shift(); } save(); }
  function streak() {
    var set = {}; S.days.forEach(function (d) { set[d] = 1; });
    var d = new Date(); if (!set[ds(d)]) d.setDate(d.getDate() - 1);
    var n = 0; while (set[ds(d)]) { n++; d.setDate(d.getDate() - 1); } return n;
  }
  function stepDone(id, k) {
    var u = S.units[id] || {};
    if (k === 'quiz') return (u.quiz || 0) >= PASS;
    if (k === 'reading' || k === 'listening') return u[k] != null;
    return !!u[k];
  }
  function doneCount(id) { return STEPS.filter(function (s) { return stepDone(id, s.k); }).length; }
  function nextStep() {
    for (var i = 0; i < U.length; i++) for (var j = 0; j < STEPS.length; j++)
      if (!stepDone(U[i].id, STEPS[j].k)) return { u: U[i], s: STEPS[j], j: j };
    return null;
  }
  function allWords() { var a = []; U.forEach(function (u) { u.vocab.forEach(function (v) { a.push(Object.assign({ u: u.no }, v)); }); }); if (window.EXAMS) EXAMS.toeic.vocab.forEach(function (v) { a.push(Object.assign({ u: 'T' }, v)); }); return a; }
  function deckName(u) { return typeof u === 'number' ? 'Unit ' + u : 'TOEIC Business'; }
  function mastered() { return Object.keys(S.cards).filter(function (w) { return S.cards[w] >= 2; }).length; }
  function level(p) {
    if (p >= 80) return { l: 'B2+', c: 'b2', t: 'ผ่านระดับ B2 อย่างมั่นใจ — มีแนวโน้มไปถึง C1' };
    if (p >= 60) return { l: 'B2', c: 'b2', t: 'อยู่ในระดับ B2 — พร้อมสมัครสอบจริงได้' };
    if (p >= 40) return { l: 'B1', c: 'b1', t: 'ระดับ B1 — อีกนิดเดียวถึง B2 ทบทวนจุดอ่อนแล้วลองใหม่' };
    return { l: 'A2', c: 'a2', t: 'ระดับ A2 — แนะนำให้เรียนตามแผนทีละ Unit ก่อน' };
  }
  var toastT;
  function toast(msg) { var t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(function () { t.classList.remove('show'); }, 2200); }

  /* ── text-to-speech ── */
  var TTS = {
    ok: 'speechSynthesis' in window && typeof SpeechSynthesisUtterance !== 'undefined',
    voices: [], btn: null,
    load: function () {
      if (!this.ok) return;
      var sc = function (v) { var s = 0; if (/en[-_]US/i.test(v.lang)) s += 3; if (/en[-_]GB/i.test(v.lang)) s += 2; if (/Google|Natural|Samantha|Daniel|Karen|Online|Aria|Jenny|Guy/i.test(v.name)) s += 4; return s; };
      this.voices = speechSynthesis.getVoices().filter(function (v) { return /^en([-_]|$)/i.test(v.lang); }).sort(function (a, b) { return sc(b) - sc(a); });
    },
    mark: function (on) {
      var b = this.btn; if (!b) return;
      b.classList.toggle('playing', on);
      if (b.classList.contains('play')) b.innerHTML = on ? I.stop : I.play;
    },
    stop: function () { if (this.ok) speechSynthesis.cancel(); this.mark(false); this.btn = null; },
    speak: function (text, btn, done) {
      if (!this.ok) { toast('อุปกรณ์นี้ไม่รองรับเสียงอ่าน'); return; }
      if (this.btn === btn && btn) { this.stop(); return; }
      this.stop(); this.load();
      this.btn = btn || null; this.mark(true);
      var self = this, vs = this.voices, lines = String(text).split('\n').filter(function (l) { return l.trim(); });
      var spk = { A: 0, B: 1, C: 2 }, queue = [];
      lines.forEach(function (line) {
        var m = line.match(/^([ABC]):\s*(.*)$/), who = m ? spk[m[1]] : 0, body = m ? m[2] : line;
        var parts = body.match(/[^.!?]+[.!?]+["'”’)]*|[^.!?]+$/g) || [body];
        parts.forEach(function (p) { if (p.trim()) queue.push({ t: p.trim(), who: who }); });
      });
      queue.forEach(function (q, i) {
        var u = new SpeechSynthesisUtterance(q.t);
        u.lang = 'en-US'; u.rate = S.rate || 0.95;
        if (vs.length) { u.voice = vs[Math.min(q.who, vs.length - 1)]; u.lang = u.voice.lang; }
        if (vs.length <= q.who) u.pitch = q.who === 1 ? 0.75 : q.who === 2 ? 1.25 : 1;
        if (i === queue.length - 1) u.onend = function () { if (self.btn === btn) { self.mark(false); self.btn = null; } if (done) done(); };
        speechSynthesis.speak(u);
      });
    }
  };
  if (TTS.ok) { TTS.load(); speechSynthesis.onvoiceschanged = function () { TTS.load(); }; }
  function sayBtn(text, cls) { return '<button class="say ' + (cls || '') + '" data-say="' + esc(text) + '" aria-label="ฟังเสียง">' + I.spk + '</button>'; }

  /* ── routing ── */
  var R = { v: 'home' }, timerId = null;
  var TAB = { home: 'home', units: 'units', unit: 'units', step: 'units', practice: 'practice', mock: 'prep', mockrun: 'prep', prep: 'prep', exam: 'prep', xset: 'prep', speak: 'prep', speakrun: 'prep', recs: 'prep', m4: 'prep', info: 'info', settings: 'home' };
  var LEAVE = [];
  function go(v, p) { R = Object.assign({ v: v }, p || {}); render(); }
  function render() {
    LEAVE.splice(0).forEach(function (f) { try { f(); } catch (e) { } });
    TTS.stop(); if (timerId) { clearInterval(timerId); timerId = null; }
    if (!S.profile) R = { v: 'onboard' };
    var view = $('#view'); view.className = 'view'; void view.offsetWidth; view.classList.add('view');
    $('.nav').classList.toggle('hide', R.v === 'onboard');
    $$('.nav button').forEach(function (b) { b.classList.toggle('on', b.dataset.tab === TAB[R.v]); });
    (V[R.v] || V.home)(view);
    window.scrollTo(0, 0);
  }
  function top(opts) {
    var t = $('#top');
    if (opts && opts.back) {
      t.innerHTML = '<button class="ibtn" id="tb-back" aria-label="ย้อนกลับ">' + I.back + '</button><div class="ttl">' + esc(opts.title || '') + '</div>' + (opts.right || '');
      $('#tb-back').onclick = opts.back;
    } else {
      t.innerHTML = '<div class="brand"><b>B2</b>B2 Ready for Teachers</div><button class="ibtn" id="tb-set" aria-label="ตั้งค่า">' + I.gear + '</button>';
      $('#tb-set').onclick = function () { go('settings'); };
    }
  }

  /* ── question set (all at once, check button) ──
     q flags: say (audio), hideQ (hide text until checked), blind (options audio-only), fixed (no shuffle), nolab, type:'gap' (typed answer, q.ans[]) */
  var LET = 'ABCDEFGH';
  function norm(s) { return String(s).toLowerCase().replace(/[,]/g, '').replace(/[.!?]+$/, '').replace(/\s+/g, ' ').trim(); }
  function sayText(q) { return q.blind ? q.q + '\n' + q.o.map(function (o, k) { return '(' + LET[k] + ') ' + o; }).join('\n') : q.q; }
  function qset(el, qs, onDone) {
    var ords = qs.map(function (q) { var o = (q.o || []).map(function (_, i) { return i; }); return q.fixed || q.blind ? o : shuffle(o); });
    var ans = qs.map(function () { return -1; }), checked = false;
    el.innerHTML = qs.map(function (q, qi) {
      var head = '<div class="qt">' + (q.say ? '<button class="say sm" data-say="' + esc(sayText(q)) + '" aria-label="ฟัง">' + I.spk + '</button>' : '') + '<i>' + (qi + 1) + '.</i><span class="qtx">' + (q.hideQ ? '<span class="muted">กดปุ่มลำโพงเพื่อฟัง</span>' : esc(q.q)) + '</span></div>';
      var body = q.type === 'gap'
        ? '<input type="text" class="gap" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="พิมพ์คำตอบ">'
        : '<div class="opts">' + ords[qi].map(function (oi, k) { return '<button class="opt" data-oi="' + oi + '">' + (q.nolab ? '' : '<span class="k">' + LET[k] + '</span>') + '<span class="ot">' + (q.blind ? '(' + LET[k] + ')' : esc(q.o[oi])) + '</span></button>'; }).join('') + '</div>';
      return '<div class="q" data-qi="' + qi + '">' + head + body + '<div class="ex-slot"></div></div>';
    }).join('') + '<div class="btns"><button class="btn" id="qs-check" disabled>ตรวจคำตอบ</button></div><div id="qs-res"></div>';
    function upd() { $('#qs-check', el).disabled = ans.some(function (a) { return a === -1 || a === ''; }); }
    $$('.q', el).forEach(function (qd) {
      var qi = +qd.dataset.qi, gi = $('.gap', qd);
      if (gi) gi.oninput = function () { ans[qi] = gi.value.trim(); upd(); };
      $$('.opt', qd).forEach(function (b) {
        b.onclick = function () {
          if (checked) return;
          ans[qi] = +b.dataset.oi;
          $$('.opt', qd).forEach(function (x) { x.classList.toggle('sel', x === b); });
          upd();
        };
      });
    });
    $('#qs-check', el).onclick = function () {
      checked = true; var ok = 0;
      $$('.q', el).forEach(function (qd) {
        var qi = +qd.dataset.qi, q = qs[qi], right;
        if (q.type === 'gap') {
          right = q.ans.map(norm).indexOf(norm(ans[qi])) >= 0;
          var gi = $('.gap', qd); gi.disabled = true; gi.classList.add(right ? 'right' : 'wrong');
          $('.ex-slot', qd).innerHTML = '<div class="explain ' + (right ? '' : 'no') + '"><b>' + (right ? 'ถูกต้อง' : 'คำตอบ: ' + esc(q.ans[0])) + '</b> — ' + esc(q.e) + '</div>';
        } else {
          right = ans[qi] === q.a;
          $$('.opt', qd).forEach(function (x, k) {
            var oi = +x.dataset.oi; x.disabled = true; x.classList.remove('sel');
            if (q.blind) $('.ot', x).textContent = '(' + LET[k] + ') ' + q.o[oi];
            if (oi === q.a) x.classList.add('right'); else if (oi === ans[qi]) x.classList.add('wrong');
          });
          $('.ex-slot', qd).innerHTML = '<div class="explain ' + (right ? '' : 'no') + '"><b>' + (right ? 'ถูกต้อง' : 'ยังไม่ถูก') + '</b> — ' + esc(q.e) + '</div>';
        }
        if (q.hideQ) $('.qtx', qd).textContent = q.q;
        if (right) ok++;
      });
      this.parentNode.remove();
      var pct = Math.round(ok / qs.length * 100);
      onDone(pct, ok, $('#qs-res', el));
    };
  }

  /* ── one-at-a-time runner (unit quiz & mock test) ── */
  function runner(el, items, opts) {
    var i = 0, ans = items.map(function () { return -1; });
    items.forEach(function (it) { it._ord = shuffle(it.o.map(function (_, k) { return k; })); });
    var endAt = opts.minutes ? Date.now() + opts.minutes * 60000 : 0;
    function fmt(ms) { var s = Math.max(0, Math.round(ms / 1000)); return pad(Math.floor(s / 60)) + ':' + pad(s % 60); }
    if (endAt) {
      timerId = setInterval(function () {
        var left = endAt - Date.now(), t = $('#timer');
        if (t) { t.textContent = fmt(left); t.classList.toggle('low', left < 5 * 60000); }
        if (left <= 0) { clearInterval(timerId); timerId = null; toast('หมดเวลา'); finish(); }
      }, 1000);
    }
    function finish() { TTS.stop(); if (timerId) { clearInterval(timerId); timerId = null; } opts.onFinish(ans); }
    function draw() {
      var it = items[i], fb = opts.feedback, picked = ans[i];
      var ctx = '';
      if (it.ctx) {
        if (it.ctx.type === 'passage') ctx = '<details class="ctx card" open><summary>' + esc(it.ctx.title) + '</summary><div class="passage" style="font-size:15.5px">' + paras(it.ctx.text) + '</div></details>';
        else ctx = '<div class="ctx card"><div class="player"><button class="play" data-say="' + esc(it.ctx.text) + '" aria-label="เล่นเสียง">' + I.play + '</button><div class="tx"><b>' + esc(it.ctx.title) + '</b><span class="small muted">กดฟังได้ไม่จำกัด (สอบจริงมักฟังได้ 1–2 ครั้ง)</span></div></div></div>';
      }
      el.innerHTML =
        '<div class="runner-top"><div class="track"><i style="width:' + ((i + 1) / items.length * 100) + '%"></i></div><span>' + (i + 1) + '/' + items.length + '</span>' + (endAt ? '<span class="timer" id="timer">' + fmt(endAt - Date.now()) + '</span>' : '') + '</div>' +
        (it.sec ? '<div class="eyebrow">' + esc(it.sec) + '</div>' : '') + ctx +
        '<div class="qbig">' + esc(it.q) + '</div><div class="opts">' +
        it._ord.map(function (oi, k) {
          var cls = '';
          if (fb && picked >= 0) { if (oi === it.a) cls = 'right'; else if (oi === picked) cls = 'wrong'; }
          else if (oi === picked) cls = 'sel';
          return '<button class="opt ' + cls + '" data-oi="' + oi + '"' + (fb && picked >= 0 ? ' disabled' : '') + '><span class="k">' + 'ABCD'[k] + '</span><span>' + esc(it.o[oi]) + '</span></button>';
        }).join('') + '</div>' +
        (fb && picked >= 0 ? '<div class="explain ' + (picked === it.a ? '' : 'no') + '"><b>' + (picked === it.a ? 'ถูกต้อง' : 'ยังไม่ถูก') + '</b> — ' + esc(it.e) + '</div>' : '') +
        '<div class="btns ' + (!fb && i > 0 ? 'two' : '') + '">' +
        (!fb && i > 0 ? '<button class="btn ghost" id="rn-prev">ข้อก่อนหน้า</button>' : '') +
        '<button class="btn" id="rn-next" ' + (picked < 0 ? 'disabled' : '') + '>' + (i === items.length - 1 ? 'ดูผลคะแนน' : 'ข้อต่อไป') + '</button></div>';
      $$('.opt', el).forEach(function (b) {
        b.onclick = function () {
          ans[i] = +b.dataset.oi;
          if (opts.feedback) { draw(); return; }
          $$('.opt', el).forEach(function (x) { x.classList.toggle('sel', x === b); });
          $('#rn-next', el).disabled = false;
        };
      });
      $('#rn-next', el).onclick = function () { TTS.stop(); if (i === items.length - 1) finish(); else { i++; draw(); window.scrollTo(0, 0); } };
      var pv = $('#rn-prev', el); if (pv) pv.onclick = function () { TTS.stop(); i--; draw(); };
    }
    draw();
  }

  function ring(pct) {
    var r = 64, c = 2 * Math.PI * r, col = pct >= 60 ? 'var(--green-2)' : pct >= 40 ? 'var(--gold)' : 'var(--bad)';
    return '<div class="score-ring"><svg viewBox="0 0 150 150"><circle cx="75" cy="75" r="' + r + '" fill="none" stroke="var(--line)" stroke-width="12"/><circle cx="75" cy="75" r="' + r + '" fill="none" stroke="' + col + '" stroke-width="12" stroke-linecap="round" stroke-dasharray="' + c + '" stroke-dashoffset="' + (c * (1 - pct / 100)) + '"/></svg><div class="v"><div><b>' + pct + '%</b><span>คะแนน</span></div></div></div>';
  }

  /* ── views ── */
  var V = {};

  V.onboard = function (el) {
    $('#top').innerHTML = '<div class="brand"><b>B2</b>B2 Ready for Teachers</div>';
    var grp = 'lang';
    el.innerHTML = '<div class="onb"><div class="eyebrow">หลักสูตรเตรียมสอบภาษาอังกฤษสำหรับครู</div>' +
      '<h1>พิชิต B2 เพื่อลดเวลาขอมี/เลื่อนวิทยฐานะ</h1>' +
      '<p class="lead">8 บทเรียนในบริบทงานครู ครบ 4 ทักษะ พร้อมแฟลชการ์ดและข้อสอบจำลอง เรียนวันละ 20 นาทีบนมือถือได้เลย</p>' +
      '<label class="lb" for="ob-name">ชื่อที่ให้เรียก</label><input type="text" id="ob-name" placeholder="เช่น สมศรี" maxlength="30" autocomplete="given-name">' +
      '<label class="lb">ตำแหน่ง / กลุ่มสาระ</label><div class="seg" id="ob-grp">' +
      '<button data-g="lang" class="on"><b>B2</b><span>ครูผู้สอนกลุ่มสาระภาษาต่างประเทศ</span></button>' +
      '<button data-g="other"><b>B1</b><span>ครูกลุ่มสาระอื่น / ผู้บริหาร / ศึกษานิเทศก์</span></button></div>' +
      '<label class="lb" for="ob-date">วันสอบจริง (ถ้ามี)</label><input type="date" id="ob-date">' +
      '<div class="btns"><button class="btn" id="ob-go">เริ่มเรียน</button></div></div>';
    $$('#ob-grp button').forEach(function (b) { b.onclick = function () { grp = b.dataset.g; $$('#ob-grp button').forEach(function (x) { x.classList.toggle('on', x === b); }); }; });
    $('#ob-go').onclick = function () {
      var n = $('#ob-name').value.trim();
      if (!n) { $('#ob-name').focus(); toast('กรอกชื่อก่อนนะครับ'); return; }
      S.profile = { name: n, group: grp, exam: $('#ob-date').value || '', start: ds(new Date()) };
      touch(); go('home');
    };
  };

  V.home = function (el) {
    top();
    var p = S.profile, total = U.length * STEPS.length, done = 0, unitsDone = 0;
    U.forEach(function (u) { var c = doneCount(u.id); done += c; if (c === STEPS.length) unitsDone++; });
    var pct = Math.round(done / total * 100), nx = nextStep(), tw = allWords().length, lm = S.mocks[S.mocks.length - 1];
    var target = p.group === 'other' ? 'B1' : 'B2';
    var week = Math.min(12, Math.floor((new Date() - new Date(p.start + 'T00:00:00')) / 6048e5) + 1);
    var cd = '';
    if (p.exam) {
      var left = Math.ceil((new Date(p.exam + 'T00:00:00') - new Date(ds(new Date()) + 'T00:00:00')) / 864e5);
      cd = left >= 0 ? '<div class="card mt" style="display:flex;align-items:center;gap:14px"><div style="font-family:var(--f-head);font-weight:700;font-size:34px;color:var(--gold);line-height:1">' + left + '</div><div><b>วันก่อนสอบจริง</b><div class="small muted">' + new Date(p.exam + 'T00:00:00').toLocaleDateString('th-TH', { day: 'numeric', month: 'long', year: 'numeric' }) + '</div></div></div>' : '';
    }
    el.innerHTML =
      '<div class="hero"><div class="grid-lines"></div><div class="hi">สวัสดีครับ ครู' + esc(p.name) + '</div><h1>เส้นทางสู่ ' + target + '</h1>' +
      '<div class="goal"><div class="lvl">' + target + '</div><p>ผ่านเกณฑ์ CEFR ' + target + ' ขึ้นไป<br>ลดเวลาขอมี/เลื่อนวิทยฐานะ<br>จาก 4 ปี เหลือ 3 ปี</p></div>' +
      '<div class="bar"><i style="width:' + pct + '%"></i></div><div class="meta"><span>เรียนไปแล้ว ' + pct + '%</span><span>' + unitsDone + '/' + U.length + ' Unit</span></div></div>' +
      (nx ? '<button class="continue" id="h-cont"><div class="n">' + nx.u.no + '</div><div class="tx"><b>' + (done ? 'เรียนต่อ' : 'เริ่มบทแรก') + ': ' + esc(nx.u.title) + '</b><span>ขั้นที่ ' + (nx.j + 1) + ' · ' + nx.s.th + '</span></div>' + I.arrow + '</button>'
        : '<button class="continue" id="h-mock"><div class="n">✓</div><div class="tx"><b>เรียนครบทุก Unit แล้ว!</b><span>ไปทำข้อสอบจำลองเพื่อวัดระดับ</span></div>' + I.arrow + '</button>') +
      '<div class="stats"><div class="stat"><b>' + streak() + '</b><span>วันติดต่อกัน</span></div><div class="stat"><b>' + mastered() + '<small class="muted" style="font-size:13px">/' + tw + '</small></b><span>คำที่จำได้</span></div><div class="stat"><b>' + (lm ? lm.pct + '%' : '–') + '</b><span>' + (lm ? 'สอบจำลอง (' + lm.lvl + ')' : 'ยังไม่สอบจำลอง') + '</span></div></div>' +
      cd +
      '<div class="sec"><h2>แผนเรียน 12 สัปดาห์</h2><span class="small muted">สัปดาห์ที่ ' + week + '</span></div>' +
      '<details class="card plan"' + (week <= 12 ? '' : '') + '><summary><div style="display:flex;justify-content:space-between;align-items:center;gap:10px"><div><b>สัปดาห์นี้: ' + esc(C.plan[week - 1].t) + '</b><div class="small muted">' + esc(C.plan[week - 1].d) + '</div></div><span class="link">ดูทั้งหมด</span></div></summary><div class="plan-list">' +
      C.plan.map(function (pl, k) { return '<div class="pl ' + (k === week - 1 ? 'now' : '') + '"><div class="wk">WEEK<small>' + pl.w + '</small></div><div><b>' + esc(pl.t) + '</b><span>' + esc(pl.d) + '</span></div></div>'; }).join('') + '</div></details>' +
      '<div class="sec"><h2>ทางลัด</h2></div><div class="rows">' +
      '<button class="row" data-go="practice"><div class="tx"><b>ทบทวนคำศัพท์ด้วยแฟลชการ์ด</b><span>' + (tw - mastered()) + ' คำที่ยังต้องทบทวน</span></div>' + I.chev.replace('<svg', '<svg class="chev"') + '</button>' +
      '<button class="row" data-go="speak"><div class="tx"><b>ฝึกพูดเสมือนสอบจริง</b><span>สุ่มหัวข้อ · จับเวลา · บันทึกเสียงแล้วเปิดฟัง</span></div>' + I.chev.replace('<svg', '<svg class="chev"') + '</button>' +
      '<button class="row" data-go="prep"><div class="tx"><b>เตรียมสอบตามสนาม</b><span>CEFR 4 ทักษะ (EduSynch/HCEC) · TOEIC · IELTS · TOEFL · EF SET</span></div>' + I.chev.replace('<svg', '<svg class="chev"') + '</button>' +
      '<button class="row" data-go="mock"><div class="tx"><b>ข้อสอบจำลองระดับ B2</b><span>25 ข้อ · 35 นาที · ประเมินระดับ CEFR</span></div>' + I.chev.replace('<svg', '<svg class="chev"') + '</button>' +
      '<button class="row" data-go="info"><div class="tx"><b>เกณฑ์ ก.ค.ศ. และข้อสอบที่ใช้ได้</b><span>ว 9/2564 · ว 10/2567 · ตารางเทียบคะแนน</span></div>' + I.chev.replace('<svg', '<svg class="chev"') + '</button></div>';
    var hc = $('#h-cont'); if (hc) hc.onclick = function () { go('step', { id: nx.u.id, k: nx.s.k }); };
    var hm = $('#h-mock'); if (hm) hm.onclick = function () { go('mock'); };
    $$('[data-go]', el).forEach(function (b) { b.onclick = function () { go(b.dataset.go); }; });
  };

  V.units = function (el) {
    top();
    el.innerHTML = '<div class="uhead"><div class="eyebrow">หลักสูตร</div><h1>8 บทเรียนสู่ B2</h1><p>แต่ละบทมี 6 ขั้น: คำศัพท์ · ไวยากรณ์ · อ่าน · ฟัง · เขียน · แบบทดสอบ</p></div><div class="mt">' +
      U.map(function (u) {
        var c = doneCount(u.id), full = c === STEPS.length;
        return '<button class="unit ' + (full ? 'done' : '') + '" data-id="' + u.id + '"><div class="head"><div class="no">' + pad(u.no) + '</div><div style="flex:1"><h3>' + esc(u.title) + '</h3><div class="th">' + esc(u.th) + '</div><span class="focus">' + esc(u.focus) + '</span></div>' +
          (full ? '<span class="dot ok">' + I.check + '</span>' : '<span class="small muted">' + c + '/6</span>') + '</div><div class="pbar"><i style="width:' + (c / STEPS.length * 100) + '%"></i></div></button>';
      }).join('') + '</div>';
    $$('.unit', el).forEach(function (b) { b.onclick = function () { go('unit', { id: b.dataset.id }); }; });
  };

  V.unit = function (el) {
    var u = unit(R.id), st = S.units[u.id] || {};
    top({ back: function () { go('units'); }, title: 'Unit ' + u.no });
    el.innerHTML = '<div class="uhead"><div class="eyebrow">Unit ' + u.no + ' · ' + esc(u.focus) + '</div><h1>' + esc(u.title) + '</h1><p>' + esc(u.th) + '</p></div><div class="rows mt">' +
      STEPS.map(function (s, j) {
        var ok = stepDone(u.id, s.k), sub = s.en;
        if (s.k === 'reading' || s.k === 'listening') { if (st[s.k] != null) sub += ' · ได้ ' + st[s.k] + '%'; }
        if (s.k === 'quiz' && st.quiz != null) sub += ' · ดีที่สุด ' + st.quiz + '%' + (ok ? '' : ' (ผ่านที่ ' + PASS + '%)');
        var dot = ok ? '<span class="dot ok">' + I.check + '</span>' : (s.k === 'quiz' && st.quiz != null) ? '<span class="dot part">' + (j + 1) + '</span>' : '<span class="dot">' + (j + 1) + '</span>';
        return '<button class="row" data-k="' + s.k + '">' + dot + '<div class="tx"><b>' + s.th + '</b><span>' + sub + '</span></div>' + I.chev.replace('<svg', '<svg class="chev"') + '</button>';
      }).join('') + '</div>' +
      '<div class="btns"><button class="btn" id="u-go">' + (doneCount(u.id) === 6 ? 'ทบทวนบทนี้อีกครั้ง' : doneCount(u.id) ? 'เรียนต่อ' : 'เริ่มเรียน') + '</button></div>';
    $$('.row', el).forEach(function (b) { b.onclick = function () { go('step', { id: u.id, k: b.dataset.k }); }; });
    $('#u-go').onclick = function () {
      var k = STEPS.filter(function (s) { return !stepDone(u.id, s.k); })[0];
      go('step', { id: u.id, k: (k || STEPS[0]).k });
    };
  };

  function nextBtnHtml(u, k) {
    var j = STEPS.map(function (s) { return s.k; }).indexOf(k);
    return j < STEPS.length - 1 ? '<button class="btn ghost" id="st-next">ขั้นถัดไป: ' + STEPS[j + 1].th + '</button>' : '<button class="btn ghost" id="st-next">กลับหน้า Unit</button>';
  }
  function bindNext(u, k) {
    var b = $('#st-next'); if (!b) return;
    var j = STEPS.map(function (s) { return s.k; }).indexOf(k);
    b.onclick = function () { if (j < STEPS.length - 1) go('step', { id: u.id, k: STEPS[j + 1].k }); else go('unit', { id: u.id }); };
  }
  function markStep(u, k, val) { us(u.id)[k] = val; touch(); }

  V.step = function (el) {
    var u = unit(R.id), k = R.k, s = STEPS.filter(function (x) { return x.k === k; })[0], j = STEPS.indexOf(s);
    top({ back: function () { go('unit', { id: u.id }); }, title: 'Unit ' + u.no + ' · ' + s.th });
    var head = '<div class="uhead"><div class="eyebrow">ขั้นที่ ' + (j + 1) + '/6 · ' + s.en + '</div><h1>' + s.th + '</h1></div>';
    ST[k](el, u, head);
  };

  var ST = {};
  ST.vocab = function (el, u, head) {
    el.innerHTML = head + '<p class="muted small">แตะปุ่มลำโพงเพื่อฟังการออกเสียง ลองพูดตามทุกคำ</p><div class="stack">' +
      u.vocab.map(function (v) {
        return '<div class="card vocab"><div class="tx"><span class="w">' + esc(v.w) + '</span><span class="p">' + esc(v.p) + '</span><span class="t">' + esc(v.t) + '</span><div class="ex">' + esc(v.ex) + '</div></div><div style="display:grid;gap:6px">' + sayBtn(v.w) + sayBtn(v.ex) + '</div></div>';
      }).join('') + '</div>' +
      '<div class="btns"><button class="btn" id="v-done">' + (stepDone(u.id, 'vocab') ? 'เรียนแล้ว ✓ ไปขั้นถัดไป' : 'เรียนครบแล้ว ไปขั้นถัดไป') + '</button><button class="btn ghost" id="v-fc">ฝึกคำศัพท์บทนี้ด้วยแฟลชการ์ด</button></div>';
    $('#v-done').onclick = function () { markStep(u, 'vocab', true); go('step', { id: u.id, k: 'grammar' }); };
    $('#v-fc').onclick = function () { markStep(u, 'vocab', true); go('practice', { f: u.no }); };
  };

  ST.grammar = function (el, u, head) {
    var g = u.grammar;
    el.innerHTML = head + '<div class="card"><h2 style="font-size:20px;margin-bottom:6px">' + esc(g.title) + '</h2><p style="margin:0">' + esc(g.intro) + '</p></div>' +
      g.rules.map(function (r) {
        return '<div class="card rule"><h3>' + esc(r.h) + '</h3><div class="formula">' + esc(r.f) + '</div>' +
          r.ex.map(function (e) { return '<div class="ex-line">' + sayBtn(e) + '<span>' + esc(e) + '</span></div>'; }).join('') + '</div>';
      }).join('') +
      '<div class="sec"><h2>จุดที่ข้อสอบชอบหลอก</h2></div><div class="card"><ul class="tips">' + g.tips.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul></div>' +
      '<div class="btns"><button class="btn" id="g-done">เข้าใจแล้ว ไปฝึกอ่าน</button></div>';
    $('#g-done').onclick = function () { markStep(u, 'grammar', true); go('step', { id: u.id, k: 'reading' }); };
  };

  function afterCheck(u, k, pct, ok, total, res) {
    var prev = us(u.id)[k];
    markStep(u, k, Math.max(pct, prev || 0));
    res.innerHTML = '<div class="card mt center"><b style="font-family:var(--f-head);font-size:22px">ถูก ' + ok + ' จาก ' + total + ' ข้อ</b><p class="muted small" style="margin:4px 0 0">' + (pct === 100 ? 'ยอดเยี่ยม!' : 'อ่านคำอธิบายข้อที่ผิดแล้วลองทำซ้ำได้') + '</p></div><div class="btns">' + nextBtnHtml(u, k).replace('btn ghost', 'btn') + '<button class="btn ghost" id="st-retry">ทำอีกครั้ง</button></div>';
    bindNext(u, k);
    $('#st-retry').onclick = function () { render(); };
  }

  ST.reading = function (el, u, head) {
    var r = u.reading;
    el.innerHTML = head + '<div class="card"><div class="eyebrow" style="margin-bottom:6px">Reading</div><h2 style="font-size:21px;margin-bottom:12px">' + esc(r.title) + '</h2><div class="passage">' + paras(r.text) + '</div>' +
      '<button class="chip" id="r-say">' + I.spk.replace('<svg', '<svg width="16" height="16"') + ' ฟังบทความ</button></div>' +
      '<div class="sec"><h2>คำถาม</h2><span class="small muted">' + r.qs.length + ' ข้อ</span></div><div class="card" id="r-qs"></div>';
    var sb = $('#r-say'); sb.onclick = function () { TTS.speak(r.text, sb); };
    qset($('#r-qs'), r.qs, function (pct, ok, res) { afterCheck(u, 'reading', pct, ok, r.qs.length, res); });
  };

  ST.listening = function (el, u, head) {
    var l = u.listening;
    el.innerHTML = head + '<div class="card"><div class="player"><button class="play" id="l-play" aria-label="เล่นเสียง">' + I.play + '</button><div class="tx"><b>' + esc(l.title) + '</b><span class="small muted">ฟังก่อนอย่างน้อย 2 รอบ แล้วตอบคำถาม</span></div></div>' +
      '<div class="chips mt"><span class="small muted" style="align-self:center">ความเร็ว</span>' + [0.75, 0.95, 1.1].map(function (r) { return '<button class="chip ' + (Math.abs((S.rate || 0.95) - r) < 0.01 ? 'on' : '') + '" data-r="' + r + '">' + (r === 0.75 ? 'ช้า' : r === 0.95 ? 'ปกติ' : 'เร็ว') + '</button>'; }).join('') + '</div>' +
      (TTS.ok ? '' : '<div class="note">อุปกรณ์/เบราว์เซอร์นี้ไม่รองรับเสียงอ่านภาษาอังกฤษ — กด "แสดงบทพูด" เพื่ออ่านแทน</div>') +
      '<button class="link mt" id="l-tr" style="display:block">แสดงบทพูด (transcript)</button><div class="script hide" id="l-script">' + esc(l.script) + '</div></div>' +
      '<div class="sec"><h2>คำถาม</h2><span class="small muted">' + l.qs.length + ' ข้อ</span></div><div class="card" id="l-qs"></div>';
    var pb = $('#l-play'); pb.onclick = function () { TTS.speak(l.script, pb); };
    $$('[data-r]', el).forEach(function (b) { b.onclick = function () { S.rate = +b.dataset.r; save(); $$('[data-r]', el).forEach(function (x) { x.classList.toggle('on', x === b); }); }; });
    $('#l-tr').onclick = function () { var s = $('#l-script'); s.classList.toggle('hide'); this.textContent = s.classList.contains('hide') ? 'แสดงบทพูด (transcript)' : 'ซ่อนบทพูด'; };
    qset($('#l-qs'), l.qs, function (pct, ok, res) { afterCheck(u, 'listening', pct, ok, l.qs.length, res); });
  };

  ST.writing = function (el, u, head) {
    var w = u.writing, st = us(u.id), MIN = 60;
    var rng = (w.prompt.match(/(\d+)–(\d+) words/) || [0, 120, 160]);
    el.innerHTML = head + '<div class="card"><div class="eyebrow" style="margin-bottom:6px">Task</div><p style="font-family:var(--f-read);font-size:17px;margin:0">' + esc(w.prompt) + '</p></div>' +
      '<div class="card"><b>เช็กลิสต์ก่อนส่ง</b><ul class="tips mt" style="margin-top:6px">' + w.tips.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul></div>' +
      '<label class="lb" for="w-txt">งานเขียนของคุณ</label><textarea id="w-txt" placeholder="Start writing here…" spellcheck="true">' + esc(st.draft || '') + '</textarea>' +
      '<div class="wc"><span id="w-wc">0 คำ</span><span>เป้าหมาย ' + rng[1] + '–' + rng[2] + ' คำ</span></div>' +
      '<div class="btns"><button class="btn" id="w-save">บันทึกงานเขียน</button><button class="btn ghost" id="w-model">ดูตัวอย่างคำตอบ</button></div>' +
      '<div class="card mt hide" id="w-m"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px"><b>Model answer</b>' + sayBtn(w.model) + '</div><div class="passage" style="font-size:15.5px">' + paras(w.model) + '</div><div class="small muted">' + words(w.model) + ' words</div></div>' +
      '<div class="btns" id="w-nx">' + nextBtnHtml(u, 'writing') + '</div>';
    var ta = $('#w-txt'), wc = $('#w-wc'), sv = $('#w-save'), dt;
    function upd() { var n = words(ta.value); wc.textContent = n + ' คำ' + (n < MIN ? ' (อย่างน้อย ' + MIN + ' คำเพื่อบันทึกว่าทำแล้ว)' : ''); sv.disabled = n < MIN; }
    ta.oninput = function () { upd(); clearTimeout(dt); dt = setTimeout(function () { st.draft = ta.value; save(); }, 400); };
    upd();
    sv.onclick = function () { st.draft = ta.value; markStep(u, 'writing', true); toast('บันทึกแล้ว ✓ เทียบกับตัวอย่างคำตอบได้เลย'); $('#w-m').classList.remove('hide'); };
    $('#w-model').onclick = function () { var m = $('#w-m'); m.classList.toggle('hide'); this.textContent = m.classList.contains('hide') ? 'ดูตัวอย่างคำตอบ' : 'ซ่อนตัวอย่างคำตอบ'; };
    bindNext(u, 'writing');
  };

  ST.quiz = function (el, u, head) {
    var st = us(u.id);
    el.innerHTML = head + '<div class="card"><p style="margin:0">' + u.quiz.length + ' ข้อ · ไวยากรณ์และคำศัพท์ของ Unit นี้ · ผ่านที่ ' + PASS + '%</p>' + (st.quiz != null ? '<p class="small muted" style="margin:6px 0 0">คะแนนดีที่สุด: ' + st.quiz + '%</p>' : '') + '</div><div class="btns"><button class="btn" id="qz-go">เริ่มทำแบบทดสอบ</button></div>';
    $('#qz-go').onclick = function () {
      var items = u.quiz.map(function (q) { return Object.assign({}, q); });
      el.innerHTML = '<div id="rn"></div>';
      runner($('#rn'), items, {
        feedback: true,
        onFinish: function (ans) {
          var ok = ans.filter(function (a, i) { return a === items[i].a; }).length, pct = Math.round(ok / items.length * 100);
          st.quiz = Math.max(pct, st.quiz || 0); touch();
          var pass = pct >= PASS, nxu = U[U.indexOf(u) + 1];
          el.innerHTML = '<div class="result">' + ring(pct) + '<h2 style="font-size:22px">' + (pass ? 'ผ่านแล้ว! จบ Unit ' + u.no : 'ยังไม่ผ่าน ลองอีกครั้งนะครับ') + '</h2><p class="muted">ถูก ' + ok + ' จาก ' + items.length + ' ข้อ' + (pass ? '' : ' · ต้องได้ ' + PASS + '% ขึ้นไป') + '</p></div>' +
            '<div class="btns">' + (pass && nxu ? '<button class="btn" id="qz-n">ไป Unit ' + nxu.no + ': ' + esc(nxu.title) + '</button>' : '') + (pass && !nxu ? '<button class="btn gold" id="qz-m">เรียนครบแล้ว! ทำข้อสอบจำลอง</button>' : '') +
            '<button class="btn ' + (pass ? 'ghost' : '') + '" id="qz-r">ทำอีกครั้ง</button><button class="btn ghost" id="qz-u">กลับหน้า Unit</button></div>';
          var n = $('#qz-n'); if (n) n.onclick = function () { go('unit', { id: nxu.id }); };
          var m = $('#qz-m'); if (m) m.onclick = function () { go('mock'); };
          $('#qz-r').onclick = function () { render(); };
          $('#qz-u').onclick = function () { go('unit', { id: u.id }); };
          window.scrollTo(0, 0);
        }
      });
    };
  };

  V.practice = function (el) {
    top();
    var f = R.f || 'due', all = allWords();
    var deck = all.filter(function (v) { return f === 'due' ? (S.cards[v.w] || 0) < 2 : f === 'all' ? true : v.u === f; });
    var q = shuffle(deck), cur = 0, known = 0;
    var chips = [['due', 'ต้องทบทวน'], ['all', 'ทั้งหมด']].concat(U.map(function (u) { return [u.no, 'Unit ' + u.no]; }), window.EXAMS ? [['T', 'TOEIC Business']] : []);
    el.innerHTML = '<div class="uhead"><div class="eyebrow">แฟลชการ์ด</div><h1>ทบทวนคำศัพท์</h1><p>จำได้แล้ว ' + mastered() + ' จาก ' + all.length + ' คำ (ตอบ "จำได้" 2 ครั้ง = จำได้แล้ว)</p></div>' +
      '<div class="chips mt">' + chips.map(function (c) { return '<button class="chip ' + (String(c[0]) === String(f) ? 'on' : '') + '" data-f="' + c[0] + '">' + c[1] + '</button>'; }).join('') + '</div><div id="fc"></div>';
    $$('[data-f]', el).forEach(function (b) { b.onclick = function () { var v = b.dataset.f; go('practice', { f: /^\d+$/.test(v) ? +v : v }); }; });
    var box = $('#fc');
    function draw() {
      if (cur >= q.length) {
        box.innerHTML = '<div class="empty"><h2>' + (deck.length ? 'ทบทวนครบชุดแล้ว!' : 'ไม่มีคำที่ต้องทบทวน') + '</h2><p class="muted">' + (deck.length ? 'จำได้ ' + known + ' จาก ' + deck.length + ' คำในรอบนี้' : 'คุณจำคำศัพท์ในชุดนี้ได้ครบแล้ว ลองเลือก "ทั้งหมด" เพื่อทวนซ้ำ') + '</p><div class="btns"><button class="btn" id="fc-again">' + (deck.length ? 'ทบทวนอีกรอบ' : 'ดูทั้งหมด') + '</button></div></div>';
        $('#fc-again').onclick = function () { go('practice', { f: deck.length ? f : 'all' }); };
        return;
      }
      var v = q[cur];
      box.innerHTML = '<div class="small muted" style="text-align:right;margin-top:6px">' + (cur + 1) + ' / ' + q.length + '</div><div class="fc-wrap"><div class="fc" id="card">' +
        '<div class="face front"><span class="unit-tag">' + deckName(v.u) + '</span>' + sayBtn(v.w) + '<div class="w">' + esc(v.w) + '</div><div class="p">' + esc(v.p) + '</div><div class="hint">แตะการ์ดเพื่อดูความหมาย</div></div>' +
        '<div class="face back"><span class="unit-tag">' + deckName(v.u) + '</span>' + sayBtn(v.ex) + '<div class="bw">' + esc(v.w) + '</div><div class="t">' + esc(v.t) + '</div><div class="ex">' + esc(v.ex) + '</div></div></div></div>' +
        '<div class="btns two"><button class="btn ghost" id="fc-no">ยังไม่จำ</button><button class="btn" id="fc-ok">จำได้</button></div>';
      var card = $('#card');
      card.onclick = function (e) { if (e.target.closest('.say')) return; card.classList.toggle('flip'); };
      $('#fc-no').onclick = function () { S.cards[v.w] = 0; save(); q.push(v); cur++; draw(); };
      $('#fc-ok').onclick = function () { S.cards[v.w] = (S.cards[v.w] || 0) + 1; known++; touch(); cur++; draw(); };
    }
    draw();
  };

  function mockItems() {
    var items = [];
    C.mock.sections.forEach(function (s) {
      s.qs.forEach(function (q, k) {
        var it = Object.assign({}, q, { sec: s.name + ' · ' + s.th, secName: s.name });
        if (s.passage) it.ctx = { type: 'passage', title: 'อ่านบทความแล้วตอบคำถาม', text: s.passage };
        if (s.script) it.ctx = { type: 'script', title: 'ฟังแล้วตอบคำถาม', text: s.script };
        items.push(it);
      });
    });
    return items;
  }

  V.mock = function (el) {
    top({ back: function () { go('prep'); }, title: 'ข้อสอบจำลอง' });
    var n = mockItems().length;
    var hist = S.mocks.slice(-5).reverse();
    el.innerHTML = '<div class="uhead"><div class="eyebrow">Mock Test</div><h1>ข้อสอบจำลองระดับ B2</h1><p>วัดว่าตอนนี้อยู่ระดับไหน ก่อนสมัครสอบจริง</p></div>' +
      '<div class="card mt"><table class="table"><tr><th>ส่วน</th><th>จำนวน</th></tr>' +
      ['Grammar', 'Vocabulary', 'Reading', 'Listening'].map(function (nm) {
        var c = 0; C.mock.sections.forEach(function (s) { if (s.name === nm) c += s.qs.length; });
        return '<tr><td>' + nm + '</td><td>' + c + ' ข้อ</td></tr>';
      }).join('') + '<tr><td><b>รวม</b></td><td><b>' + n + ' ข้อ · ' + C.mock.minutes + ' นาที</b></td></tr></table>' +
      '<p class="small muted mt" style="margin-bottom:0">ตอบได้ครบแล้วจึงเห็นเฉลย · ส่วน Listening ต้องเปิดเสียง · ผลเป็นการ<b>ประมาณการ</b> ไม่ใช่ผลสอบทางการ</p></div>' +
      '<div class="btns"><button class="btn" id="mk-go">เริ่มสอบ (จับเวลา ' + C.mock.minutes + ' นาที)</button></div>' +
      (hist.length ? '<div class="sec"><h2>ประวัติการสอบ</h2></div><div class="rows">' + hist.map(function (h) {
        var lv = level(h.pct);
        return '<div class="row"><span class="badge ' + lv.c + '">' + h.lvl + '</span><div class="tx"><b>' + h.pct + '%</b><span>' + new Date(h.date).toLocaleDateString('th-TH', { day: 'numeric', month: 'short', year: '2-digit', hour: '2-digit', minute: '2-digit' }) + '</span></div></div>';
      }).join('') + '</div>' : '');
    $('#mk-go').onclick = function () { go('mockrun'); };
  };

  V.mockrun = function (el) {
    top({ back: function () { go('mock'); }, title: 'ข้อสอบจำลอง' });
    var items = mockItems();
    runner(el, items, {
      feedback: false, minutes: C.mock.minutes,
      onFinish: function (ans) {
        var ok = 0, secs = {};
        items.forEach(function (it, i) {
          var s = secs[it.secName] || (secs[it.secName] = { ok: 0, n: 0 }); s.n++;
          if (ans[i] === it.a) { ok++; s.ok++; }
        });
        var pct = Math.round(ok / items.length * 100), lv = level(pct);
        S.mocks.push({ date: Date.now(), pct: pct, lvl: lv.l }); touch();
        var wrong = items.map(function (it, i) { return { it: it, a: ans[i] }; }).filter(function (x) { return x.a !== x.it.a; });
        top({ back: function () { go('mock'); }, title: 'ผลสอบจำลอง' });
        el.innerHTML = '<div class="result">' + ring(pct) + '<span class="badge ' + lv.c + '">ระดับโดยประมาณ: ' + lv.l + '</span><p class="mt" style="margin-bottom:0">' + lv.t + '</p><p class="small muted">ถูก ' + ok + ' จาก ' + items.length + ' ข้อ</p>' +
          '<div class="card breakdown">' + Object.keys(secs).map(function (k) { var s = secs[k], p = Math.round(s.ok / s.n * 100); return '<div class="ln"><span>' + k + '</span><div class="t"><i style="width:' + p + '%"></i></div><b>' + s.ok + '/' + s.n + '</b></div>'; }).join('') + '</div></div>' +
          (wrong.length ? '<div class="sec"><h2>ทบทวนข้อที่ผิด</h2><span class="small muted">' + wrong.length + ' ข้อ</span></div><div class="card">' + wrong.map(function (x) {
            return '<div class="q"><div class="qt">' + esc(x.it.q) + '</div><div class="small">คำตอบของคุณ: <span style="color:var(--bad)">' + (x.a >= 0 ? esc(x.it.o[x.a]) : '— ไม่ได้ตอบ') + '</span><br>คำตอบที่ถูก: <b style="color:var(--green)">' + esc(x.it.o[x.it.a]) + '</b></div><div class="explain">' + esc(x.it.e) + '</div></div>';
          }).join('') + '</div>' : '') +
          '<div class="btns"><button class="btn" id="mk-again">สอบอีกครั้ง</button><button class="btn ghost" id="mk-home">กลับหน้าหลัก</button></div>';
        $('#mk-again').onclick = function () { go('mockrun'); };
        $('#mk-home').onclick = function () { go('home'); };
        window.scrollTo(0, 0);
      }
    });
  };

  V.info = function (el) {
    top();
    el.innerHTML = '<div class="uhead"><div class="eyebrow">ระเบียบ ก.ค.ศ.</div><h1>ใช้ผล CEFR ลดเวลาวิทยฐานะ</h1><p>สรุปจากหลักเกณฑ์ ว 9/2564 และแนวปฏิบัติ ว 10/2567</p></div>' +
      '<div class="card mt"><div class="big-compare"><div class="from"><b>4 ปี</b><span>ระยะเวลาปกติ</span></div>' + I.arrow + '<div class="to"><b>3 ปี</b><span>เมื่อผ่านเกณฑ์ CEFR</span></div></div>' +
      '<p class="small muted center" style="margin:8px 0 0">ระยะเวลาดำรงตำแหน่ง/วิทยฐานะ ก่อนยื่นขอมีหรือเลื่อนวิทยฐานะ</p></div>' +
      '<div class="sec"><h2>ระดับที่ต้องผ่าน</h2></div><div class="card"><table class="table"><tr><th>ตำแหน่ง / กลุ่มสาระ</th><th>CEFR ขั้นต่ำ</th></tr>' +
      '<tr><td>ครูผู้สอนกลุ่มสาระการเรียนรู้ภาษาต่างประเทศ</td><td><b>B2</b> ขึ้นไป</td></tr>' +
      '<tr><td>ครูกลุ่มสาระอื่น / ผู้บริหารสถานศึกษา / ศึกษานิเทศก์</td><td><b>B1</b> ขึ้นไป</td></tr></table>' +
      '<p class="small" style="margin:12px 0 0"><b>ว 10/2567</b> (3 พ.ค. 2567) ยืนยันว่า ผลสอบที่<b>สูงกว่า</b>ระดับที่กำหนด (เช่น ได้ C1) ก็นำมาใช้ลดระยะเวลาได้</p></div>' +
      '<div class="sec"><h2>ข้อสอบที่ครูนิยม</h2></div><div class="card"><b style="font-family:var(--f-head);font-size:17px">EduSynch – CEFR Level Test (ศูนย์ HCEC)</b>' +
      '<div class="skill4"><div><b>อ่าน</b><span>20–30 นาที</span></div><div><b>ฟัง</b><span>20–25 นาที</span></div><div><b>เขียน</b><span>20–30 นาที</span></div><div><b>พูด</b><span>15–25 นาที</span></div></div>' +
      '<p class="small muted" style="margin:0">สอบบนคอมพิวเตอร์ครบ 4 ทักษะ · ค่าสมัครประมาณ 2,675 บาท (รวม VAT) · ผลใช้ลดเวลาได้ไม่เกิน 2 ปี</p>' +
      '<button class="btn mt" data-go-x="edusynch">ฝึก + ข้อสอบจำลอง 4 ทักษะ →</button></div>' +
      '<div class="sec"><h2>B2 เทียบกับข้อสอบสากล</h2><span class="small muted">โดยประมาณ</span></div><div class="card"><table class="table"><tr><th>ข้อสอบ</th><th>คะแนนเทียบ B2</th></tr>' +
      '<tr><td>IELTS</td><td><b>5.5 – 6.0</b></td></tr><tr><td>TOEIC (Listening &amp; Reading)</td><td><b>785 – 940</b></td></tr><tr><td>TOEFL iBT</td><td><b>72 – 94</b></td></tr><tr><td>EF SET</td><td><b>51 – 60</b></td></tr></table>' +
      '<button class="btn ghost mt" data-go="prep">ฝึกรูปแบบข้อสอบแต่ละสนาม →</button><p class="small muted" style="margin:10px 0 0">B2 (Upper-Intermediate) = เข้าใจเนื้อหาซับซ้อนทั้งการฟังและการอ่าน สื่อสารได้คล่องในหลายหัวข้อ และอภิปรายเชิงวิชาชีพ/วิชาการได้</p></div>' +
      '<div class="sec"><h2>ขั้นตอนแนะนำ</h2></div><div class="card"><ol class="timeline">' +
      '<li><b>เรียนตามแผน 12 สัปดาห์</b><span class="small muted">วันละ 20–30 นาที ครบ 8 Unit</span></li>' +
      '<li><b>ทำข้อสอบจำลองให้ได้ ≥ 70%</b><span class="small muted">ทำซ้ำได้จนมั่นใจ</span></li>' +
      '<li><b>สมัครสอบกับหน่วยงาน/ศูนย์สอบที่ ก.ค.ศ. ยอมรับ</b><span class="small muted">เช่น EduSynch – CEFR Level Test ที่ศูนย์ HCEC · ตรวจรายชื่อหน่วยทดสอบล่าสุดก่อนสมัคร</span></li>' +
      '<li><b>เก็บ "ผลการทดสอบ" (Test Report) ฉบับจริง</b><span class="small muted">วุฒิบัตรผ่านการอบรม ใช้แทนผลสอบไม่ได้</span></li>' +
      '<li><b>แนบผลประกอบคำขอวิทยฐานะ</b><span class="small muted">ตรวจสอบอายุของผลสอบ (ส่วนใหญ่กำหนดไม่เกิน 2 ปีนับถึงวันยื่น)</span></li></ol></div>' +
      '<div class="note">ข้อมูลในหน้านี้สรุปเพื่อการเตรียมตัวเท่านั้น หลักเกณฑ์อาจมีการปรับปรุง โปรดตรวจสอบหนังสือเวียนฉบับล่าสุดจากสำนักงาน ก.ค.ศ. หรือเขตพื้นที่การศึกษาของท่านก่อนยื่นคำขอ<br><a href="https://otepc.go.th/th/content_page/item/4911-10-2567-cefr-b2.html" target="_blank" rel="noopener" style="color:var(--green);font-weight:600">เปิดหนังสือ ว 10/2567 (otepc.go.th) ↗</a></div>';
    $$('[data-go]', el).forEach(function (b) { b.onclick = function () { go(b.dataset.go); }; });
    $$('[data-go-x]', el).forEach(function (b) { b.onclick = function () { go('exam', { x: b.dataset.goX }); }; });
  };

  V.settings = function (el) {
    var p = S.profile;
    top({ back: function () { go('home'); }, title: 'ตั้งค่า' });
    el.innerHTML = '<div class="card"><label class="lb" style="margin-top:0" for="s-name">ชื่อที่ให้เรียก</label><input type="text" id="s-name" value="' + esc(p.name) + '" maxlength="30">' +
      '<label class="lb">เป้าหมาย</label><div class="seg" id="s-grp"><button data-g="lang" class="' + (p.group !== 'other' ? 'on' : '') + '"><b>B2</b><span>ครูภาษาต่างประเทศ</span></button><button data-g="other" class="' + (p.group === 'other' ? 'on' : '') + '"><b>B1</b><span>ครูกลุ่มสาระอื่น / ผู้บริหาร / ศน.</span></button></div>' +
      '<label class="lb" for="s-date">วันสอบจริง</label><input type="date" id="s-date" value="' + esc(p.exam || '') + '">' +
      '<div class="btns"><button class="btn" id="s-save">บันทึก</button></div></div>' +
      '<div class="sec"><h2>ย้ายข้อมูลไปเครื่องอื่น</h2></div><div class="card"><p class="small muted">ความคืบหน้าถูกเก็บในเบราว์เซอร์ของเครื่องนี้ คัดลอกรหัสด้านล่างไปวางในเครื่องใหม่เพื่อเรียนต่อ</p>' +
      '<textarea id="s-code" style="min-height:90px;font-family:ui-monospace,Consolas,monospace;font-size:12px" readonly></textarea>' +
      '<div class="btns two"><button class="btn ghost" id="s-copy">คัดลอกรหัส</button><button class="btn ghost" id="s-imp">นำเข้ารหัส</button></div></div>' +
      '<div class="sec"><h2>รีเซ็ต</h2></div><div class="card"><p class="small muted">ลบความคืบหน้าทั้งหมดและเริ่มใหม่</p><button class="btn ghost" id="s-reset" style="color:var(--bad)">ลบข้อมูลทั้งหมด</button></div>';
    var g = p.group;
    $$('#s-grp button').forEach(function (b) { b.onclick = function () { g = b.dataset.g; $$('#s-grp button').forEach(function (x) { x.classList.toggle('on', x === b); }); }; });
    $('#s-save').onclick = function () { p.name = $('#s-name').value.trim() || p.name; p.group = g; p.exam = $('#s-date').value; save(); toast('บันทึกแล้ว'); go('home'); };
    var code = btoa(unescape(encodeURIComponent(JSON.stringify(S))));
    $('#s-code').value = code;
    $('#s-copy').onclick = function () {
      var ta = $('#s-code'); ta.select();
      try { if (navigator.clipboard) navigator.clipboard.writeText(code).then(function () { toast('คัดลอกแล้ว'); }, function () { document.execCommand('copy'); toast('คัดลอกแล้ว'); }); else { document.execCommand('copy'); toast('คัดลอกแล้ว'); } } catch (e) { toast('กดค้างที่ช่องเพื่อคัดลอก'); }
    };
    $('#s-imp').onclick = function () {
      var ta = $('#s-code');
      if (ta.readOnly) { ta.readOnly = false; ta.value = ''; ta.placeholder = 'วางรหัสที่นี่ แล้วกด "นำเข้ารหัส" อีกครั้ง'; ta.focus(); return; }
      try { var d = JSON.parse(decodeURIComponent(escape(atob(ta.value.trim())))); if (!d.profile) throw 0; S = Object.assign(blank(), d); save(); toast('นำเข้าสำเร็จ'); go('home'); }
      catch (e) { toast('รหัสไม่ถูกต้อง'); }
    };
    var armed = false;
    $('#s-reset').onclick = function () {
      if (!armed) { armed = true; this.textContent = 'แตะอีกครั้งเพื่อยืนยันการลบ'; return; }
      S = blank(); save(); go('onboard');
    };
  };

  /* ── boot ── */
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-say]');
    if (b && !b.id) { e.stopPropagation(); TTS.speak(b.getAttribute('data-say'), b); }
  });
  $$('.nav button').forEach(function (b) { b.onclick = function () { go(b.dataset.tab); }; });
  window.addEventListener('scroll', function () { $('#top').classList.toggle('scrolled', window.scrollY > 4); }, { passive: true });

  window.APP = {
    V: V, I: I, $: $, $$: $$, esc: esc, paras: paras, words: words, shuffle: shuffle, toast: toast, TTS: TTS, sayBtn: sayBtn,
    go: go, top: top, qset: qset, runner: runner, ring: ring, save: save, touch: touch, level: level, ds: ds, pad: pad, leave: LEAVE,
    get S() { return S; }, get R() { return R; }, start: render
  };
})();
