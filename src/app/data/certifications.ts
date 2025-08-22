export interface Certification {
  id: string;
  code: string;
  name: string;
  fullName: string;
  description: string;
  cost: {
    memberPrice: number;
    nonMemberPrice: number;
    estimatedDiscount: string;
    disclaimer: string;
  };
  requirements: {
    education: string;
    experience: string;
    prerequisites: string[];
  };
  examInfo: {
    format: string;
    questions: number;
    duration: string;
    passingScore: string;
    languages: string[];
  };
  benefits: string[];
  salaryData: {
    averageSalary: string;
    entryLevelSalary: string;
    experiencedSalary: string;
    salaryIncrease: string;
    source: string;
    year: string;
  };
  careerImpact: string[];
  preparation: string[];
  pmiUrl: string;
}

export const certifications: Certification[] = [
  {
    id: 'pmp',
    code: 'PMP',
    name: 'PMP',
    fullName: 'Project Management Professional (PMP)®',
    description: 'Demonstrate your ability to lead projects in any industry with this globally recognized certification and open the door to a world of opportunities. The Project Management Professional® certification acknowledges candidates who are skilled at managing the people, processes, and business priorities of professional projects.',
    cost: {
      memberPrice: 425,
      nonMemberPrice: 675,
      estimatedDiscount: '37%',
      disclaimer: 'Exam fee will only be required after your application has been accepted and you are ready to schedule your exam. Buy now, pay later for orders of $50 and over.'
    },
    requirements: {
      education: 'Secondary degree (high school diploma, associate degree, or equivalent)',
      experience: '3-5 years of project management experience',
      prerequisites: [
        '35 hours of project management education/training',
        'OR CAPM certification',
        'OR bachelor\'s degree or higher'
      ]
    },
    examInfo: {
      format: 'Multiple choice and situational questions',
      questions: 180,
      duration: '4 hours',
      passingScore: 'Based on psychometric analysis',
      languages: ['English', 'Arabic', 'French', 'German', 'Hebrew', 'Italian', 'Japanese', 'Korean', 'Portuguese', 'Russian', 'Spanish', 'Turkish', 'Simplified Chinese', 'Traditional Chinese']
    },
    benefits: [
      'Globally recognized as the gold standard in project management',
      'Demonstrates project leadership experience and expertise',
      'Validates ability to manage projects across industries',
      'Enhances credibility with employers and clients',
      'Opens doors to senior project management roles',
      'Provides access to exclusive PMI resources and networking'
    ],
    salaryData: {
      averageSalary: '$125,000 - $155,000',
      entryLevelSalary: '$95,000 - $115,000',
      experiencedSalary: '$160,000 - $200,000+',
      salaryIncrease: '20-35% increase over non-certified peers',
      source: 'PMI Salary Survey',
      year: '2023'
    },
    careerImpact: [
      'Access to senior project management positions',
      'Higher earning potential and career advancement',
      'Increased job security and marketability',
      'Leadership opportunities in project management',
      'Recognition as a project management expert',
      'Networking opportunities with other certified professionals'
    ],
    preparation: [
      'Complete 35 hours of formal project management education',
      'Gain 36 months of project management experience',
      'Study PMBOK Guide and project management methodologies',
      'Practice with PMI-approved exam prep courses',
      'Join study groups and attend workshops',
      'Take practice exams to assess readiness'
    ],
    pmiUrl: 'https://www.pmi.org/certifications/project-management-pmp'
  },
  {
    id: 'capm',
    code: 'CAPM',
    name: 'CAPM',
    fullName: 'Certified Associate in Project Management (CAPM)®',
    description: 'Show the world that you possess the foundational knowledge and skills that project teams demand. The CAPM proves that you\'re ready to take on a wide range of projects—with ways of working that include predictive project management, agile principles and business analysis.',
    cost: {
      memberPrice: 225,
      nonMemberPrice: 300,
      estimatedDiscount: '25%',
      disclaimer: 'Exam fee will only be required after your application has been accepted and you are ready to schedule your exam. Buy now, pay later for orders of $50 and over.'
    },
    requirements: {
      education: 'Secondary degree (high school diploma, associate degree, or equivalent)',
      experience: 'No experience required',
      prerequisites: [
        'Secondary degree or equivalent',
        'Basic project management knowledge',
        'Interest in project management career'
      ]
    },
    examInfo: {
      format: 'Multiple choice questions',
      questions: 150,
      duration: '3 hours',
      passingScore: 'Based on psychometric analysis',
      languages: ['English', 'Arabic', 'French', 'German', 'Hebrew', 'Italian', 'Japanese', 'Korean', 'Portuguese', 'Russian', 'Spanish', 'Turkish', 'Simplified Chinese', 'Traditional Chinese']
    },
    benefits: [
      'Foundation for a project management career',
      'Demonstrates understanding of project management principles',
      'Entry point to project management profession',
      'Preparation for PMP certification',
      'Access to PMI resources and community',
      'Professional credibility for early-career project managers'
    ],
    salaryData: {
      averageSalary: '$85,000 - $105,000',
      entryLevelSalary: '$70,000 - $85,000',
      experiencedSalary: '$115,000 - $135,000',
      salaryIncrease: '15-25% increase over non-certified peers',
      source: 'PMI Salary Survey',
      year: '2023'
    },
    careerImpact: [
      'Entry into project management profession',
      'Foundation for career advancement',
      'Preparation for PMP certification pathway',
      'Access to project management job opportunities',
      'Professional development and skill building',
      'Networking with project management professionals'
    ],
    preparation: [
      'Complete 23 hours of project management education',
      'Gain practical project management experience',
      'Study CAPM exam content outline',
      'Review project management fundamentals',
      'Practice with exam prep materials',
      'Join PMI student chapter for support'
    ],
    pmiUrl: 'https://www.pmi.org/certifications/certified-associate-capm'
  },
  {
    id: 'pmi-acp',
    code: 'PMI-ACP',
    name: 'PMI-ACP',
    fullName: 'PMI Agile Certified Practitioner (PMI-ACP)®',
    description: 'The PMI-ACP certification highlights your agile expertise with the industry\'s only agnostic, experienced-based, ISO-accredited exam. It validates your ability to drive excellence across methodologies, including Scrum, Lean, Kanban, and more—with a truly agile and a team-centric approach, this certification is sure to make you stand out among peers, employers, and stakeholders alike.',
    cost: {
      memberPrice: 435,
      nonMemberPrice: 495,
      estimatedDiscount: '12%',
      disclaimer: 'Exam fee will only be required after your application has been accepted and you are ready to schedule your exam. Buy now, pay later for orders of $50 and over.'
    },
    requirements: {
      education: 'Secondary degree (high school diploma, associate degree, or equivalent)',
      experience: '2+ years of agile experience within the last 5 years',
      prerequisites: [
        'Secondary degree (high school diploma, GED, or equivalent)',
        '24 months/2 years of agile experience within the last 5 years',
        '28 hours of training in agile practices, frameworks, and methodologies'
      ]
    },
    examInfo: {
      format: 'Multiple choice questions',
      questions: 120,
      duration: '180 minutes',
      passingScore: 'Based on psychometric analysis',
      languages: ['English', 'Arabic', 'Chinese (Simplified)', 'Chinese (Traditional)', 'French', 'German', 'Brazilian Portuguese', 'Japanese', 'Korean', 'Spanish']
    },
    benefits: [
      'Specialization in agile project management',
      'Demonstrates expertise in agile methodologies',
      'Validates ability to lead agile projects',
      'Enhances marketability in agile environments',
      'Complements traditional project management skills',
      'Access to agile community and resources'
    ],
    salaryData: {
      averageSalary: '$115,000 - $140,000',
      entryLevelSalary: '$90,000 - $110,000',
      experiencedSalary: '$150,000 - $180,000+',
      salaryIncrease: '18-30% increase over non-certified peers',
      source: 'PMI Salary Survey',
      year: '2023'
    },
    careerImpact: [
      'Specialization in high-demand agile methodologies',
      'Leadership roles in agile project environments',
      'Enhanced career opportunities in tech and agile organizations',
      'Recognition as an agile project management expert',
      'Access to agile-specific job opportunities',
      'Professional development in agile practices'
    ],
    preparation: [
      'Gain 2,000 hours of agile project experience',
      'Complete 21 hours of agile education',
      'Study agile methodologies (Scrum, Kanban, XP, etc.)',
      'Practice agile project management techniques',
      'Review PMI-ACP exam content outline',
      'Join agile study groups and communities'
    ],
    pmiUrl: 'https://www.pmi.org/certifications/agile-management-acp'
  }
];