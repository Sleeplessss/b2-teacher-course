/* Study reminder as a plain notification badge (no email, no server):
   - red dot on the Home tab + "(1)" in the tab title + app-icon badge (installed app) while today's study is missing
   - optional system notification after the chosen hour, if the app is open/in background
   - optional daily calendar reminder (works even when the app is closed) */
(function () {
  'use strict';
  var A = window.APP, $ = A.$, esc = A.esc;
  var BASE_TITLE = document.title;

  function st() { var S = A.S; return S.remind || (S.remind = { badge: true, notify: false, hour: 20 }); }
  function studiedToday() { return A.S.days.indexOf(A.ds(new Date())) >= 0; }
  function missing() { return !!A.S.profile && !studiedToday(); }

  function setBadge(n) {
    try { if (n && navigator.setAppBadge) navigator.setAppBadge(n); else if (!n && navigator.clearAppBadge) navigator.clearAppBadge(); } catch (e) { }
  }

  function notify() {
    var r = st(), t = A.ds(new Date());
    if (!r.notify || r.lastNotified === t || !missing()) return;
    if (!('Notification' in window) || Notification.permission !== 'granted') return;
    if (new Date().getHours() < r.hour) return;
    var s = A.streak(), title = s > 0 ? '🔥 สถิติ ' + s + ' วันจะหายตอนเที่ยงคืน' : '📚 วันนี้ยังไม่ได้ฝึกภาษาอังกฤษ';
    var opts = { body: 'เรียนแค่ 5 นาที (ทวนแฟลชการ์ด 1 รอบ) ก็รักษาสถิติได้', tag: 'b2-daily', icon: 'icon-192.png' };
    r.lastNotified = t; A.save();
    if (navigator.serviceWorker && navigator.serviceWorker.getRegistration) {
      navigator.serviceWorker.getRegistration().then(function (reg) {
        if (reg && reg.showNotification) reg.showNotification(title, opts); else new Notification(title, opts);
      }, function () { try { new Notification(title, opts); } catch (e) { } });
    } else { try { new Notification(title, opts); } catch (e) { } }
  }

  /* refresh every badge surface */
  A.badge = function () {
    var r = st(), on = r.badge !== false && missing();
    var tab = document.querySelector('.nav button[data-tab="home"]');
    if (tab) { var d = tab.querySelector('.nbadge'); if (on && !d) { d = document.createElement('i'); d.className = 'nbadge'; d.setAttribute('aria-label', 'วันนี้ยังไม่ได้เรียน'); tab.appendChild(d); } else if (!on && d) d.remove(); }
    document.title = on ? '(1) ' + BASE_TITLE : BASE_TITLE;
    setBadge(on ? 1 : 0);
    notify();
  };

  A.remindUI = function (box) {
    var r = st(), perm = 'Notification' in window ? Notification.permission : 'unsupported';
    var inGas = /googleusercontent\.com$|script\.google\.com$/.test(location.hostname);
    box.innerHTML = '<div class="sec"><h2>แจ้งเตือนกันสถิติหาย</h2><span class="small muted">🔥 ' + A.streak() + ' วัน</span></div>' +
      '<div class="card"><label class="switch" style="margin-top:0"><input type="checkbox" id="rm-badge"' + (r.badge !== false ? ' checked' : '') + '><span><b>จุดแดงแจ้งเตือน</b> บนเมนูหน้าหลัก/ชื่อแท็บ/ไอคอนแอป เมื่อวันนี้ยังไม่ได้เรียน</span></label>' +
      '<label class="switch"><input type="checkbox" id="rm-notify"' + (r.notify ? ' checked' : '') + (perm === 'unsupported' || inGas ? ' disabled' : '') + '><span><b>เด้งแจ้งเตือน</b> หลังเวลาที่ตั้ง ถ้ายังไม่ได้เรียน</span></label>' +
      '<div id="rm-hr"' + (r.notify ? '' : ' class="hide"') + '><label class="lb" for="rm-hour">เตือนหลังเวลา</label><select id="rm-hour">' + hourOpts(r.hour) + '</select></div>' +
      '<p class="small muted" style="margin:10px 0 0" id="rm-hint">' + hint(perm, inGas) + '</p></div>' +
      '<div class="card"><b>เตือนในปฏิทินมือถือ (สำรอง)</b><p class="small muted" style="margin:4px 0 10px">เตือนทุกวันตามเวลาที่เลือก แม้ปิดแอปอยู่ — แต่จะเตือนทุกวันแม้เรียนแล้ว</p>' +
      '<div class="btns two" style="margin-top:0"><a class="btn ghost" id="rm-ics" download="b2-daily-reminder.ics" target="_blank">📅 iPhone/iCal</a><a class="btn ghost" id="rm-gcal" target="_blank" rel="noopener">📅 Google</a></div></div>';
    var hs = $('#rm-hour');
    function links() { var h = hs ? +hs.value : r.hour; $('#rm-ics').href = ics(h); $('#rm-gcal').href = gcal(h); }
    $('#rm-badge').onchange = function () { r.badge = this.checked; A.save(); A.badge(); };
    $('#rm-notify').onchange = function () {
      var cb = this;
      if (!cb.checked) { r.notify = false; A.save(); $('#rm-hr').classList.add('hide'); return; }
      if (!('Notification' in window)) { cb.checked = false; A.toast('เบราว์เซอร์นี้ไม่รองรับการแจ้งเตือน'); return; }
      Promise.resolve(Notification.requestPermission()).then(function (p) {
        if (p !== 'granted') { cb.checked = false; r.notify = false; A.save(); $('#rm-hint').textContent = hint(p, false); A.toast('ไม่ได้รับอนุญาตแจ้งเตือน'); return; }
        r.notify = true; A.save(); $('#rm-hr').classList.remove('hide'); $('#rm-hint').textContent = hint(p, false); A.toast('เปิดแจ้งเตือนแล้ว ✓');
      });
    };
    if (hs) hs.onchange = function () { r.hour = +hs.value; r.lastNotified = ''; A.save(); links(); };
    links();
  };

  function hint(perm, inGas) {
    if (inGas) return 'เวอร์ชัน Apps Script เด้งแจ้งเตือนไม่ได้ ใช้จุดแดงบนแท็บแทน — ต้องการเด้งแจ้งเตือน ให้ใช้เวอร์ชัน GitHub Pages';
    if (perm === 'unsupported') return 'เบราว์เซอร์นี้ไม่รองรับการเด้งแจ้งเตือน (iPhone ต้อง "เพิ่มไปยังหน้าจอโฮม" ก่อน แล้วเปิดจากไอคอน)';
    if (perm === 'denied') return 'การแจ้งเตือนถูกบล็อก — เปิดได้ที่ ตั้งค่าเบราว์เซอร์ → การแจ้งเตือน';
    return 'ข้อจำกัด: เว็บส่งแจ้งเตือนตามเวลาตอนปิดแอปสนิทไม่ได้ จะเด้งเมื่อแอปเปิดค้างอยู่หรือเปิดกลับมาหลังเวลาที่ตั้ง · ที่ปิดแอปอยู่ใช้ปฏิทินด้านล่างแทน';
  }
  function hourOpts(sel) { var h = []; for (var i = 6; i <= 23; i++) h.push('<option value="' + i + '"' + (i === +sel ? ' selected' : '') + '>' + A.pad(i) + ':00 น.</option>'); return h.join(''); }
  function appUrl() { return location.protocol.indexOf('http') === 0 && !/googleusercontent|script\.google/.test(location.hostname) ? location.origin + location.pathname : 'https://sleeplessss.github.io/b2-teacher-course/'; }
  function ics(hour) {
    var d = new Date(), y = d.getFullYear(), m = A.pad(d.getMonth() + 1), dd = A.pad(d.getDate()), hh = A.pad(hour);
    var body = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//B2 Ready for Teachers//TH', 'CALSCALE:GREGORIAN', 'BEGIN:VEVENT',
      'UID:b2-daily@b2ready', 'DTSTAMP:' + y + m + dd + 'T000000Z', 'DTSTART;TZID=Asia/Bangkok:' + y + m + dd + 'T' + hh + '0000', 'DURATION:PT15M', 'RRULE:FREQ=DAILY',
      'SUMMARY:🔥 ฝึกภาษาอังกฤษ 15 นาที (รักษาสถิติ)', 'DESCRIPTION:เปิดแอป B2 Ready for Teachers: ' + appUrl(), 'URL:' + appUrl(),
      'BEGIN:VALARM', 'ACTION:DISPLAY', 'DESCRIPTION:ถึงเวลาฝึกภาษาอังกฤษแล้ว', 'TRIGGER:PT0M', 'END:VALARM', 'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
    return 'data:text/calendar;charset=utf-8,' + encodeURIComponent(body);
  }
  function gcal(hour) {
    var d = new Date(), s = d.getFullYear() + A.pad(d.getMonth() + 1) + A.pad(d.getDate());
    return 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=' + encodeURIComponent('🔥 ฝึกภาษาอังกฤษ 15 นาที (รักษาสถิติ)') +
      '&dates=' + s + 'T' + A.pad(hour) + '0000/' + s + 'T' + A.pad(hour) + '1500&ctz=Asia/Bangkok&recur=' + encodeURIComponent('RRULE:FREQ=DAILY') + '&details=' + encodeURIComponent('เปิดแอป: ' + appUrl());
  }

  /* keep badges fresh: on load, when returning to the app, every minute (midnight rollover / notify hour) */
  document.addEventListener('visibilitychange', function () { if (!document.hidden) A.badge(); });
  setInterval(A.badge, 60000);
  if ('serviceWorker' in navigator && location.protocol === 'https:' || location.hostname === 'localhost') {
    try { navigator.serviceWorker.register('sw.js').catch(function () { }); } catch (e) { }
  }
})();
