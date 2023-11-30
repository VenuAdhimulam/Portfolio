import AWS_Logo from "./images/AWS_Cloud_Computing.png";
import Hackerrank_Logo from "./images/Hackerrank_Logo.png";
import Python_Logo from "./images/Python_Logo.png";
import SQL_Logo from "./images/SQL_Logo.svg";
import Udemy_Logo from "./images/Udemy_Logo.png";
import Mize_Logo from "./images/Mize_Logo.jpg";
import CSU_Logo from "./images/CSU_Logo.jpeg";
import VJIT_Logo from "./images/VJIT_Logo.png";

export const sliderItems = [
  {
    id: 1,
    greeting: "Hello, I'm",
    title: "Venu Adimulam",
    desc: "Software Engineer",
    bg: "#f7f7f7",
  }
];

export const eduObj = [
  {
    id: 1,
    degree: "Master of Science",
    stream: "Computer Science",
    university: "Cleveland State Univeristy",
    tenure: "2022 - 2023",
    logo: CSU_Logo,
  },
  {
    id: 2,
    degree: "Bachelor of Technology",
    stream: "Computer Science & Engineering",
    university: "Vidya Jyothi Institute of Technology",
    tenure: "2014 - 2018",
    logo: VJIT_Logo
  },
  // {
  //   id: 3,
  //   degree: "Associate Degree",
  //   stream: "MPC",
  //   university: "Andhra Univeristy",
  //   logo: Mize_Logo
  // },
  // {
  //   id: 4,
  //   degree: "",
  //   university: "",
  //   logo: Mize_Logo
  // }
];

export const aboutData = [
  {
    id: 1,
    title: "About Me",
    img: Python_Logo,
    desc: `I'm a Software Engineer known for building sophisticated web applications,
           adhering to best practices in software development, 
           producing readable code, and eager to continue learning.`,
    bg: "#f7f7f7",
  }
];

export const categories = [
  {
    id: "1",
    img: "https://i0.wp.com/thehhub.com/wp-content/uploads/2018/11/dom-hill-512919-unsplash.jpg?resize=1440%2C1993",
    title: "HOODIE STYLE!",
  },
  {
    id: "2",
    img: "http://intomodeling.com/img/commercial_mobile.jpg",
    title: "LOUNGE LOVE",
  },
];

export const experiences = [
  {
    id: "1",
    role: "Full Stack Engineer",
    company: "Drughelp.care ",
    date: "Jul 2022 – May 2023",
    img: Python_Logo,
    desc: {
      points: [ 
        "• At Cleveland State University, I worked as a Full Stack Engineer on Drughelp.Care, a research project and free website designed to assist individuals affected by the opioid crisis.",
        "• Designed, developed, and deployed a chatbot feature on website to aid and support to visitors.",
        "• Enhanced website performance by +40% through the integration of Google Analytics to track website trafic and user behavior.",
      ],
    },
    link: "https://www.hackerrank.com/certificates/d81ddbaeb8f1",
  },
  // {
  //   id: "2",
  //   role: "Engagement Ambassador",
  //   company: "Ruffalo Noel Levitz",
  //   date: "Feb 2022 – June 2022",
  //   img: Python_Logo,
  //   desc: "",
  //   link: "https://www.hackerrank.com/certificates/d81ddbaeb8f1",
  // },
  {
    id: "3",
    role: "Application Development Analyst",
    company: "Accenture",
    date: "Aug 2021 – Dec 2021",
    img: Python_Logo,
    desc: {
      points: [
        "• My role & responsibilities at Accenture included creating, testing, and implementing software applications that fulfilled JPMC's (Client) specific business needs.",
        "• During my tenure, I collaborated with JPMC stakeholders to understand their needs and developed software solutions using JAVA 8, SPRING BOOT, REACT etc.",
      ],
    },
    link: "https://www.hackerrank.com/certificates/d81ddbaeb8f1",
  },
  {
    id: "4",
    role: "Junior Software Engineer",
    company: "Mize, Inc",
    date: "Nov 2018 – Jul 2021",
    img: Mize_Logo,
    desc: {
      points: [
        "• Worked as a key software engineer and provided expertise in SPRINGBOOT, JAVA, HIBERNATE, JAVASCRIPT, REACT and YUI.",
        "• Assisted Takeuchi (USA & JAPAN), Bluestar and Kohler client projects with the integration of the WARRANTY, REGISTRATION, PRODUCTS, and PLANS smartblox from the Customer Central project into their respective projects.",
        "• Achieved 30% increase in code quality by optimizing code, addressing critical security issues, and clean code practices.",
      ],
    },
    link: "https://www.hackerrank.com/certificates/d81ddbaeb8f1",
  },
  {
    id: "5",
    role: "Intern",
    company: "Ajna Networks",
    date: "May 2018 – Oct 2018",
    img: Python_Logo,
    desc: {
      points: [
          "• At Ajna Networks, my primary responsibilities revolved around utilizing front-end technologies to develop dynamic webpages for clients.",
          "• Through my internship, I gained valuable hands-on experience in front-end development and acquired proficiency in creating effective web pages using diverse tools and technologies.",
        ],
      },
    link: "https://www.hackerrank.com/certificates/d81ddbaeb8f1",
  },
];

export const certifications = [
  {
    id: "1",
    title: "AWS Educate Introduction to Cloud 101",
    date: "Aug 05, 2023",
    img: AWS_Logo,
    link: "https://www.credly.com/badges/2e61b3c9-1592-4f42-abaf-28026cc3ce06/linked_in_profile",
  },
  {
    id: "2",
    title: "Microservices with Spring Boot, Spring Cloud, Docker, K8s",
    date: "Oct 01, 2023",
    img: Udemy_Logo,
    link: "https://www.udemy.com/certificate/UC-c3601bb5-f397-4c4b-93da-5096eea254bd/",
  },
  {
    id: "3",
    title: "Problem Solving (Basic)",
    date: "Aug 04, 2023",
    img: Hackerrank_Logo,
    link: "https://www.hackerrank.com/certificates/08f93a6d7d34",
  },
  {
    id: "4",
    title: "Python (Basic)",
    date: "Sept 11, 2023",
    img: Python_Logo,
    link: "https://www.hackerrank.com/certificates/d81ddbaeb8f1",
  },
  {
    id: "5",
    title: "SQL (Basic) Certificate",
    date: "Jul 27, 2023",
    img: SQL_Logo,
    link: "https://www.hackerrank.com/certificates/59472e891f43",
  },
  {
    id: "6",
    title: "SQL (Intermediate) Certificate",
    date: "Aug 02, 2023",
    img: SQL_Logo,
    link: "https://www.hackerrank.com/certificates/7a9715856f2f",
  },
];

