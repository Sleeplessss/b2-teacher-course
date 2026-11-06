/* B2 Ready for Teachers — course content
   q: question, o: options (o[a] is correct; options are shuffled at runtime), e: Thai explanation */
window.COURSE = {
  units: [
    /* ───────────────────────── UNIT 1 ───────────────────────── */
    {
      id: 'u1', no: 1,
      title: 'Classroom Life', th: 'ชีวิตในห้องเรียน',
      focus: 'Present Perfect vs Past Simple',
      vocab: [
        { w: 'engage', p: 'v.', t: 'ดึงให้มีส่วนร่วม / ดึงความสนใจ', ex: 'Group tasks help engage quieter students.' },
        { w: 'curriculum', p: 'n.', t: 'หลักสูตร', ex: 'The new curriculum focuses on active learning.' },
        { w: 'differentiate', p: 'v.', t: 'จัดการเรียนรู้ให้เหมาะกับผู้เรียนแต่ละระดับ', ex: 'Good teachers differentiate tasks for mixed-ability classes.' },
        { w: 'objective', p: 'n.', t: 'จุดประสงค์การเรียนรู้', ex: 'I always share the lesson objective at the start.' },
        { w: 'disruptive', p: 'adj.', t: 'ที่ก่อความวุ่นวาย', ex: 'Disruptive behaviour often means that a student is bored.' },
        { w: 'encourage', p: 'v.', t: 'ส่งเสริม / ให้กำลังใจ', ex: 'We encourage students to ask questions.' },
        { w: 'attendance', p: 'n.', t: 'การเข้าเรียน', ex: 'Attendance has improved since we started the breakfast club.' },
        { w: 'routine', p: 'n.', t: 'กิจวัตร / ขั้นตอนที่ทำเป็นประจำ', ex: 'A clear routine saves time at the start of each lesson.' }
      ],
      grammar: {
        title: 'Present Perfect vs Past Simple',
        intro: 'ระดับ B2 ต้องแยกให้ออกว่าเหตุการณ์ "จบไปแล้วในอดีตที่ระบุเวลา" หรือ "เชื่อมโยงกับปัจจุบัน" ข้อสอบชอบหลอกด้วยคำบอกเวลา',
        rules: [
          { h: 'Past Simple — จบแล้ว ระบุเวลาในอดีต', f: 'S + V2  (yesterday, last year, in 2020, ago)', ex: ['I taught at a primary school in 2018.', 'We introduced the new curriculum last semester.'] },
          { h: 'Present Perfect — มีผลถึงปัจจุบัน / ประสบการณ์', f: 'S + have/has + V3  (since, for, already, yet, ever, never)', ex: ['I have worked here since 2019.', 'Have you ever taken an online course?'] },
          { h: 'Present Perfect Continuous — เน้นความต่อเนื่อง', f: 'S + have/has been + V-ing', ex: ['The students are tired because they have been studying all morning.'] }
        ],
        tips: ['ถ้ามีคำบอกเวลาในอดีตที่ชัดเจน (last week, ago, in 2020) → ใช้ Past Simple เท่านั้น', 'since + จุดเริ่มต้นของเวลา (since 2019) / for + ช่วงเวลา (for five years)', 'ผิดบ่อย: ✗ I have visited Chiang Mai last year. → ✓ I visited Chiang Mai last year.']
      },
      reading: {
        title: 'The Five-Minute Start',
        text: `Many teachers lose the first ten minutes of a lesson. Students arrive late, bags are unpacked slowly, and the noise level rises before any learning has begun. At Ban Nong Khai School, a group of teachers decided to try a simple solution: a "five-minute start". As soon as students enter the room, they find a short task on the board, such as a vocabulary puzzle or a question about the previous lesson. They work on it silently while the teacher takes attendance.

Since the routine was introduced last year, teachers have noticed fewer disruptive moments at the beginning of lessons. "The students know exactly what to do, so I don't need to raise my voice," explains Ms Pranee, who teaches science. However, she admits that the tasks must be carefully planned. If they are too difficult, weaker students give up; if they are too easy, students finish in a minute and start chatting. The key, she says, is to differentiate: she now prepares two versions of each task.`,
        qs: [
          { q: 'What problem were the teachers trying to solve?', o: ['Time being wasted at the start of lessons', 'Students failing their science exams', 'A lack of vocabulary materials', 'Teachers arriving late to class'], a: 0, e: 'ย่อหน้าแรก: "Many teachers lose the first ten minutes of a lesson."' },
          { q: 'What does the teacher do while students work on the task?', o: ['Takes attendance', 'Writes the next task', 'Talks to weaker students', 'Marks homework'], a: 0, e: '"They work on it silently while the teacher takes attendance."' },
          { q: 'Why does Ms Pranee prepare two versions of each task?', o: ['To suit students of different abilities', 'To use them in two different classes', 'Because the first version is often wrong', 'To give students homework'], a: 0, e: 'งานยากไปเด็กอ่อนท้อ ง่ายไปเด็กเก่งคุย จึงต้อง differentiate' }
        ]
      },
      listening: {
        title: 'A Colleague Asks About Your New Class',
        script: `A: How was your first week with the new class?
B: Better than I expected, actually. I've already learned all their names, which helps a lot.
A: That's great. Have you had any problems with behaviour?
B: Only on Monday. Two boys at the back kept talking, so I moved them to the front. Since then, they've been fine.
A: Smart move. Are you using the group work activities we discussed?
B: Not yet. I want to establish the routine first. I'll probably start next week.`,
        qs: [
          { q: 'What did speaker B do about the two boys?', o: ['Moved them to the front', 'Sent them to the head teacher', 'Called their parents', 'Put them in a group'], a: 0, e: '"so I moved them to the front"' },
          { q: 'When will speaker B probably start group work?', o: ['Next week', 'Tomorrow', 'On Monday', 'Next semester'], a: 0, e: '"I\'ll probably start next week."' }
        ]
      },
      writing: {
        prompt: 'A new colleague is starting at your school next week. Write an email (120–150 words) giving advice about managing a class in the first week.',
        tips: ['ขึ้นต้น/ลงท้ายอีเมลให้ถูกต้อง (Hi … / Best wishes,)', 'ให้คำแนะนำ 2–3 ข้อ พร้อมเหตุผล', 'ใช้ Present Perfect อย่างน้อย 1 ครั้ง เช่น I have found that…', 'ใช้คำเชื่อม: First of all, Also, Finally'],
        model: `Hi Nok,

Welcome to the team! I'm sure you'll enjoy working here. Since you asked for advice about your first week, here are a few ideas that have worked for me.

First of all, set up a clear routine from day one. I have found that students behave much better when they know exactly what to do as soon as they enter the room. Also, try to learn their names quickly – it shows you care and makes it easier to manage the class.

If a student is disruptive, stay calm and speak to them privately after the lesson rather than in front of everyone. Finally, don't try to do everything at once. Focus on building good relationships first; group work and projects can wait a week or two.

Let me know if you need anything!

Best wishes,
Dao`
      },
      quiz: [
        { q: 'I ___ at this school since 2019.', o: ['have worked', 'worked', 'am working', 'work'], a: 0, e: 'since 2019 → Present Perfect' },
        { q: 'We ___ the new curriculum last semester.', o: ['introduced', 'have introduced', 'introduce', 'have been introducing'], a: 0, e: 'last semester = เวลาในอดีตที่ระบุ → Past Simple' },
        { q: '___ you ever ___ an online course?', o: ['Have / taken', 'Did / took', 'Do / take', 'Has / took'], a: 0, e: 'ever = ประสบการณ์ → Have you ever + V3' },
        { q: 'The students look exhausted. They ___ for the exam all morning.', o: ['have been studying', 'studied', 'study', 'are studied'], a: 0, e: 'เน้นความต่อเนื่องที่ส่งผลถึงตอนนี้ → Present Perfect Continuous' },
        { q: 'A good teacher should ___ tasks for students with different abilities.', o: ['differentiate', 'disrupt', 'attend', 'object'], a: 0, e: 'differentiate = ปรับงานให้เหมาะกับผู้เรียนแต่ละระดับ' },
        { q: 'Students who are bored may become ___.', o: ['disruptive', 'encouraged', 'attended', 'curriculum'], a: 0, e: 'disruptive (adj.) = ก่อความวุ่นวาย' }
      ]
    },

    /* ───────────────────────── UNIT 2 ───────────────────────── */
    {
      id: 'u2', no: 2,
      title: 'Talking to Parents', th: 'การสื่อสารกับผู้ปกครอง',
      focus: 'Polite language & Modals',
      vocab: [
        { w: 'concern', p: 'n.', t: 'ความกังวล / เรื่องที่น่าเป็นห่วง', ex: 'Thank you for raising your concern with me.' },
        { w: 'appreciate', p: 'v.', t: 'ซาบซึ้ง / ขอบคุณ', ex: 'I would appreciate it if you could sign the form.' },
        { w: 'progress', p: 'n.', t: 'ความก้าวหน้า', ex: 'Her progress in reading has been impressive.' },
        { w: 'arrange', p: 'v.', t: 'จัดเตรียม / นัดหมาย', ex: 'Could we arrange a meeting next week?' },
        { w: 'support', p: 'n./v.', t: 'การสนับสนุน / สนับสนุน', ex: 'We really need your support at home.' },
        { w: 'behaviour', p: 'n.', t: 'พฤติกรรม', ex: 'His behaviour in class has improved a lot.' },
        { w: 'regarding', p: 'prep.', t: 'เกี่ยวกับ', ex: 'I am writing regarding the school trip.' },
        { w: 'inform', p: 'v.', t: 'แจ้งให้ทราบ', ex: 'Please inform us if your child will be absent.' }
      ],
      grammar: {
        title: 'Polite Requests & Modals',
        intro: 'ภาษาสุภาพเป็นหัวใจของการสื่อสารแบบมืออาชีพ ข้อสอบ B2 มักถามว่า "ประโยคไหนสุภาพที่สุด" หรือให้เติมโครงสร้างที่ถูกต้อง',
        rules: [
          { h: 'ขอร้องอย่างสุภาพ', f: 'Could you + V1…? / Would you mind + V-ing…?', ex: ['Could you sign the form, please?', 'Would you mind checking her homework diary?'] },
          { h: 'สุภาพมากขึ้น (ทางการ)', f: 'I would appreciate it if you could + V1', ex: ['I would appreciate it if you could reply by Friday.'] },
          { h: 'ให้คำแนะนำ / ความเป็นไปได้', f: 'should / ought to (แนะนำ)  ·  might / could (อาจจะ)', ex: ['You should talk to the school counsellor.', 'He might come to school after lunch.'] }
        ],
        tips: ['Would you mind ตามด้วย V-ing เสมอ: ✗ Would you mind to check → ✓ Would you mind checking', 'ตอบ "Would you mind…?" ว่ายินดี = "Not at all." (ไม่รังเกียจเลย)', 'อีเมลทางการ: I am writing regarding / with regard to …']
      },
      reading: {
        title: 'An Email to Parents',
        text: `Dear Mr and Mrs Somchai,

I am writing regarding Nida's progress in English this term. First of all, I would like to say how much I appreciate the support you have given her at home. Her reading has improved noticeably, and she now takes part in class discussions with much more confidence.

However, I have one small concern. Nida has not handed in three of her last five homework tasks. When I asked her about it, she said that she often forgets because she has extra classes in the evening. I completely understand that her schedule is busy, but homework is an important part of her assessment.

Would you mind checking her homework diary once a week? Alternatively, we could arrange a short meeting to find a solution together. I am available on Tuesday and Thursday afternoons.

Kind regards,
Ms Kanya Srisuk
English Department`,
        qs: [
          { q: 'What is the main purpose of the email?', o: ['To report progress and raise a concern about homework', 'To complain about Nida\'s behaviour', 'To invite parents to a school event', 'To explain a new assessment policy'], a: 0, e: 'ชมความก้าวหน้า + แจ้งเรื่องการบ้านที่ไม่ส่ง' },
          { q: 'Why does Nida often miss her homework?', o: ['She forgets because of evening extra classes', 'She finds it too difficult', 'She does not have a homework diary', 'She is often absent from school'], a: 0, e: '"she often forgets because she has extra classes in the evening"' },
          { q: 'What does the teacher suggest?', o: ['Checking the homework diary or meeting', 'Stopping her extra classes', 'Giving Nida less homework', 'Moving Nida to another class'], a: 0, e: '"Would you mind checking her homework diary… Alternatively, we could arrange a short meeting"' }
        ]
      },
      listening: {
        title: 'A Phone Call from a Parent',
        script: `A: Good afternoon, this is Mrs Malee, Ton's mother. I'm calling to inform you that Ton will be absent tomorrow.
B: Thank you for letting me know. Is he unwell?
A: No, he has a dental appointment in the morning. He might come to school after lunch, but I'm not sure.
B: That's fine. Could you ask him to check the class website? I'll upload the worksheet there.
A: Of course. Thank you so much.`,
        qs: [
          { q: 'Why will Ton be absent?', o: ['He has a dental appointment', 'He is unwell', 'He has a family trip', 'He has an exam elsewhere'], a: 0, e: '"he has a dental appointment in the morning"' },
          { q: 'What does the teacher ask Ton to do?', o: ['Check the class website for the worksheet', 'Come to school after lunch', 'Call the teacher', 'Bring a letter from the dentist'], a: 0, e: '"Could you ask him to check the class website? I\'ll upload the worksheet there."' }
        ]
      },
      writing: {
        prompt: 'Write a message (120–150 words) to a parent inviting them to a meeting to discuss their child\'s progress. Be polite and suggest two possible times.',
        tips: ['บอกจุดประสงค์ตั้งแต่ประโยคแรก (I am writing to…)', 'เริ่มด้วยเรื่องบวกก่อนเรื่องที่กังวล', 'ใช้ภาษาสุภาพ: Would you mind…, I would appreciate it if…', 'เสนอวัน/เวลาชัดเจน และปิดท้ายอย่างเป็นมิตร'],
        model: `Dear Mrs Wongsa,

I am writing to invite you to a short meeting to discuss Krit's progress this term.

First of all, I am pleased to say that Krit has become much more confident when speaking English, and he is always polite and helpful in class. However, I have noticed that his test scores have dropped recently, and I would like to work with you to find out how we can support him.

Would you be available on Wednesday at 3.30 p.m. or Friday at 4.00 p.m.? The meeting should take about twenty minutes. If neither time is convenient, I would appreciate it if you could suggest another day.

Thank you very much for your support. I look forward to meeting you.

Kind regards,
Mr Anan
English Teacher, Grade 8`
      },
      quiz: [
        { q: '___ you mind closing the door, please?', o: ['Would', 'Could', 'Should', 'Will'], a: 0, e: 'โครงสร้างตายตัว: Would you mind + V-ing' },
        { q: 'I would appreciate it if you ___ reply by Friday.', o: ['could', 'can', 'will be', 'are'], a: 0, e: 'I would appreciate it if you could + V1' },
        { q: 'I\'m writing ___ your son\'s behaviour in class.', o: ['regarding', 'regarded', 'regards', 'regardless'], a: 0, e: 'regarding = เกี่ยวกับ (preposition)' },
        { q: 'You ___ talk to the school counsellor. She is very helpful.', o: ['should', 'mustn\'t', 'needn\'t', 'couldn\'t'], a: 0, e: 'ให้คำแนะนำ → should' },
        { q: 'Please ___ us if your child has any allergies.', o: ['inform', 'concern', 'arrange', 'appreciate'], a: 0, e: 'inform somebody = แจ้งให้ทราบ' },
        { q: 'Which sentence is the MOST polite?', o: ['Could you possibly send me the form by Monday?', 'Send me the form by Monday.', 'You must send me the form by Monday.', 'I want the form on Monday.'], a: 0, e: 'Could you possibly… เป็นการขอร้องที่สุภาพที่สุด' }
      ]
    },

    /* ───────────────────────── UNIT 3 ───────────────────────── */
    {
      id: 'u3', no: 3,
      title: 'Technology in Education', th: 'เทคโนโลยีการศึกษา',
      focus: 'Passive Voice',
      vocab: [
        { w: 'device', p: 'n.', t: 'อุปกรณ์', ex: 'Every student will be given a device.' },
        { w: 'access', p: 'n./v.', t: 'การเข้าถึง / เข้าถึง', ex: 'Students in rural areas often lack internet access.' },
        { w: 'platform', p: 'n.', t: 'แพลตฟอร์ม / ระบบออนไลน์', ex: 'We upload all assignments to the online platform.' },
        { w: 'digital literacy', p: 'n.', t: 'ความรู้เท่าทันดิจิทัล', ex: 'Digital literacy is now part of the curriculum.' },
        { w: 'implement', p: 'v.', t: 'นำไปใช้ / นำไปปฏิบัติ', ex: 'The school will implement the new system next term.' },
        { w: 'distraction', p: 'n.', t: 'สิ่งที่ทำให้ไขว้เขว', ex: 'Phones can be a major distraction in class.' },
        { w: 'interactive', p: 'adj.', t: 'ที่โต้ตอบได้', ex: 'Interactive quizzes make revision more fun.' },
        { w: 'evaluate', p: 'v.', t: 'ประเมิน', ex: 'We need to evaluate the project before we expand it.' }
      ],
      grammar: {
        title: 'Passive Voice',
        intro: 'Passive ใช้เมื่อ "สิ่งที่ถูกกระทำ" สำคัญกว่าผู้กระทำ พบมากในบทอ่านเชิงวิชาการ รายงาน และประกาศ',
        rules: [
          { h: 'โครงสร้างหลัก', f: 'S + be (ผันตาม tense) + V3 (+ by …)', ex: ['The tablets were given to every classroom.', 'The project was funded by a local company.'] },
          { h: 'Passive ใน tense ต่าง ๆ', f: 'is done · was done · has been done · will be done · is being done', ex: ['The results haven\'t been announced yet.', 'The session will be held in the computer room.'] },
          { h: 'Passive กับ modal', f: 'modal + be + V3', ex: ['Projects like this should be evaluated carefully.', 'Phones must be switched off during the exam.'] }
        ],
        tips: ['ใส่ by … เฉพาะเมื่อผู้กระทำสำคัญ', 'กริยาที่ไม่มีกรรม (arrive, happen) ทำเป็น passive ไม่ได้: ✗ The accident was happened', 'It is said / It is believed that… เป็นสำนวนวิชาการที่เจอบ่อยในข้อสอบอ่าน']
      },
      reading: {
        title: 'Tablets in Every Classroom?',
        text: `Three years ago, every classroom in a district in northern Thailand was given a set of tablets. The project was funded by a local technology company, and teachers were trained to use an online learning platform. The aim was to make lessons more interactive and to improve students' digital literacy.

The results have been mixed. In some schools, the devices are used every day for research, quizzes and creative projects. Students say lessons are more enjoyable, and test scores in science have risen slightly. In other schools, however, the tablets are rarely taken out of their boxes. Teachers report that the internet connection is too slow and that students are easily distracted by games.

A recent report suggests that technology alone cannot change learning. It concludes that projects like this should be evaluated carefully and that teachers need ongoing support, not just a single training day, if new tools are to be implemented successfully.`,
        qs: [
          { q: 'Who paid for the project?', o: ['A local technology company', 'The national government', 'The schools themselves', 'Students\' parents'], a: 0, e: '"The project was funded by a local technology company"' },
          { q: 'What problems were reported in some schools?', o: ['Slow internet and students being distracted', 'Broken devices and a lack of teachers', 'Too many tests and quizzes', 'Students refusing to use the tablets'], a: 0, e: '"the internet connection is too slow and… students are easily distracted by games"' },
          { q: 'What is the main conclusion of the report?', o: ['Teachers need ongoing support; technology alone is not enough', 'Tablets should be removed from schools', 'One training day is usually sufficient', 'Science scores improve with any technology'], a: 0, e: '"technology alone cannot change learning… teachers need ongoing support"' }
        ]
      },
      listening: {
        title: 'Staff Announcement',
        script: `Good morning, everyone. This is a quick reminder about next week's training session. The session will be held in the computer room on Wednesday at three thirty. You will be shown how to create interactive quizzes on the new platform. Laptops will be provided, but please bring your login details. The session is expected to last about ninety minutes. If you can't attend, a recording will be shared on the staff website.`,
        qs: [
          { q: 'What will teachers learn in the session?', o: ['How to create interactive quizzes', 'How to repair laptops', 'How to build a staff website', 'How to record lessons'], a: 0, e: '"You will be shown how to create interactive quizzes"' },
          { q: 'What should teachers bring?', o: ['Their login details', 'Their own laptops', 'A recording device', 'Printed quizzes'], a: 0, e: '"Laptops will be provided, but please bring your login details."' }
        ]
      },
      writing: {
        prompt: 'Should students be allowed to use smartphones in class? Write an opinion paragraph (130–160 words) giving reasons and an example.',
        tips: ['ประโยคแรกบอกจุดยืนชัดเจน (In my opinion, …)', 'ให้เหตุผล 2 ข้อ + ตัวอย่าง', 'แทรก passive อย่างน้อย 1 ครั้ง เช่น phones should be used only…', 'ปิดด้วยประโยคสรุป (Overall, …)'],
        model: `In my opinion, smartphones should be allowed in class, but only when they are used for a clear learning purpose. Firstly, phones give students instant access to information. For example, in my English lessons, students use online dictionaries to check pronunciation, which is much faster than using a paper dictionary. Secondly, many interactive learning apps can make practice more engaging, especially for students who are shy about speaking in front of others.

However, phones can easily become a distraction. Students may check social media or play games instead of working. For this reason, clear rules must be agreed at the start of the year. Phones should be kept face down on the desk until the teacher asks students to use them, and anyone who breaks the rule should lose the privilege for a week.

Overall, I believe that if phones are managed carefully, the benefits are greater than the risks.`
      },
      quiz: [
        { q: 'The new platform ___ by all teachers next term.', o: ['will be used', 'will use', 'is using', 'used'], a: 0, e: 'อนาคต + passive → will be + V3' },
        { q: 'These tablets ___ in China.', o: ['were made', 'made', 'were make', 'have make'], a: 0, e: 'แท็บเล็ตถูกผลิต → were made' },
        { q: 'The exam results ___ yet.', o: ['haven\'t been announced', 'haven\'t announced', 'didn\'t announce', 'aren\'t announce'], a: 0, e: 'yet → Present Perfect passive: have(n\'t) been + V3' },
        { q: 'Students\' work ___ online every week.', o: ['is checked', 'checks', 'is checking', 'checked by'], a: 0, e: 'ทำเป็นประจำ + ถูกกระทำ → is checked' },
        { q: 'Social media can be a big ___ for students during homework time.', o: ['distraction', 'platform', 'access', 'device'], a: 0, e: 'distraction = สิ่งที่ทำให้ไขว้เขว' },
        { q: 'Before buying new software, we should ___ whether it really helps learning.', o: ['evaluate', 'distract', 'access', 'provide'], a: 0, e: 'evaluate = ประเมินว่าได้ผลจริงไหม' }
      ]
    },

    /* ───────────────────────── UNIT 4 ───────────────────────── */
    {
      id: 'u4', no: 4,
      title: 'Assessment & Feedback', th: 'การวัดผลและการให้ข้อมูลป้อนกลับ',
      focus: 'Conditionals (0, 1, 2, 3)',
      vocab: [
        { w: 'assessment', p: 'n.', t: 'การประเมิน / การวัดผล', ex: 'Our assessment includes projects as well as tests.' },
        { w: 'formative', p: 'adj.', t: '(การประเมิน) ระหว่างเรียน', ex: 'Formative assessment helps students improve during the unit.' },
        { w: 'criteria', p: 'n. (pl.)', t: 'เกณฑ์ (เอกพจน์ = criterion)', ex: 'Students should know the criteria before they start.' },
        { w: 'feedback', p: 'n.', t: 'ข้อมูลป้อนกลับ / คำติชม', ex: 'Specific feedback is more useful than a grade alone.' },
        { w: 'rubric', p: 'n.', t: 'เกณฑ์การให้คะแนน (รูบริก)', ex: 'The rubric shows how each essay will be marked.' },
        { w: 'achieve', p: 'v.', t: 'บรรลุ / ทำได้สำเร็จ', ex: 'Most students achieved the target score.' },
        { w: 'improve', p: 'v.', t: 'พัฒนา / ปรับปรุง', ex: 'How can I improve my writing?' },
        { w: 'reliable', p: 'adj.', t: 'น่าเชื่อถือ', ex: 'A single test is not always a reliable measure of ability.' }
      ],
      grammar: {
        title: 'Conditionals',
        intro: 'If-clause 4 แบบเป็นหัวข้อที่ออกสอบแทบทุกชุดในระดับ B2 โดยเฉพาะแบบที่ 2 และ 3',
        rules: [
          { h: 'Zero & First — ความจริง / เป็นไปได้จริง', f: 'If + Present, Present  ·  If + Present, will + V1', ex: ['If students get clear feedback, they improve faster.', 'If I give them a practice test, will you help me mark it?'] },
          { h: 'Second — สมมติในปัจจุบัน (ไม่จริง)', f: 'If + V2 (were), would + V1', ex: ['If I had more time, I would give individual feedback.', 'If I were you, I\'d look at which questions they got wrong.'] },
          { h: 'Third — สมมติในอดีต (เสียดาย)', f: 'If + had + V3, would have + V3', ex: ['If we had practised more reading, they would have done better.'] }
        ],
        tips: ['ห้ามใช้ will ใน If-clause: ✗ If it will rain → ✓ If it rains', 'unless = if … not  ·  as long as / provided that = ตราบใดที่', 'If I were you… ใช้ were กับทุกประธาน']
      },
      reading: {
        title: 'Feedback That Works',
        text: `Research consistently shows that feedback is one of the most powerful ways to improve learning, but not all feedback is equally useful. A grade on its own, such as "7/10", tells students how well they did, but not how to do better. If students only receive grades, they tend to compare themselves with classmates rather than focus on their own learning.

Effective feedback, on the other hand, is specific and forward-looking. Instead of writing "Good job", a teacher might write, "Your argument is clear. Next time, support it with an example from the text." Many teachers use a rubric so that students understand the criteria before they start a task.

Formative assessment, which happens during the learning process, gives students a chance to act on feedback. If teachers had more time for this kind of assessment, many experts believe students would achieve much higher results than they do in traditional end-of-term tests.`,
        qs: [
          { q: 'What is the problem with giving grades only?', o: ['They do not show students how to improve', 'They are not reliable', 'They take too long to write', 'Students do not understand numbers'], a: 0, e: '"tells students how well they did, but not how to do better"' },
          { q: 'Why do teachers use a rubric?', o: ['So students understand the criteria in advance', 'To mark work more quickly', 'To compare students with classmates', 'To replace feedback completely'], a: 0, e: '"so that students understand the criteria before they start a task"' },
          { q: 'According to experts, what would happen if teachers had more time for formative assessment?', o: ['Students would achieve higher results', 'Tests would become easier', 'Teachers would give fewer grades', 'Students would stop comparing themselves'], a: 0, e: 'ประโยคสุดท้าย (Second conditional)' }
        ]
      },
      listening: {
        title: 'Disappointing Test Results',
        script: `A: The test results are terrible. Only half the class passed.
B: Really? If I were you, I'd look at which questions they got wrong.
A: I did. Most of them failed the reading section.
B: Then maybe the texts were too long. If we'd practised more reading in class, they would have done better.
A: You're right. If I give them a practice test next week, will you help me mark it?
B: Sure, as long as it's not on Friday.`,
        qs: [
          { q: 'Which part of the test did most students fail?', o: ['Reading', 'Listening', 'Grammar', 'Writing'], a: 0, e: '"Most of them failed the reading section."' },
          { q: 'When is speaker B NOT able to help?', o: ['On Friday', 'Next week', 'On Monday', 'After school'], a: 0, e: '"as long as it\'s not on Friday"' }
        ]
      },
      writing: {
        prompt: 'Your head of department wants to improve homework feedback. Write a short proposal (130–160 words) with two suggestions. Use at least two conditional sentences.',
        tips: ['หัวข้อ/ประโยคเปิดบอกจุดประสงค์ (The aim of this proposal is…)', 'ข้อเสนอแนะ 2 ข้อ แต่ละข้อมีเหตุผล', 'ใช้ If-clause ≥ 2 ประโยค', 'สรุปด้วยประโยคแนะนำ (I would recommend…)'],
        model: `Proposal: Improving Homework Feedback

The aim of this proposal is to suggest two simple ways to make our homework feedback more effective.

Firstly, I suggest that we replace scores with short comments for most homework tasks. At the moment, students look at the number and put the work away. If they received one specific comment, such as "Check your past tense verbs", they would know exactly what to focus on.

Secondly, we could give students ten minutes at the start of the next lesson to correct their mistakes. If students act on feedback immediately, they are much more likely to remember it.

Both ideas would require a little extra time at first. However, if we had tried this approach earlier, I believe our students would have made faster progress this year. I would therefore recommend testing these ideas with Grade 9 next term.`
      },
      quiz: [
        { q: 'If students get clear feedback, they ___ faster.', o: ['improve', 'improved', 'would improved', 'had improved'], a: 0, e: 'Zero conditional (ความจริงทั่วไป): If + Present, Present' },
        { q: 'If I ___ more time, I would give every student individual feedback.', o: ['had', 'have', 'will have', 'would have'], a: 0, e: 'Second conditional: If + V2, would + V1' },
        { q: 'If she had studied harder, she ___ the exam.', o: ['would have passed', 'will pass', 'would pass', 'passed'], a: 0, e: 'Third conditional: If + had V3, would have V3' },
        { q: 'You won\'t pass ___ you practise every day.', o: ['unless', 'if', 'although', 'despite'], a: 0, e: 'unless = if … not' },
        { q: 'A ___ shows students exactly how their work will be graded.', o: ['rubric', 'routine', 'mentor', 'device'], a: 0, e: 'rubric = เกณฑ์การให้คะแนน' },
        { q: '___ assessment happens during learning, not only at the end.', o: ['Formative', 'Final', 'Reliable', 'Disruptive'], a: 0, e: 'Formative assessment = การประเมินระหว่างเรียน' }
      ]
    },

    /* ───────────────────────── UNIT 5 ───────────────────────── */
    {
      id: 'u5', no: 5,
      title: 'Learning Together (PLC)', th: 'ชุมชนการเรียนรู้ทางวิชาชีพ',
      focus: 'Relative Clauses',
      vocab: [
        { w: 'collaborate', p: 'v.', t: 'ร่วมมือกัน', ex: 'Teachers collaborate to plan the unit.' },
        { w: 'reflect', p: 'v.', t: 'สะท้อนคิด / ทบทวน', ex: 'After each lesson, I reflect on what worked.' },
        { w: 'colleague', p: 'n.', t: 'เพื่อนร่วมงาน', ex: 'A colleague observed my lesson yesterday.' },
        { w: 'observe', p: 'v.', t: 'สังเกต (การสอน)', ex: 'We observe each other\'s lessons once a month.' },
        { w: 'mentor', p: 'n.', t: 'ครูพี่เลี้ยง', ex: 'My mentor helped me during my first year.' },
        { w: 'expertise', p: 'n.', t: 'ความเชี่ยวชาญ', ex: 'She shared her expertise in project-based learning.' },
        { w: 'outcome', p: 'n.', t: 'ผลลัพธ์', ex: 'We discussed the outcome of the new approach.' },
        { w: 'workload', p: 'n.', t: 'ภาระงาน', ex: 'Paperwork adds to teachers\' workload.' }
      ],
      grammar: {
        title: 'Relative Clauses',
        intro: 'ใช้ขยายคำนามให้ประโยคยาวและเป็นธรรมชาติขึ้น — เป็นทักษะสำคัญทั้งการอ่านและการเขียนระดับ B2',
        rules: [
          { h: 'who / which / that', f: 'who = คน · which = สิ่งของ · that = ได้ทั้งคน/สิ่งของ (เฉพาะแบบ defining)', ex: ['The teacher who observed my lesson gave me useful advice.', 'The book that you recommended was very helpful.'] },
          { h: 'whose / where / when', f: 'whose = ของ… · where = สถานที่ · when = เวลา', ex: ['Mr Chai, whose class won the competition, is a great mentor.', 'This is the school where I did my teaching practice.'] },
          { h: 'Defining vs Non-defining', f: 'Non-defining มีจุลภาค (,) ให้ข้อมูลเสริม — ห้ามใช้ that', ex: ['A senior teacher, who acted as a mentor, helped the group.'] }
        ],
        tips: ['✗ My mentor, that is very kind, … → ✓ My mentor, who is very kind, …', 'ละ who/which/that ได้เมื่อเป็นกรรม: The book (that) you recommended…', 'where ตามด้วยประโยคสมบูรณ์ (ประธาน + กริยา)']
      },
      reading: {
        title: 'Learning Together',
        text: `A Professional Learning Community, or PLC, is a group of teachers who meet regularly to improve their teaching. Unlike traditional training, where an expert gives a lecture, a PLC is built on collaboration. Teachers share problems, observe each other's lessons and reflect on what works.

At one secondary school in Khon Kaen, the maths teachers, whose students had struggled with fractions for years, formed a PLC. Each week, one teacher taught a lesson while the others observed. Afterwards, they discussed the outcome and planned changes together. A senior teacher, who acted as a mentor, helped the group focus on student learning rather than on judging each other.

The teachers admit that the meetings added to their workload at first. However, they say the experience was worth it. Within a year, the number of students who passed the fractions test had doubled, and several teachers reported feeling more confident and less isolated.`,
        qs: [
          { q: 'How is a PLC different from traditional training?', o: ['It is based on collaboration rather than lectures', 'It is led by an outside expert', 'It only happens once a year', 'It focuses on judging teachers'], a: 0, e: '"Unlike traditional training, where an expert gives a lecture, a PLC is built on collaboration."' },
          { q: 'What was the senior teacher\'s role?', o: ['To mentor the group and keep the focus on learning', 'To judge each teacher\'s lesson', 'To teach all the lessons', 'To write the fractions test'], a: 0, e: '"who acted as a mentor, helped the group focus on student learning"' },
          { q: 'What happened within a year?', o: ['Twice as many students passed the fractions test', 'The teachers stopped meeting', 'The workload decreased', 'The school hired new maths teachers'], a: 0, e: '"the number of students who passed… had doubled"' }
        ]
      },
      listening: {
        title: 'After a Lesson Observation',
        script: `A: Thanks for letting us observe your lesson yesterday, Somsak.
B: No problem. What did you think?
A: The part where students explained their answers to each other worked really well.
C: I agree. The only thing I noticed was that the students who sat at the back didn't speak much.
B: That's a good point. Maybe I'll mix the groups next time.
A: Good idea. Let's discuss the outcome at next Monday's meeting.`,
        qs: [
          { q: 'Which part of the lesson worked well?', o: ['Students explaining answers to each other', 'The teacher\'s introduction', 'The final test', 'The homework task'], a: 0, e: '"The part where students explained their answers to each other worked really well."' },
          { q: 'What will Somsak change next time?', o: ['He will mix the groups', 'He will move the desks to the back', 'He will give a longer lecture', 'He will cancel group work'], a: 0, e: '"Maybe I\'ll mix the groups next time."' }
        ]
      },
      writing: {
        prompt: 'Describe a colleague or mentor who has influenced your teaching (130–160 words). Use at least three relative clauses.',
        tips: ['แนะนำบุคคลนั้น (ชื่อ ตำแหน่ง ความสัมพันธ์)', 'เล่าสิ่งที่เขาทำ + ผลต่อการสอนของคุณ', 'ใช้ who / which / whose / where ≥ 3 ครั้ง', 'ปิดท้ายด้วยสิ่งที่เรียนรู้'],
        model: `The person who has influenced my teaching most is Khun Supaporn, a senior English teacher who was my mentor during my first two years at school.

Supaporn, whose lessons were always full of energy, invited me to observe her classes every week. I quickly noticed that she rarely gave long explanations. Instead, she asked questions which made students think for themselves. At first, I found this difficult to copy, but she encouraged me to try one new technique at a time.

She also taught me to reflect after every lesson. We used to meet in the staff room, where we discussed what had gone well and what I could do differently. These short conversations helped me become much more confident.

Today, I am a mentor myself, and I try to support new teachers in the same way that Supaporn supported me.`
      },
      quiz: [
        { q: 'The teacher ___ observed my lesson gave me useful advice.', o: ['who', 'which', 'whose', 'where'], a: 0, e: 'คน + ทำหน้าที่ประธาน → who' },
        { q: 'This is the school ___ I did my teaching practice.', o: ['where', 'which', 'who', 'whose'], a: 0, e: 'สถานที่ + ประโยคสมบูรณ์ → where' },
        { q: 'Mr Chai, ___ class won the competition, is a great mentor.', o: ['whose', 'who', 'which', 'that'], a: 0, e: 'ห้องเรียน "ของ" Mr Chai → whose' },
        { q: 'My mentor, ___ has taught for 20 years, is retiring.', o: ['who', 'that', 'which', 'whose'], a: 0, e: 'Non-defining (มีจุลภาค) ห้ามใช้ that → who' },
        { q: 'Teachers often ___ on their lessons to find ways to improve.', o: ['reflect', 'observe', 'collaborate', 'mentor'], a: 0, e: 'reflect on = สะท้อนคิด/ทบทวน' },
        { q: 'Too much paperwork increases teachers\' ___.', o: ['workload', 'outcome', 'expertise', 'colleague'], a: 0, e: 'workload = ภาระงาน' }
      ]
    },

    /* ───────────────────────── UNIT 6 ───────────────────────── */
    {
      id: 'u6', no: 6,
      title: 'Student Wellbeing', th: 'สุขภาวะของผู้เรียน',
      focus: 'Reported Speech',
      vocab: [
        { w: 'wellbeing', p: 'n.', t: 'สุขภาวะ (กาย-ใจ)', ex: 'Student wellbeing is a priority at our school.' },
        { w: 'anxiety', p: 'n.', t: 'ความวิตกกังวล', ex: 'Exam anxiety affects many teenagers.' },
        { w: 'bullying', p: 'n.', t: 'การกลั่นแกล้ง', ex: 'Online bullying is harder for teachers to notice.' },
        { w: 'cope', p: 'v.', t: 'รับมือ (cope with)', ex: 'She is learning to cope with stress.' },
        { w: 'counsellor', p: 'n.', t: 'ครูแนะแนว / ผู้ให้คำปรึกษา', ex: 'The counsellor meets students every afternoon.' },
        { w: 'confidential', p: 'adj.', t: 'เป็นความลับ', ex: 'Everything you say here is confidential.' },
        { w: 'resilience', p: 'n.', t: 'ความสามารถในการฟื้นตัวจากปัญหา', ex: 'Sport can help children build resilience.' },
        { w: 'inclusive', p: 'adj.', t: 'ที่เปิดรับทุกคน / ไม่กีดกัน', ex: 'We want an inclusive classroom where everyone belongs.' }
      ],
      grammar: {
        title: 'Reported Speech',
        intro: 'การเล่าว่า "ใครพูดอะไร" — จำเป็นมากสำหรับการรายงาน การประชุม และข้อสอบฟัง',
        rules: [
          { h: 'ถอย tense หนึ่งขั้น', f: 'am/is → was · do → did · did / have done → had done · will → would · can → could', ex: ['"I am tired." → She said (that) she was tired.', '"I finished it yesterday." → He told me he had finished it the day before.'] },
          { h: 'คำถาม', f: 'asked + if/whether / wh- + ประธาน + กริยา (ไม่กลับประธาน)', ex: ['"Can you help me?" → He asked if I could help him.', '"Where do you work?" → She asked where I worked.'] },
          { h: 'คำสั่ง / ขอร้อง', f: 'told / asked + someone + (not) to + V1', ex: ['"Don\'t be late." → The teacher told us not to be late.'] }
        ],
        tips: ['say + (that) / tell + คน: ✗ She said me → ✓ She told me / She said to me', 'คำบอกเวลาเปลี่ยน: today → that day · tomorrow → the next day · yesterday → the day before', 'คำถามแบบรายงานไม่มี do/does/did และไม่มีเครื่องหมาย ?']
      },
      reading: {
        title: 'Behind the Smile',
        text: `Not all students who seem happy are coping well. When one secondary school in Thailand asked its students about their wellbeing, many said they felt anxious about exams most of the time, and several said they had nobody to talk to. Teachers are often the first adults to notice when something is wrong.

School counsellor Khun Wipa explains that small changes can be warning signs. "If a student who usually participates suddenly becomes quiet, or stops handing in work, it is worth having a private conversation," she says. She adds that teachers do not need to solve every problem themselves. Their role is to listen, keep the conversation confidential where it is safe to do so, and refer the student to a counsellor when necessary.

Schools that take wellbeing seriously also try to build resilience. Activities such as mindfulness sessions, peer mentoring and clear anti-bullying policies help create an inclusive environment where every student feels they belong.`,
        qs: [
          { q: 'According to Khun Wipa, what could be a warning sign?', o: ['An active student suddenly becoming quiet', 'A student asking many questions', 'A student joining a sports club', 'A student getting high grades'], a: 0, e: '"If a student who usually participates suddenly becomes quiet…"' },
          { q: 'What is the teacher\'s role, according to the text?', o: ['To listen and refer the student to a counsellor if needed', 'To solve every problem alone', 'To inform all other teachers immediately', 'To contact the police'], a: 0, e: '"Their role is to listen… and refer the student to a counsellor when necessary."' },
          { q: 'Which activity is mentioned as a way to build resilience?', o: ['Peer mentoring', 'Extra exams', 'Longer school days', 'Online gaming'], a: 0, e: '"mindfulness sessions, peer mentoring and clear anti-bullying policies"' }
        ]
      },
      listening: {
        title: 'A Worried Student',
        script: `A: Did you manage to talk to Ploy?
B: Yes. She told me she had been feeling stressed about the national exam.
A: Did she say anything about her friends?
B: She said that some girls in her class were posting unkind comments about her online.
A: That sounds like bullying. What did you tell her?
B: I told her she had done the right thing by talking to me, and I asked her if she would agree to see the counsellor. She said she would think about it.`,
        qs: [
          { q: 'What has Ploy been stressed about?', o: ['The national exam', 'Her family', 'Her part-time job', 'Moving to a new school'], a: 0, e: '"she had been feeling stressed about the national exam"' },
          { q: 'What did the teacher ask Ploy?', o: ['Whether she would agree to see the counsellor', 'Whether she wanted to change classes', 'Who had posted the comments', 'If she had told her parents'], a: 0, e: '"I asked her if she would agree to see the counsellor"' }
        ]
      },
      writing: {
        prompt: 'A student told you they are being bullied online. Write a short report (130–160 words) to the head of department describing the conversation. Use reported speech.',
        tips: ['บอกวันที่และบริบทของการพูดคุย', 'รายงานคำพูดด้วย told / said / asked + tense ที่ถอยแล้ว', 'บอกสิ่งที่คุณทำไปแล้ว', 'เสนอขั้นตอนต่อไป'],
        model: `Report: Possible Online Bullying – Grade 10

On Monday 3 March, Arthit from Grade 10/2 asked to speak to me after class. He told me that he had been receiving unkind messages from a group of classmates on social media for about two weeks. He said that the messages had made him feel anxious and that he did not want to come to school.

I asked him whether he had kept copies of the messages, and he said he had taken screenshots. He also told me that he had not informed his parents because he was worried they would be upset.

I told him that he had done the right thing by speaking to me and that the conversation would remain confidential where possible. With his agreement, I have booked an appointment with the school counsellor for tomorrow.

I recommend that we contact his parents and speak to the students involved this week.`
      },
      quiz: [
        { q: 'She said, "I am tired." → She said she ___ tired.', o: ['was', 'is', 'has been', 'will be'], a: 0, e: 'am → was (ถอย tense)' },
        { q: '"I finished the homework yesterday." → He told me he ___ the homework the day before.', o: ['had finished', 'finishes', 'has finished', 'will finish'], a: 0, e: 'Past Simple → Past Perfect' },
        { q: '"Can you help me?" → The student asked me ___ help him.', o: ['if I could', 'could I', 'if could I', 'can I'], a: 0, e: 'คำถาม Yes/No → asked if + ประธาน + กริยา' },
        { q: '"Don\'t be late." → The teacher told us ___ late.', o: ['not to be', 'don\'t be', 'to not being', 'we not be'], a: 0, e: 'คำสั่งปฏิเสธ → told + คน + not to + V1' },
        { q: 'Everything you tell the counsellor is ___.', o: ['confidential', 'inclusive', 'anxious', 'resilient'], a: 0, e: 'confidential = เป็นความลับ' },
        { q: 'Students with strong ___ recover quickly from difficulties.', o: ['resilience', 'anxiety', 'bullying', 'counsellor'], a: 0, e: 'resilience = ความสามารถในการฟื้นตัว' }
      ]
    },

    /* ───────────────────────── UNIT 7 ───────────────────────── */
    {
      id: 'u7', no: 7,
      title: 'Education Around the World', th: 'การศึกษาทั่วโลก',
      focus: 'Contrast & Comparison Linkers',
      vocab: [
        { w: 'compulsory', p: 'adj.', t: 'ภาคบังคับ', ex: 'Education is compulsory until Grade 9 in Thailand.' },
        { w: 'funding', p: 'n.', t: 'งบประมาณ / เงินทุน', ex: 'Rural schools often receive less funding.' },
        { w: 'rural', p: 'adj.', t: 'ชนบท', ex: 'She teaches at a small rural school.' },
        { w: 'gap', p: 'n.', t: 'ช่องว่าง / ความเหลื่อมล้ำ', ex: 'The gap between urban and rural schools is growing.' },
        { w: 'policy', p: 'n.', t: 'นโยบาย', ex: 'The new policy reduces the number of exams.' },
        { w: 'emphasis', p: 'n.', t: 'การเน้น / ให้ความสำคัญ', ex: 'There is a strong emphasis on reading in the early years.' },
        { w: 'whereas', p: 'conj.', t: 'ในขณะที่ (เปรียบเทียบความต่าง)', ex: 'City schools have large classes, whereas rural schools are small.' },
        { w: 'outperform', p: 'v.', t: 'ทำได้ดีกว่า', ex: 'Girls outperformed boys in the reading test.' }
      ],
      grammar: {
        title: 'Contrast & Comparison Linkers',
        intro: 'คำเชื่อมแสดงความขัดแย้งเป็นจุดที่ข้อสอบ B2 ชอบออกมาก เพราะแต่ละคำตามด้วยโครงสร้างต่างกัน',
        rules: [
          { h: 'ตามด้วยประโยค (S + V)', f: 'although / even though / whereas / while', ex: ['Although the school is small, it has excellent facilities.', 'Urban schools have more resources, whereas rural schools have fewer teachers.'] },
          { h: 'ตามด้วยคำนาม / V-ing', f: 'despite / in spite of + noun / V-ing', ex: ['Despite the heavy rain, all the students arrived on time.', 'In spite of having little funding, the school did well.'] },
          { h: 'เชื่อมระหว่างประโยค', f: 'However, / Nevertheless, / On the other hand, (ขึ้นประโยคใหม่ + จุลภาค)', ex: ['The results improved. However, the gap is still large.'] }
        ],
        tips: ['✗ Despite the school is small → ✓ Despite the school being small / Although the school is small', '✗ Although…, but… (ห้ามใช้คู่กัน)', 'เปรียบเทียบ: -er than / more … than / not as … as']
      },
      reading: {
        title: 'Two Systems, Different Paths',
        text: `Finland and Singapore are often mentioned as examples of successful education systems, yet they follow very different approaches. In Finland, formal schooling does not begin until the age of seven, and there is relatively little emphasis on standardised testing. Teachers have a high degree of freedom to design their own lessons. Singapore, by contrast, has a more centralised system, with a national curriculum and important exams at several stages.

Despite these differences, the two countries share some key features. Both treat teaching as a highly respected profession, and both invest heavily in teacher training. Entry into teacher education programmes is competitive, whereas in many countries it is relatively easy.

Experts warn that one country's policy cannot simply be copied by another. Factors such as culture, funding and the gap between urban and rural schools all influence how well a policy works. Nevertheless, the respect given to teachers seems to matter everywhere.`,
        qs: [
          { q: 'What is one difference between Finland and Singapore?', o: ['Finland has less emphasis on standardised testing', 'Singapore starts school at age seven', 'Finland has a centralised national exam system', 'Singapore gives teachers no training'], a: 0, e: 'Finland: little emphasis on standardised testing / Singapore: centralised, many exams' },
          { q: 'What do the two countries have in common?', o: ['They both respect teachers and invest in training', 'They both start school at seven', 'They both have no exams', 'They both copy other countries\' policies'], a: 0, e: '"Both treat teaching as a highly respected profession, and both invest heavily in teacher training."' },
          { q: 'Why can\'t a policy simply be copied, according to experts?', o: ['Because culture, funding and local conditions differ', 'Because policies are secret', 'Because teachers refuse to change', 'Because exams are different'], a: 0, e: '"Factors such as culture, funding and the gap… all influence how well a policy works."' }
        ]
      },
      listening: {
        title: 'Education News',
        script: `In today's education news, a new report compares student performance in urban and rural schools. Although overall results have improved, students in cities still outperform those in rural areas, especially in English. The report suggests that the gap is mainly caused by differences in funding and teacher shortages. However, it also highlights several rural schools that have achieved excellent results by using online tutoring and partnering with nearby universities.`,
        qs: [
          { q: 'In which subject is the gap especially large?', o: ['English', 'Maths', 'Science', 'Thai'], a: 0, e: '"students in cities still outperform those in rural areas, especially in English"' },
          { q: 'How did some rural schools achieve excellent results?', o: ['Online tutoring and university partnerships', 'Longer school days', 'More exams', 'Moving students to city schools'], a: 0, e: '"by using online tutoring and partnering with nearby universities"' }
        ]
      },
      writing: {
        prompt: 'Compare education in Thailand with another country you know (140–170 words). Describe one similarity and two differences.',
        tips: ['ประโยคเปิดบอกว่าเปรียบเทียบอะไรกับอะไร', 'ใช้ whereas / although / despite / however อย่างน้อย 3 แบบ', 'ยกตัวอย่างที่เป็นรูปธรรม', 'สรุปว่าไทยเรียนรู้อะไรได้บ้าง'],
        model: `Thailand and Japan both value education highly, but their school systems differ in several important ways.

One similarity is that, in both countries, parents expect their children to work hard, and many students attend extra tutoring classes after school.

However, there are also clear differences. Firstly, Japanese students are responsible for cleaning their classrooms every day, whereas in many Thai schools this is done by staff. This helps Japanese children develop a strong sense of responsibility. Secondly, although both countries use national exams, Japanese high school entrance exams are generally more competitive.

Despite these differences, both systems face similar challenges, such as exam stress and the gap between urban and rural schools.

In my opinion, Thailand could learn from Japan's focus on responsibility and routine. Nevertheless, I believe Thai schools are often warmer and more relaxed, which is also an important strength.`
      },
      quiz: [
        { q: '___ the school is small, it has excellent facilities.', o: ['Although', 'Despite', 'However', 'In spite of'], a: 0, e: 'ตามด้วยประโยค (S+V) → Although' },
        { q: '___ the heavy rain, all the students arrived on time.', o: ['Despite', 'Although', 'However', 'Even though'], a: 0, e: 'ตามด้วยคำนาม → Despite' },
        { q: 'Urban schools have more resources, ___ rural schools often have fewer teachers.', o: ['whereas', 'despite', 'however', 'because of'], a: 0, e: 'เชื่อม 2 ประโยคที่ตรงข้ามกัน → whereas' },
        { q: 'Finnish children start school later ___ children in most other countries.', o: ['than', 'that', 'as', 'then'], a: 0, e: 'later than (เปรียบเทียบขั้นกว่า)' },
        { q: 'Education is ___ in Thailand until Grade 9.', o: ['compulsory', 'rural', 'funding', 'emphasis'], a: 0, e: 'compulsory = ภาคบังคับ' },
        { q: 'The government announced a new ___ to reduce the number of exams.', o: ['policy', 'gap', 'rural', 'whereas'], a: 0, e: 'policy = นโยบาย' }
      ]
    },

    /* ───────────────────────── UNIT 8 ───────────────────────── */
    {
      id: 'u8', no: 8,
      title: 'Career Growth', th: 'ความก้าวหน้าในวิชาชีพ',
      focus: 'Wish / Regret & Past Modals',
      vocab: [
        { w: 'promotion', p: 'n.', t: 'การเลื่อนตำแหน่ง / เลื่อนวิทยฐานะ', ex: 'She is preparing for her promotion next year.' },
        { w: 'qualification', p: 'n.', t: 'คุณวุฒิ / คุณสมบัติ', ex: 'A master\'s degree is a useful qualification.' },
        { w: 'requirement', p: 'n.', t: 'ข้อกำหนด / เงื่อนไข', ex: 'Applicants must meet all the requirements.' },
        { w: 'deadline', p: 'n.', t: 'กำหนดเวลาสิ้นสุด', ex: 'The deadline for registration is 30 June.' },
        { w: 'portfolio', p: 'n.', t: 'แฟ้มสะสมผลงาน', ex: 'Keep your portfolio organised from day one.' },
        { w: 'ambitious', p: 'adj.', t: 'มีความทะเยอทะยาน / ตั้งเป้าสูง', ex: 'It is good to be ambitious, but plan carefully.' },
        { w: 'commitment', p: 'n.', t: 'ความมุ่งมั่น / ความทุ่มเท', ex: 'Passing the test requires real commitment.' },
        { w: 'achievement', p: 'n.', t: 'ความสำเร็จ / ผลงาน', ex: 'Reaching B2 was a great achievement for her.' }
      ],
      grammar: {
        title: 'Wish / Regret & Past Modals',
        intro: 'ใช้แสดงความเสียดายและการคาดเดาเหตุการณ์ในอดีต — โครงสร้างระดับ B2 ที่ช่วยให้งานเขียน/พูดดูเป็นธรรมชาติ',
        rules: [
          { h: 'wish — ปัจจุบัน', f: 'wish + V2 / were / could + V1', ex: ['I wish I had more time to prepare.', 'I wish I could take the test next month.'] },
          { h: 'wish — อดีต (เสียดาย)', f: 'wish + had + V3', ex: ['I wish I had started collecting evidence earlier.'] },
          { h: 'คาดเดาอดีต', f: 'must have V3 (มั่นใจว่าใช่) · can\'t have V3 (มั่นใจว่าไม่ใช่) · might have V3 (อาจจะ) · should have V3 (ควรจะ…แต่ไม่ได้ทำ)', ex: ['She must have gone to the exam centre.', 'She can\'t have forgotten — she\'s been practising for months.', 'I should have applied last year.'] }
        ],
        tips: ['✗ I wish I have → ✓ I wish I had', 'must have = มั่นใจ ~90% · might have = ~50% · can\'t have = มั่นใจว่าไม่', 'should have V3 = ตำหนิ/เสียดายสิ่งที่ไม่ได้ทำ']
      },
      reading: {
        title: 'The Road to Promotion',
        text: `For many teachers, applying for a higher academic standing is a long and demanding process. Applicants must meet a number of requirements, including years of service, evidence of teaching performance and, in some cases, proof of language ability. Preparing a portfolio of evidence can take months, and deadlines are strict.

Khun Arun, a secondary English teacher, describes his experience. "At first I wished I had started collecting evidence earlier. I spent many weekends searching for old lesson plans and student work." He also decided to take an English proficiency test. "I was nervous because I hadn't taken a test for years, so I practised listening every day for two months."

His commitment paid off. His test result met the required level, which allowed him to apply a year earlier than he otherwise could have. His advice to younger colleagues is simple: "Be ambitious, but plan ahead. Keep your evidence organised from day one, and don't leave language preparation until the last minute."`,
        qs: [
          { q: 'What did Khun Arun regret?', o: ['Not collecting evidence earlier', 'Taking the English test', 'Becoming a teacher', 'Practising listening too much'], a: 0, e: '"I wished I had started collecting evidence earlier."' },
          { q: 'How did his test result help him?', o: ['He could apply one year earlier', 'He received a higher salary immediately', 'He no longer needed a portfolio', 'He became a head teacher'], a: 0, e: '"allowed him to apply a year earlier than he otherwise could have"' },
          { q: 'What is his main advice?', o: ['Plan ahead and prepare early', 'Wait until the last minute', 'Focus only on the portfolio', 'Avoid language tests'], a: 0, e: '"plan ahead… don\'t leave language preparation until the last minute"' }
        ]
      },
      listening: {
        title: 'Where Is Mali?',
        script: `A: Have you seen Mali? She wasn't at the meeting.
B: She must have gone to the exam centre. Her English test was today.
A: Oh, right! She can't have forgotten about it. She's been practising for months.
B: Exactly. I wish I'd been that organised when I applied for my promotion.
A: Me too. I wish I could take the test next month, but the registration deadline has already passed.`,
        qs: [
          { q: 'Where is Mali most likely to be?', o: ['At the exam centre', 'At home', 'In another meeting', 'On holiday'], a: 0, e: '"She must have gone to the exam centre."' },
          { q: 'Why can\'t speaker A take the test next month?', o: ['The registration deadline has passed', 'The test is too expensive', 'A has not practised enough', 'There is no test next month'], a: 0, e: '"the registration deadline has already passed"' }
        ]
      },
      writing: {
        prompt: 'Write an email to a friend (140–170 words) about your career goals and how you are preparing for the B2 test. Include one regret (wish / should have).',
        tips: ['ทักทายแบบกึ่งทางการ', 'เล่าเป้าหมาย + เหตุผล', 'เล่าแผนการเตรียมตัว (ใช้ Present Perfect / going to)', 'ใช้ I wish… / I should have… อย่างน้อย 1 ครั้ง'],
        model: `Hi Fon,

Thanks for your email! It's great to hear that your new school is going well.

I've got some news too. I've decided to apply for a higher academic standing, and I'm hoping to reach B2 in English so that I can apply a year earlier. It's a big challenge, but I think it will be worth it.

I've been studying for about six weeks now. Every day I spend twenty minutes on vocabulary and grammar, and at weekends I do a full practice test. My reading has improved a lot, but listening is still difficult. I wish I had started watching English news earlier – it really helps!

I should have prepared my portfolio at the same time, too. Now I'm trying to organise all my documents before the deadline in June.

Wish me luck! Let's meet for coffee after the test.

Take care,
Ploy`
      },
      quiz: [
        { q: 'I wish I ___ more time to prepare for the test.', o: ['had', 'have', 'will have', 'would had'], a: 0, e: 'wish (ปัจจุบัน) + V2' },
        { q: 'I didn\'t apply last year. Now I wish I ___.', o: ['had applied', 'applied', 'have applied', 'would apply'], a: 0, e: 'เสียดายอดีต → wish + had V3' },
        { q: 'The lights are off. They ___ gone home.', o: ['must have', 'can\'t have', 'should', 'mustn\'t'], a: 0, e: 'คาดเดาอย่างมั่นใจว่าใช่ → must have V3' },
        { q: 'She ___ failed the speaking test — she\'s an excellent speaker!', o: ['can\'t have', 'must have', 'should have', 'would'], a: 0, e: 'มั่นใจว่าไม่ใช่ → can\'t have V3' },
        { q: 'You must submit your ___ of evidence before the deadline.', o: ['portfolio', 'ambition', 'commitment', 'achievement'], a: 0, e: 'portfolio = แฟ้มสะสมผลงาน' },
        { q: 'Passing the B2 test was a great ___ for her.', o: ['achievement', 'requirement', 'deadline', 'workload'], a: 0, e: 'achievement = ความสำเร็จ' }
      ]
    }
  ],

  /* ───────────────────────── MOCK TEST ───────────────────────── */
  mock: {
    minutes: 35,
    sections: [
      {
        name: 'Grammar', th: 'ไวยากรณ์',
        qs: [
          { q: 'By the time I arrived, the meeting ___.', o: ['had already started', 'already started', 'has already started', 'was already start'], a: 0, e: 'เหตุการณ์ที่เกิดก่อนอีกเหตุการณ์ในอดีต → Past Perfect' },
          { q: 'She suggested ___ the lesson outdoors.', o: ['having', 'to have', 'have', 'to having'], a: 0, e: 'suggest + V-ing' },
          { q: 'If the school ___ more funding, it could hire more teachers.', o: ['received', 'receives', 'will receive', 'had received'], a: 0, e: 'Second conditional: If + V2, could + V1' },
          { q: 'The report ___ by the director tomorrow.', o: ['will be signed', 'will sign', 'is signing', 'signs'], a: 0, e: 'Passive อนาคต: will be + V3' },
          { q: 'Not only ___ the test, but she also got the highest score.', o: ['did she pass', 'she passed', 'she did pass', 'passed she'], a: 0, e: 'Not only ขึ้นต้นประโยค → กลับประธาน-กริยาช่วย (inversion)' },
          { q: 'I\'m not used to ___ up so early.', o: ['getting', 'get', 'got', 'be getting'], a: 0, e: 'be used to + V-ing = เคยชินกับ' },
          { q: 'He asked me where ___.', o: ['I worked', 'did I work', 'do I work', 'I do work'], a: 0, e: 'Reported question: ไม่กลับประธาน ไม่ใช้ do/did' },
          { q: '___ the lesson was difficult, the students enjoyed it.', o: ['Although', 'Despite', 'Because', 'So'], a: 0, e: 'ตามด้วยประโยค + ความหมายขัดแย้ง → Although' },
          { q: 'This is the student ___ essay won the prize.', o: ['whose', 'who', 'which', 'whom'], a: 0, e: 'เรียงความ "ของ" นักเรียน → whose' },
          { q: 'You ___ have told me earlier! I could have helped you.', o: ['should', 'must', 'can', 'need'], a: 0, e: 'should have V3 = ควรจะทำแต่ไม่ได้ทำ' }
        ]
      },
      {
        name: 'Vocabulary', th: 'คำศัพท์',
        qs: [
          { q: 'The school aims to provide an ___ environment where all students feel welcome.', o: ['inclusive', 'exclusive', 'anxious', 'compulsory'], a: 0, e: 'inclusive = เปิดรับทุกคน' },
          { q: 'Teachers should give ___ feedback, not just a score.', o: ['constructive', 'destructive', 'reluctant', 'temporary'], a: 0, e: 'constructive feedback = คำติชมเชิงสร้างสรรค์' },
          { q: 'Could you ___ the main points of the article in three sentences?', o: ['summarise', 'postpone', 'assume', 'reject'], a: 0, e: 'summarise = สรุป' },
          { q: 'Many students find it hard to ___ with exam pressure.', o: ['cope', 'overcome', 'handle', 'solve'], a: 0, e: 'cope with = รับมือกับ (handle/overcome ไม่ตามด้วย with)' },
          { q: 'She has a lot of ___ in teaching children with special needs.', o: ['expertise', 'expert', 'expertly', 'expertness'], a: 0, e: 'ตำแหน่งนี้ต้องการคำนาม → expertise' },
          { q: 'The deadline has been ___ until next Friday.', o: ['extended', 'expanded', 'expired', 'exceeded'], a: 0, e: 'extend a deadline = ขยายกำหนดเวลา' },
          { q: 'The new teacher quickly gained the ___ of her students.', o: ['respect', 'regard', 'honour', 'esteem'], a: 0, e: 'collocation: gain the respect of someone' }
        ]
      },
      {
        name: 'Reading', th: 'การอ่าน',
        passage: `Many teachers in Thailand want to improve their English but struggle to find time. Long courses after school are often impractical, especially for teachers with family responsibilities. This is why "microlearning" has become popular. Instead of studying for two hours once a week, learners spend ten to fifteen minutes a day on short, focused activities, such as learning five new words or listening to a short podcast.

Supporters argue that small, regular sessions are easier to fit into a busy schedule and help learners remember more, because the brain has repeated opportunities to recall information. Critics, however, point out that microlearning may not be enough for complex skills such as writing an argument or following a long lecture. They recommend combining daily micro-sessions with occasional longer practice, such as a full mock test once a month.`,
        qs: [
          { q: 'Why are long courses often impractical for teachers?', o: ['They have limited time and family responsibilities', 'The courses are too expensive', 'The courses are too easy', 'Teachers prefer to study alone'], a: 0, e: '"impractical, especially for teachers with family responsibilities"' },
          { q: 'According to supporters, why does microlearning help memory?', o: ['Learners recall information repeatedly', 'Sessions are longer', 'It uses podcasts only', 'It includes monthly tests'], a: 0, e: '"the brain has repeated opportunities to recall information"' },
          { q: 'What is the critics\' main concern?', o: ['It may not develop complex skills', 'It takes too much time', 'It is boring', 'It is only for young learners'], a: 0, e: '"may not be enough for complex skills"' },
          { q: 'What do the critics recommend?', o: ['Combining daily sessions with longer practice', 'Studying two hours every day', 'Stopping microlearning', 'Only taking mock tests'], a: 0, e: '"combining daily micro-sessions with occasional longer practice"' }
        ]
      },
      {
        name: 'Listening', th: 'การฟัง',
        script: `Attention, please. Due to the heavy rain, this afternoon's sports day has been postponed until next Tuesday. Classes will continue as normal after lunch. Students who have brought sports clothes may leave them in the gym, which will be open until four o'clock.`,
        qs: [
          { q: 'Why has the sports day been postponed?', o: ['Because of heavy rain', 'Because the gym is closed', 'Because of an exam', 'Because teachers are busy'], a: 0, e: '"Due to the heavy rain…"' },
          { q: 'What will happen after lunch?', o: ['Normal classes', 'The sports day', 'A school assembly', 'Students go home'], a: 0, e: '"Classes will continue as normal after lunch."' }
        ]
      },
      {
        name: 'Listening', th: 'การฟัง',
        script: `A: I've been offered a place on the teacher exchange programme in Japan.
B: Congratulations! When does it start?
A: In April, but I haven't decided whether to accept it yet.
B: Why not?
A: My mother is ill, and I'm not sure I should be away for six months.
B: That's a difficult decision. Maybe you could ask if a shorter programme is available.`,
        qs: [
          { q: 'Why is speaker A unsure about accepting?', o: ['Her mother is ill', 'She doesn\'t speak Japanese', 'The programme is too expensive', 'It starts too soon'], a: 0, e: '"My mother is ill…"' },
          { q: 'What does speaker B suggest?', o: ['Asking about a shorter programme', 'Refusing the offer', 'Taking her mother to Japan', 'Starting in April anyway'], a: 0, e: '"Maybe you could ask if a shorter programme is available."' }
        ]
      }
    ]
  },

  /* ───────────────────────── 12-WEEK PLAN ───────────────────────── */
  plan: [
    { w: '1', t: 'Unit 1 · Classroom Life', d: 'ปูพื้น tense + เริ่มนิสัยเรียนวันละ 20 นาที' },
    { w: '2', t: 'Unit 2 · Talking to Parents', d: 'ภาษาสุภาพ + modal' },
    { w: '3', t: 'Unit 3 · Technology in Education', d: 'Passive voice + ฝึกฟังประกาศ' },
    { w: '4', t: 'Unit 4 · Assessment & Feedback', d: 'Conditionals ทั้ง 4 แบบ' },
    { w: '5', t: 'สอบจำลองครั้งที่ 1 + ทบทวน', d: 'ดูจุดอ่อน แล้วกลับไปทวน Unit ที่ได้คะแนนต่ำ' },
    { w: '6', t: 'Unit 5 · Learning Together', d: 'Relative clauses + เขียนบรรยายบุคคล' },
    { w: '7', t: 'Unit 6 · Student Wellbeing', d: 'Reported speech + ฟังบทสนทนา' },
    { w: '8', t: 'Unit 7 · Education Around the World', d: 'คำเชื่อม + อ่านบทความเปรียบเทียบ' },
    { w: '9', t: 'Unit 8 · Career Growth', d: 'wish / past modals + เขียนอีเมล' },
    { w: '10', t: 'ทบทวนคำศัพท์ทั้งหมด', d: 'แฟลชการ์ดทุกวันจนจำได้ครบ 64 คำ' },
    { w: '11', t: 'สอบจำลองครั้งที่ 2', d: 'จับเวลาเสมือนจริง ฝึกบริหารเวลา' },
    { w: '12', t: 'สอบจำลองครั้งสุดท้าย + สมัครสอบจริง', d: 'เป้าหมาย ≥ 70% ก่อนไปสอบจริง' }
  ]
};
