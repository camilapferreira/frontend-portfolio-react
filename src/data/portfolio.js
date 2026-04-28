// =============================================================
// Edite este arquivo para personalizar todo o conteúdo do portfólio
// =============================================================

export const personalInfo = {
  name: 'Camila Ferreira',
  fullName: 'Camila P. Ferreira',
  title: 'Frontend Developer',
  greeting: 'Hi, my name is',
  tagline: 'I build things for the web.',
  shortBio:
    'I bring over a decade of experience in the intersection of technology companies and venture capital. Presently, my passion lies in crafting exceptional products as a frontend developer.',
  location: 'Valencia, Spain',
  photo: '/images/5.png',
};

export const aboutParagraphs = [
  'I currently reside in Valencia, Spain. I hold a degree in chemical engineering. However, my innate inclination towards exploration has led me to delve into various fields of knowledge, including software development and psychology.',
  'My professional journey began during my university years, working in industries such as Solvay and 3M. Meanwhile, a significant part of my career was forged in the technological sphere, taking on roles spanning diverse areas such as Marketing, Product, and Growth.',
  'One of the motivations that drove me to study psychology was the need to address the challenges inherent in the business world, such as work-related suffering, which can lead, for example, to burnout syndrome.',
  'Alongside my professional endeavors, I have always nurtured a passion for software development. The ability to create solutions, innovate, and contribute to the ever-evolving digital landscape has been a driving force in my journey.',
];

export const skills = [
  'JavaScript (ES6+)',
  'React',
  'HTML5',
  'CSS3',
  'Tailwind CSS',
  'Bootstrap',
  'Git & GitHub',
  'REST APIs',
  'Responsive Design',
  'Netlify',
];

export const projects = [
  {
    title: 'Weather App',
    description:
      'A simple web application that allows users to search for current weather conditions, including temperature, in cities around the globe. Built with JavaScript and integrated with a weather API to fetch real-time data.',
    image: '/images/1.png',
    tech: ['JavaScript', 'HTML', 'CSS', 'Weather API'],
    liveUrl: 'https://orchid-app.netlify.app/',
    repoUrl: 'https://github.com/camilapferreira',
  },
  {
    title: 'Time Zone App',
    description:
      'A JavaScript project that displays the current time in various major cities around the world. Built with JavaScript, HTML, and CSS, with a clean and responsive interface.',
    image: '/images/2.png',
    tech: ['JavaScript', 'HTML', 'CSS'],
    liveUrl: 'https://time-zone-app.netlify.app/',
    repoUrl: 'https://github.com/camilapferreira',
  },
  {
    title: 'Inspiring Quotes (AI)',
    description:
      'A JavaScript-powered application that interfaces with an AI API. Users input prompts or keywords and instantly receive curated quotes tailored to specific topics.',
    image: '/images/3.png',
    tech: ['JavaScript', 'AI API', 'HTML', 'CSS'],
    liveUrl: 'https://quotes-ai-generator.netlify.app/',
    repoUrl: 'https://github.com/camilapferreira',
  },
];

export const contacts = {
  email: 'pferreiracamila@gmail.com',
  github: 'https://github.com/camilapferreira',
  linkedin: 'https://www.linkedin.com/in/camilapferreira/',
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
