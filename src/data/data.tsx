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
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
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
  TimelineItem,
  TimelineItemCertification,
  TimeLineItemEducation,
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
  I’m a <strong className="text-stone-100">Vancouver-based Full Stack Software Engineer</strong>, passionate about building scalable and innovative solutions. 
  With extensive experience as a <strong className="text-stone-100">Cloud-Native Developer</strong> in the Banking sector, 
  I specialize in <strong className="text-stone-100">Backend Development</strong> while maintaining proficiency in <strong className="text-stone-100">Frontend Development</strong>.
  My certifications in AWS and Kafka reflect a commitment to staying at the forefront of technology and delivering excellence in every project.
</p>
<p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
  Outside of work, I thrive on teamwork and adventure. You’ll often find me training with <strong className="text-stone-100">soccer</strong> and <strong className="text-stone-100">volleyball teams </strong> 
  or exploring the stunning landscapes of <strong className="text-stone-100">British Columbia</strong>, fueled by curiosity and a love for new challenges.
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
  description: `Adaptable and efficient professional with a proactive mindset and genuine enthusiasm for growth. Recognized for my strong sense of responsibility, initiative, and commitment to continuous improvement, I am a reliable and capable team member. Naturally curious and eager to learn, I thrive on new challenges and opportunities to enhance my skills. 
  As a collaborative team player, I excel in fast-paced environments, always seeking innovative ways to expand my knowledge and contribute to collective success.`,
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
        name: 'Spanish',
        level: 10,
      },
      {
        name: 'English',
        level: 8,
      },
      {
        name: 'French',
        level: 2,
      },
      {
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
        level: 9,
      },
      {
        name: 'Spring Boot',
        level: 8,
      },
      {
        name: 'Spring Data',
        level: 6,
      },{
        name: 'Spring Security',
        level: 5
      },
      {
        name: 'AWS Services',
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
    title: 'Gif App',
    description: 'Application where you can find Gif images with React.',
    url: 'https://gif-app-react-nu.vercel.app/',
    image: porfolioImage3,
  },
  {
    title: 'S3 Bucket App with Spring boot',
    description: 'Application where you can upload files to S3 bucket using Spring boot via API.',
    url: 'https://github.com/aisidr12/S3bucketApp',
    image: porfolioImage1,
  },
  {
    title: 'Simple Counter',
    description: 'Counter JavaScript.',
    url: 'https://github.com/aisidr12/counterApp',
    image: porfolioImage2,
  } 
  ,
  {
    title: 'Heroes App',
    description: 'Small application where you can find your own hero in Gif in Angular.',
    url: 'https://github.com/aisidr12/heroesApp',
    image: porfolioImage4,
  },
  {
    title: 'Rock Paper Scissors API',
    description: 'Rock Paper Scissors API in Java - Spring boot',
    url: 'https://github.com/aisidr12/RockPaperScissors/tree/master',
    image: porfolioImage5,
  },
  {
    title: 'Demo Bank Operations',
    description: 'Demo Bank Operations in Java - Spring boot',
    url: 'https://github.com/aisidr12/DemoBank',
    image: porfolioImage6,
  },
  {
    title: 'Demo Bank Operations',
    description: 'Demo Bank Operations in Java - Spring boot using AWS Lambda to calculate the interest of a loan.',
    url: 'https://github.com/aisidr12/BankLambda',
    image: porfolioImage7,
  },
  {
    title: 'Demo SQS',
    description: 'Demo SQS in Java - Spring boot using AWS SQS to send messages.',
    url: 'https://github.com/aisidr12/demoSqs/tree/master/demo-SQS', 
    image: porfolioImage8,
  },
  {
    title: 'Spring Security 2024', 
    description: 'Spring Security 2024 in Java - Spring boot using Spring Security to secure the application.',
    url: 'https://github.com/aisidr12/practiceSecuritySpringBoot',
    image: porfolioImage9,
  },
  {
    title: 'Crud Operations with DynamoDb', 
    description: 'Crud Operations with DynamoDb in Java - Spring boot using DynamoDb to store data.',
    url: 'https://github.com/aisidr12/DynamoDb  ',
    image: porfolioImage10,
  },
  {
    title:'Async Operations in Java',
    description: 'Async Operations in Java - Spring boot using CompletableFuture to make async operations.',
    url: 'https://github.com/aisidr12/AsyncProgramExample',
    image: porfolioImage11,
  }
];

/**
 * Resume section -- Education
 */
export const education: TimeLineItemEducation[] = [
  {
    date: 'June 2016',
    location: 'Zaragoza',
    title: 'Computer Engineering',
    nameSchool: 'University of Zaragoza'
   },
   {
    date: 'June 2018',
    location: 'Zaragoza',
    title: 'Multiplatform Applications Development',
    nameSchool: 'Cefor Izquierdo College'
    },
  ];

  export const certifications: TimelineItemCertification[] = [
    {
      date: 'December 2023',
      title: 'AWS Cerfied Cloud practitioner',
      provider: 'Amazon Web Services',
      dateEnd: 'December 2026'
    },
    {
      date: 'July 2024',
      title: 'AWS Certified Solutions Architect - Associate',
      provider: 'Amazon Web Services',
      dateEnd: 'July 2027'
    },
    {
      date: 'November 2023',
      title: 'Apache Kafka fundamentals',
      provider: 'Confluent',
      dateEnd: 'November 2026'
    },
  ];
  
export const experience: TimelineItem[] = [
  {
    date: 'June 2022 - October 2024',
    location: 'Madrid - Spain',
    title: 'Cloud Native Software Engineer',
    nameCompany: 'Accenture Spain',
    content: (
      <p>
       Contributed to the development of new features for a banking client, adhering to clean code principles and industry best practices. Played an active role in architectural design, focusing on enhancing microservice latency and optimizing interactions between services. 
       Leveraged a wide range of technologies, including Java (versions 11, 17, and 21), Maven, Git, OpenAPI, Swagger, Mockito, JUnit, Docker, and Kubernetes. Utilized AWS services such as DynamoDB, CloudWatch, S3, SNS, and Aurora DB to ensure scalable and reliable solutions. Deployment processes were streamlined using Bamboo and Harness, while code quality and security were upheld with tools like SonarQube.
       Given the banking domain, adhered to strict security standards and compliance requirements. The project was executed following Agile methodologies, fostering collaboration and iterative development to meet evolving business needs
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
        Focused on a Public Administration project, primarily handling maintenance and bug fixes to ensure smooth client operations. Contributed to the development of new features and implemented enhancements, including refactoring integrations with third-party services to improve efficiency and reliability.
        Technologies utilized included Java 8, Spring Boot, Jenkins, Maven, SonarQube, PL/SQL, REST APIs, and Swagger. The project followed a Waterfall methodology, with a structured approach to planning and execution.
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
       Focused on a Public Administration project, primarily handling maintenance and bug fixes to ensure smooth client operations.
       Contributed to the development of new features and implemented enhancements, including refactoring integrations with third-party services to improve efficiency and reliability.
       Technologies utilized included Java 8, Spring Boot, Jenkins, Maven, SonarQube, PL/SQL, REST APIs, and Swagger. The project followed a Waterfall methodology, with a structured approach to planning and execution.
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
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = { 
  imageSrc: testimonialImage,
  testimonials: [
    {
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAKEBAQEBAKEBAJDRYNDQkJDRsICQcWIB0iIiAdHx8kKDQsJCYxJx8fLTstMT1AOi43Iys0ODwsNygtLisBCgoKDQ0NFg8NFSslFRkrKystNy4tKyszKystKzctKy03Nys3NysrLSsrNy0rLSsrKysrKysrKysrKystKysrLf/AABEIAMgAyAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAECBAUGB//EAD8QAAIBAgQCCAUACAMJAAAAAAECAAMRBBIhMQVBBhMiMlFhcYFCUpGh8BQjYpKxwdHhFTPxB0NjcnOCorLC/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAIREBAQACAgIDAQEBAAAAAAAAAAECEQMhEjEEQVETMiL/2gAMAwEAAhEDEQA/AOex+CqE6Avm1DKLlZVp4SoF1Qi2pDCze03FUYdQxBGZv8u+Zfe0I9f9JOUAUwmpG9Rvec2ttvIDguFLUXuG7b27XYZZdpYEArc3CfCzZrw9GyqBmudwGa1vaMXCsC2UhdTl0tHYmVDH0x1ZBAtUOViD2kHiJSbA5KaqvaQb5jZhC8UxROqq2Xc+FPx0g8FWcgmxKstgDqD5wMSnXCgAhhbQ5TmB84XHVDl/V5FPzXuzys1F1HaGXmH2Dj3ka1EVwva5aqO0DEe1l3cIuYWY97IbgRlGm9+dzowjE6KLk5VA+UG0ZWvsRYnkRFTTG4/lvIYtuza5vf0Akiyg6so99RIYlAQLnfzteLQBbaQBvpDVlCre9hbmd5RSpr/DlNsLpllOxW0tvv8AWTVgOcGz3/LWgHfKNbeWXUtL8kaWMwJNtxr4CRaoLXvYeJ0mRjuJLT7zW/YQ/rPc8pi4jjo+FQfNh1rfeG6enWNikAtnp77FhcSIqqx7y+WU3LTjv8dc8yPRVhKfGyd+rP8A1KYH8Ig65l5j/WEpbEndtPSc3heKc+2B/wAM9ZTHsZrYTGhxqQRtnp7L6jlJNsYfkPL3hHH9/EQOHta45jfeTY8vwxpTY/m8UgxiiUu2GoYH6bwboqkWC35ZuyJXq4kjUlrE5L/EJEV2AtcXT4VXMzjzmX219LOMSo6Lk0IuDUU5Qv29YKlSYbhSAO+7ZnaWKLiohC51zdpgw7KekzqvD3Ziy1nF9s3ayfeVRFt6dmudhSa4tmuZVwNY3ClXIOquqlFUecnRwTANetVJtYgaKZNAKQQO/d7KI7ZB6CEDWy5gDpbKMoOuWV2oAnUdoG4ykqIYVBsNlO0jc3v/AGWXUQJ0BBBzdoWOtiJm4PBihUcMQ63JTs5mHvNOrXVLknYfuzmeI8ZVc2S+ZiQCe6BJ0rbWx+OVBqosOXNZkt0qW+Uhbbd0MJy+Nx9WtcFzYnXleUWB/NzKmH6m5O//AMbo10ZSLaaALkCzMOJytocynn4TllxDCGTFHxOnKPwLydYcTbS1y1recx+K8WydhNX5uNk9JTGPbKbHW2VSx7kzADrffe++aOY/o2VQGobsST5xFAATaSQ+X9BHJNjofbnNNJU23jR3Op9YwMcJJKhTUEiamA4gTpcq3lotT1mSYwNtRuJFgj0DhWNspB+HvU9yg8R5TYXXUa6exnC8HxZa2tmTY8m8p13DsSHAtty8EPhIqlsgnT6k7CNGqNf0/jFEAKuHdiwBtncOBe4aaGbLzW4GoOpiqBGszKwNPtBSbFpKm1OpYhTci5NiMnrMe9tvosLWNQlVFg/YzWsJN6ZS63FwNx2g0JTpC+iked7QlZc1gbA30bYAS/cT6UiuovmN/HQmUuJYYsabc6T37IzMBLdR0p5rvrTJvbUrAvXWqCBduzc3GS0WrBuVOpXLvYB1AUag5CfvCBiuuZreZ0lTBhaoI7uUWPIgcjeR4najTsDcLqTfeF2c0xuO8bNyqkHXVjsZznWs9ydb7nkIzlqzW1vUbQDW07TgvRcsgzLre/a3MefJjhO1cfFeS9OHyk7X/lJMhXe49Z1rcBqUqhptSYqWulamLpa8Ji+i9SqLHIPB+6R9oTnir8WuLYCRabWL6K4ijqOrqAfIbMJmnhtXVSj3HLYibTOX0wy48p9BI4Mkyc5Xqo1I2YEHwOkNSqX95cu2fohESbaRmBvvt/5RgDrrzgam+59Y0d9z6xhHCOTIyRkYqIPgqppuP2tPITsOF4glrE/5i5h5MOU4idRwmpmVW5pZvG3IzPKG6jMW7oBLajNpGkVrBVsB3fjO8Uk9NHEozXK77C/ZVZPBoVFiQ2bTQZQDK2GxdSqSLOoF/wBiWvC5+mpMyaismW4zNqdADaZPEsWzYrC0wSBnQst8qt2rTTzeZ/hJ0AjVFBAJzjKx7RT3l43VTZ0q47C3rswawv3VFlaUjQNBqhAUoVLc2djC8Ten15D5yc2QN8CQlKoisaQYFkW/VncCGWVPGRXwdS6Akan5V7LTK6TN1dO2wdrHxM3mIY2BtbfmJkdLKAegSNTSOYj4iNpM9qsZPQvCDEYi5F1orfXYmepUiABPNP8AZ9Uy1Kg8Reei9YEALFRp8Ry3nH8ndz09D40k49rLjNK+KF/aV34vT2DoTtoQYF+IjtWsbC/lJx3GiDoPznM/E0Vvewv48xKGN6RU6bG7c9hrI4bj1CuQpaxb437KmdeMutubPKb0yeleDV0zgAFPqZyNFrGd10golqTEagC+moInCKcp/NJ0cd6cfNO1zNz8ZGxO2n3iTW2ulveOVPIzViptufWMJE7n1jrvAkzIQttDBQoh50PR9gEPownPAzb4G+RSbK2puGFxJyOOod9AfmUH10ilygAEWypbIOV+UaY7Vpqscw8vE9nLKYpC+7G2tl0Cy06KvPtctc0CQTooI1sbjKJK9qa4ykzlOtbMxyhD2ReWsM6UXBNRiw1GfVR7xfolIsGyU8w1D/EZJ6aXN1BPidIKTNJsS2fMuVNQaZsKnlKNXBriXWsi9qmxDEnIaltPeWqdVKSPcZFtYlbmPg6VMN11NiQy5MgN1BPOVE3r0rY2u+HUWprbN2ioskpPiTiab3Wn2gQVDFnt4295rYpxUKoStk1OY2YwVDACnbY73HdVrxXrs5vLpzHQKmf0lzyp0iT4biafGCcQWevVZANKVCmbMom3wfAdXXqVDTp0ziqCt1VLQJqeX0i4hwYHM1gxqjLryE4c+WXk29LDhuOHjXCUMoa1M1u9a7HvGdzT4YxwhYE5iut95U4d0bKnMwRFU3CDUsZ1lNQtG3y6ESrnMspIcwuONeNtQLOQRci57ULTsbg0mAX4guUzqMZwxazki6knloDLGB6OEEMzXty5GdPlpy3j2r8MoGph2RjcMpCsdSBacXg8AtSowqOaa02ylgudr+k9QegKeg002Gk4Clh6lPEOpRSMS5IDaixO8vHJnnjLZtmVKIRiN+rYpde61pBlA08/SWcfpVqDW4c7Cw3ld3BF7H6bTeVzZTVUSsdVtJR1EtCZ7p9ICHbYwMVEKbnAXVQQ2a3lqRpMMTY4Ot0b8Jk5ejjrqWKQoO/oBpbU6RSrQUWA8FXXcDSKY1pK2aOKFVgAG12bL1YMfFcQXDtaoQA21zdmmhhcGGudBy00a8p8Q4ajtd1zEC11JIMQVG4zhwQAFufjtcJL6gDcrte51vM//DUFiKVPe4zPmaW6gFSwKv8A9vaBMLo1inSRwT2G2srC4X2gesCAgoADcAL2VWHw1VCpyhgRZW6xbFI7DORzHMkWDRBU/Qqbi92B0PiYVAQ12NgpGVdg3rCVyF2G+mmgWDxAJC3K6XNtzaF7VPa9h6TJiGZr2rKcjbgjTSbBIC629+UwKnFFAo3vem2RjspuP7CWErmqLg6TzM8bK9fDKWLGJxyghARdj65BBVOL0Kat+sQ5GAOU3tMLiXFaeHzqnaquLF98g8py+Kr4msD8l9UsFm/Fx32jPkkmo6KrxSliGIpls6NewFlcS5guJgi2oO1joROCRqlE3zkc7BrzQwXFjUdVe2py5l0InXlh1uOScverHYPibm8y8PUoLTas+XPTJs171HHICZ+O4gabFF1sD6znMaGo1GRs3ZaxG9jHhjtnyZyJVW6xyxtd2LHwgqthpY6+EYPrax+mhkWqX5HUTeRy27U5JPzwkZNZpGab90ytLNTuytCiHnS9EkDlgRtt4Cc1edX0MW+b3/lJy7U6MYdVB0H/AKiKHtufExSNFtdGOSlcEqPewEr0uJJiGyg2bUW56SnieGM5JUjLV1PWG4U+UXD+GNQbMWp7HUHNeZVrPbSDFSARmB+K11EzeNVDSRXUlcrgm3dIl9sy7ZT5A3AlTHUzWUqwB1BNP4TJUs0qiU8gzKRXQVA/wG/L1lmoxUbDTa3OY9BSzqj00FMWUtTNlpi3lJ4MVTUIItTCsRZ+tOg0EuEuZ7m+th5WMakVqK7lruLKUFsq32lHFYus1wKZA2zXsx9pDCU3RyTcCsArAHKvkbeIiOLGJpZ1K272x+UxcJxZTstv3WHymRarVBCLTWpr/mBwFMrVyRTauEKvhquSrSvcsLTm5MOu3Vw8naNfg36RiGe7BBqWp968LVwFKjoKlNr6HrAGqCWOAcSpuWBcWftWJ2lbi2Ao1bkPZt/IycbZdV0+WMm4zK1HDFtbPyyjl9IHFYdMKVdQNTsNkhKeGp4XtPYkC4udLzK4rxUVdAOW2865NuPlzWcM3XVkud2zN56yPSakFxL/ALQDeW0q8LvnUk2JIJ5kSz0wq5K6Hk9BfU6kS8eqwy7m2aBa3nI1jYWtv4RCqD7C/rGeoCL2PavbzmjJTWTAkFEJaaSM6er3ZXMs1u77yrFkeJ7zrehqEhj4E+mwnJTqOhuKClqZBu2otzkm63cRRjVyjuudbdgZjHk2QHzGwF22G+l5G5HP155pO1rai/0kc1/D/wCRMGobOeRHtpIlrb/TaTPp/K0iRvca8tLiAOG/rblLWCQHP5Uybe0o3tyt9hD4d9/NCNNL6R4+yqJb3+xkWbw/sYPPe97++krYnH06PeIzHZB2nj1aXoHi3ExhFOW2cg5de55wvQVjiqGJVySalbMS3aLXE47i2KNZnY/G2nPKJ1n+zk5EqX/3hv6zP5M8eKuj413yMXieEqYGqbZhqcp2Dyn/AIo43Lf0npfFuGJi0sQLjY81nF47oy4JtlPlMeHnwyn/AE6OXhzneLAxHEHqc/bwgKCFzc/1vL9XhTLoRb7S7g8GEtfUzq/pNdOX+eVvZ+D0DnBI2N5Y6aYfOlGoN0uh9N5eoUQo+/hAcVfrEy+GsjHLeW15YyY6cphqmljLFdgoAAOq7+EpsOrcjleXQ1wL7HQ35TtmPk470pCEGsI1Ecrj11UyGQj+oleNiLTV+77+0rXljEd0esrSclYpCdD0Ppk1XIHcT6aznQZ0/RBgpfXfeZ5elR16be/pFAo4PPn9YpmpNEddzTYDmWyMIitRthR/eLfyhbbeX3jAa+Egw2p1BzoDwvcxMraG9PTwBzNDheZNrDnymPxDjtOjcJ22Hy9xPUypjb6La4+Ee5PWUxfUpvlmfj8QtAa16ZI7tOgLl/WYWN4xVrbtlHy0+yJmPVv7/UzTHi/SuTVxfGqlTQWW+5XQtM8Es1ySTYkncwCHmf8ASGwxBJ/5TNOpOkqeIO06zodi1Wy3APy3sTOSxO49JLDVShBBII2INiJHJx+eOmnHyeGW3s1OqHH4JRxVTq7nQ+R1nF8P6U1qNgwSoB8/Zf6y7W6XJUFjSqD0IYTyr8PkmXUelPlcdnsHH1TUY30F5PCUC2ttP4zOqcXpk3yVPtrHqdIiq5adNR+05ztOrHiz1rTHLl49722GqBBroB9JhcT4iNQhudi/wrM/EY56t8zMf2RoJUYEzp4+GT25eTm36DY3h6L3UjWBZbSdDc+k3nVYXtYRswsf7rEHtp4feAvZjfYnf4lhG5X/AHvGazJOhWy1ND9RpA1MEbXU3Hhs0cNCU3tCyX2PSiRbff6ETd6NuRmsL3Iv5ym4Wpv+8NxNHgNM020KkfF81pjnhYqZNWvUddBpffLyjSVUtVN7G3IBdBFMtLmm/Ynb/SBxGJWgCzsAB9TBjE1TtT18C205fjmPNeoQRbquxlvmsQdZOOG6q0Xi3Gmr9lbqm2UaO/rMZ3/PCM73g3a3rOidTUZmdryGb3jE3/NIlEWyE2Fzby8BHwpIsfG/tI1j9o6E2AG/3ipg4jf2kacnXHP8EGscKrAiMZT9pKUEdfGNb1k8sfJDQDtEZMi0a0NANhIAkG8KRBgSb0CrNn5WPiOcnRe4sZB1+0gGtHjkKI62kg1td/4x3NxeDHOVSGSpeXeF479Gqox7t8rjxBmYuv5rET9f4w8hp6kFygE6Btud4pHh1QPSpG+ppLf5RoNdYpHQHxGHKIxKABVLGy22E8yq1cxJ8TfznZ8TxFUUahNVz+rIZSbA3nCk2JkY9LSZ4x2v4/eDc/eEqaCWQdM3haY1/NIKkYemOcQQrG5k1OU/gtAvuPWGYXjBiBAsuU+W8INPTx5GBc6wgoqGEH4YBDCgy4lMGSEiD+coifzxjCREhtJXvIExD2YwQhZFR+HaTkZnH9fWAcbQ1dr+dhbxMENRJNOi3I849rQe0Pe4vLhArJXkSdY4MQei9FKnX4WnsOrJpE3te232ilHoGDUpVEF7pVDelx/aNJp6Nxysepa9xmsBp2ZxrmxnX9KKTJSUsLB3GXN3iLGcfV3igISVR7j0kKcYnf1jCVLnLCnQyvThdhHsAtuJZcWA5k+HKVh3h6yw+48vpEEHOUSvJVnufSRAvEaaSYkVQ+EMlEnlKmUgmFv0YR7yfUHyklwxPMQ88f1U4c79B3kZaOFI5iR/RT4xf0xP+HJ+ACGrW5e0f9G8/tK9VSvOLymV6ovHljO4A5kViMdRKZokydM2kTHEYJ94hHf+UYRE6zoJiGptWC65kDeI0P8AeKD6CW66oDzo+vMRRVUWumFdmWkCahGrZXbOF2nI1d4oooSCbxcveKKMJJCtoIooAEbj1hHawJ57eYiigAFMPTEUUi1thFhJYpiKKY12ccO0ki2iiibSdptt+WkRFFEqkR+cpnYsxRTTj9ub5P8AlVEdYop0POJo0UUAduUQiihSdP0CynEsH2OHa3iNRGiiipx//9k=',
      name: <a href="https://www.linkedin.com/in/ignacio-rodr%C3%ADguez-su%C3%A1rez/" rel="noopener noreferrer" target="_blank" >Ignacio Rodriguez</a>,
      text: 'Arturo is a great team player, always willing to help and learn. He is a great asset to any team.'
    },
    {
      name: <a href='https://www.linkedin.com/in/franck-chavez-9014344a/'  rel="noopener noreferrer"  target="_blank" > Franck Chavez </a>,
      text: 'Arturo is a very good developer, always willing to learn and improve. He is a great team player and a great asset to any team.',
    }
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Hi there! 👋 Looking to collaborate, brainstorm ideas, or just say hi? I`d love to hear from you! Feel free and drop me a message through the contact form. Lets create something amazing together! 🚀',
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
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/arturoisidroh/'},
];
