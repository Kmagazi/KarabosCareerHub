export const profile = {
  name: 'Karabo Magazi',
  headline: 'Office Administrator & Tender Support Specialist',
  location: 'Thokoza, Gauteng, South Africa',
  phone: '(+27) 73 534 5238',
  email: 'Karabomagazi74@gmail.com',
  github: 'https://github.com/',
  linkedin: 'https://www.linkedin.com/',
  about: [
    "I'm an administrative professional who thrives on turning chaotic paperwork into organised, deadline-proof systems. Over the past few years I've supported tender submissions, front-office operations, and event coordination, always with the same focus: accurate documentation, clear communication, and nothing falling through the cracks.",
    "I'm proficient across Microsoft Office, comfortable managing high volumes of correspondence and filing, and confident coordinating with suppliers, staff, and clients under tight deadlines. I'm looking for an administrative or office support role where that reliability and attention to detail make a visible difference.",
  ],
  goals: [
    'Secure a permanent office administrator or tender coordinator role where I can own end-to-end document workflows.',
    'Grow toward an Office Manager position by expanding my skills in procurement, compliance, and team coordination.',
    'Continue building digital skills — advanced Excel automation, document management systems, and cloud collaboration tools.',
  ],
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Technical Skills',
    skills: [
      'Microsoft Office (Word, Excel, Outlook)',
      'Excel (VBA & Macros)',
      'Document Control & Filing Systems',
      'Data Entry & Record Management',
      'Tender Administration',
      'Quotation Preparation',
      'Invoice Administration',
      'Digital Literacy',
    ],
  },
  {
    title: 'Soft Skills',
    skills: [
      'Communication',
      'Time Management',
      'Attention to Detail',
      'Teamwork',
      'Customer Service',
      'Telephone Etiquette',
      'Deadline Management',
      'Adaptability',
    ],
  },
];

export type Education = {
  title: string;
  institution: string;
  period: string;
};

export const education: Education[] = [
  {
    title: 'National Senior Certificate (Matric)',
    institution: 'Impact Independent High School',
    period: '2020',
  },
  {
    title: 'Administrative Support Course',
    institution: 'Alison Online Learning',
    period: 'Completed April 2025',
  },
];

export type Certification = {
  title: string;
  issuer: string;
};

export const certifications: Certification[] = [
  { title: 'Microsoft Excel (Including VBA & Macros)', issuer: 'Department of Basic Education' },
  { title: 'Digital Literacy', issuer: 'Department of Basic Education' },
  { title: 'Internet Safety', issuer: 'Department of Basic Education' },
  { title: 'National Safety Framework', issuer: 'Department of Basic Education' },
];

export type ExperienceItem = {
  role: string;
  organisation: string;
  period: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: 'Tender Administrator',
    organisation: 'DLG Solutions Pty Ltd',
    period: '02/2025 – 03/2026',
    highlights: [
      'Supported tender administration by preparing documents, coordinating supplier inputs, and ensuring submission readiness.',
      'Maintained structured filing systems for accurate tracking of tender and administrative documents.',
      'Assisted in meeting strict deadlines by monitoring submission timelines and organising documentation.',
      'Provided administrative support including email correspondence, scheduling, filing, and document control.',
      'Processed and organised large volumes of documents with attention to accuracy and consistency.',
      'Assisted with quotation documentation, supplier coordination, and preparation of professional tender submissions.',
    ],
  },
  {
    role: 'General School Assistant',
    organisation: 'Glenbrack High School',
    period: '04/2023 – 06/2024',
    highlights: [
      'Assisted with front office administration, staff communication, filing, scheduling, and document preparation.',
      'Managed and organised 100+ documents weekly, ensuring accuracy and easy retrieval.',
      'Coordinated communication between staff and office departments.',
      'Supported daily administrative workflow in a structured, fast-paced environment.',
    ],
  },
  {
    role: 'Promotions Assistant (Freelance)',
    organisation: 'Various Brands & Events',
    period: '01/2022 – 01/2023',
    highlights: [
      'Engaged customers at 10+ events, boosting brand visibility and customer interaction.',
      'Supported event coordination and logistics in high-volume environments.',
      'Delivered strong customer service, contributing to positive brand experiences.',
    ],
  },
  {
    role: 'Volunteer Waitress',
    organisation: 'Spur Steak Ranches',
    period: '2018 & 2020',
    highlights: [
      'Provided efficient customer service in a fast-paced food service environment.',
      'Managed multiple orders and supported team members during peak service periods.',
      'Built communication and teamwork skills in a customer-focused setting.',
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  details: string[];
};

export const projects: Project[] = [
  {
    title: 'Tender Submission Coordination',
    description:
      'Led the day-to-day paperwork behind competitive tender bids, keeping every submission accurate, complete, and on time.',
    technologies: ['Microsoft Excel', 'Document Control', 'Filing Systems', 'Email Correspondence'],
    details: [
      'Built and maintained structured filing systems so tender and supplier documents could be tracked and retrieved instantly.',
      'Coordinated with suppliers to gather quotations and inputs ahead of tight submission windows.',
      'Monitored submission timelines and organised documentation to guarantee every bid was submission-ready.',
    ],
  },
  {
    title: 'School Front-Office Records Overhaul',
    description:
      'Kept a busy school office running smoothly by managing high volumes of administrative documentation every week.',
    technologies: ['Microsoft Word', 'Scheduling', 'Records Management', 'Communication'],
    details: [
      'Organised and processed 100+ documents weekly with a focus on accuracy and easy retrieval.',
      'Acted as a communication link between staff and office departments to keep scheduling on track.',
      'Prepared correspondence and supported daily front-office operations in a fast-paced environment.',
    ],
  },
  {
    title: 'Brand Activation & Event Promotions',
    description:
      'Represented multiple brands at live events, combining customer engagement with on-the-ground logistics coordination.',
    technologies: ['Customer Service', 'Event Coordination', 'Logistics', 'Client Communication'],
    details: [
      'Engaged customers directly at 10+ events, strengthening brand visibility and interaction.',
      'Supported event logistics and coordination in high-volume, fast-moving environments.',
      'Delivered consistent, professional customer service that shaped positive brand experiences.',
    ],
  },
];
