# B2 Ready for Teachers 🎓

เว็บแอปหลักสูตรเตรียมสอบภาษาอังกฤษระดับ **CEFR B2** สำหรับครู
เพื่อใช้ลดระยะเวลาขอมี/เลื่อนวิทยฐานะตามหลักเกณฑ์ ก.ค.ศ. (ว 9/2564, ว 10/2567)
เปิดบนมือถือได้ผ่าน **Google Apps Script** โดยไม่ต้องเช่าโฮสต์

## เนื้อหา
- 8 Unit ในบริบทงานครู × 6 ขั้น (คำศัพท์ · ไวยากรณ์ · อ่าน · ฟัง · เขียน · แบบทดสอบ)
- **CEFR 4 ทักษะ (EduSynch – CEFR Level Test ที่ศูนย์ HCEC)**: ข้อสอบจำลองเต็มรูปแบบตามลำดับจริง Reading 20 นาที → Listening 10 นาที → Speaking 3 ข้อ (เตรียม 15 วิ/พูด 45 วิ บันทึกเสียง) → Writing ≥150 คำ 20 นาที แล้วสรุประดับรายทักษะ + ระดับเฉลี่ย พร้อมชุดฝึกแยกทักษะ
- **เตรียมสอบตามสนาม**: TOEIC (Part 2–7 + ศัพท์ธุรกิจ 24 คำ) · IELTS (T/F/NG, Matching Headings, Form completion, Writing Task 1–2) · TOEFL iBT รูปแบบ 2026 (Complete the Words, Build a Sentence, Email, Academic Discussion ฯลฯ) · EF SET (Adaptive Challenge)
- **ฝึกพูดเสมือนสอบจริง**: สุ่มหัวข้อ · ผู้คุมสอบอ่านคำถาม · จับเวลาเตรียม/พูด · **บันทึกเสียงและเปิดฟังย้อนหลัง** (IELTS Part 1–3, TOEFL Listen & Repeat / Interview, CEFR Opinion Talk) พร้อมเกณฑ์ประเมินตัวเองและตัวอย่างคำตอบ
- คำศัพท์ 88 คำ + แฟลชการ์ด · ข้อสอบจำลอง 25 ข้อ จับเวลา 35 นาที
- แผนเรียน 12 สัปดาห์ · สรุปเกณฑ์ ก.ค.ศ. · ความคืบหน้าบันทึกในเครื่อง (ย้ายเครื่องได้ด้วยรหัส)

## ⚠️ เรื่องการบันทึกเสียง
Google ปิดสิทธิ์ไมโครโฟนในเว็บแอป Apps Script → **เวอร์ชัน Apps Script ฝึกพูดได้แบบจับเวลาอย่างเดียว**
ถ้าต้องการบันทึกเสียง ใช้เวอร์ชัน **GitHub Pages** (ฟรี ไม่ต้องมีเซิร์ฟเวอร์):
1. GitHub repo → **Settings → Pages**
2. Source: **Deploy from a branch** → Branch: `main` · Folder: **`/docs`** → Save
3. รอ ~1 นาที จะได้ลิงก์ `https://sleeplessss.github.io/b2-teacher-course/` เปิดบนมือถือได้ทันที (บันทึกเสียงได้ทั้ง Android และ iPhone)

## เปิดผ่าน Google Apps Script (แนะนำ — ได้ลิงก์เปิดบนมือถือ)
1. ไปที่ https://script.google.com → **New project**
2. ในไฟล์ `Code.gs` ลบของเดิม แล้ววางเนื้อหาจาก `apps-script/Code.gs`
3. กด **+** ข้าง Files → **HTML** → ตั้งชื่อ `Index` (ตัว I ใหญ่) → วางเนื้อหาทั้งหมดจาก `apps-script/Index.html`
4. กด **Deploy → New deployment** → ⚙️ เลือก **Web app**
   - Execute as: **Me** · Who has access: **Anyone**
5. กด Deploy → อนุญาตสิทธิ์ → คัดลอก **Web app URL** (`https://script.google.com/macros/s/.../exec`) ส่งเข้ามือถือ
6. บนมือถือ เปิดลิงก์ → เมนูเบราว์เซอร์ → **Add to Home screen** จะได้ไอคอนเหมือนแอป

> แก้ไขเนื้อหาแล้วต้องการอัปเดต: **Deploy → Manage deployments → ✏️ → Version: New version** (ลิงก์เดิมใช้ต่อได้)

## เปิดแบบออฟไลน์
ดับเบิลคลิก `dist/index.html` บนคอมพิวเตอร์ได้ทันที (ไฟล์เดียวจบ)

## พัฒนาต่อ
แก้ไฟล์ใน `src/` (data.js = เนื้อหา, app.js = ระบบ, styles.css = หน้าตา) แล้วรัน
```
python build.py
```
จะได้ `dist/index.html`, `docs/index.html` (GitHub Pages) และ `apps-script/Index.html` ใหม่

> ข้อมูลเกณฑ์ ก.ค.ศ. เป็นการสรุปเพื่อเตรียมตัว โปรดตรวจสอบหนังสือเวียนฉบับล่าสุดก่อนยื่นคำขอ
