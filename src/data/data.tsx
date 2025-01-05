import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItemEducation,
  TimelineItemExperience,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Arturo Isidro H.',
  description: "Porfolio and resume site for Arturo Isidro H. - Full Stack Software Engineer",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Arturo Isidro.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Vancouver based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently open to
        new opportunities.  <strong className="text-stone-100">Cloud Native Developer</strong> with experience in Banking sectors. 
        Most of the time working in Backend Development, but also have experience in Frontend Development.
        AWS Certified and Kafka Certified.
      
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my Spare time, you can catch me training in <strong className="text-stone-100">Soccer teams, Volleyball teams</strong>,
       or exploring beautiful{' '}
        <strong className="text-stone-100">British Columbia</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.docx',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Adaptable and efficient professional with strong individual initiative and enthusiasm. Known for responsibility and a great desire to improve, making me a capable and reliable team member.
  Curious and eager to learn, I am always looking for new challenges and opportunities to grow. I am a team player who is able to work in a fast-paced environment, and I am always looking for ways to improve my skills and knowledge.
  `,
  aboutItems: [
    {label: 'Location', text: 'Vancouver, BC', Icon: MapIcon},
    {label: 'Nationality', text: 'Spanish / Peruvian', Icon: FlagIcon},
    {label: 'Interests', text: 'Soccer, Volleyball, Fitness', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Zaragoza, Cefor Izquierdo', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Accenture Iberia Spain.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 8,
      },
      {
        name: 'French',
        level: 2,
      },
      {
        name: 'Spanish',
        level: 10,
      },{
        name: 'Italian',
        level: 4,
      }
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 6,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'JavaScript',
        level: 6,
      },
      {
        name: 'Angular',
        level: 5,
      }
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Java',
        level: 8,
      },
      {
        name: 'Spring Boot',
        level: 7,
      },
      {
        name: 'Spring Data',
        level: 6,
      },{
        name: 'Spring Security',
        level: 5
      },
      {
        name: 'AWS',
        level: 7,
      },
      {
        name:'Docker',
        level: 5
      }
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 5,
      },
      {
        name: 'Android',
        level: 4,
      }
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Simple Counter',
    description: 'Counter JavaScript.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Pokemon API Gift',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  }
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItemEducation[] = [
  {
    date: 'June 2016',
    location: 'Zaragoza',
    title: 'Computer Engineering',
    nameSchool: 'University of Zaragoza',
  },
  {
    date: 'June 2018',
    location: 'Zaragoza',
    title: 'Associate degree, Multiplatform Applications Development',
    nameSchool: 'Cefor Izquierdo',
  },
];

export const experience: TimelineItemExperience[] = [
  {
    date: 'June 2022 - October 2024',
    location: 'Madrid - Spain',
    title: 'Cloud Native Software Engineer',
    nameCompany: 'Accenture Spain',
    content: (
      <p>
        Engaged in the development of new features for our banking client, adhering to clean code principles and other best practices. 
        As a developer, I participated in architectural design, enhancing the latency of our microservices and optimizing interactions with other microservices.
        Technologies utilized included Java 11, Java 17, and Java 21, Maven, Git, OpenAPI, Swagger, Bamboo, SonarQube, Mockito, JUnit, Docker, and Kubernetes.
        Additionally, we leveraged AWS services such as DynamoDB, AWS CloudWatch, S3, SNS, and Aurora DB. Our deployment tools included Bamboo and Harness.
        Since this is a banking project, we adhered to strict security standards and best practices.
        This project followed the Agile methodology.
      </p>
    ),
  },
  {
    date: 'January 2022 - June 2022',
    location: 'Madrid - Spain',
    title: 'Java Software Engineer',
    nameCompany: 'Bilbomatica Spain',
    content: (
      <p>
        Project base on Public Administration. We mainly maintance the project and bug fixing for the client.
        We developed some new features for the client and some improvements in the project like refactoring some integrations with third party services.
        Technologies used: Java 8, Spring boot, Jenkins, Maven, Sonarqube, PL/SQL, RestApi, Swagger.
        This project was base on Waterfall methodology.
      </p>
    ),
  },
  {
    date: 'August 2012 - January 2022',
    location: 'Zaragoza - Spain',
    title: 'FullStack Engineer',
    nameCompany: 'Hiberus Technology',
    content: (
      <p>
        Maintance of projects and bug fixing. Migration of projects from Monolithics to Microservices architecture. 
        Our team could migrate a project from Monolithic to Microservices in 3 months with a team of 5 people. This project was
        part of Public Administration. This project was base on Agile methodology.
        Fullstack technologies used: Java 7, Java 8, Spring, Spring boot, Angular, Jenkins, Kafka, Maven, Sonarqube, Docker, Kubernetes and Subversion.
      </p>
    ),
  },
  {
    date: 'July 2019 - August 2021',
    location: 'Madrid - Spain',
    title: 'Software Java Engineer',
    nameCompany: 'Deloitte Spain',
    content: (
      <p>
        Developing projects for the banking sector. Developed project from scratch. Application of monolithic architecture.
        Application base on exchange currency using third party services. This project was base on Agile methodology.
        Technologies used: Java, Spring, Angular, Jenkins, Kafka, Maven, Sonarqube, Docker, Kubernetes, Swagger, RestAPI.
      </p>
    ),
  },
  {
    date: 'July 2018 - April 2019',
    location: 'Zaragoza - Spain',
    title: 'Junior Software Engineer',
    nameCompany: 'Indra Spain',
    content: (
      <p>
        Maintance of projects and bug fixing. Technologies used: JavaEE, Spring. 
        Worked with technologies like PL1 and Cobol. Most of the time working with IBM Mainframe.
      </p>
    ),
  }
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: <a href="https://www.linkedin.com/in/ignacio-rodr%C3%ADguez-su%C3%A1rez/" target="_blank" rel="noopener noreferrer">Ignacio Rodriguez</a>,
      text: 'Arturo is a great team player, always willing to help and learn. He is a great asset to any team.',
    
    },
    {
      name: <a href='https://www.linkedin.com/in/franck-chavez-9014344a/' target="_blank"  rel="noopener noreferrer" > Franck Chavez </a>,
      text: 'Arturo is a very good developer, always willing to learn and improve. He is a great team player and a great asset to any team.',
    }
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'arturoisidroh@gmail.com',
      href: 'mailto:arturoisidroh@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Vancouver BC, Canada',
      href: 'https://www.google.ca/maps/place/Vancouver,+Columbia+Brit%C3%A1nica/@49.2578182,-123.2063047,12z/data=!3m1!4b1!4m6!3m5!1s0x548673f143a94fb3:0xbb9196ea9b81f38b!8m2!3d49.2827291!4d-123.1207375!16zL20vMDgwaDI?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D',
    },
    {
      type: ContactType.Github,
      text: 'aisidr12',
      href: 'https://github.com/aisidr12',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/aisidr12'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/arturoisidroh/'}
];
