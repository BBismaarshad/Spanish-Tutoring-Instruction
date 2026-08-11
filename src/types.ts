export interface Program {
  id: string;
  title: string;
  category: 'academic' | 'conversational' | 'business';
  subtitle: string;
  price: string;
  period: string;
  description: string;
  targetAudience: string;
  keyFeatures: string[];
  courses: {
    name: string;
    level: string;
    desc: string;
  }[];
  popularTag?: string;
  badgeColor?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  program: string;
  role: string;
  rating: number;
  quote: string;
  avatar: string;
  featured?: boolean;
  theme?: 'light' | 'terracotta' | 'slate';
}

export interface QuizQuestion {
  id: number;
  spanish: string;
  englishPrompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface FreeTrialFormData {
  programCategory: string;
  proficiencyLevel: string;
  learningGoal: string;
  preferredTime: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  notes: string;
}
