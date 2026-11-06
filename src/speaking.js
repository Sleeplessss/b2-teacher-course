/* Speaking simulator content */
window.SPEAK = {
  formats: [
    { id: 'edusynch', exam: 'EduSynch', name: 'Speaking (CEFR 4 ทักษะ)', th: '3 คำถาม · เตรียม 15 วิ · พูด 45 วิ', prep: 15, perQ: 45, desc: 'เหมือนสอบจริงที่ศูนย์ HCEC: แสดงความคิดเห็นหรือเล่าประสบการณ์ แต่ละข้อมีเวลาเตรียม 15 วินาที แล้วพูด 45 วินาที' },
    { id: 'ielts1', exam: 'IELTS', name: 'Part 1 · Interview', th: 'ตอบคำถามเรื่องทั่วไป 4 ข้อ', prep: 0, perQ: 30, desc: 'ผู้คุมสอบถามคำถามสั้น ๆ เกี่ยวกับตัวคุณ ตอบข้อละ 20–30 วินาที ขยายความ 2–3 ประโยค' },
    { id: 'ielts2', exam: 'IELTS', name: 'Part 2 · Cue Card', th: 'เตรียม 1 นาที พูดต่อเนื่อง 2 นาที', prep: 60, talk: 120, desc: 'สุ่มบัตรหัวข้อ มีเวลาเตรียม 1 นาที (จดโน้ตได้) แล้วพูดต่อเนื่อง 1–2 นาที' },
    { id: 'ielts3', exam: 'IELTS', name: 'Part 3 · Discussion', th: 'อภิปรายเชิงลึก 3 ข้อ', prep: 0, perQ: 45, desc: 'คำถามเชิงความคิดเห็นที่ต่อยอดจาก Part 2 ตอบข้อละ ~45 วินาที ให้เหตุผลและตัวอย่าง' },
    { id: 'toefl_rep', exam: 'TOEFL', name: 'Listen and Repeat', th: 'ฟังแล้วพูดตาม 7 ประโยค', prep: 0, desc: 'ได้ยินประโยค 1 ครั้ง (ไม่แสดงข้อความ) แล้วพูดตามให้ถูกต้องที่สุด ประโยคจะยาวขึ้นเรื่อย ๆ' },
    { id: 'toefl_int', exam: 'TOEFL', name: 'Take an Interview', th: 'สัมภาษณ์ 4 คำถาม ข้อละ 45 วินาที', prep: 0, perQ: 45, desc: 'ไม่มีเวลาเตรียม ได้ยินคำถามแล้วตอบทันที คำถามจะเริ่มจากเรื่องตัวเองไปสู่ความคิดเห็น' },
    { id: 'cefr', exam: 'CEFR', name: 'Opinion Talk', th: 'เตรียม 30 วินาที พูด 1 นาที', prep: 30, talk: 60, desc: 'รูปแบบคล้ายข้อสอบ CEFR 4 ทักษะ: สุ่มหัวข้อความคิดเห็น แสดงจุดยืน ให้เหตุผล และยกตัวอย่าง' }
  ],

  part1: [
    { topic: 'Your job', qs: ['What subject do you teach?', 'Why did you decide to become a teacher?', 'What do you enjoy most about your job?', 'Is there anything you would like to change about your job?'] },
    { topic: 'Hometown', qs: ['Where is your hometown?', 'What do you like most about it?', 'Has your hometown changed much in recent years?', 'Would you like to live there in the future?'] },
    { topic: 'Free time', qs: ['What do you usually do in your free time?', 'Do you prefer spending free time alone or with other people?', 'Has the way you spend your free time changed since you were a child?', 'Is there a new hobby you would like to try?'] },
    { topic: 'Technology', qs: ['How often do you use your smartphone?', 'Which apps do you use most?', 'Do you think people spend too much time online?', 'Did you use much technology when you were at school?'] },
    { topic: 'Food', qs: ['What kind of food do you like?', 'Do you often cook at home?', 'Is there any food you didn\'t like as a child but enjoy now?', 'Do you prefer eating at home or eating out?'] },
    { topic: 'Reading', qs: ['Do you enjoy reading?', 'What kind of books do you read?', 'Do you prefer printed books or e-books?', 'Did your parents read to you when you were young?'] },
    { topic: 'Travel', qs: ['Do you like travelling?', 'Where did you go on your last holiday?', 'Do you prefer travelling alone or with others?', 'Where would you like to travel in the future?'] },
    { topic: 'Weather', qs: ['What\'s the weather usually like where you live?', 'What is your favourite season?', 'Does the weather affect your mood?', 'How do you keep cool on very hot days?'] },
    { topic: 'Music', qs: ['What kind of music do you like?', 'Can you play a musical instrument?', 'Do you listen to music while you work?', 'Is music important in Thai culture?'] },
    { topic: 'Sport and exercise', qs: ['Do you do any exercise?', 'What sports are popular in Thailand?', 'Did you play any sports at school?', 'Should schools give more time to sport?'] }
  ],

  cards: [
    { topic: 'Describe a teacher who has influenced you.', points: ['who this teacher was', 'when and where they taught you', 'what they were like', 'and explain how they influenced you'],
      p3: ['What qualities make a good teacher?', 'Is teaching more difficult today than in the past? Why?', 'Should teachers be paid more than other professionals?'],
      model: `I'd like to talk about my high school English teacher, Mrs Sunee. She taught me when I was in Grade 10 at a provincial school in Lampang. To be honest, before her class, English was my least favourite subject, because I found grammar really boring. But Mrs Sunee was different. She was patient, funny, and she always brought English songs and short stories into class. What I remember most is that she never laughed at our mistakes; instead, she encouraged us to keep trying. She influenced me in two ways. First, she made me fall in love with English, which is why I chose to study it at university. Second, she showed me what kind of teacher I wanted to be. Even now, when a student is struggling in my class, I ask myself, "What would Mrs Sunee do?"` },
    { topic: 'Describe a skill you would like to learn.', points: ['what the skill is', 'how you would learn it', 'how long it would take', 'and explain why you want to learn it'],
      p3: ['What skills are most important for young people today?', 'Is it better to learn skills from a teacher or online?', 'Do adults find it harder to learn new skills than children?'],
      model: `A skill I would really like to learn is video editing. These days, many of my students learn from short videos, and I think if I could make my own lesson videos, my teaching would be much more engaging. I'd probably start by taking an online course, because there are lots of free tutorials, and then I'd practise by making short clips for my classes. I think it would take me around three months to become fairly confident, as long as I practised a little every day. The main reason I want to learn it is to connect better with my students, but I also think it would be a lot of fun. I could even use it to make videos of family trips, which my parents would definitely appreciate.` },
    { topic: 'Describe a time when you helped someone.', points: ['who you helped', 'what the situation was', 'how you helped them', 'and explain how you felt about it'],
      p3: ['Why do some people enjoy helping others?', 'Should schools teach children to volunteer?', 'Do people help each other less in big cities?'],
      model: `I'd like to describe a time when I helped a new colleague at my school. Last year, a young teacher called Pim joined our English department. It was her first teaching job, and she was struggling with a very noisy Grade 8 class. She told me she felt like giving up. So, I invited her to observe some of my lessons, and we met every Friday afternoon to plan together. I shared some simple routines that had worked for me, such as starting every lesson with a short task on the board. After about a month, her classes became much calmer, and she started to really enjoy teaching. I felt incredibly proud, maybe even prouder than when my own students do well, because I remembered how difficult my own first year was.` },
    { topic: 'Describe a memorable lesson you taught or attended.', points: ['what the lesson was about', 'who was there', 'what happened', 'and explain why it was memorable'],
      p3: ['What makes a lesson interesting for students?', 'Should students be allowed to choose what they learn?', 'How will classrooms change in the future?'],
      model: `The lesson I want to talk about is one I taught about two years ago to a Grade 11 class. The topic was "giving directions", which is usually quite boring. So, instead of using the textbook, I took the students outside and gave each group a map of the school with a secret "treasure" hidden somewhere. They had to give each other directions in English to find it. At first, they were shy, but within ten minutes everyone was shouting directions and laughing. It was memorable for me because even the quietest students joined in. A few weeks later, one of them told me it was the first time she had ever enjoyed speaking English. That lesson taught me that students learn best when they're active and having fun.` },
    { topic: 'Describe a book that you enjoyed reading.', points: ['what the book was', 'when you read it', 'what it was about', 'and explain why you enjoyed it'],
      p3: ['Do young people read less than in the past?', 'What are the benefits of reading for children?', 'Will printed books disappear in the future?'],
      model: `A book I really enjoyed is "Wonder" by R. J. Palacio. I read it about three years ago, after a colleague recommended it for our school reading programme. It's about a boy called Auggie who was born with a facial difference and goes to a regular school for the first time. The story is told from the point of view of several characters, including Auggie, his sister and his classmates. I enjoyed it for two reasons. First, the language is simple, so it's perfect for English learners, but the message is deep. Second, it made me think about kindness and how students treat each other. After reading it, I actually used some chapters in my class, and it led to some really meaningful discussions about bullying.` },
    { topic: 'Describe a place in your country that you would recommend to visitors.', points: ['where it is', 'how you know about it', 'what visitors can do there', 'and explain why you would recommend it'],
      p3: ['How does tourism affect local communities?', 'Should famous places limit the number of tourists?', 'Why do people enjoy travelling to other countries?'],
      model: `I'd recommend Nan, a province in the north of Thailand. I first went there with my family about five years ago, and I've been back twice since then. It's much quieter than Chiang Mai, but it has beautiful mountains, old temples and a really relaxed atmosphere. Visitors can see the famous mural paintings at Wat Phumin, cycle around the old town, and visit Doi Samer Dao to watch the sunset. I'd recommend it because it gives you a real sense of traditional northern Thai life without the crowds. The local people are very friendly, and the food, especially khao soi, is amazing. If someone wants to experience a more authentic side of Thailand, Nan is definitely the place to go.` },
    { topic: 'Describe a piece of technology that you find useful.', points: ['what it is', 'how often you use it', 'what you use it for', 'and explain why it is useful to you'],
      p3: ['Has technology made people\'s lives better or worse?', 'Should young children be allowed to use smartphones?', 'What technology will be important in the next twenty years?'],
      model: `The piece of technology I find most useful is actually my laptop. I use it almost every day, both at school and at home. At work, I use it to prepare slides, create worksheets and record my students' scores. In the evenings, I sometimes use it to take online courses or to video call my family who live in another province. It's useful to me mainly because it saves me so much time. For example, in the past I had to write every test by hand, but now I can reuse and edit materials in minutes. It also helps me keep improving as a teacher, because I can access training and ideas from all over the world without leaving my house.` },
    { topic: 'Describe a time when you had to make an important decision.', points: ['what the decision was', 'when you made it', 'what options you had', 'and explain how you felt about the decision'],
      p3: ['Do young people make decisions differently from older people?', 'Should parents make important decisions for their children?', 'Is it better to make decisions quickly or slowly?'],
      model: `One important decision I made was whether to move to a school in Bangkok or stay at my school in the countryside. This was about four years ago, when I was offered a position at a large school in the city. The Bangkok job had a higher salary and more opportunities for training, but staying meant I could live near my parents and continue working with students I really cared about. I spent about two weeks thinking about it and talking to my family. In the end, I decided to stay. At first I wondered if I had made a mistake, but now I feel it was the right choice, because I've been able to start an English club that has made a real difference to the students here.` },
    { topic: 'Describe an event that you helped to organise.', points: ['what the event was', 'who attended it', 'what you did to organise it', 'and explain how successful it was'],
      p3: ['Why are school events important?', 'What skills do people need to organise events?', 'Are large public events a waste of money?'],
      model: `I'd like to talk about an English Day that I helped organise at my school last year. It was a one-day event for around three hundred students from Grades 7 to 12, and parents were invited too. My job was to coordinate the activities, so I worked with five other teachers to plan games, a spelling competition and a short drama show. We also had to arrange prizes, decorations and a timetable for the whole day. It was a lot of work, and on the day itself, the sound system broke down. But overall, it was really successful. The students were excited, and several parents told us they hoped we'd do it again. It also improved teamwork among the teachers, which was an unexpected benefit.` },
    { topic: 'Describe a goal you hope to achieve in the future.', points: ['what the goal is', 'when you hope to achieve it', 'what you are doing to achieve it', 'and explain why this goal is important to you'],
      p3: ['Is it important for young people to set goals?', 'Do people today have more opportunities to achieve their goals?', 'What can stop people from achieving their goals?'],
      model: `One goal I hope to achieve is to reach B2 level in English and use the result to apply for a higher academic standing. I'm hoping to achieve this within the next year. To prepare, I've been studying every day for about twenty minutes, mostly focusing on listening and speaking, which are my weakest skills. I also practise mock tests at the weekend to get used to the format. This goal is important to me for two reasons. Professionally, it would allow me to apply for promotion a year earlier. But personally, it's also about confidence. As an English teacher, I want to be a good role model, and I think my students will be more motivated if they see me working hard to improve too.` },
    { topic: 'Describe a person you admire who helps the community.', points: ['who this person is', 'what they do', 'how you know them', 'and explain why you admire them'],
      p3: ['Who should be responsible for helping people in a community?', 'Do people volunteer less than in the past?', 'How can schools encourage community service?'],
      model: `The person I'd like to talk about is a local nurse in my village called Khun Prapai. She's in her fifties, and as well as her full-time job at the district hospital, she spends her weekends visiting elderly people who live alone. She checks their blood pressure, helps them with their medicine and sometimes just sits and chats with them. I know her because she's a friend of my mother's, and she also comes to our school once a year to teach first aid. I admire her because she does all of this without expecting anything in return. She shows that you don't need to be rich or famous to make a big difference in people's lives, and I often tell my students about her as an example of real kindness.` },
    { topic: 'Describe a time when you received good news.', points: ['what the news was', 'when and how you received it', 'who you shared it with', 'and explain how you felt'],
      p3: ['How do people usually share good news nowadays?', 'Do newspapers and TV focus too much on bad news?', 'Why do some people find it hard to celebrate success?'],
      model: `I'd like to talk about the day I found out I had passed the teacher recruitment exam. It was about eight years ago. I remember I was at home helping my mother cook dinner, and my friend suddenly called me and told me to check the results online. My hands were shaking as I typed my ID number, and when I saw my name on the list, I actually screamed. The first person I told was my mother, who started crying, and then we called my father, who was working in another province. I felt a mixture of relief and excitement, because I had failed the exam the year before. That news completely changed my life, and it reminded me that persistence really does pay off.` }
  ],

  interviews: [
    { theme: 'Study habits', qs: ['Tell me about where you usually study or prepare your work.', 'What do you do when you find it hard to concentrate?', 'Some people think students learn more in groups than alone. What is your opinion?', 'Should schools give students less homework? Why or why not?'] },
    { theme: 'Technology and learning', qs: ['How do you use technology in your daily life?', 'Describe a website or app that has helped you learn something.', 'Do you think artificial intelligence will help or harm education? Explain.', 'Should young children learn to code at school? Why or why not?'] },
    { theme: 'Community', qs: ['Tell me about the neighbourhood where you live.', 'What is one thing you would improve in your community?', 'Some people say that young people today care less about their community. Do you agree?', 'Should volunteering be required for high school students? Explain your view.'] },
    { theme: 'Work and careers', qs: ['What did you want to be when you were a child?', 'What is the most important skill you use in your job?', 'Is it better to stay with one employer for a long time or to change jobs often?', 'Should the government do more to help people develop new skills during their careers?'] },
    { theme: 'Environment', qs: ['What do you do in your daily life to protect the environment?', 'Tell me about an environmental problem in your area.', 'Do you think individuals or governments should be mainly responsible for protecting the environment?', 'Should schools spend more time teaching about climate change? Why?'] },
    { theme: 'Culture and travel', qs: ['Tell me about a festival that is important to you.', 'What would you show a foreign visitor in your hometown?', 'Do you think travelling abroad is necessary to understand other cultures?', 'Is it important for countries to protect their traditional culture? Explain.'] }
  ],

  repeat: [
    { t: 'The library opens at eight.', n: 1 },
    { t: 'Please sign in at the front desk.', n: 1 },
    { t: 'Our first class starts after lunch.', n: 1 },
    { t: 'The science building is next to the gym.', n: 1 },
    { t: 'You can borrow up to five books at a time.', n: 2 },
    { t: 'Students should bring their ID cards to every exam.', n: 2 },
    { t: 'The cafeteria serves breakfast from seven until nine thirty.', n: 2 },
    { t: 'If you need help with your schedule, please ask an adviser.', n: 2 },
    { t: 'The computer lab will be closed on Friday for maintenance.', n: 2 },
    { t: 'All first-year students are required to attend the welcome meeting in the main hall.', n: 3 },
    { t: 'Assignments submitted after the deadline will lose ten percent of the total mark.', n: 3 },
    { t: 'The tour will finish at the student centre, where you can register for clubs and activities.', n: 3 },
    { t: 'Before you leave the laboratory, make sure that all of the equipment has been cleaned and returned.', n: 3 }
  ],

  opinions: [
    'Should students wear school uniforms? Give your opinion and reasons.',
    'Is it better to study in the morning or in the evening? Why?',
    'Should mobile phones be banned in schools?',
    'What is the best way to learn a foreign language?',
    'Should homework be given at weekends?',
    'Is online learning as effective as classroom learning?',
    'Should all students learn a second foreign language, such as Chinese?',
    'Are exams the best way to measure what students have learned?',
    'Should schools teach students how to manage money?',
    'Is it better to live in a big city or a small town?',
    'Should teachers use social media to communicate with students?',
    'What are the advantages and disadvantages of working from home?',
    'Should sports be a compulsory subject at school?',
    'Do you think people read enough books nowadays?',
    'Should children start learning English in kindergarten?',
    'Is it important for teachers to keep studying after they start working?'
  ],

  edu: {
    exp: [
      'Talk about a time when you learned something new outside of school or work.',
      'Describe a memorable trip you have taken. Why was it special?',
      'Talk about a time when you had to solve a problem at work.',
      'Describe a happy moment from your teaching career or your studies.',
      'Talk about a time when you worked as part of a team. What was your role?',
      'Describe a time when you had to learn how to use a new technology.',
      'Talk about a person who helped you when you needed it.',
      'Describe a time when you had to speak in front of a large group. How did you feel?',
      'Talk about a goal you have achieved and how you achieved it.'
    ],
    op: [
      'Should students be allowed to use AI tools to help with their homework? Why or why not?',
      'Some people think homework is unnecessary. What is your opinion?',
      'Is it better to work in a big city or in the countryside? Explain your answer.',
      'Should schools spend more time teaching practical skills, such as cooking and managing money?',
      'Does social media have a positive or a negative effect on young people? Explain.',
      'Should English only be taught by native speakers? Give your opinion.',
      'Is it important for teachers to keep learning throughout their careers? Why?',
      'Are exams a fair way to assess what students have learned?',
      'Should public transport be free for students? Why or why not?'
    ]
  },

  phrases: {
    start: ['Well, that\'s an interesting question.', 'To be honest, …', 'I\'d say that…', 'I\'d like to talk about…'],
    reason: ['The main reason is that…', 'This is mainly because…', 'Another point is that…', 'On top of that, …'],
    example: ['For example, …', 'For instance, in my school…', 'I remember when…', 'A good example of this is…'],
    time: ['Let me think about that for a second.', 'That\'s not something I\'ve thought about before, but…', 'How can I put it…'],
    end: ['So, overall, I think…', 'That\'s why I believe…', 'All in all, …']
  },

  criteria: [
    { k: 'flu', name: 'Fluency & Coherence', th: 'พูดต่อเนื่อง ไม่หยุดนาน เชื่อมความคิดด้วย because / so / however' },
    { k: 'lex', name: 'Vocabulary', th: 'ใช้คำศัพท์หลากหลาย ไม่ซ้ำคำเดิม มีคำศัพท์ระดับ B2 อย่างน้อย 2–3 คำ' },
    { k: 'gra', name: 'Grammar', th: 'ใช้ tense ถูก มีประโยคซับซ้อน (if / which / although) อย่างน้อย 1 ประโยค' },
    { k: 'pro', name: 'Pronunciation', th: 'ออกเสียงท้ายคำ (-s, -ed) ชัด เน้นเสียงคำสำคัญ ฟังเข้าใจง่าย' },
    { k: 'task', name: 'Answered the question', th: 'ตอบตรงคำถาม ครบทุกประเด็น และให้เหตุผล/ตัวอย่าง' }
  ]
};
