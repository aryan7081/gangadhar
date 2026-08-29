export const site = {
  name: 'Gangadhar Yadav',
  role: 'Full-Stack Engineer',
  tagline: 'I build fast APIs and clean interfaces.',
  email: 'gangadhar.y23csai@nst.rishihood.edu.in',
  socials: [
    { label: 'GitHub', href: 'https://github.com/aryan7081', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gdy7', icon: 'linkedin' },
    { label: 'YouTube', href: 'https://www.youtube.com/@aryanlovescode', icon: 'youtube' },
    { label: 'Email', href: 'mailto:gangadhar.y23csai@nst.rishihood.edu.in', icon: 'mail' },
  ],
  experience: [
    {
      role: 'Backend Developer',
      org: 'IIT Roorkee',
      dates: 'Jun 2024 — Mar 2025',
      description: 'Built 48 REST APIs with Django, Redis caching at 5ms, and Celery data pipelines.',
    },
    {
      role: 'Frontend Developer',
      org: 'LABH AI',
      dates: 'Oct 2023 — Feb 2024',
      description: 'Shipped a stock screener UI with React, Tailwind, and Context API.',
    },
  ],
  projects: [
    {
      title: 'Direction',
      subtitle: 'Career Recommendation Platform',
      description: 'Edtech MVP with Django REST APIs, Google OAuth, and AWS deployment.',
      tags: ['Django', 'React', 'AWS', 'PostgreSQL'],
      link: 'https://github.com/aryan7081/Direction',
    },
    {
      title: 'Anomaly Detection',
      subtitle: 'Network Intrusion Pipeline',
      description: 'PyTorch MAE + One-Class SVM on NSL-KDD for unsupervised threat detection.',
      tags: ['PyTorch', 'scikit-learn', 'Python'],
      link: null,
    },
    {
      title: 'Stock Screener',
      subtitle: 'Real-time Screening UI',
      description: 'Responsive React dashboard with shared state via Context API.',
      tags: ['React', 'Tailwind CSS', 'REST API'],
      link: 'https://github.com/aryan7081/Stock-Screener',
    },
  ],
  skills: [
    'Python', 'JavaScript', 'React', 'Django', 'Node.js',
    'PostgreSQL', 'MongoDB', 'Redis', 'AWS', 'Docker',
    'Tailwind CSS', 'REST APIs', 'Celery', 'Git', 'System Design',
  ],
  highlights: [
    { value: '48+', label: 'APIs Shipped' },
    { value: '5ms', label: 'Response Time' },
    { value: '30+', label: 'Open Source PRs' },
    { value: '39M+', label: 'YouTube Views' },
  ],
}
