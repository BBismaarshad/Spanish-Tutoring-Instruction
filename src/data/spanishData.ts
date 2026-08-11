import { Program, Testimonial, QuizQuestion } from '../types';

export const INSTITUTE_INFO = {
  name: "Boutique Spanish Institute",
  tagline: "Spanish Tutoring & Cultural Instruction in Austin, TX",
  phone: "+1 512-771-7477",
  phoneDisplay: "(512) 771-7477",
  email: "info@austinspanishtutoring.com",
  address: "3303 Northland Dr #205, Austin, TX 78731",
  neighborhood: "Northland Dr / Central West Austin",
  rating: 4.9,
  reviewCount: 18,
  heroImageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBspyM9RTuYM-ArOjjfMryZuVeHyr52SufRAFwRWdHa2NlAAyMpM5KgwKZOXg8-OzJxcFZMZqtlRnZFz01zpJWrlEmshUShFI_fw0FI_eO8jQOHwL_k7jn5R-2FXi0jWwyQHGEByZdkylASPjFd98uNQxtqEuK51KueTu34w-0r57A3tW5ZO1h5IjVTmWYQkR9rK1bv6iXel8-4gt5ivaVuM57rXcSseBQRFpiy49GtXK9rf6FzqTWR",
  hours: [
    { days: "Monday – Friday", time: "9:00 AM – 8:00 PM" },
    { days: "Saturday", time: "10:00 AM – 2:00 PM" },
    { days: "Sunday", time: "Closed" }
  ]
};

export const PROGRAMS_DATA: Program[] = [
  {
    id: "academic",
    category: "academic",
    title: "High School & College Academic",
    subtitle: "AP, IB, & University Course Mastery",
    price: "$450",
    period: "per 8-week module",
    description: "Comprehensive curriculum designed for high school and university students seeking top grades, exam mastery, and deep grammatical fluency.",
    targetAudience: "High school AP/IB candidates, UT Austin students, & academic prep learners.",
    popularTag: "Most Popular for Students",
    keyFeatures: [
      "Targeted AP Spanish Language & Literature Exam Prep",
      "IB Spanish Standard & Higher Level coaching",
      "Grammar syntax & academic essay composition",
      "1-on-1 personalized tutoring & small group workshops"
    ],
    courses: [
      { name: "AP Spanish Language & Culture", level: "Advanced High", desc: "Rigorous preparation for listening comprehension, persuasive essay writing, and oral presentation." },
      { name: "IB Spanish B Prep", level: "Intermediate / Advanced", desc: "Focus on textual analysis, cultural context, and structured speaking assessments." },
      { name: "College Spanish Grammar & Composition", level: "Elementary to Intermediate", desc: "Tailored support for university coursework, verb conjugation drills, and translation." }
    ]
  },
  {
    id: "conversational",
    category: "conversational",
    title: "Adult Conversational Immersion",
    subtitle: "Real-World Everyday & Travel Spanish",
    price: "$320",
    period: "per 6-week series",
    description: "Build confidence in everyday conversations, travel scenarios, and cultural interactions with native speaking guides in a relaxed setting.",
    targetAudience: "Austin professionals, travelers, & adult learners of all backgrounds.",
    keyFeatures: [
      "Natural conversational practice without memorization stress",
      "Authentic pronunciation & regional slang breakdown",
      "Cultural immersion discussions & role-playing",
      "Flexible evening and weekend sessions in Central West Austin"
    ],
    courses: [
      { name: "Beginner Spanish A1-A2", level: "Beginner", desc: "Essential vocabulary, greetings, present tense, ordering food, and travel survival phrases." },
      { name: "Intermediate Conversation B1-B2", level: "Intermediate", desc: "Past tenses, expressing opinions, debates on current events, and fluid storytelling." },
      { name: "Advanced Spanish Culture & Cinema", level: "Advanced C1", desc: "Deep dive into Latin American literature, cinema, and nuanced dialect discussions." }
    ]
  },
  {
    id: "business",
    category: "business",
    title: "Business & Professional Spanish",
    subtitle: "Industry-Specific Medical, Legal, & Tech",
    price: "$400",
    period: "per 6-week intensive",
    description: "Specialized terminology and high-stakes communication training tailored for Austin's healthcare, legal, corporate, and real estate professionals.",
    targetAudience: "Physicians, lawyers, tech executives, real estate agents & client reps.",
    popularTag: "Executive & Professional",
    keyFeatures: [
      "Medical & patient intake vocabulary modules",
      "Legal terminology, negotiations, & contract review support",
      "Corporate presentation & email etiquette training",
      "In-person corporate workshops or 1-on-1 executive coaching"
    ],
    courses: [
      { name: "Medical & Healthcare Spanish", level: "Intermediate to Advanced", desc: "Patient assessments, symptoms, diagnostic terminology, and compassionate care phrasing." },
      { name: "Legal & Real Estate Spanish", level: "Intermediate to Advanced", desc: "Client consultations, property transactions, legal rights, and contract terminology." },
      { name: "Executive Corporate Spanish", level: "All Levels", desc: "Business meetings, cross-border negotiation, and professional correspondence." }
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Jenkins",
    program: "Advanced Conversational Program",
    role: "Austin Creative Director & Traveler",
    rating: 5,
    quote: "The curriculum here completely transformed my approach to language learning. It feels less like a traditional class and more like a guided cultural immersion right here in Austin. I achieved conversational fluency months faster than I anticipated.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
    featured: true,
    theme: "light"
  },
  {
    id: "t2",
    name: "David Chen",
    program: "Beginner Foundations",
    role: "Software Engineer at Austin Tech Firm",
    rating: 5,
    quote: "Exceptional instructors who truly care about your progress. The structured tactile learning materials and targeted 1-on-1 feedback provided are a absolute joy to experience.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
    featured: false,
    theme: "slate"
  },
  {
    id: "t3",
    name: "Maria G.",
    program: "AP Spanish Prep",
    role: "Austin High School Senior",
    rating: 5,
    quote: "The small class sizes and individual coaching made a huge difference. I scored a 5 on my AP Spanish exam thanks to the targeted practice essays and mock oral exams!",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=300",
    featured: false,
    theme: "light"
  },
  {
    id: "t4",
    name: "James Wilson",
    program: "Business Spanish Intensive",
    role: "Healthcare Administrator",
    rating: 5,
    quote: "I needed to learn Spanish quickly for my patient interactions at Austin Health. The intensive program was challenging but incredibly rewarding. The methodology is rigorous yet highly accessible.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
    featured: false,
    theme: "terracotta"
  }
];

export const WHY_CHOOSE_US = [
  {
    id: "rating",
    iconName: "Star",
    title: "4.9-Star Rated Local Institute",
    desc: "Consistently top-rated by Austin locals for our structured methodology and welcoming atmosphere."
  },
  {
    id: "native",
    iconName: "UserCheck",
    title: "Native & Experienced Tutors",
    desc: "Learn authentic pronunciation, idioms, and rich cultural nuances directly from certified native-speaking educators."
  },
  {
    id: "flexible",
    iconName: "Calendar",
    title: "Flexible Austin Scheduling",
    desc: "Convenient in-person sessions at our Northland Drive studio or seamless live online video sessions."
  },
  {
    id: "curriculum",
    iconName: "BookOpen",
    title: "Tailored 1-on-1 Curriculum",
    desc: "Personalized lesson plans crafted around your specific learning speed, goals, and professional needs."
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    spanish: "¿Cómo estás?",
    englishPrompt: "How do you translate this standard friendly greeting?",
    options: ["How are you?", "Where are you going?", "What is your name?", "Good morning!"],
    correctIndex: 0,
    explanation: "'¿Cómo estás?' is the informal way to ask 'How are you?' in Spanish."
  },
  {
    id: 2,
    spanish: "Me gustaría reservar una clase.",
    englishPrompt: "What does the learner express in this sentence?",
    options: ["I want to buy a textbook.", "I would like to book a class.", "I am attending university.", "I speak fluent Spanish."],
    correctIndex: 1,
    explanation: "'Me gustaría' means 'I would like' and 'reservar una clase' means 'to book a class'."
  },
  {
    id: 3,
    spanish: "Trabajo en Austin desde hace tres años.",
    englishPrompt: "What is the meaning of this sentence?",
    options: ["I have been working in Austin for three years.", "I will move to Austin in three years.", "I studied in Austin three years ago.", "I travel to Austin three times a year."],
    correctIndex: 0,
    explanation: "'Trabajo... desde hace' expresses an ongoing action that started in the past (duration of 3 years)."
  }
];
