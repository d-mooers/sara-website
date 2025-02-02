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
  p6?: string;
  p7?: string;
};

export const aboutData: AboutData = {
  sectionTitle: 'About',
  img: { src: profilePicture },
  p1: `In June 2022, I will be a newly graduated Mechanical Engineer with my BSME. 
  I plan to use this degree to pursue my passion for innovative technologies/products 
  to increase universal accessibility across all industries. At the University of 
  Washington, I have delved deep into the field of health and medicine, but I am excited 
  to see where my degree will take me as I strive to do my part in creating a more 
  accessible world.`
  p2: `During thorough exploration into the marriage between health and engineering, 
  I have found a passion for accessibility. This passion has been applied to my academic
  curriculum as educator roles for incoming students and first-hand creating innovative 
  designs to address existing needs in the health industry.`,
  p3: `Projects that I have worked on focus primarily on medical device advancements.
  The considerations when designing for the user have allowed me to view engineering
  design in a different light. Compared to entering college with only a working knowledge
  of Microsoft Office Suite to my name, I have gained a lens of accessibilty and the skills
  to act on respective designs.`,
  p4: '',
  p5: `Technical Experience: SolidWorks, 3D Printing (PLA, HTPLA, & PETG), MATLAB, FEA (ANSYS), Java, 
  ME Machine Shop (emphasis on Lathe & Kneemill), Technical Writing, Microsoft Office Suite, Social Media 
  Coordination.`,
  p6: `Business Experience: Team Leadership, Educator, Presntation (Individual & Group), 
  Recruitment, Conflict Resolution, Professional Liason, Meeting Facilitator, Tradeshow Marketing & Networking.`,
  p7: `Relevant Coursework @ UW: Introductory Biomechanics, Musculoskeletal Biomechanics, Vibrations, Advanced 
  Energy Conversion Systems, Sensors & Instrumentation, Manufacturing Processes, Mechanical Design.`,
};

export const projectSectionTitle = 'Projects';

export const projectData = [
  {
    title: 'Transtibial Socket & Pylon - BWB Prosthetics',
    description1: `Summer of 2021`,
    description2: `Tools: SolidWorks Parts & Assemblies, Design for 3D Printing, 3D Printing, 
    Aluminum Machining, Laser Cutting.`,
    description3: `I co-lead a group of undergraduate engineering students to create a 
    transfemoral socket that is affordable, accessible, and adjustable. We compete 
    annually at UW's Hollomon Health Innovation Challenge where we have been finalists 
    two sequential years. Currently, we are working on cultivating a modular transtibial 
    prosthesis (socket, shaft, and foot) in a virtual setting by way of 3D modeling and 
    market analysis. As we gain access to campus, we have begun the physical prototyping 
    process through intermediate machining`,
    liveUrl: 'https://selfolio.netlify.app/',
    liveButtonText: 'See it live',
    sourceUrl: '',
    sourceText: '',
    img: { src: projectX },
  },
  {
    title: 'Spoon for Use with Essential Tremors - HuskyADAPT Design Team',
    description1: `Summer of 2021`,
    description2: `Tools: SolidWorks Parts & Assemblies, Design for 3D Printing, 3D Printing.`,
    description3: `Consulting with a local clinician, my team devised a spoon that accommodates 
    those with Essential Tremors when dining. We researched, brainstormed, designed, and 
    manufactured a 3D-printed, functional prototype for our product and its targeted clientele.`,
    liveUrl: 'https://selfolio.netlify.app/',
    liveButtonText: 'See it live',
    sourceUrl: '',
    sourceText: '',
    img: { src: project2 },
  },
  {
    title: 'Mechanical CPR Device - UW EIH PushStart',
    description1: `Academic Year 2021-2022`,
    description2: `Tools: SolidWorks Parts & Assemblies, Collaboration through GrabCAD, 
    Design for 3D Printing, 3D Printing (PLA & PETG), Patent Filing, Business Plan Articulation.`,
    description3: `Under remote mentorship from Philips, I collaborated with UW engineering students 
    to design preliminary prototypes of a mechanical CPR device for first responders both in low-resource 
    areas & while transporting out-of-hospital cardiac arrest victims. Designed for 3D printing and 3D printed 
    multiple componenets of the device using both Ender3 Pro & Prusa printers with PLA, HTPLA, and PETG filaments. 
    During multiple competitions, I delivered pitches to investors that awarded the project advancement in 
    a business compeition and a finalist place in a health innovation challenge. I act as the liaison for 
    external contacts, communicating via virtual meeting, email and phone. As such, I coordinated meetings with 
    stakeholders to establish the identified need and issues with current solutions on the market.`,
    description4: `Honors & Acknowledgements: Hollomon Health Innovation Prototype Funding Recipient, Dempsey 
    Start-Up Competition Investment Round Finalist, Dempsey Competition Sweet 16 Finalist, Provisional Patent Awardee.`
    liveUrl: 'https://selfolio.netlify.app/',
    liveButtonText: 'See it live',
    sourceUrl: 'https://github.com/guvarallo/selfolio',
    sourceText: '',
    img: { src: project3 },
  },
  {
    title: 'Sterling Engine - UW Manufacturing Processes Course',
    description1: `Winter of 2022`,
    description2: `Tools: SolidWorks Parts & Assemblies, 3D Printing, Lathe, Kneemill.`,
    description3: `By implementing tolerances and fitments of parts, I machined and 3D printed four parts of the sterling 
    engine that my lab section cumulatively machined and assembled. Using a combination of Lathe and Kneemill, I created 
    brass and steel parts, integral to the functionality of the engine. In collaboration with classmates, I troubleshooted 
    assembly difficulties to ensure a final product was achieved to a high standard, completing our assembly before any other 
    lab section. Created Process Plans that articulated the tasks at hand and the respective steps and calculations needed to 
    attain the intended prodcuts with high efficiency.`,
    liveUrl: 'https://selfolio.netlify.app/',
    liveButtonText: 'See it live',
    sourceUrl: '',
    sourceText: '',
    img: { src: project4 },
  },
  {
    title: 'Lawn Mower - UW Intro to SolidWorks Course',
    description1: `Spring of 2020`,
    description2: `Tools: SolidWorks Parts & Assemblies, General Tolerancing & Fitments, Bill of 
    Materials, Surface Finishing.`,
    description3: `With an open ended assignment, I applied all of my knowledge from this course by 
    both designing and modeling a lawnmower. It is based roughly on an existing Honda lawnmower residing 
    in my parents' garage.`,
    liveUrl: 'https://selfolio.netlify.app/',
    liveButtonText: 'See it live',
    sourceUrl: '',
    sourceText: '',
    img: { src: project5 },
  },
  {
    title: 'Monitor Housing - UW EIH Under Pressure',
    description1: `Summer of 2021`,
    description2: `Assisted with clinical trials and refining a PPG- and ECG-based 
    non-invasive, continuous blood pressure monitoring device that is compatible with 
    existing operating room software (Philips IntelliVue MX800 monitors). I have assisted 
    in researching data extraction techniques to allow patient data to be compiled into 
    a database that is used to train a neural network that cleans the real-time blood pressure 
    data. In presenting a final product, I designed, modeled, and 3D printed a housing for the 
    complete system including an LCD screen that displays the continuous blood pressure reading 
    & all hardware components.`,
    liveUrl: 'https://selfolio.netlify.app/',
    liveButtonText: 'See it live',
    sourceUrl: '',
    sourceText: '',
    img: { src: project5 },
  },
  {
    title: 'Bicycle - LinkedIn Learning',
    description1: `Summer of 2021`,
    description2: `Followed general instruction from a LinkedIn Learning course to design a 
    realistic model of a mountain bike. Customized the bike to personal liking using pre-existing 
    SolidWorks knowledge and cycling experience to better emulate my personal bike.`,
    liveUrl: 'https://selfolio.netlify.app/',
    liveButtonText: 'See it live',
    sourceUrl: '',
    sourceText: '',
    img: { src: project5 },
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
