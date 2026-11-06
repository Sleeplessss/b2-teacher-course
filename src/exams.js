/* Exam-specific practice: TOEIC · IELTS · TOEFL iBT (2026 format) · EF SET
   kinds: mcq (optional passage/script; q flags: say, hideQ, blind, fixed, nolab, type:'gap'),
          write, cloze, build, adaptive
   Unless `fixed` is set, o[a] is the answer and options are shuffled at runtime. */
window.EXAMS = {
  /* ═══════════════════════════ TOEIC ═══════════════════════════ */
  toeic: {
    name: 'TOEIC Listening & Reading', short: 'TOEIC', b2: '785 – 940',
    about: 'ข้อสอบภาษาอังกฤษในบริบทการทำงาน/ธุรกิจ ข้อสอบปรนัยทั้งหมด 200 ข้อ ใช้เวลา 2 ชั่วโมง ไม่มีสอบพูด-เขียน (ใน L&R)',
    format: [
      ['Listening', 'Part 1–4', '100 ข้อ · ~45 นาที'],
      ['Reading', 'Part 5–7', '100 ข้อ · 75 นาที']
    ],
    tips: [
      'Part 2: ระวังคำตอบที่มีคำเสียงเหมือนในคำถาม (เช่น ถาม meeting ตอบ meat) มักเป็นตัวหลอก',
      'Part 3–4: อ่านคำถามล่วงหน้าก่อนเสียงเริ่ม จะรู้ว่าต้องฟังหาอะไร',
      'Part 5: ดูตำแหน่งในประโยคก่อน — ต้องการ noun / verb / adj / adv แล้วตัดตัวเลือกได้เร็ว',
      'Part 7: บริหารเวลา ~1 นาทีต่อข้อ ข้อ double/triple passage มักต้องเชื่อมข้อมูล 2 บทความ',
      'Part 1 (บรรยายภาพ) ฝึกจากข้อสอบเก่าของ ETS เพิ่มเติม เพราะต้องใช้รูปภาพจริง'
    ],
    vocab: [
      { w: 'invoice', p: 'n.', t: 'ใบแจ้งหนี้', ex: 'Please send the invoice to our accounts department.' },
      { w: 'agenda', p: 'n.', t: 'วาระการประชุม', ex: 'The budget is the first item on the agenda.' },
      { w: 'reimburse', p: 'v.', t: 'จ่ายเงินคืน (ค่าใช้จ่ายที่สำรองไป)', ex: 'The company will reimburse your travel expenses.' },
      { w: 'postpone', p: 'v.', t: 'เลื่อนออกไป', ex: 'The meeting has been postponed until Friday.' },
      { w: 'venue', p: 'n.', t: 'สถานที่จัดงาน', ex: 'The venue for the conference has changed.' },
      { w: 'quarterly', p: 'adj.', t: 'รายไตรมาส', ex: 'The quarterly report is due next week.' },
      { w: 'merchandise', p: 'n.', t: 'สินค้า', ex: 'All merchandise can be returned within 30 days.' },
      { w: 'shipment', p: 'n.', t: 'การจัดส่ง / สินค้าที่จัดส่ง', ex: 'The shipment arrived two days late.' },
      { w: 'warranty', p: 'n.', t: 'การรับประกันสินค้า', ex: 'The printer comes with a two-year warranty.' },
      { w: 'applicant', p: 'n.', t: 'ผู้สมัคร', ex: 'We received over fifty applicants for the position.' },
      { w: 'supervisor', p: 'n.', t: 'หัวหน้างาน', ex: 'Ask your supervisor to approve the request.' },
      { w: 'revenue', p: 'n.', t: 'รายได้', ex: 'Revenue increased by 12% this year.' },
      { w: 'budget', p: 'n.', t: 'งบประมาณ', ex: 'The project is already over budget.' },
      { w: 'proposal', p: 'n.', t: 'ข้อเสนอ', ex: 'The board accepted her proposal.' },
      { w: 'refund', p: 'n./v.', t: 'เงินคืน / คืนเงิน', ex: 'You can request a full refund.' },
      { w: 'inventory', p: 'n.', t: 'สินค้าคงคลัง / การตรวจนับสต็อก', ex: 'The store is closed today for inventory.' },
      { w: 'brochure', p: 'n.', t: 'แผ่นพับ / โบรชัวร์', ex: 'Please take a brochure at the front desk.' },
      { w: 'estimate', p: 'n./v.', t: 'ประมาณการ / ใบเสนอราคา', ex: 'Can you give us an estimate for the repairs?' },
      { w: 'negotiate', p: 'v.', t: 'เจรจาต่อรอง', ex: 'We negotiated a lower price with the supplier.' },
      { w: 'branch', p: 'n.', t: 'สาขา', ex: 'The bank is opening a new branch downtown.' },
      { w: 'itinerary', p: 'n.', t: 'กำหนดการเดินทาง', ex: 'I have emailed you the itinerary for the trip.' },
      { w: 'attendee', p: 'n.', t: 'ผู้เข้าร่วม (งาน/ประชุม)', ex: 'Each attendee will receive a name badge.' },
      { w: 'confirm', p: 'v.', t: 'ยืนยัน', ex: 'Please confirm your attendance by Monday.' },
      { w: 'available', p: 'adj.', t: 'ว่าง / มีให้ใช้ได้', ex: 'Is the meeting room available this afternoon?' }
    ],
    sets: [
      {
        id: 'toeic-p2', title: 'Part 2 · Question–Response', th: 'ฟังคำถามแล้วเลือกคำตอบที่เหมาะสม (ไม่มีตัวเลือกให้อ่าน)', kind: 'mcq',
        intro: 'เหมือนสอบจริง: คำถามและตัวเลือก (A)(B)(C) จะเป็นเสียงเท่านั้น กดฟังแล้วเลือกคำตอบ หลังตรวจคำตอบจะเห็นข้อความทั้งหมด',
        qs: [
          { say: 1, hideQ: 1, blind: 1, fixed: 1, q: 'Where will the training session be held?', o: ['In the main conference room.', 'At about three o\'clock.', 'Yes, it was very useful.'], a: 0, e: 'ถาม Where → ตอบสถานที่' },
          { say: 1, hideQ: 1, blind: 1, fixed: 1, q: 'Who\'s responsible for ordering office supplies?', o: ['Some paper and pens.', 'Ms Tanaka in the admin office.', 'I ordered it yesterday.'], a: 1, e: 'ถาม Who → ตอบบุคคล (B) · (C) หลอกด้วยคำว่า order' },
          { say: 1, hideQ: 1, blind: 1, fixed: 1, q: 'Why was the staff meeting postponed?', o: ['In the meeting room.', 'Until next Tuesday.', 'The director is away on business.'], a: 2, e: 'ถาม Why → ตอบเหตุผล · (B) เป็นตัวหลอกที่ตอบ When' },
          { say: 1, hideQ: 1, blind: 1, fixed: 1, q: 'Would you like me to send you the report by email?', o: ['Yes, that would be great.', 'It was reported last week.', 'He sent it to the wrong department.'], a: 0, e: 'ข้อเสนอ Would you like me to…? → ตอบรับ/ปฏิเสธ' },
          { say: 1, hideQ: 1, blind: 1, fixed: 1, q: 'Haven\'t you finished the budget proposal yet?', o: ['The budget is too high.', 'I\'m still waiting for the final figures.', 'No, I don\'t propose it.'], a: 1, e: 'คำตอบโดยอ้อม (indirect answer) พบบ่อยมากใน Part 2' },
          { say: 1, hideQ: 1, blind: 1, fixed: 1, q: 'Should we take a taxi or the train to the airport?', o: ['The flight leaves at noon.', 'Yes, we should.', 'The train is faster at this time of day.'], a: 2, e: 'คำถามแบบ A or B → ห้ามตอบ Yes/No' },
          { say: 1, hideQ: 1, blind: 1, fixed: 1, q: 'How long have you worked in the marketing department?', o: ['About five years now.', 'It\'s a long way from here.', 'Yes, I work there.'], a: 0, e: 'How long → ระยะเวลา' },
          { say: 1, hideQ: 1, blind: 1, fixed: 1, q: 'When does the new manager start?', o: ['In the head office.', 'On the first of next month.', 'He managed it very well.'], a: 1, e: 'When → เวลา · (C) หลอกด้วยเสียง manager/managed' }
        ]
      },
      {
        id: 'toeic-p3', title: 'Part 3 · Conversation', th: 'ฟังบทสนทนาในที่ทำงาน แล้วตอบ 3 ข้อ', kind: 'mcq',
        script: `A: Hi, Daniel. Have you had a chance to look at the new schedule for the sales conference?
B: I have, and I noticed that my presentation is now on Friday afternoon. I was hoping to present on Thursday, because I'm flying to Singapore on Friday morning.
A: Oh, I didn't realise that. Let me check with the event coordinator. She might be able to swap your session with someone else's.
B: That would be great. Could you let me know by the end of the day? I need to confirm my flight.`,
        qs: [
          { q: 'What are the speakers mainly discussing?', o: ['A change to a conference schedule', 'A problem with a flight booking', 'The cost of a sales trip', 'A new marketing strategy'], a: 0, e: 'ทั้งบทพูดถึงตารางการประชุมใหม่' },
          { q: 'Why is the man concerned?', o: ['He will be travelling on Friday', 'His presentation is not ready', 'He has not received the schedule', 'The venue has changed'], a: 0, e: '"I\'m flying to Singapore on Friday morning"' },
          { q: 'What does the woman offer to do?', o: ['Contact the event coordinator', 'Give the presentation herself', 'Change his flight', 'Cancel the session'], a: 0, e: '"Let me check with the event coordinator."' }
        ]
      },
      {
        id: 'toeic-p4', title: 'Part 4 · Talk (Voicemail)', th: 'ฟังข้อความเสียง แล้วตอบ 3 ข้อ', kind: 'mcq',
        script: `Hello, this is Karen Lee from Green Valley Office Supplies, returning your call about the order for your school. Unfortunately, the printer paper you requested is temporarily out of stock. We expect a new delivery next Wednesday. If you'd prefer, we can send a similar product from another brand today, at the same price. Please call me back before five o'clock to let me know which option you prefer.`,
        qs: [
          { q: 'Why is the speaker calling?', o: ['To explain a problem with an order', 'To advertise a new product', 'To request a payment', 'To change a delivery address'], a: 0, e: 'สินค้าที่สั่งหมดชั่วคราว' },
          { q: 'When will new stock arrive?', o: ['Next Wednesday', 'Today', 'Tomorrow at five', 'Next month'], a: 0, e: '"We expect a new delivery next Wednesday."' },
          { q: 'What is the listener asked to do?', o: ['Call back with a decision', 'Visit the store', 'Pay a higher price', 'Send a new order form'], a: 0, e: '"Please call me back… to let me know which option you prefer."' }
        ]
      },
      {
        id: 'toeic-p5', title: 'Part 5 · Incomplete Sentences', th: 'เติมคำในประโยคบริบทธุรกิจ 12 ข้อ', kind: 'mcq',
        intro: 'เทคนิค: ดูช่องว่างก่อนว่าต้องการคำชนิดไหน (noun / verb / adjective / adverb) ทำข้อละไม่เกิน 30 วินาที',
        qs: [
          { q: 'All employees must submit their expense reports ___ the end of the month.', o: ['by', 'until', 'since', 'during'], a: 0, e: 'by = ภายใน (เส้นตาย) · until = ต่อเนื่องจนถึง' },
          { q: 'The new software is ___ easier to use than the old version.', o: ['considerably', 'considerable', 'consider', 'consideration'], a: 0, e: 'ขยาย adjective ขั้นกว่า (easier) → adverb' },
          { q: 'Ms Park will be ___ for the training programme while the manager is away.', o: ['responsible', 'responsibility', 'responsibly', 'responsive'], a: 0, e: 'be responsible for = รับผิดชอบ' },
          { q: 'Please ___ the attached document and return it with your signature.', o: ['review', 'reviewing', 'reviewed', 'to review'], a: 0, e: 'ประโยคคำสั่ง Please + V1' },
          { q: 'The company has decided to ___ its opening hours during the holiday season.', o: ['extend', 'extent', 'extensive', 'extension'], a: 0, e: 'to + V1 → extend' },
          { q: '___ the weather was bad, the outdoor event went ahead as planned.', o: ['Although', 'Despite', 'Because', 'However'], a: 0, e: 'ตามด้วยประโยค + ความขัดแย้ง → Although' },
          { q: 'Applications ___ after 30 June will not be considered.', o: ['received', 'receiving', 'receive', 'receives'], a: 0, e: 'ใบสมัคร "ที่ถูกรับ" → V3 (reduced passive)' },
          { q: 'Mr Somchai is the employee ___ proposal was selected for the award.', o: ['whose', 'who', 'which', 'whom'], a: 0, e: 'proposal ของพนักงาน → whose' },
          { q: 'The marketing team worked ___ to meet the deadline.', o: ['diligently', 'diligent', 'diligence', 'more diligent'], a: 0, e: 'ขยายกริยา worked → adverb' },
          { q: 'Customers may ___ a full refund within 30 days of purchase.', o: ['request', 'respond', 'reply', 'attend'], a: 0, e: 'request a refund = ขอเงินคืน' },
          { q: 'Neither the manager ___ his assistant was available for comment.', o: ['nor', 'or', 'and', 'but'], a: 0, e: 'neither … nor' },
          { q: 'The conference room has been ___ for the board meeting on Monday.', o: ['reserved', 'reserving', 'reserve', 'reservation'], a: 0, e: 'has been + V3 (passive)' }
        ]
      },
      {
        id: 'toeic-p6', title: 'Part 6 · Text Completion', th: 'อ่านอีเมลแล้วเติมคำ/ประโยค 4 ช่อง', kind: 'mcq',
        passage: `To: All staff
From: Facilities Department
Subject: Elevator maintenance

Please be aware that the main elevator will be out of service from Monday to Wednesday next week. ___(1)___ this period, staff are asked to use the stairs or the service elevator at the back of the building. We apologise for any ___(2)___ this may cause.

___(3)___ If you have mobility needs and require assistance, please contact the front desk, and a member of our team will be happy to ___(4)___ you.`,
        qs: [
          { q: 'Blank (1)', o: ['During', 'While', 'Since', 'Until'], a: 0, e: 'During + คำนาม (this period)' },
          { q: 'Blank (2)', o: ['inconvenience', 'inconvenient', 'inconveniently', 'inconvenienced'], a: 0, e: 'any + noun' },
          { q: 'Blank (3) — choose the best sentence', o: ['The work is necessary to meet new safety regulations.', 'The elevator was installed last week.', 'Please take the elevator to the fifth floor.', 'Our staff party will be held on Friday.'], a: 0, e: 'ประโยคแทรกต้องอธิบายเหตุผลของการซ่อมบำรุงให้ต่อเนื่องกับเนื้อหา' },
          { q: 'Blank (4)', o: ['assist', 'assistance', 'assistant', 'assisting'], a: 0, e: 'happy to + V1' }
        ]
      },
      {
        id: 'toeic-p7', title: 'Part 7 · Double Passage', th: 'อ่านประกาศ + อีเมล แล้วเชื่อมข้อมูล', kind: 'mcq',
        passage: `NOTICE — Northern Educators' Conference 2026, Chiang Mai

Early registration (until 15 March): 2,500 baht per person
Standard registration (16 March – 30 April): 3,200 baht per person
Group discount: schools registering five or more teachers receive 10% off the total fee.
All fees include lunch on both days and access to all workshops. Certificates of attendance will be emailed within two weeks of the event.

────────────

From: Wanida Chaiyo
To: Registration Team
Subject: Invoice for group registration

I am writing about the registration of six teachers from our school. We completed the online form on 20 March. However, the invoice we received shows the full fee for each person, without any discount. Could you please check this and send us a corrected invoice?

Also, one of our teachers is vegetarian. I would be grateful if you could arrange a suitable lunch for her.`,
        qs: [
          { q: 'What is included in the registration fee?', o: ['Lunch and workshops', 'Accommodation', 'Transport to the venue', 'A printed certificate on the day'], a: 0, e: '"All fees include lunch on both days and access to all workshops."' },
          { q: 'Before any discount, how much does each of Ms Wanida\'s teachers have to pay?', o: ['3,200 baht', '2,500 baht', '2,250 baht', '2,880 baht'], a: 0, e: 'ลงทะเบียน 20 มี.ค. = ช่วง Standard → 3,200 บาท (ต้องเชื่อมข้อมูล 2 บทความ)' },
          { q: 'Why is Ms Wanida writing?', o: ['The invoice did not include the group discount', 'She wants to cancel the registration', 'She missed the early registration date', 'Her certificate has not arrived'], a: 0, e: 'ลงทะเบียน 6 คน ≥ 5 → ควรได้ส่วนลด 10%' },
          { q: 'In the email, the word "arrange" is closest in meaning to', o: ['organise', 'order', 'repair', 'decorate'], a: 0, e: 'arrange a lunch = จัดเตรียม' }
        ]
      }
    ]
  },

  /* ═══════════════════════════ IELTS ═══════════════════════════ */
  ielts: {
    name: 'IELTS Academic / General Training', short: 'IELTS', b2: '5.5 – 6.0',
    about: 'สอบครบ 4 ทักษะ คะแนน band 0–9 ส่วน Speaking สอบตัวต่อตัวกับผู้คุมสอบ ~11–14 นาที',
    format: [
      ['Listening', '4 parts · 40 ข้อ', '~30 นาที'],
      ['Reading', '3 passages · 40 ข้อ', '60 นาที'],
      ['Writing', 'Task 1 + Task 2', '60 นาที'],
      ['Speaking', 'Part 1–3', '11–14 นาที']
    ],
    tips: [
      'True / False / Not Given: FALSE = บทความบอกตรงข้าม · NOT GIVEN = บทความไม่ได้พูดถึงเลย',
      'Listening: สะกดผิด = ผิด และต้องดูจำนวนคำที่กำหนด (NO MORE THAN TWO WORDS)',
      'Writing Task 2 มีคะแนนมากกว่า Task 1 สองเท่า — ใช้เวลา ~40 นาที',
      'Speaking Part 2: ใช้เวลาเตรียม 1 นาทีเขียนคีย์เวิร์ด อย่าเขียนเป็นประโยค',
      'Band 6 ต้องการ: ตอบตรงประเด็น ขยายความได้ ใช้ศัพท์หลากหลาย แม้มีข้อผิดพลาดบ้าง'
    ],
    sets: [
      {
        id: 'ielts-tfng', title: 'Reading · True / False / Not Given', th: 'ข้อสอบรูปแบบที่คนไทยพลาดมากที่สุด', kind: 'mcq',
        passage: `The Four-Day School Week

In recent years, a growing number of school districts in the United States have moved to a four-day school week. Most of these districts are in rural areas, where schools often struggle to recruit and keep teachers. By offering a three-day weekend, districts hope to make teaching jobs more attractive. In some cases, the change has also been used to reduce transport and heating costs, although the savings are usually smaller than expected.

To compensate for the lost day, schools typically lengthen the remaining four days by an hour or more. Research on student achievement has produced mixed results. Some studies have found small declines in test scores, particularly in mathematics, while others have found no significant difference. Parents' opinions are also divided. Many families appreciate the extra time together, but working parents often need to find childcare on the fifth day, which can be expensive.

Supporters argue that teachers return to work on Monday feeling more rested and motivated. Critics, however, believe that younger children find longer school days tiring, and that the policy may widen the gap between students whose families can provide learning activities on the day off and those whose families cannot.`,
        intro: 'เลือก TRUE ถ้าตรงกับบทความ · FALSE ถ้าขัดแย้งกับบทความ · NOT GIVEN ถ้าบทความไม่ได้ให้ข้อมูล',
        qs: [
          { fixed: 1, q: 'Most schools with a four-day week are located in cities.', o: ['TRUE', 'FALSE', 'NOT GIVEN'], a: 1, e: 'บทความบอก "Most of these districts are in rural areas" → ขัดแย้ง' },
          { fixed: 1, q: 'One aim of the four-day week is to make teaching jobs more attractive.', o: ['TRUE', 'FALSE', 'NOT GIVEN'], a: 0, e: '"districts hope to make teaching jobs more attractive"' },
          { fixed: 1, q: 'The money saved is usually greater than districts expect.', o: ['TRUE', 'FALSE', 'NOT GIVEN'], a: 1, e: '"the savings are usually smaller than expected" → ตรงข้าม' },
          { fixed: 1, q: 'Students at four-day schools receive more homework.', o: ['TRUE', 'FALSE', 'NOT GIVEN'], a: 2, e: 'ไม่มีข้อมูลเรื่องการบ้านเลย' },
          { fixed: 1, q: 'Some working parents have to pay for childcare on the extra day off.', o: ['TRUE', 'FALSE', 'NOT GIVEN'], a: 0, e: '"working parents often need to find childcare… which can be expensive"' },
          { fixed: 1, q: 'Most districts are planning to return to a five-day week.', o: ['TRUE', 'FALSE', 'NOT GIVEN'], a: 2, e: 'บทความไม่ได้กล่าวถึงแผนในอนาคต' }
        ]
      },
      {
        id: 'ielts-head', title: 'Reading · Matching Headings', th: 'จับคู่หัวข้อกับย่อหน้า', kind: 'mcq',
        passage: `Learning a Language as an Adult

A  Many adults believe they are too old to learn a new language. It is true that children usually develop a more native-like accent, but research suggests that adults often make faster progress in the early stages, because they can understand grammar rules and use learning strategies more effectively.

B  One of the biggest challenges for adult learners is finding time. Work and family responsibilities leave little space for study, so experts recommend short daily sessions instead of occasional long ones. Even fifteen minutes a day, if done consistently, can lead to significant improvement over several months.

C  Motivation also plays a key role. Learners who have a clear, personal reason for studying, such as a job promotion or communicating with relatives, tend to continue for longer than those who study simply because they feel they should.

D  Finally, technology has changed the way adults learn. Mobile apps, online tutors and podcasts allow learners to practise anywhere, at any time. However, specialists warn that apps alone rarely lead to fluency; learners still need real conversations to develop their speaking skills.`,
        intro: 'เลือกหัวข้อ (i–vi) ที่ตรงกับแต่ละย่อหน้า มีหัวข้อเกิน 2 ข้อที่ไม่ได้ใช้ · เทคนิค: อ่านประโยคแรกและประโยคสุดท้ายของย่อหน้าก่อน',
        qs: [
          { fixed: 1, nolab: 1, q: 'Paragraph A', o: ['i. Age is not the barrier many people think', 'ii. Little and often works best', 'iii. Why having a goal matters', 'iv. Digital tools: useful but not enough', 'v. The importance of a good accent', 'vi. Learning languages in childhood'], a: 0, e: 'ใจความ: ผู้ใหญ่เรียนได้เร็วในช่วงแรก (v. เป็นตัวหลอกเพราะมีคำว่า accent)' },
          { fixed: 1, nolab: 1, q: 'Paragraph B', o: ['i. Age is not the barrier many people think', 'ii. Little and often works best', 'iii. Why having a goal matters', 'iv. Digital tools: useful but not enough', 'v. The importance of a good accent', 'vi. Learning languages in childhood'], a: 1, e: 'short daily sessions = little and often' },
          { fixed: 1, nolab: 1, q: 'Paragraph C', o: ['i. Age is not the barrier many people think', 'ii. Little and often works best', 'iii. Why having a goal matters', 'iv. Digital tools: useful but not enough', 'v. The importance of a good accent', 'vi. Learning languages in childhood'], a: 2, e: 'clear, personal reason = goal' },
          { fixed: 1, nolab: 1, q: 'Paragraph D', o: ['i. Age is not the barrier many people think', 'ii. Little and often works best', 'iii. Why having a goal matters', 'iv. Digital tools: useful but not enough', 'v. The importance of a good accent', 'vi. Learning languages in childhood'], a: 3, e: 'apps มีประโยชน์ แต่ "alone rarely lead to fluency"' }
        ]
      },
      {
        id: 'ielts-form', title: 'Listening · Form Completion', th: 'ฟังแล้วพิมพ์คำตอบลงแบบฟอร์ม', kind: 'mcq',
        script: `A: Good morning, Riverside Teacher Training Centre. How can I help you?
B: Hi. I'd like to enrol on one of your weekend courses.
A: Of course. Which course are you interested in?
B: The one on classroom management.
A: Classroom management, great. Can I have your full name, please?
B: It's Anchalee Wong. That's W, O, N, G.
A: Thank you. And which school do you work at?
B: Sunrise Secondary School.
A: Lovely. The course runs on Saturdays for six weeks, starting on the fourteenth of May. The fee is four thousand eight hundred baht, which includes all materials.
B: Great. Is there parking available?
A: Yes, there's free parking behind the building.`,
        intro: 'เขียนคำตอบไม่เกิน ONE WORD AND/OR A NUMBER ต่อช่อง · ฟังได้สูงสุด 2 ครั้งเพื่อความสมจริง',
        qs: [
          { type: 'gap', q: 'Course: ________ management', ans: ['classroom'], e: '"The one on classroom management."' },
          { type: 'gap', q: 'Name: Anchalee ________', ans: ['wong'], e: 'ผู้พูดสะกด W-O-N-G' },
          { type: 'gap', q: 'School: ________ Secondary School', ans: ['sunrise'], e: '"Sunrise Secondary School"' },
          { type: 'gap', q: 'Course length: ________ weeks', ans: ['6', 'six'], e: '"for six weeks"' },
          { type: 'gap', q: 'Start date: ________ May', ans: ['14', '14th', 'fourteenth', 'the 14th'], e: '"the fourteenth of May"' },
          { type: 'gap', q: 'Fee: ________ baht (materials included)', ans: ['4800', '4,800'], e: '"four thousand eight hundred baht"' },
          { type: 'gap', q: 'Parking: free, ________ the building', ans: ['behind'], e: '"free parking behind the building"' }
        ]
      },
      {
        id: 'ielts-w1', title: 'Writing Task 1 · Bar Chart', th: 'บรรยายกราฟอย่างน้อย 150 คำ (20 นาที)', kind: 'write',
        prompt: 'The chart below shows the percentage of students at Riverside School who used different devices for homework in 2015 and 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
        chart: { title: 'Main device used for homework (% of students)', unit: '%', series: ['2015', '2025'], cats: ['Desktop PC', 'Laptop', 'Smartphone', 'Tablet', 'None'], data: [[45, 20, 10, 15, 10], [5, 35, 38, 20, 2]] },
        min: 150, minutes: 20,
        tips: ['ย่อหน้า 1 Introduction: paraphrase โจทย์ (ห้ามลอกคำต่อคำ)', 'ย่อหน้า 2 Overview: แนวโน้มหลัก 2 ข้อ — ส่วนที่สำคัญที่สุดของ Task 1', 'ย่อหน้า 3–4: รายละเอียดพร้อมตัวเลข และเปรียบเทียบ', 'ห้ามใส่ความคิดเห็นส่วนตัว'],
        phrases: ['The bar chart compares…', 'Overall, it is clear that…', 'rose sharply from … to …', 'fell dramatically to just …', 'by contrast, / whereas', 'the most popular device was…', 'remained relatively stable'],
        model: `The bar chart compares the proportion of students at Riverside School who used five different types of device for their homework in 2015 and 2025.

Overall, there was a clear shift from desktop computers towards mobile devices over the ten-year period. While desktop PCs were the most common choice in 2015, smartphones and laptops had become the most popular devices by 2025.

In 2015, 45% of students relied mainly on a desktop PC, more than twice the figure for laptops (20%). However, this proportion fell dramatically to just 5% in 2025. By contrast, the use of smartphones rose sharply from 10% to 38%, making them the most widely used device. Laptops also became more popular, with the percentage of users increasing from 20% to 35%.

Tablet use grew more modestly, from 15% to 20%. Finally, the proportion of students who did not use any device for homework fell from 10% to only 2%, suggesting that almost all students had access to technology by 2025.`
      },
      {
        id: 'ielts-w2', title: 'Writing Task 2 · Opinion Essay', th: 'เรียงความแสดงความคิดเห็นอย่างน้อย 250 คำ (40 นาที)', kind: 'write',
        prompt: 'Some people believe that teachers should be evaluated mainly on their students\' exam results. To what extent do you agree or disagree? Give reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.',
        min: 250, minutes: 40,
        tips: ['Introduction: paraphrase + บอกจุดยืนชัดเจน (thesis)', 'Body 1–2: แต่ละย่อหน้ามี topic sentence → อธิบาย → ตัวอย่าง', 'ยอมรับอีกฝ่ายบ้าง (Admittedly, … However, …) จะได้คะแนน Task Response', 'Conclusion: สรุปจุดยืนอีกครั้ง ไม่เพิ่มประเด็นใหม่'],
        phrases: ['I partly agree with this view because…', 'Admittedly, … However, …', 'A key reason is that…', 'For instance, / To illustrate,', 'This suggests that…', 'In conclusion, while …, I believe that…'],
        model: `In many countries, schools are under pressure to show measurable results, and some people argue that the fairest way to judge teachers is by looking at their students' exam scores. While I accept that results provide useful information, I disagree that they should be the main basis for evaluating teachers.

Admittedly, exam results are objective and easy to compare. If a teacher's students consistently perform poorly, this may indicate that the teaching methods need to change. Results can also help school leaders identify which teachers might benefit from extra training or support.

However, relying mainly on exam scores ignores the many factors outside a teacher's control. Students from disadvantaged backgrounds often start the year far behind their peers, so a teacher who helps them make great progress may still have lower results than a colleague teaching high achievers. For example, in many rural Thai schools, students may lack internet access or support at home, yet their teachers work extremely hard.

Furthermore, good teaching involves much more than exam preparation. Teachers develop students' confidence, creativity and social skills, and they often support students' wellbeing. If teachers are judged only on test scores, they may "teach to the test" and neglect these important areas.

In conclusion, although exam results should be one part of teacher evaluation, I believe a fairer system would combine them with classroom observations, evidence of student progress and feedback from colleagues and students.`
      }
    ]
  },

  /* ═══════════════════════════ TOEFL ═══════════════════════════ */
  toefl: {
    name: 'TOEFL iBT (รูปแบบใหม่ ม.ค. 2026)', short: 'TOEFL', b2: '72 – 94 (สเกลเดิม)',
    about: 'ETS ปรับรูปแบบ TOEFL iBT ตั้งแต่ 21 ม.ค. 2026 ข้อสอบสั้นลง มีงานแบบใหม่ เช่น Complete the Words, Build a Sentence, Listen & Repeat และ Take an Interview (ตรวจรายละเอียดล่าสุดที่ ets.org)',
    format: [
      ['Reading', 'Complete the Words · Daily Life · Academic', ''],
      ['Listening', 'Choose a Response · Conversation · Academic Talk', ''],
      ['Writing', 'Build a Sentence · Email · Academic Discussion', ''],
      ['Speaking', 'Listen & Repeat · Take an Interview', '~8 นาที']
    ],
    tips: [
      'Complete the Words: เติมตัวอักษรที่หายไปครึ่งหลังของคำ — ฝึกสะกดคำศัพท์ที่ใช้บ่อย',
      'Speaking ไม่มีเวลาเตรียม: เริ่มตอบทันทีด้วยประโยคหลัก แล้วให้เหตุผล + ตัวอย่าง',
      'Listen & Repeat: ฟังเป็นกลุ่มคำ (chunk) ไม่ใช่ทีละคำ จะจำประโยคยาวได้ดีขึ้น',
      'Academic Discussion: อ้างถึงความเห็นของเพื่อนในกระทู้ แล้วเพิ่มมุมมองใหม่ของตัวเอง'
    ],
    sets: [
      {
        id: 'toefl-ctw', title: 'Reading · Complete the Words', th: 'เติมตัวอักษรที่หายไปให้เป็นคำที่ถูกต้อง', kind: 'cloze',
        intro: 'พิมพ์ตัวอักษรที่หายไปเท่านั้น (จำนวนขีด = จำนวนตัวอักษร)',
        text: 'Teachers play an important role in every society. They not only share know[ledge] but al[so] help stu[dents] develop soc[ial] skills. Ma[ny] researchers bel[ieve] that a go[od] teacher ca[n] change a chi[ld]\'s future. Fo[r] this rea[son], governments sho[uld] invest more in tea[cher] training.'
      },
      {
        id: 'toefl-daily', title: 'Reading · Read in Daily Life', th: 'อ่านประกาศ/ข้อความในชีวิตประจำวัน', kind: 'mcq',
        passage: `NOTICE TO ALL STUDENTS

The university library will close early, at 6 p.m., this Friday because of electrical maintenance. Online resources will remain available as usual.

Books due on Friday may be returned on Monday without a late fee. Study rooms booked for Friday evening have been automatically cancelled; please rebook through the library website.`,
        qs: [
          { q: 'Why will the library close early?', o: ['Because of maintenance work', 'Because of a holiday', 'Because of a staff meeting', 'Because of an exam'], a: 0, e: '"because of electrical maintenance"' },
          { q: 'What can students do with books due on Friday?', o: ['Return them on Monday without a penalty', 'Return them online', 'Keep them for another month', 'Pay a reduced late fee'], a: 0, e: '"may be returned on Monday without a late fee"' },
          { q: 'What should students with a Friday evening room booking do?', o: ['Make a new booking online', 'Go to the library on Friday', 'Call the librarian', 'Nothing — the booking is unchanged'], a: 0, e: '"please rebook through the library website"' }
        ]
      },
      {
        id: 'toefl-acad', title: 'Reading · Academic Passage', th: 'บทความวิชาการ 4 ข้อ', kind: 'mcq',
        passage: `The Testing Effect

Many students prepare for exams by rereading their notes. However, cognitive scientists have found that a different strategy is often far more effective: testing yourself. This finding, known as the testing effect or retrieval practice, shows that the act of recalling information strengthens memory more than simply reviewing it.

In one well-known type of experiment, students read a short text and were then divided into two groups. One group reread the text several times, while the other group read it once and then tried to write down everything they could remember. When tested a week later, the second group remembered significantly more, even though they had spent less time looking at the material.

Researchers believe that retrieval works because it forces the brain to reconstruct knowledge, making it easier to access in the future. Retrieval practice can also reveal gaps in understanding, allowing learners to focus their efforts. For teachers, the implication is clear: frequent low-stakes quizzes may be one of the simplest ways to improve long-term learning.`,
        qs: [
          { q: 'What is the main idea of the passage?', o: ['Testing yourself improves memory more than rereading', 'Rereading notes is the best way to prepare', 'Exams cause stress for most students', 'Short texts are easier to remember'], a: 0, e: 'ย่อหน้าแรก: testing yourself is far more effective' },
          { q: 'In the experiment, what did the second group do?', o: ['Read the text once and then recalled it', 'Reread the text several times', 'Took notes while reading', 'Studied for a longer time'], a: 0, e: '"read it once and then tried to write down everything they could remember"' },
          { q: 'The word "reconstruct" in the passage is closest in meaning to', o: ['rebuild', 'remove', 'repeat', 'reduce'], a: 0, e: 're + construct = สร้างขึ้นใหม่' },
          { q: 'What does the author suggest teachers should do?', o: ['Give frequent low-stakes quizzes', 'Give fewer tests', 'Ask students to reread more', 'Make exams more difficult'], a: 0, e: '"frequent low-stakes quizzes may be one of the simplest ways…"' }
        ]
      },
      {
        id: 'toefl-resp', title: 'Listening · Choose a Response', th: 'ฟังประโยคแล้วเลือกคำตอบที่เหมาะสม', kind: 'mcq',
        qs: [
          { say: 1, hideQ: 1, q: 'Do you know if the professor has posted the grades yet?', o: ['I checked this morning, but they\'re not up yet.', 'She teaches biology.', 'Yes, I posted the letter.', 'The grade was very high last year.'], a: 0, e: 'ตอบเรื่องเกรดที่ยังไม่ประกาศ' },
          { say: 1, hideQ: 1, q: 'Would you mind if I borrowed your notes from Tuesday\'s lecture?', o: ['Sure, I\'ll bring them tomorrow.', 'I didn\'t mind the lecture.', 'Tuesday is fine for the exam.', 'It was a very long lecture.'], a: 0, e: 'ตอบรับคำขอ' },
          { say: 1, hideQ: 1, q: 'Why didn\'t you come to the study group last night?', o: ['I had to work an extra shift.', 'We study in the library.', 'Yes, it was last night.', 'The group has six members.'], a: 0, e: 'Why → เหตุผล' },
          { say: 1, hideQ: 1, q: 'Which dormitory are you living in this semester?', o: ['I\'m in West Hall again.', 'It\'s a long semester.', 'Living costs are high.', 'I\'ll see you there.'], a: 0, e: 'Which dormitory → ชื่อหอพัก' },
          { say: 1, hideQ: 1, q: 'The bookstore is closed for inventory today.', o: ['Oh no, I needed to buy a textbook.', 'I\'ll close the door.', 'Yes, the book was good.', 'It sells many stores.'], a: 0, e: 'ประโยคบอกเล่า → ตอบสนองอย่างเป็นธรรมชาติ' }
        ]
      },
      {
        id: 'toefl-talk', title: 'Listening · Academic Talk', th: 'ฟังบรรยายสั้นแล้วตอบ 3 ข้อ', kind: 'mcq',
        script: `Today I want to talk about why some animals migrate. Migration is a seasonal movement from one region to another, usually to find food or better conditions for raising young. Take the Arctic tern, for example. This small seabird travels from the Arctic to the Antarctic and back every year. That's a round trip of around seventy thousand kilometres, the longest known migration of any animal. So why such a long journey? Well, by following the summer in both hemispheres, the tern enjoys more daylight than almost any other creature, which gives it more time to hunt for food. Of course, migration is also risky. Birds can be blown off course by storms, and many young birds don't survive their first journey.`,
        qs: [
          { q: 'What is the talk mainly about?', o: ['Reasons for animal migration, using one example', 'The weather in the Arctic', 'How seabirds build nests', 'Why animals sleep in winter'], a: 0, e: '"I want to talk about why some animals migrate… Take the Arctic tern, for example."' },
          { q: 'According to the speaker, why does the Arctic tern travel so far?', o: ['To have more daylight for finding food', 'To escape from predators', 'To find a partner', 'To avoid storms'], a: 0, e: '"enjoys more daylight… more time to hunt for food"' },
          { q: 'What risk of migration does the speaker mention?', o: ['Birds can be blown off course by storms', 'Birds forget the route', 'Food is too expensive', 'The journey is too short'], a: 0, e: '"Birds can be blown off course by storms"' }
        ]
      },
      {
        id: 'toefl-build', title: 'Writing · Build a Sentence', th: 'เรียงกลุ่มคำให้เป็นประโยคตอบกลับที่ถูกต้อง', kind: 'build',
        items: [
          { ctx: 'Did you finish the assignment?', parts: ['I', 'still need to', 'check', 'the references.'] },
          { ctx: 'Where did you study last night?', parts: ['I studied', 'in the library', 'until', 'it closed.'] },
          { ctx: 'What did the professor say about the exam?', parts: ['She said', 'it would', 'cover', 'the first five chapters.'] },
          { ctx: 'Can you help me with my presentation?', parts: ['I would be', 'happy', 'to help you', 'after class.'] },
          { ctx: 'Why were you late this morning?', parts: ['The bus', 'was delayed', 'because of', 'the heavy rain.'] },
          { ctx: 'Have you decided which course to take?', parts: ['I am', 'thinking of', 'taking', 'the history course.'] }
        ]
      },
      {
        id: 'toefl-email', title: 'Writing · Write an Email', th: 'เขียนอีเมลตามสถานการณ์ (7 นาที)', kind: 'write',
        prompt: 'You recently attended a one-day workshop on using technology in the classroom. Write an email to the organiser, Dr Lee. In your email: thank her for the workshop, explain which part was most useful for you and why, and ask a question about a follow-up session.',
        min: 100, minutes: 7,
        tips: ['ทำครบทั้ง 3 ประเด็นที่โจทย์สั่ง', 'ระดับภาษาสุภาพ เหมาะกับการเขียนถึงผู้จัดงาน', 'ยาว ~100–150 คำ'],
        phrases: ['I am writing to thank you for…', 'The part I found most useful was…', 'I was wondering whether…', 'I look forward to hearing from you.'],
        model: `Dear Dr Lee,

I am writing to thank you for the excellent workshop on classroom technology last Saturday. It was well organised, and I learned a great deal.

The part I found most useful was the session on creating interactive quizzes. My students often lose concentration during revision lessons, and I think quizzes like the ones you demonstrated will make practice much more engaging. In fact, I tried one with my Grade 9 class on Monday, and they loved it.

I was wondering whether you are planning a follow-up session later this year. If so, would it be possible to include more ideas for assessing students' speaking skills online?

Thank you again for a very inspiring day. I look forward to hearing from you.

Best regards,
Suda Rattanakul`
      },
      {
        id: 'toefl-disc', title: 'Writing · Academic Discussion', th: 'เขียนตอบกระทู้วิชาการ ≥ 100 คำ (10 นาที)', kind: 'write',
        prompt: 'Your professor is teaching a class on education. Write a post responding to the professor\'s question. In your response, express and support your opinion and make a contribution to the discussion.',
        posts: [
          { who: 'Professor Adams', t: 'This week we are discussing technology in education. Some people think that online courses will eventually replace traditional classrooms. Others believe that face-to-face teaching will always be necessary. What is your opinion, and why?' },
          { who: 'Kenji', t: 'I think online courses are the future. They are cheaper, and students can learn at their own pace. Universities could reach far more people this way.' },
          { who: 'Maria', t: 'I disagree. Students need teachers to motivate them, and many skills, like teamwork and communication, are very hard to learn online.' }
        ],
        min: 100, minutes: 10,
        tips: ['ประโยคแรกบอกจุดยืน และอ้างถึงเพื่อน (I agree with Maria that…)', 'เพิ่มเหตุผลใหม่ที่เพื่อนยังไม่ได้พูด', 'ยกตัวอย่างสั้น ๆ จากประสบการณ์'],
        phrases: ['I can see Kenji\'s point, but…', 'I agree with Maria that…', 'Another important factor is…', 'From my own experience,…'],
        model: `I can see Kenji's point that online courses are cheaper and more flexible, but I agree with Maria that they are unlikely to replace traditional classrooms completely. In my view, the best solution is a combination of both.

One factor that has not been mentioned yet is equality. Not every student has a quiet place to study or a reliable internet connection at home. For these learners, a school building provides much more than lessons; it offers a safe and supportive environment.

From my own experience as a teacher, online lessons worked well for delivering information, but students lost motivation after a few weeks without face-to-face contact. Therefore, I believe universities should use online tools to support, rather than replace, classroom teaching.`
      }
    ]
  },

  /* ═══════════════════════════ EF SET ═══════════════════════════ */
  efset: {
    name: 'EF SET (English Test)', short: 'EF SET', b2: '51 – 60',
    about: 'ข้อสอบออนไลน์ฟรี วัดการอ่านและการฟังแบบ adaptive (ข้อสอบปรับความยากตามคำตอบ) คะแนน 0–100 เทียบ CEFR — ก่อนใช้ยื่น ก.ค.ศ. ต้องตรวจว่าหน่วยงานยอมรับหรือไม่',
    format: [
      ['Reading', 'Adaptive', ''],
      ['Listening', 'Adaptive', ''],
      ['รวม', 'EF SET 50', '~50 นาที']
    ],
    tips: [
      'ข้อสอบ adaptive: ถ้าข้อถัดไปยากขึ้น แปลว่าข้อก่อนหน้าคุณตอบถูก — อย่าตกใจ',
      'ไม่มีการหักคะแนน ตอบให้ครบทุกข้อ',
      'ใช้หูฟังและอยู่ในที่เงียบสำหรับ Listening',
      'ฝึกด้วยข้อสอบจำลองหลักของคอร์ส (อ่าน+ฟัง) ควบคู่กับ Adaptive Challenge ด้านล่าง'
    ],
    sets: [
      {
        id: 'efset-adapt', title: 'Adaptive Challenge', th: '12 ข้อ ความยากปรับตามคำตอบ (B1 → C1)', kind: 'adaptive', n: 12,
        bank: {
          B1: [
            { q: 'She ___ to the gym three times a week.', o: ['goes', 'go', 'going', 'is go'], a: 0, e: 'Present Simple, ประธานเอกพจน์ → goes' },
            { q: 'I\'m looking forward ___ you soon.', o: ['to seeing', 'to see', 'seeing', 'see'], a: 0, e: 'look forward to + V-ing' },
            { q: 'If it rains tomorrow, we ___ the picnic.', o: ['will cancel', 'cancel', 'would cancel', 'cancelled'], a: 0, e: 'First conditional' },
            { q: 'He has lived here ___ ten years.', o: ['for', 'since', 'during', 'from'], a: 0, e: 'for + ช่วงเวลา' },
            { q: 'This is the ___ book I have ever read.', o: ['most interesting', 'more interesting', 'interestingest', 'most interested'], a: 0, e: 'ขั้นสูงสุด the most + adj.' },
            { q: 'Could you tell me where the station ___?', o: ['is', 'is it', 'does', 'be'], a: 0, e: 'Indirect question ไม่กลับประธาน' },
            { q: 'We were tired, ___ we kept walking.', o: ['but', 'so', 'because', 'or'], a: 0, e: 'ความขัดแย้ง → but' },
            { q: 'The meeting was ___ because the manager was ill.', o: ['cancelled', 'cancelling', 'cancel', 'to cancel'], a: 0, e: 'Passive: was + V3' }
          ],
          B2: [
            { q: 'By next June, I ___ here for ten years.', o: ['will have worked', 'will work', 'am working', 'have worked'], a: 0, e: 'Future Perfect: by + เวลาในอนาคต' },
            { q: 'I\'d rather you ___ smoke in here.', o: ['didn\'t', 'don\'t', 'not', 'won\'t'], a: 0, e: 'would rather + ประธาน + V2' },
            { q: 'It\'s high time we ___ a decision.', o: ['made', 'make', 'will make', 'have made'], a: 0, e: 'It\'s high time + ประธาน + V2' },
            { q: 'She denied ___ the money.', o: ['taking', 'to take', 'take', 'taken'], a: 0, e: 'deny + V-ing' },
            { q: 'Hardly had we arrived ___ it started to rain.', o: ['when', 'than', 'then', 'that'], a: 0, e: 'Hardly … when' },
            { q: 'The project, ___ was completed last month, received an award.', o: ['which', 'that', 'what', 'who'], a: 0, e: 'Non-defining → which' },
            { q: 'You\'d better ___ your teacher before you leave.', o: ['tell', 'to tell', 'telling', 'told'], a: 0, e: 'had better + V1' },
            { q: 'He must ___ the train; he isn\'t here yet.', o: ['have missed', 'missed', 'to miss', 'be missed'], a: 0, e: 'must have V3 = คาดเดาอดีต' }
          ],
          C1: [
            { q: 'Not until the results were published ___ how serious the problem was.', o: ['did we realise', 'we realised', 'we did realise', 'realised we'], a: 0, e: 'Not until … → inversion' },
            { q: 'Had I known about the traffic, I ___ earlier.', o: ['would have left', 'will leave', 'would leave', 'had left'], a: 0, e: 'Inverted third conditional' },
            { q: 'The new policy is ___ to cause controversy among staff.', o: ['bound', 'tend', 'doubtful', 'reluctant'], a: 0, e: 'be bound to = แน่นอนว่าจะ' },
            { q: 'She is widely ___ as one of the best teachers in the region.', o: ['regarded', 'thought', 'believed', 'supposed'], a: 0, e: 'be regarded as' },
            { q: '___ his lack of experience, he was offered the position.', o: ['Notwithstanding', 'Nevertheless', 'Although', 'Whereas'], a: 0, e: 'Notwithstanding + noun = despite' },
            { q: 'The success of the project ___ on the support of local parents.', o: ['hinges', 'leans', 'weighs', 'bases'], a: 0, e: 'hinge on = ขึ้นอยู่กับ' },
            { q: 'Little ___ that the inspection would take place the following day.', o: ['did they know', 'they knew', 'knew they', 'they did know'], a: 0, e: 'Little + inversion' },
            { q: 'The report highlights the need for ___ investment in teacher training.', o: ['sustained', 'sustaining', 'sustain', 'sustains'], a: 0, e: 'sustained investment = การลงทุนต่อเนื่อง' }
          ]
        }
      }
    ]
  }
};
