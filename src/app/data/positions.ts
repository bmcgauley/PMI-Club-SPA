export interface Position {
  id: string;
  title: string;
  timeCommitment: string;
  responsibilities: string[];
  isFilled: boolean;
  detailedDescription?: string;
  requirements?: string[];
  skills?: string[];
  benefits?: string[];
  idealCandidate?: string;
  whatYoullGain?: string[];
  successCriteria?: string[];
  interviewQuestions?: string[];
  positionDetails?: {
    overview: string;
    dailyExpectations?: string[];
    growthOpportunities?: string[];
    challenges?: string[];
  };
}

export const positions: Position[] = [
  {
    id: 'president',
    title: 'President',
    timeCommitment: '8-10 hours per week',
    responsibilities: [
      'Strategic Leadership & Vision - Chapter vision development and communication of long-term strategic goals',
      'External Representation & University Relations - University liaison and PMI Chapter relationship',
      'Organizational Management & Governance - Meeting facilitation and constitutional compliance',
      'Officer Team Leadership & Development - Officer mentoring and performance management'
    ],
    isFilled: true,
    detailedDescription: 'The President serves as the chief executive officer and primary leader of the Project Management Student Club, responsible for overall strategic direction, external representation, faculty/university liaison, and ensuring the club fulfills its mission of advancing project management education among students.',
    idealCandidate: 'Exceptional leadership experience in academic, professional, or volunteer settings. Strong strategic thinking, public speaking, and interpersonal skills for building relationships across diverse stakeholder groups.',
    requirements: [
      'Exceptional leadership experience in academic, professional, or volunteer settings',
      'Public speaking comfort representing organization in formal and informal settings',
      'Strategic thinking ability to develop and implement long-term organizational vision',
      'Interpersonal skills for building relationships across diverse stakeholder groups',
      'Time management for balancing multiple high-priority responsibilities'
    ],
    skills: [
      'Strategic planning and execution',
      'Public speaking and presentation',
      'Stakeholder relationship management',
      'Team leadership and delegation',
      'Conflict resolution and change management'
    ],
    benefits: [
      'Resume enhancement significant leadership experience with measurable impact',
      'Professional references from faculty advisor and PMI professional mentors',
      'Skill development practical experience in areas directly relevant to career goals',
      'Network expansion connections throughout Central Valley business and PM community',
      'Recognition awards end-of-year officer recognition and appreciation events'
    ],
    whatYoullGain: [
      'Exceptional leadership title and responsibilities from day one',
      'Direct leadership experience building something new',
      'Professional networking with PMI industry professionals',
      'Resume building with tangible organizational impact',
      'Founding member status - permanent recognition'
    ],
    successCriteria: [
      'Club growth 20%+ membership increase annually',
      'Member satisfaction 85%+ positive feedback on club leadership',
      'University recognition positive relationship with Student Involvement and administration',
      'PMI partnership strong working relationship with Central Valley PMI Chapter'
    ],
    positionDetails: {
      overview: 'The President serves as the chief executive officer and primary leader of the Project Management Student Club, responsible for overall strategic direction, external representation, faculty/university liaison, and ensuring the club fulfills its mission of advancing project management education among students.',
      dailyExpectations: [
        'Officer team coordination and communication',
        'Strategic initiatives progress monitoring and adjustment',
        'Stakeholder engagement with university and PMI contacts',
        'Chapter representation at relevant campus and community events',
        'Meeting facilitation and agenda development'
      ],
      growthOpportunities: [
        'Develop exceptional strategic thinking and leadership abilities',
        'Build extensive professional network with university and industry leaders',
        'Gain experience in organizational management and governance',
        'Develop public speaking and external representation skills',
        'Learn change management and organizational adaptation'
      ],
      challenges: [
        'Managing multiple high-priority strategic initiatives simultaneously',
        'Balancing internal team needs with external stakeholder expectations',
        'Maintaining consistent communication across diverse stakeholder groups',
        'Leading organizational change and adaptation during startup phase'
      ]
    }
  },
  {
    id: 'vice-president',
    title: 'Vice President',
    timeCommitment: '5-7 hours per week',
    responsibilities: [
      'Strategic Support & Leadership - Assist President with strategic planning and club vision implementation',
      'Internal Operations Management - Meeting facilitation and member engagement strategies',
      'Membership Development - New member orientation and retention initiatives',
      'Cross-functional Coordination - Support all officer roles and committee functions'
    ],
    isFilled: false,
    detailedDescription: 'The Vice President serves as the President\'s primary support, leads internal operations, manages member engagement initiatives, and assumes presidential duties when needed. This role focuses on day-to-day operations and strategic implementation.',
    idealCandidate: 'Looking for someone with leadership experience, strong organizational skills, and the ability to facilitate meetings and coordinate member activities. This role is ideal for someone who wants to develop executive-level leadership while supporting club operations.',
    requirements: [
      'Leadership experience in academic, professional, or volunteer settings',
      'Communication skills for facilitating meetings and member interactions',
      'Organizational abilities for managing multiple projects and committees',
      'Collaborative approach for working across all officer functions',
      'Problem-solving orientation for addressing operational challenges'
    ],
    skills: [
      'Strategic planning and implementation',
      'Meeting facilitation and agenda development',
      'Member engagement and retention strategies',
      'Cross-functional team coordination',
      'Leadership succession planning'
    ],
    benefits: [
      'Resume enhancement significant leadership experience with measurable impact',
      'Professional references from faculty advisor and PMI professional mentors',
      'Skill development practical experience in areas directly relevant to career goals',
      'Network expansion connections throughout Central Valley business and PM community',
      'Recognition awards end-of-year officer recognition and appreciation events'
    ],
    whatYoullGain: [
      'Exceptional leadership title and responsibilities from day one',
      'Direct leadership experience building something new',
      'Professional networking with PMI industry professionals',
      'Resume building with tangible organizational impact',
      'Founding member status - permanent recognition'
    ],
    successCriteria: [
      'Meeting attendance maintained above 75% throughout semester',
      'New member retention rate of 80%+ after first month',
      'Committee participation with 90%+ of members involved in at least one committee',
      'Leadership development with 3+ members prepared for future officer roles'
    ],
    positionDetails: {
      overview: 'The Vice President serves as the President\'s primary support, leads internal operations, manages member engagement initiatives, and assumes presidential duties when needed. This role focuses on day-to-day operations and strategic implementation.',
      dailyExpectations: [
        'Member engagement report with attendance and participation metrics',
        'Committee status updates from all standing committees',
        'Leadership development program progress tracking',
        'Internal communications coordination for member updates',
        'Executive committee meeting participation and follow-up'
      ],
      growthOpportunities: [
        'Develop strategic thinking and leadership abilities',
        'Build extensive professional network with university and industry contacts',
        'Gain experience in organizational operations and management',
        'Develop meeting facilitation and public speaking skills',
        'Learn change management and team coordination'
      ],
      challenges: [
        'Managing multiple committee and member initiatives simultaneously',
        'Coordinating diverse stakeholder needs and expectations',
        'Stepping into presidential role when needed during startup phase',
        'Maintaining consistent communication across all club functions'
      ]
    }
  },
  {
    id: 'secretary',
    title: 'Secretary',
    timeCommitment: '3-5 hours/week',
    responsibilities: [
      'Document meeting minutes and chapter activities',
      'Manage member communications and correspondence',
      'Maintain membership records and participation tracking',
      'Handle administrative coordination'
    ],
    isFilled: false,
    detailedDescription: 'The Secretary role is ideal for detail-oriented students who excel at organization and communication. You\'ll be the backbone of our administrative operations, ensuring all chapter activities are properly documented and communicated to members.',
    idealCandidate: 'Looking for someone who is organized, detail-oriented, and has strong written communication skills. This role is perfect for students who enjoy keeping things orderly and want to develop administrative and communication skills.',
    requirements: [
      'Strong attention to detail and organizational skills',
      'Excellent written communication abilities',
      'Proficiency with Google Workspace or Microsoft Office',
      'Reliability for meeting attendance and documentation',
      'Interest in administrative coordination'
    ],
    skills: [
      'Meeting facilitation and minute-taking',
      'Email and communication management',
      'Record keeping and data organization',
      'Administrative coordination',
      'Professional correspondence'
    ],
    benefits: [
      'Professional administrative experience',
      'Development of organizational skills',
      'Resume enhancement with administrative role',
      'Leadership experience in a support position',
      'Skill development in professional communication'
    ],
    whatYoullGain: [
      'Professional networking with PMI industry professionals',
      'Resume building with tangible organizational impact',
      'Project management skills development through administrative coordination',
      'Founding member status - permanent recognition',
      'Leadership experience from day one'
    ],
    successCriteria: [
      'Reliable - Will actually show up and do the work',
      'Interested - Genuine curiosity about project management',
      'Communicative - Can work with others and represent the chapter',
      'Committed - Willing to put in effort during the startup phase',
      'Growth-minded - Want to learn and develop skills'
    ],
    interviewQuestions: [
      '"Tell me about yourself and why you\'re interested in this."',
      '"What do you know about project management?"',
      '"What appeals to you about the Secretary role?"',
      '"How do you handle deadlines and multiple responsibilities?"',
      '"Any questions about what we\'re trying to build here?"'
    ],
    positionDetails: {
      overview: 'As Secretary, you\'ll be responsible for all chapter documentation, communications, and administrative coordination. This role offers the perfect opportunity to develop professional administrative skills while contributing to the success of a new student organization.',
      dailyExpectations: [
        'Taking accurate meeting minutes and action items',
        'Managing chapter email communications and correspondence',
        'Maintaining membership records and attendance tracking',
        'Coordinating administrative tasks with other officers',
        'Preparing reports and documentation as needed'
      ],
      growthOpportunities: [
        'Develop professional administrative and organizational skills',
        'Improve written communication and documentation abilities',
        'Learn project management through administrative coordination',
        'Build leadership presence through chapter communications',
        'Network with industry professionals through professional correspondence'
      ],
      challenges: [
        'Maintaining consistent and accurate documentation',
        'Managing multiple communication channels effectively',
        'Keeping up with administrative tasks during busy periods',
        'Ensuring all chapter activities are properly recorded'
      ]
    }
  },
  {
    id: 'treasurer',
    title: 'Treasurer',
    timeCommitment: '4-6 hours/week',
    responsibilities: [
      'Establish and manage chapter finances',
      'Set up ASI Trust account and financial systems',
      'Create budgets and financial reports',
      'Pursue funding opportunities and sponsorships'
    ],
    isFilled: false,
    detailedDescription: 'The Treasurer position offers hands-on experience in financial management and business operations. You\'ll be responsible for establishing our chapter\'s financial foundation and managing all monetary aspects of our organization.',
    idealCandidate: 'Looking for someone who is analytical, detail-oriented, and comfortable with numbers. This role is perfect for students interested in business, finance, or who want to develop financial management skills.',
    requirements: [
      'Basic understanding of financial principles',
      'Strong organizational and analytical skills',
      'Attention to detail and accuracy',
      'Comfortable with numbers and spreadsheets',
      'Interest in business and financial management'
    ],
    skills: [
      'Financial planning and budgeting',
      'Spreadsheet management and analysis',
      'Record keeping and documentation',
      'Grant writing and sponsorship pursuit',
      'Financial reporting and compliance'
    ],
    benefits: [
      'Professional financial management experience',
      'Understanding of non-profit financial operations',
      'Resume enhancement with finance role',
      'Development of business acumen',
      'Networking with financial professionals'
    ],
    whatYoullGain: [
      'Professional networking with PMI industry professionals',
      'Resume building with tangible organizational impact',
      'Project management skills development through financial oversight',
      'Founding member status - permanent recognition',
      'Leadership experience from day one'
    ],
    successCriteria: [
      'Reliable - Will actually show up and do the work',
      'Interested - Genuine curiosity about project management',
      'Communicative - Can work with others and represent the chapter',
      'Committed - Willing to put in effort during the startup phase',
      'Growth-minded - Want to learn and develop skills'
    ],
    interviewQuestions: [
      '"Tell me about yourself and why you\'re interested in this."',
      '"What do you know about project management?"',
      '"What appeals to you about the Treasurer role?"',
      '"How do you handle deadlines and multiple responsibilities?"',
      '"Any questions about what we\'re trying to build here?"'
    ],
    positionDetails: {
      overview: 'As Treasurer, you\'ll establish and manage all financial aspects of the PMI Student Club. This includes setting up bank accounts, creating budgets, tracking expenses, and pursuing funding opportunities. It\'s a great opportunity to develop business and financial management skills.',
      dailyExpectations: [
        'Managing chapter financial records and transactions',
        'Creating and maintaining financial reports and budgets',
        'Pursuing funding opportunities and sponsorships',
        'Coordinating with ASI for account setup and compliance',
        'Tracking membership dues and chapter expenses'
      ],
      growthOpportunities: [
        'Develop comprehensive financial management skills',
        'Learn business operations and compliance requirements',
        'Build grant writing and sponsorship development abilities',
        'Understand non-profit financial operations',
        'Network with business professionals and sponsors'
      ],
      challenges: [
        'Setting up financial systems from scratch',
        'Maintaining accurate financial records and compliance',
        'Pursuing funding opportunities during startup phase',
        'Managing budgets with limited initial resources'
      ]
    }
  },
  {
    id: 'professional-development-coordinator',
    title: 'Professional Development Coordinator',
    timeCommitment: '5-7 hours/week',
    responsibilities: [
      'Design certification preparation programs',
      'Coordinate workshops and training sessions',
      'Connect with industry professionals for guest speakers',
      'Track member professional development progress'
    ],
    isFilled: false,
    detailedDescription: 'This role is perfect for students passionate about education and professional growth. You\'ll design and implement programs that help fellow students develop their project management careers through certifications and skill-building opportunities.',
    idealCandidate: 'Looking for someone who is passionate about education, has strong organizational skills, and wants to help others grow professionally. This role is ideal for students who enjoy teaching, coordinating events, and building educational programs.',
    requirements: [
      'Interest in teaching and professional development',
      'Strong organizational and planning skills',
      'Good communication and presentation abilities',
      'Understanding of project management concepts',
      'Enthusiasm for helping others grow professionally'
    ],
    skills: [
      'Program development and curriculum design',
      'Event planning and coordination',
      'Workshop facilitation and training',
      'Speaker recruitment and management',
      'Progress tracking and reporting'
    ],
    benefits: [
      'Deep understanding of PMI certifications',
      'Professional development coordination experience',
      'Leadership in educational program development',
      'Network with industry professionals and speakers',
      'Enhanced presentation and teaching skills'
    ],
    whatYoullGain: [
      'Professional networking with PMI industry professionals',
      'Resume building with tangible organizational impact',
      'Project management skills development through educational program design',
      'Founding member status - permanent recognition',
      'Leadership experience from day one'
    ],
    successCriteria: [
      'Reliable - Will actually show up and do the work',
      'Interested - Genuine curiosity about project management',
      'Communicative - Can work with others and represent the chapter',
      'Committed - Willing to put in effort during the startup phase',
      'Growth-minded - Want to learn and develop skills'
    ],
    interviewQuestions: [
      '"Tell me about yourself and why you\'re interested in this."',
      '"What do you know about project management?"',
      '"What appeals to you about the Professional Development role?"',
      '"How do you handle deadlines and multiple responsibilities?"',
      '"Any questions about what we\'re trying to build here?"'
    ],
    positionDetails: {
      overview: 'As Professional Development Coordinator, you\'ll be responsible for creating and implementing educational programs that help members advance their project management careers. This includes certification preparation, workshops, guest speakers, and professional development tracking.',
      dailyExpectations: [
        'Designing and implementing certification preparation programs',
        'Coordinating workshops and training sessions',
        'Recruiting industry professionals for guest speaking engagements',
        'Tracking member professional development progress',
        'Creating educational content and resources'
      ],
      growthOpportunities: [
        'Develop expertise in PMI certifications and project management',
        'Build teaching and presentation skills through workshops',
        'Learn program development and educational coordination',
        'Network extensively with industry professionals',
        'Gain experience in educational program management'
      ],
      challenges: [
        'Building educational programs from scratch during startup',
        'Coordinating with busy industry professionals for guest speakers',
        'Adapting programs based on member needs and feedback',
        'Managing multiple educational initiatives simultaneously'
      ]
    }
  },
  {
    id: 'external-relations-coordinator',
    title: 'External Relations Coordinator',
    timeCommitment: '4-6 hours/week',
    responsibilities: [
      'Build partnerships with industry organizations',
      'Develop corporate sponsorship relationships',
      'Coordinate networking events and mentorship programs',
      'Represent chapter at external events'
    ],
    isFilled: false,
    detailedDescription: 'The External Relations Coordinator is our ambassador to the professional world. You\'ll build valuable connections between our student chapter and industry partners, creating opportunities for internships, mentorships, and real-world experience.',
    idealCandidate: 'Looking for someone who is outgoing, confident, and enjoys building relationships. This role is perfect for students who want to develop business development skills, network with professionals, and create opportunities for their peers.',
    requirements: [
      'Strong interpersonal and networking skills',
      'Professional communication and presentation abilities',
      'Interest in business development and partnerships',
      'Confidence in representing the organization',
      'Understanding of professional networking'
    ],
    skills: [
      'Business relationship development',
      'Partnership and sponsorship management',
      'Event coordination and networking',
      'Professional communication and outreach',
      'Negotiation and relationship building'
    ],
    benefits: [
      'Professional networking and relationship building experience',
      'Corporate partnership development skills',
      'Enhanced communication and presentation abilities',
      'Connections with industry professionals',
      'Real-world business development experience'
    ],
    whatYoullGain: [
      'Professional networking with PMI industry professionals',
      'Resume building with tangible organizational impact',
      'Project management skills development through partnership coordination',
      'Founding member status - permanent recognition',
      'Leadership experience from day one'
    ],
    successCriteria: [
      'Reliable - Will actually show up and do the work',
      'Interested - Genuine curiosity about project management',
      'Communicative - Can work with others and represent the chapter',
      'Committed - Willing to put in effort during the startup phase',
      'Growth-minded - Want to learn and develop skills'
    ],
    interviewQuestions: [
      '"Tell me about yourself and why you\'re interested in this."',
      '"What do you know about project management?"',
      '"What appeals to you about the External Relations role?"',
      '"How do you handle deadlines and multiple responsibilities?"',
      '"Any questions about what we\'re trying to build here?"'
    ],
    positionDetails: {
      overview: 'As External Relations Coordinator, you\'ll serve as the bridge between our student chapter and the professional project management community. You\'ll develop partnerships, secure sponsorships, and create networking opportunities that benefit all chapter members.',
      dailyExpectations: [
        'Building partnerships with industry organizations and businesses',
        'Developing corporate sponsorship and collaboration opportunities',
        'Coordinating networking events and professional meetups',
        'Representing the chapter at external events and conferences',
        'Managing relationships with industry partners and mentors'
      ],
      growthOpportunities: [
        'Develop business development and partnership skills',
        'Build extensive professional network in project management field',
        'Learn corporate relationship management and negotiation',
        'Gain experience in event coordination and professional outreach',
        'Develop confidence in representing organizations professionally'
      ],
      challenges: [
        'Building relationships with busy industry professionals',
        'Securing sponsorships during the startup phase',
        'Coordinating networking events with competing schedules',
        'Representing the chapter professionally at all times'
      ]
    }
  },
  {
    id: 'general-member',
    title: 'General Member',
    timeCommitment: '2-4 hours per month',
    responsibilities: [
      'Attend monthly chapter meetings and events',
      'Participate in professional development workshops',
      'Network with fellow students and PMI professionals',
      'Support chapter activities and initiatives',
      'Access member-only resources and opportunities'
    ],
    isFilled: false,
    detailedDescription: 'Join as a General Member to be part of the founding community without taking on leadership responsibilities. Perfect for students who want to benefit from PMI membership, professional development opportunities, and networking while focusing on their studies.',
    idealCandidate: 'Looking for students who are interested in project management, want to build their professional network, and are seeking personal development opportunities without the time commitment of leadership roles.',
    requirements: [
      'Currently enrolled CSU Fresno student',
      'Minimum 2.0 GPA and good academic standing',
      'Interest in project management or professional development',
      'Willingness to attend monthly meetings and events',
      'Commitment to supporting chapter activities'
    ],
    skills: [
      'Professional networking and relationship building',
      'Project management fundamentals exposure',
      'Event participation and community engagement',
      'Access to PMI resources and certification preparation',
      'Leadership observation and development'
    ],
    benefits: [
      'Resume enhancement significant leadership experience with measurable impact',
      'Professional references from faculty advisor and PMI professional mentors',
      'Skill development practical experience in areas directly relevant to career goals',
      'Network expansion connections throughout Central Valley business and PM community',
      'Recognition awards end-of-year officer recognition and appreciation events'
    ],
    whatYoullGain: [
      'Founding member status - permanent recognition',
      'Access to PMI certification preparation and study groups',
      'Professional networking opportunities with industry leaders',
      'Monthly workshops and professional development events',
      'Connection to Central Valley PMI Chapter mentorship',
      'Resume building through chapter membership and activities'
    ],
    successCriteria: [
      'Active participation in monthly chapter meetings',
      'Engagement in at least 2 professional development events per semester',
      'Positive contribution to chapter community and activities',
      'Professional growth through PMI resources and networking'
    ],
    positionDetails: {
      overview: 'The General Member role is designed for students who want to be part of the PMI Student Club community and benefit from professional development opportunities without the time commitment of leadership positions. This is perfect for students who want to explore project management, build their professional network, and access PMI resources.',
      dailyExpectations: [
        'Attend monthly chapter meetings and events',
        'Participate in professional development workshops',
        'Network with fellow students and PMI professionals',
        'Access member-exclusive resources and opportunities',
        'Support chapter activities when possible'
      ],
      growthOpportunities: [
        'Learn project management fundamentals through workshops',
        'Build professional network with industry connections',
        'Access PMI certification preparation resources',
        'Develop leadership skills through observation and participation',
        'Connect with Central Valley PMI Chapter professionals'
      ],
      challenges: [
        'Balancing academic commitments with chapter involvement',
        'Finding time for monthly meetings around class schedule',
        'Staying engaged during less active periods',
        'Building relationships within the chapter community'
      ]
    }
  },
  {
    id: 'communications-coordinator',
    title: 'Communications Coordinator',
    timeCommitment: '5-7 hours per week',
    responsibilities: [
      'Digital Communications & Social Media - Social media management and content creation',
      'Brand Management & Visual Identity - Brand consistency and graphic design',
      'Event Promotion & Member Recruitment - Event promotion and recruitment campaigns',
      'Public Relations & Communications - Press releases and media relations'
    ],
    isFilled: false,
    detailedDescription: 'The Communications Coordinator manages all promotional activities, brand development, digital presence, and communications for the chapter. This role focuses on building chapter visibility, attracting new members, promoting events, and maintaining consistent professional messaging across all platforms.',
    idealCandidate: 'Looking for someone with digital communications experience, graphic design skills, and excellent written communication abilities. This role is perfect for students who enjoy content creation, social media management, and building brand awareness.',
    requirements: [
      'Digital communications experience with social media platforms and content creation',
      'Graphic design proficiency with design software (Canva, Adobe Creative Suite, etc.)',
      'Written communication excellent writing skills for various communications materials',
      'Creative thinking ability to develop engaging and innovative communications concepts',
      'Analytics orientation comfort tracking metrics and optimizing based on performance data'
    ],
    skills: [
      'Social media management and content strategy',
      'Graphic design and visual communication',
      'Digital marketing and analytics',
      'Brand development and consistency',
      'Content creation and copywriting',
      'Project management for communications campaigns'
    ],
    benefits: [
      'Resume enhancement significant leadership experience with measurable impact',
      'Professional references from faculty advisor and PMI professional mentors',
      'Skill development practical experience in areas directly relevant to career goals',
      'Network expansion connections throughout Central Valley business and PM community',
      'Recognition awards end-of-year officer recognition and appreciation events'
    ],
    whatYoullGain: [
      'Exceptional leadership title and responsibilities from day one',
      'Direct leadership experience building something new',
      'Professional networking with PMI industry professionals',
      'Resume building with tangible organizational impact',
      'Founding member status - permanent recognition'
    ],
    successCriteria: [
      'Social media growth 25%+ increase in followers and engagement annually',
      'Event promotion 90%+ of events meet attendance targets through effective communications',
      'Member recruitment communications campaigns contribute to 20%+ membership growth',
      'Brand recognition increased chapter visibility on campus and in professional community'
    ],
    positionDetails: {
      overview: 'The Communications Coordinator manages all promotional activities, brand development, digital presence, and communications for the chapter. This role focuses on building chapter visibility, attracting new members, promoting events, and maintaining consistent professional messaging across all platforms.',
      dailyExpectations: [
        'Social media content creation and scheduling 4-5 posts per week',
        'Graphic design materials for upcoming events and announcements',
        'Content calendar planning and scheduling for following week',
        'Analytics review tracking engagement and performance metrics',
        'Brand consistency audits across all chapter materials'
      ],
      growthOpportunities: [
        'Develop comprehensive digital marketing and communications skills',
        'Build expertise in social media strategy and content creation',
        'Learn brand management and visual identity development',
        'Gain experience in public relations and media relations',
        'Network with industry professionals in marketing and communications'
      ],
      challenges: [
        'Maintaining consistent content creation and posting schedule',
        'Adapting communications strategy based on analytics and feedback',
        'Coordinating with multiple stakeholders for content approval',
        'Managing multiple social media platforms simultaneously',
        'Creating engaging content that resonates with different audiences'
      ]
    }
  }
];

export const benefits = {
  immediate: [
    'Officer title and responsibilities from day one',
    'Direct leadership experience building something new',
    'Professional networking with Central Valley PMI Chapter',
    'Priority access to certification prep and training'
  ],
  longTerm: [
    'Strong resume addition with measurable impact',
    'Reference potential from faculty advisor and PMI professionals',
    'Career connections in project management field',
    'Transferable skills in leadership, organization, and PM methodologies'
  ]
};

export const applicationProcess = {
  requirements: [
    'Currently enrolled CSU Fresno student',
    'Minimum 2.0 GPA and good academic standing',
    'Commitment to 3-7 hours per week',
    'Interest in project management or leadership development',
    'Attendance at bi-weekly meetings'
  ],
  steps: [
    {
      title: 'Submit Application',
      description: 'Complete the brief online application form with your information and position preferences.'
    },
    {
      title: 'Quick Interview',
      description: '15-20 minute informal conversation to discuss your interest and fit for the role.'
    },
    {
      title: 'Selection & Onboarding',
      description: 'Final selection based on interview and application, followed by officer training.'
    }
  ]
};