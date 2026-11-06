/* EduSynch – CEFR Level Test (HCEC centres): 4 skills */
window.EXAMS.edusynch = {
  name: 'EduSynch – CEFR Level Test (ศูนย์ HCEC)', short: 'CEFR 4 ทักษะ', b2: 'เฉลี่ย 4 ทักษะ',
  about: 'ข้อสอบที่ครูนิยมใช้ยื่นลดเวลาวิทยฐานะ สอบที่ศูนย์ HCEC ด้วยคอมพิวเตอร์ ครบ 4 ทักษะ เรียงลำดับ Reading → Listening → Speaking → Writing ผลออกเป็นระดับ CEFR (สเกลละเอียด 15 ระดับ A0–C2) แยกรายทักษะ และระดับรวมเป็นค่าเฉลี่ย 4 ทักษะ',
  format: [
    ['Reading', '12–15 ข้อ · ศัพท์ในบริบท ความเข้าใจ การอนุมาน สรุปใจความ', '20–30 นาที'],
    ['Listening', '8–12 ข้อ · บทสนทนา + บรรยายสั้น', '20–25 นาที'],
    ['Speaking', '3 คำถาม · เตรียม 15 วิ + พูด 45 วิ ต่อข้อ', '15–25 นาที'],
    ['Writing', 'เรียงความ 1 เรื่อง อย่างน้อย 150 คำ', '20–30 นาที']
  ],
  tips: [
    'ระดับรวม = ค่าเฉลี่ย 4 ทักษะ — ทักษะที่อ่อนที่สุดจะดึงผลรวมลง ฝึก Speaking/Writing ให้สม่ำเสมอ',
    'Reading: ข้อ vocabulary in context ให้อ่านประโยครอบ ๆ คำนั้น อย่าเดาจากความหมายที่จำมา',
    'Speaking: ใช้ 15 วินาทีวางโครง "จุดยืน → เหตุผล → ตัวอย่าง" แล้วพูดให้เต็ม 45 วินาที',
    'Writing: ต้องได้อย่างน้อย 150 คำ แบ่ง 4 ย่อหน้า (บทนำ · เหตุผล 1 · เหตุผล 2 · สรุป) และเหลือเวลา 2 นาทีตรวจทาน',
    'ค่าสมัครประมาณ 2,675 บาท (รวม VAT) ผลสอบใช้ยื่นได้ไม่เกิน 2 ปี — ตรวจตารางสอบและเงื่อนไขล่าสุดกับศูนย์ HCEC'
  ],
  wcrit: [
    { k: 'ta', name: 'Task Achievement', th: 'ตอบตรงโจทย์ ครบทุกประเด็น ยาวอย่างน้อย 150 คำ' },
    { k: 'cc', name: 'Coherence & Cohesion', th: 'แบ่งย่อหน้าชัดเจน เรียงความคิดเป็นลำดับ ใช้คำเชื่อมหลากหลาย' },
    { k: 'lr', name: 'Lexical Resource', th: 'คำศัพท์หลากหลาย ไม่ซ้ำคำเดิม มีคำระดับ B2 หลายคำ' },
    { k: 'gr', name: 'Grammatical Range & Accuracy', th: 'มีประโยคซับซ้อน (if / which / although) และผิดไวยากรณ์น้อย' }
  ],

  /* full mock content */
  mock: {
    reading: [
      {
        title: 'Learning Outside the Classroom',
        passage: `Outdoor learning is becoming increasingly popular in schools around the world. Supporters argue that lessons taught in natural environments, such as parks, gardens or forests, can improve both students' concentration and their physical health. A study conducted in several primary schools found that children who had regular outdoor lessons were more engaged when they returned to the classroom, and teachers reported fewer behaviour problems.

However, outdoor learning is not without its challenges. Teachers need to plan carefully to make sure that activities have clear learning objectives, rather than simply being an excuse to leave the classroom. Safety is another concern, particularly for younger children, and bad weather can disrupt even the best-prepared lessons. In addition, many schools in cities have limited access to green spaces.

Despite these difficulties, a growing number of teachers believe the benefits outweigh the drawbacks. Some schools have found creative solutions, such as turning a small car park into a vegetable garden or using the school roof for science experiments. As one teacher put it, "You don't need a forest to learn outside – you just need a little imagination."`,
        qs: [
          { t: 'Vocabulary in context', q: 'The word "disrupt" in paragraph 2 is closest in meaning to', o: ['interrupt', 'improve', 'organise', 'predict'], a: 0, e: 'bad weather can disrupt lessons = ทำให้บทเรียนหยุดชะงัก' },
          { t: 'Detail', q: 'According to the study, what happened when children returned to the classroom?', o: ['They were more engaged', 'They were more tired', 'They forgot what they had learned', 'They wanted to stay outside'], a: 0, e: '"were more engaged when they returned to the classroom"' },
          { t: 'Inference', q: 'What can be inferred about schools in cities?', o: ['They may find it harder to organise outdoor lessons', 'They do not allow outdoor lessons', 'Their students have more behaviour problems', 'They have more money for gardens'], a: 0, e: '"many schools in cities have limited access to green spaces" → จัดได้ยากกว่า' },
          { t: 'Summary', q: 'Which sentence best summarises the passage?', o: ['Outdoor learning has clear benefits and some challenges, which creative schools can overcome.', 'Outdoor learning is dangerous and should be avoided.', 'Only schools near forests can offer outdoor learning.', 'Students learn better indoors than outdoors.'], a: 0, e: 'ย่อหน้า 1 ข้อดี · ย่อหน้า 2 ความท้าทาย · ย่อหน้า 3 ทางแก้' }
        ]
      },
      {
        title: 'Email: New Mentoring Programme',
        passage: `Dear colleagues,

I am delighted to announce that our school will be launching a mentoring programme for newly qualified teachers from the start of next term. Each new teacher will be paired with an experienced colleague, who will meet with them at least twice a month to discuss lesson planning, classroom management and professional development.

We are now looking for volunteers to act as mentors. Ideally, mentors should have at least five years of teaching experience, although we will also consider colleagues with fewer years who have relevant training. Mentors will receive a reduction of two teaching hours per week, as well as a certificate that can be included in their professional portfolio.

If you are interested, please complete the short online form by Friday 12 May. A one-day training workshop for all mentors will take place on Saturday 20 May. Attendance at this workshop is compulsory.

Best regards,
Napat Siriwan, Deputy Director`,
        qs: [
          { t: 'Main purpose', q: 'What is the main purpose of the email?', o: ['To invite teachers to volunteer as mentors', 'To announce a new deputy director', 'To cancel a training workshop', 'To ask new teachers to complete a form'], a: 0, e: '"We are now looking for volunteers to act as mentors."' },
          { t: 'Detail', q: 'What will mentors receive?', o: ['Fewer teaching hours and a certificate', 'Extra pay and a holiday', 'A new classroom', 'Free university courses'], a: 0, e: '"a reduction of two teaching hours per week, as well as a certificate"' },
          { t: 'Inference', q: 'Which teacher would probably NOT be accepted as a mentor?', o: ['A teacher with two years\' experience and no relevant training', 'A teacher with eight years\' experience', 'A teacher with three years\' experience and mentor training', 'A teacher with six years\' experience who teaches maths'], a: 0, e: 'ต้องมีประสบการณ์ 5 ปี หรือน้อยกว่าแต่มีการอบรมที่เกี่ยวข้อง' },
          { t: 'Vocabulary in context', q: 'The word "compulsory" in the email is closest in meaning to', o: ['required', 'optional', 'expensive', 'enjoyable'], a: 0, e: 'compulsory = ต้องเข้าร่วม (บังคับ)' }
        ]
      },
      {
        title: 'The Value of Mistakes',
        passage: `For many students, making a mistake in class is a source of embarrassment. They may stay silent rather than risk giving a wrong answer in front of their classmates. Yet research in educational psychology suggests that errors, when handled well, can actually strengthen learning.

When learners make a mistake and then receive corrective feedback, they often remember the correct information better than if they had simply been told the answer from the start. This is especially true when the learner was fairly confident in the wrong answer – a phenomenon sometimes called the "hypercorrection effect". The surprise of being wrong appears to make the correction more memorable.

The key, however, lies in the classroom culture. In classrooms where mistakes are punished or mocked, students tend to avoid challenging tasks altogether. Teachers can create a safer environment by sharing their own mistakes, praising effort rather than only correct answers, and treating errors as useful information. In such classrooms, students are more willing to take risks, and taking risks is an essential part of learning a language.`,
        qs: [
          { t: 'Detail', q: 'Why do some students stay silent in class?', o: ['They are afraid of being embarrassed by a wrong answer', 'They do not understand the questions', 'They prefer to write their answers', 'Their teachers do not ask questions'], a: 0, e: '"a source of embarrassment… rather than risk giving a wrong answer"' },
          { t: 'Vocabulary in context', q: 'The word "mocked" in paragraph 3 is closest in meaning to', o: ['laughed at', 'corrected', 'ignored', 'recorded'], a: 0, e: 'mock = ล้อเลียน' },
          { t: 'Detail', q: 'According to the passage, the "hypercorrection effect" happens when', o: ['a learner was confident in a wrong answer and is then corrected', 'a teacher corrects too many mistakes', 'students correct each other\'s work', 'a learner avoids difficult tasks'], a: 0, e: '"especially true when the learner was fairly confident in the wrong answer"' },
          { t: 'Inference', q: 'The writer would most likely agree that teachers should', o: ['make students feel safe to make mistakes', 'avoid giving students feedback', 'only praise correct answers', 'give students easier tasks'], a: 0, e: 'ย่อหน้าสุดท้ายเสนอให้สร้างบรรยากาศที่ผิดได้' }
        ]
      }
    ],
    listening: [
      {
        title: 'Conversation 1',
        script: `A: Hi Joe. Are you going to the parents' evening on Thursday?
B: I'm supposed to, but I've got a problem. My car's at the garage, and they said it won't be ready until Friday.
A: Oh no. How will you get to school?
B: I was thinking of taking the bus, but the last one leaves at six, and the meeting doesn't finish until seven thirty.
A: Well, I live near you. Why don't I give you a lift? I'm leaving at five fifteen.
B: Really? That would be fantastic. I'll buy you a coffee to say thanks.`,
        qs: [
          { t: 'Detail', q: 'Why does Joe have a problem?', o: ['His car is being repaired', 'He has to work late', 'He lost his bus pass', 'The meeting has been moved'], a: 0, e: '"My car\'s at the garage"' },
          { t: 'Inference', q: 'Why can\'t Joe take the bus home?', o: ['The last bus leaves before the meeting ends', 'The bus is too expensive', 'There is no bus near his house', 'The bus driver is on strike'], a: 0, e: 'รถเมล์คันสุดท้าย 6 โมง แต่ประชุมจบ 1 ทุ่มครึ่ง' },
          { t: 'Detail', q: 'What does the woman offer to do?', o: ['Drive him to school', 'Lend him her car', 'Speak to the parents for him', 'Buy him a coffee'], a: 0, e: '"Why don\'t I give you a lift?"' }
        ]
      },
      {
        title: 'Conversation 2',
        script: `A: Have you had a chance to look at Mint's science project?
B: Yes, I read it last night. The research is excellent, but her conclusion doesn't really match her results.
A: I noticed that too. I think she ran out of time.
B: Probably. She told me she'd been ill for most of last week.
A: In that case, shall we give her a few more days to revise it?
B: I think that's fair. As long as she submits it before the end of the month, it shouldn't affect her grade.`,
        qs: [
          { t: 'Detail', q: 'What is the problem with Mint\'s project?', o: ['Her conclusion does not match her results', 'Her research is too short', 'She copied another student\'s work', 'She chose the wrong topic'], a: 0, e: '"her conclusion doesn\'t really match her results"' },
          { t: 'Inference', q: 'Why might Mint have had difficulties?', o: ['She was ill', 'She had too much homework', 'She did not understand the task', 'She was on holiday'], a: 0, e: '"she\'d been ill for most of last week"' },
          { t: 'Detail', q: 'What do the teachers decide?', o: ['To give her more time to revise it', 'To give her a lower grade', 'To ask her parents to help', 'To make her start again'], a: 0, e: '"give her a few more days to revise it"' }
        ]
      },
      {
        title: 'Short talk',
        script: `Good afternoon. Today's talk is about sleep and learning. Many teenagers go to bed late and wake up early for school, which means they regularly get less than the eight to ten hours of sleep that experts recommend for their age. This matters because sleep plays a key role in memory. During deep sleep, the brain processes and stores information learned during the day. Students who stay up late revising may actually remember less than those who study for a shorter time and then get a good night's sleep. For this reason, some schools have experimented with later start times, and several have reported improvements in attendance and concentration.`,
        qs: [
          { t: 'Detail', q: 'According to the speaker, what happens during deep sleep?', o: ['The brain processes and stores information', 'The brain forgets unimportant information', 'Students dream about their lessons', 'The body recovers from exercise'], a: 0, e: '"During deep sleep, the brain processes and stores information"' },
          { t: 'Detail', q: 'What have some schools done?', o: ['Started the school day later', 'Given students more homework', 'Banned phones at night', 'Shortened the school holidays'], a: 0, e: '"some schools have experimented with later start times"' }
        ]
      }
    ],
    writing: [
      { type: 'Opinion', prompt: 'Some people think that all teachers should be required to pass an English proficiency test, whatever subject they teach. Do you agree or disagree? Give reasons and examples to support your opinion.',
        model: `In recent years, English has become increasingly important in Thai education, and some people believe that every teacher should have to pass an English proficiency test. Although I understand this view, I only partly agree with it.

On the one hand, English skills can benefit teachers of all subjects. For example, science and maths teachers can access a huge range of online resources, research and training courses that are only available in English. Teachers with good English can also act as role models, showing students that English is a useful tool rather than just a school subject.

On the other hand, making a test compulsory for everyone could put unfair pressure on teachers whose main strength is their subject knowledge. An excellent Thai literature teacher, for instance, should not be judged mainly on their English ability.

In conclusion, I believe that schools should strongly encourage all teachers to improve their English and provide free training, but a test should only be required for English teachers.` },
      { type: 'Personal experience', prompt: 'Describe a challenge you have faced in your work or studies. Explain how you dealt with it and what you learned from the experience.',
        model: `One of the biggest challenges I have faced in my career happened during my second year of teaching, when I was given a Grade 9 class with serious behaviour problems.

At first, I tried to control the class by being very strict. I raised my voice, gave punishments and sent students to the head of department. However, the situation became worse, and I started to dread going to that classroom. I realised that I needed to change my approach.

I asked an experienced colleague to observe one of my lessons. She suggested that I focus on building relationships first. I started greeting students at the door, learning about their interests and giving them more responsibility, such as leading short activities. Slowly, the atmosphere improved, and by the end of the term the class had become one of my favourites.

This experience taught me that behaviour problems often have deeper causes, and that asking for help is a sign of professionalism, not weakness.` },
      { type: 'Opinion', prompt: 'Is it better for students to learn at home through online courses or at school with a teacher? Explain your opinion with reasons and examples.',
        model: `Online learning has grown rapidly in recent years, and many people now question whether traditional schools are still necessary. In my opinion, learning at school with a teacher is still the better option for most students, although online courses can be a useful addition.

The main reason is that school provides much more than academic knowledge. In a classroom, students learn to work in teams, communicate face to face and solve problems together. These social skills are extremely difficult to develop through a screen. In addition, teachers can notice immediately when a student is confused or upset and offer support.

That said, online courses have clear advantages. They allow students to learn at their own pace and to study subjects that their school may not offer. For example, a student in a small rural school could take an online coding course that would otherwise be unavailable.

Overall, I believe the ideal approach is to combine both: school-based learning as the foundation, with online courses to extend students' opportunities.` },
      { type: 'Personal experience', prompt: 'Write about a person who has had an important influence on your life. Explain who they are, what they did, and why they are important to you.',
        model: `The person who has had the greatest influence on my life is my grandmother, who raised me while my parents worked in Bangkok.

My grandmother never had the opportunity to finish primary school, yet she was one of the wisest people I have ever known. Every evening, she would sit with me while I did my homework, even though she could not help with most of the subjects. She always said that education was the one thing nobody could take away from me.

She also taught me the value of patience and kindness. When I was frustrated or failed a test, she never criticised me. Instead, she reminded me that every mistake was a chance to learn something new.

Today, as a teacher, I often think of her when I work with students who are struggling. I try to show them the same patience and belief that she showed me. Without her encouragement, I am certain I would not be the person I am today.` }
    ]
  },

  sets: [
    { id: 'edu-full', title: 'ข้อสอบจำลองเต็มรูปแบบ 4 ทักษะ', th: 'R 12 ข้อ · L 8 ข้อ · S 3 ข้อ (บันทึกเสียง) · W 150 คำ · ~55 นาที', kind: 'full4' },
    {
      id: 'edu-read', title: 'Reading Practice · Screen or Paper?', th: 'ฝึกครบ 4 ประเภทคำถาม', kind: 'mcq',
      intro: 'คำถาม EduSynch Reading มี 4 แบบ: Vocabulary in context · Detail · Inference · Summary/Main idea',
      passage: `Screen or Paper?

As more schools introduce tablets and e-books, researchers have begun to ask whether reading on a screen is as effective as reading on paper. A number of studies suggest that, for short and simple texts, there is little difference. For longer and more complex texts, however, readers tend to understand more when reading on paper.

One explanation is that people read faster on screens, often skimming rather than reading carefully. Many readers are also overconfident: they believe they have understood a digital text well, but their test results show otherwise. In addition, physical books give readers a sense of where information is located – near the beginning, in the middle or at the end – which may help them remember it.

This does not mean that schools should abandon digital materials. Instead, experts recommend teaching students to slow down when reading on screens and to use strategies such as taking notes and summarising each section.`,
      qs: [
        { q: '[Vocabulary] The word "skimming" in paragraph 2 means', o: ['reading quickly to get the general idea', 'reading every word slowly', 'reading aloud to others', 'reading the same text twice'], a: 0, e: 'skim = อ่านผ่าน ๆ เร็ว ๆ ตรงข้ามกับ "reading carefully" ในประโยคเดียวกัน' },
        { q: '[Detail] When does reading on paper seem to have an advantage?', o: ['With longer, more complex texts', 'With short, simple texts', 'With all types of texts', 'Only for young children'], a: 0, e: '"For longer and more complex texts, however, readers tend to understand more when reading on paper."' },
        { q: '[Inference] What does the writer suggest about many digital readers?', o: ['They think they understand more than they really do', 'They read more carefully than paper readers', 'They prefer printed books', 'They take more notes'], a: 0, e: 'overconfident: เชื่อว่าเข้าใจดี แต่ผลสอบไม่ใช่' },
        { q: '[Main idea] What is the writer\'s main recommendation?', o: ['Teach students strategies for reading on screens', 'Stop using digital materials in schools', 'Only use paper books for exams', 'Give every student a tablet'], a: 0, e: '"This does not mean that schools should abandon digital materials. Instead, experts recommend…"' }
      ]
    },
    {
      id: 'edu-listen', title: 'Listening Practice · Radio Interview', th: 'สัมภาษณ์ทางวิทยุ 3 ข้อ', kind: 'mcq',
      script: `A: Welcome back to Teacher Talk. With me today is Dr Somsak, who runs a free English camp for teachers every summer. Dr Somsak, why did you start the camp?
B: Well, I kept meeting teachers who could read English quite well but felt very nervous about speaking. So, we created a camp where the only rule is that everyone speaks English all day, at meals, during activities, everywhere.
A: That sounds challenging!
B: It is, especially on the first day. But by the third day, most people are much more relaxed. Many tell us it's the first time they've used English for real communication rather than for a test.
A: And how can teachers apply?
B: Applications open in March on our website. Places are limited to sixty, so I'd recommend applying early.`,
      qs: [
        { q: 'Why did Dr Somsak start the camp?', o: ['Many teachers lacked confidence in speaking', 'Teachers wanted to improve their reading', 'He wanted to train English examiners', 'Schools asked him to run a summer course'], a: 0, e: '"could read English quite well but felt very nervous about speaking"' },
        { q: 'What is the main rule of the camp?', o: ['Everyone must speak English all the time', 'Everyone must take a test each day', 'Teachers must bring their students', 'Phones are not allowed'], a: 0, e: '"the only rule is that everyone speaks English all day"' },
        { q: 'What does Dr Somsak advise listeners to do?', o: ['Apply early because places are limited', 'Wait until the camp is advertised', 'Practise speaking before applying', 'Call him for more information'], a: 0, e: '"Places are limited to sixty, so I\'d recommend applying early."' }
      ]
    },
    { id: 'edu-w-op', title: 'Writing Practice · Opinion Essay', th: 'เรียงความแสดงความคิดเห็น ≥150 คำ (20 นาที)', kind: 'write', wref: 0 },
    { id: 'edu-w-exp', title: 'Writing Practice · Personal Experience', th: 'เล่าประสบการณ์ ≥150 คำ (20 นาที)', kind: 'write', wref: 1 }
  ]
};
(function () {
  var E = window.EXAMS.edusynch, base = {
    min: 150, minutes: 20,
    tips: ['ย่อหน้า 1: ตอบโจทย์ / บอกจุดยืนหรือเกริ่นเรื่อง', 'ย่อหน้า 2–3: เหตุผลหรือเหตุการณ์ + ตัวอย่างที่เป็นรูปธรรม', 'ย่อหน้า 4: สรุป / สิ่งที่ได้เรียนรู้', 'เหลือเวลา 2 นาทีตรวจ tense, -s/-ed, คำสะกด'],
    phrases: ['In my opinion, …', 'Although I understand…, I believe…', 'For example, …', 'On the other hand, …', 'This experience taught me that…', 'In conclusion, …']
  };
  E.sets.forEach(function (s) {
    if (s.kind === 'write') { var w = E.mock.writing[s.wref]; Object.assign(s, base, { prompt: w.prompt, model: w.model }); }
  });
})();
