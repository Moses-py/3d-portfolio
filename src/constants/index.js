import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  mcmakler,
  fotosearch,
  neutrix,
  shoppy_clone,
  company_logo,
  italk_shot,
  ryva_shot,
  avion_shot,
  flair_shot,
  blog_shot,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Fullstack Developer",
    icon: mobile,
  },
  {
    title: "Technical Writer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Freelance Web Developer (Self-employed)",
    company_name: "Flai-r agency",
    icon: company_logo,
    iconBg: "#383E56",
    date: "November 2022 - Present",
    points: [
      "Collaborate closely with clients to comprehend their business requirements, translating them into functional and visually appealing website designs.",
      "Successfully manage multiple projects simultaneously, ensuring on-timedelivery and exceeding client expectations.",
      "Maintain continuous communication and collaboration with clients, providingupdates, gathering feedback, and incorporating necessary revisions to meet their needs.",
    ],
  },
  {
    title: "Frontend Engineer",
    company_name: "Garmatsch Software",
    icon: company_logo,
    iconBg: "#383E56",
    date: "December 2020 - October 2022",
    points: [
      "Played a key role in optimizing the performance of the frontend architecture using TypeScript, React JS, Storybook, CSS-in-JS, and GraphQL, resulting in 25% faster load times and improved user experience.",
      "Contributed significantly to developing an internal reusable component library, significantly enhancing code reusability and maintaining consistency across the project",
      "Participated in code reviews, providing valuable feedback and suggestions forcode quality and best practices.",
      "Actively contributed to improving team collaboration and productivity througheffective communication and knowledge sharing during pair-programming sessions",
    ],
  },
  {
    title: "Frontend Engineer (Contract)",
    company_name: "McMakler GmbH",
    icon: company_logo,
    iconBg: "#E6DEDD",
    date: "June 2021- January 2022",
    points: [
      "Efficiently collaborated with Frontend teams to develop a map-data visualization program for real estate data search with server-side rendering. Demonstrated adaptability and delivered results within a short contract period.",
      "Implemented MapBox GL JS with customizations to visualize data in grids andlists, resulting in a robust and visually appealing map-data visualization feature. This enhancement significantly improved user engagement by 30%",
      "Collaborated seamlessly with back-end teams to ensure smooth integration ofboth frontend and backend functionalities.",
      "Performed rigorous testing and debugging to ensure a smooth user experience on diverse devices and browsers.",
    ],
  },
  {
    title: "Frontend developer (Contract)",
    company_name: "DigitalSherlock.eu",
    icon: company_logo,
    iconBg: "#383E56",
    date: "Jan. 2021 - June. 2021",
    points: [
      "Played a pivotal role in the design and development of a web-based service, enabling users to efficiently search and manage their personal data across diverse platforms.      ",
      "Integrated a digital identity verification system to authenticate user identities and prevent fraudulent activities using WebID.",
      "Implemented the Stripe payment gateway to facilitate secure and seamless online transactions.",
    ],
  },
  {
    title: "Fullstack web developer",
    company_name: "Kodegenic Technologies",
    icon: company_logo,
    iconBg: "#E6DEDD",
    date: "Jul. 2019 - Nov. 2020",
    points: [
      "Collaborated with cross-functional teams to design, develop, and deploy web applications. Demonstrated adaptability and delivered results within deliverable timeframes.",
      "Implemented front-end interfaces using HTML, CSS, and JavaScript frameworks.",
      "Skillfully integrated RESTful APIs, ensuring seamless and efficient communication between the front-end and back-end components of the application",
      "Conducted performance optimization and testing to ensure optimal functionality and user experience.",
    ],
  },
  {
    title: "Intern Fullstack web developer",
    company_name: "Kodegenic Technologies",
    icon: company_logo,
    iconBg: "#E6DEDD",
    date: "Nov. 2018 - June. 2019",
    points: [
      "Aided senior developers in both front-end and back-end web development assignments",
      "Engaged in close collaboration with fellow team members to identify, debug, and effectively troubleshoot issues.",
      "Performed comprehensive research on emerging web development technologies and delivered insightful presentations of the findings to the team.",
      "Succeeded in executing a project entailing the implementation of a responsive user interface for a client website.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Moses did a great job as a Frontend Developer. He was responsible for the creation of a reusable component library using TypeScript/Javascript with React, Material-UI and React-hook-form. He always works his hardest and creates clean and solid code. He excelled both at independent coding and joint projects, is dedicated and reliable when working alone, has excellent english communication skills and is a true team-player. He will be missed by all in our software development team and I wish him all the best until we collaborate again in the future!",
    name: "Maximillian Garmatsch",
    designation: "CEO/Software Engineer",
    company: "Garmatsch Software",
    image:
      "https://media.licdn.com/dms/image/D4D03AQHPeQ0vU_JJ0A/profile-displayphoto-shrink_100_100/0/1684402657309?e=1695254400&v=beta&t=g5oruJa4JprYxrU1gyvU0-LKamRegRx8z8hrtBnlU6M",
  },
  // {
  //   testimonial:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "Lorem ipsum dolor",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
];

const projects = [
  {
    name: "Flai-r Blog",
    description:
      "A personal blogging application with realtime capabilities. It features user reviews and comment system with realtime communication. ",
    tags: [
      {
        name: "NextJS/Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: blog_shot,
    source_code_link: "https://github.com/moses-py/blog-cms",
    site_link: "https://blog-cms-bay.vercel.app/",
  },
  {
    name: "Flai-r",
    description:
      "A visually appealing webpage for a web design agency, Flai-r featuring a list of services offered by the agency and highlights a portfolio of successful client projects",
    tags: [
      {
        name: "ReactJS/Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: flair_shot,
    source_code_link: "https://github.com/moses-py/flai-r",
    site_link: "https://flai-r.vercel.app/",
  },
  {
    name: "Italk",
    description:
      "A messaging application featuring realtime chat, image file and audio upload functionality. Built with the Appwrite Backend-as-a-service platform",
    tags: [
      {
        name: "NextJS/Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Node",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: italk_shot,
    source_code_link: "https://github.com/moses-py/italk-messenger",
    site_link: "https://italk-messenger.vercel.app/",
  },
  {
    name: "Mcmakler",
    description:
      "A Real estate data-search platform that allows users to search, view, and purchase rental, commercial and private properties that are in-demand properties across Europe.",
    tags: [
      {
        name: "ReactJS/Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Node/gRPC",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: mcmakler,
    source_code_link: "https://github.com/moses-py",
    site_link: "https://mcmakler.de/",
  },
  {
    name: "Neutrix",
    description:
      "A fullstack project of a tech education platform that provides users with self-paced tutorials on AI automation, Python, Machine learning, Data analysis and Mathematics.",
    tags: [
      {
        name: "NextJS/TS",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: neutrix,
    source_code_link: "https://github.com/moses-py/neutrix",
    site_link: "https://neutrix-app.vercel.app/",
  },
  {
    name: "Shoppy",
    description:
      "A fully responsive and detailed component-built dashboard template complete with several functionalities e.g Kanban Board, Charts, Editors and lots more.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "React-charts",
        color: "green-text-gradient",
      },
      {
        name: "Syncfusion",
        color: "pink-text-gradient",
      },
    ],
    image: shoppy_clone,
    source_code_link: "https://github.com/Moses-py/dashboard/",
    site_link: "https://dashboard-3f516.web.app/",
  },
  {
    name: "FotoSearch",
    description:
      "A Web-based platform that allows users to search for stunning quality images using the Unsplash Image API.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "RestApi",
        color: "green-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
    ],
    image: fotosearch,
    source_code_link: "https://github.com/moses-py/image-gallery",
    site_link: "https://moses-py.github.io/image-gallery/",
  },

  {
    name: "Avion",
    description:
      "A template frontend for an ecommerce application featuring multiple pages implementing NextJS router system.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
    ],
    image: avion_shot,
    source_code_link: "https://github.com/moses-py/avion",
    site_link: "https://avion-ruddy.vercel.app/",
  },
  {
    name: "Ryva Groceries",
    description:
      "A simple frontend landing page website template built using ReactJS and TailwindCSS",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
    ],
    image: ryva_shot,
    source_code_link: "https://github.com/moses-py/ryva",
    site_link: "https://ryva.com.ng/",
  },
];

export { services, technologies, experiences, testimonials, projects };
