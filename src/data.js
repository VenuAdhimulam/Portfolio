import AWS_Logo from "./images/AWS_Cloud_Computing.png";
import Hackerrank_Logo from "./images/Hackerrank_Logo.png";
import Python_Logo from "./images/Python_Logo.png";
import SQL_Logo from "./images/SQL_Logo.svg";
import Udemy_Logo from "./images/Udemy_Logo.png";
import Mize_Logo from "./images/Mize_Logo.jpg";
import CSU_Logo from "./images/CSU_Logo.jpeg";
import VJIT_Logo from "./images/VJIT_Logo.png";
import Drughelp_Logo from "./images/Drughelp_Logo.png";
import Accenture_Logo from "./images/Accenture_Logo.png";
import Ajna_Logo from "./images/Ajna_Logo.jpg";

import AWS from "./images/svg/AWS.svg";
import BitBucket from "./images/svg/BitBucket.svg";
import Bootstarp from "./images/svg/Bootstarp.svg";
import CSS from "./images/svg/CSS.svg";
import Docker from "./images/svg/Docker.svg";
import ExpressJS from "./images/svg/ExpressJS.svg";
import Firebase from "./images/svg/Firebase.svg";
import Git from "./images/svg/Git.svg";
import GoogleAnalytics from "./images/svg/Google_Analytics.svg";
import HTML from "./images/svg/HTML.svg";
import Java from "./images/svg/Java.svg";
import JavaScript from "./images/svg/JavaScript.svg";
import Jenkins from "./images/svg/Jenkins.svg";
import MySQL from "./images/svg/MySQL.svg";
import NodeJS from "./images/svg/NodeJS.svg";
import React from "./images/svg/React.svg";
import Redux from "./images/svg/Redux.svg";
import Springboot from "./images/svg/Springboot.svg";
import Stripe from "./images/svg/Stripe.svg";
import Tableau from "./images/svg/Tableau.svg";
import VSCode from "./images/svg/VS_Code.svg";
import IntellijIDE from "./images/svg/IntellijIdea.svg";
import Jira from "./images/svg/Jira.svg";

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
    logoSize: "170px",
  },
  {
    id: 2,
    degree: "Bachelor of Technology",
    stream: "Computer Science & Engineering",
    university: "Vidya Jyothi Institute of Technology",
    tenure: "2014 - 2018",
    logo: VJIT_Logo,
    logoSize: "135px"
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
    role: "Software Engineer",
    company: "Drughelp.care ",
    date: "Jul 2022 – May 2023",
    img: Drughelp_Logo,
    desc: {
      points: [ 
        "• At Cleveland State University, I worked as a Software Engineer on Drughelp.Care, a research project and free website designed to assist individuals affected by the opioid crisis.",
        "• Designed, developed, and deployed a chatbot feature on the website to provide aid and support to visitors.",
        "• Enhanced website performance by +40% through the integration of Google Analytics to track website traffic and user behavior."
      ],
    },
    techStack: {
      logos : [ React, Redux, JavaScript, AWS, Git, Jira, GoogleAnalytics, MySQL, VSCode ],
    },
  },
  // {
  //   id: "2",
  //   role: "Engagement Ambassador",
  //   company: "Ruffalo Noel Levitz",
  //   date: "Feb 2022 – June 2022",
  //   img: Python_Logo,
  //   desc: "",
  //
  // },
  {
    id: "3",
    role: "Application Development Analyst",
    company: "Accenture",
    date: "Aug 2021 – Dec 2021",
    img: Accenture_Logo,
    desc: {
      points: [
        "• My role & responsibilities at Accenture included creating, testing, and implementing software applications that fulfilled JPMC's (Client) specific business needs.",
        "• During my tenure, I collaborated with JPMC stakeholders to understand their needs and developed software solutions using Java 8, Springboot, React etc.",
      ],
    },
    techStack: {
      logos : [ Java, Springboot, React, JavaScript, BitBucket, Docker, Jira, IntellijIDE],
    },
  },
  {
    id: "4",
    role: "Junior Software Engineer",
    company: "Mize, Inc",
    date: "Nov 2018 – Jul 2021",
    img: Mize_Logo,
    desc: {
      points: [
        "• Key software engineer specializing in Springboot, Java, Hibernate, JavaScript, and React.",
        "• Integrated WARRANTY, REGISTRATION, PRODUCTS, and PLANS smartblox from Customer Central into Takeuchi (USA & JAPAN), Bluestar, and Kohler client projects.",
        "• Improved code quality by 30% through optimization, addressing security issues, and implementing clean code practices.",
      ],
    },
    techStack: {
      logos : [ Java, Springboot, React, Redux, JavaScript, AWS, Git, Jira, Jenkins, MySQL, IntellijIDE ],
    },
  },
  {
    id: "5",
    role: "Intern",
    company: "Ajna Networks",
    date: "May 2018 – Oct 2018",
    img: Ajna_Logo,
    desc: {
      points: [
        "• At Ajna Networks, focused on using front-end technologies to create dynamic webpages for clients.",
        "• Internship provided hands-on experience and proficiency in front-end development, mastering diverse tools and technologies for effective webpage creation.",
      ],
    },
    techStack: {
      logos : [ HTML, CSS, Bootstarp, React, JavaScript, Git, MySQL, VSCode ],
    },
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

