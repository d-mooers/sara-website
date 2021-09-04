import profilePicture from '../assets/profile.jpg';

import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import projectX from '../assets/project1.png';

export const colors = {
  fourth: '#e8e3d3',
  third: '#4b2e83',
  second: '#85754d',
  first: '#d9d9d9',
};

export const headData = {
  title: 'Sara | Mechanical Engineer',
  description: 'Welcome to my website',
};

export const mainData = {
  title: 'Hi, my name is ',
  name: 'Sara Schultz',
  subtitle: 'I am a Mechanical Engineer',
  cta: 'Know more',
};

export type AboutData = {
  sectionTitle: string;
  img: any;
  p1?: string;
  p2?: string;
  p3?: string;
  p4?: string;
  p5?: string;
};

export const aboutData: AboutData = {
  sectionTitle: 'About',
  img: { src: profilePicture },
  p1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit 
  vehicula lectus. Suspendisse potenti. Ut eget odio eget dolor maximus pharetra 
  eu a risus. Cras elit leo, commodo nec risus in.`,
  p2: `Vivamus nec mattis eros, eget gravida mauris. Nam a turpis vel dui fermentum 
  ultrices. Mauris nec lorem ut nulla placerat bibendum quis et tortor. Phasellus 
  ac pellentesque leo. Donec eu lorem vehicula, ultrices enim ut, convallis nibh. 
  Sed blandit ultricies leo, vel porta ante suscipit a.`,
  p3: `Integer velit nulla, imperdiet suscipit dui non, sodales tincidunt odio.
  In hac habitasse platea dictumst. Cras ornare feugiat odio, at pharetra ante
  elementum sit amet. In aliquet purus ut mauris auctor, quis commodo libero
  dignissim. In tristique mi ut mi vulputate convallis.`,
  p4: '',
  p5: '',
};

export const projectSectionTitle = 'Projects';

export const projectData = [
  {
    title: 'Project 1',
    description1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Suspendisse rhoncus lectus vitae pulvinar scelerisque.`,
    description2: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Suspendisse rhoncus lectus vitae pulvinar scelerisque. Donec sed
    gravida elit. Duis vel placerat sem, ac condimentum orci. Ut
    scelerisque magna sit amet ex condimentum varius.`,
    liveUrl: 'https://selfolio.netlify.app/',
    liveButtonText: 'See it live',
    sourceUrl: '',
    sourceText: '',
    img: { src: projectX },
  },
  {
    title: 'Project 2',
    description1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Suspendisse rhoncus lectus vitae pulvinar scelerisque.`,
    description2: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Suspendisse rhoncus lectus vitae pulvinar scelerisque. Donec sed
    gravida elit. Duis vel placerat sem, ac condimentum orci. Ut
    scelerisque magna sit amet ex condimentum varius.`,
    liveUrl: 'https://selfolio.netlify.app/',
    liveButtonText: 'See it live',
    sourceUrl: 'https://github.com/guvarallo/selfolio',
    sourceText: 'Source Code',
    img: { src: project2 },
  },
  {
    title: 'Project 3',
    description1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Suspendisse rhoncus lectus vitae pulvinar scelerisque.`,
    description2: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Suspendisse rhoncus lectus vitae pulvinar scelerisque. Donec sed
    gravida elit. Duis vel placerat sem, ac condimentum orci. Ut
    scelerisque magna sit amet ex condimentum varius.`,
    liveUrl: 'https://selfolio.netlify.app/',
    liveButtonText: 'See it live',
    sourceUrl: 'https://github.com/guvarallo/selfolio',
    sourceText: '',
    img: { src: project3 },
  },
];

export const contactData = {
  title: 'Contact',
  description: 'Send me an e-mail!',
  mailTo: 'mailto:sjschultz67@gmail.com',
};

export const FooterData = {
  mailTo: 'mailto:sjschultz67@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/schultz-sara/',
};
