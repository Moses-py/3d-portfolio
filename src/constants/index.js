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
  alisimbi,
  nextgen,
  shoppy_clone,
  company_logo,
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
    title: "Frontend Engineer",
    company_name: "Garmatsch Software",
    icon: company_logo,
    iconBg: "#383E56",
    date: "December 2020 - October 2022",
    points: [
      "Frontend architecture & development (TypeScript, ReactJS, Storybook, CSSin-JS, GraphQL)",
      "Developing and maintaining Web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Engineer",
    company_name: "McMakler GmbH",
    icon: company_logo,
    iconBg: "#E6DEDD",
    date: "June 2021- December 2021",
    points: [
      "Collaborating with frontend team to develop a map-data visualization program for Realestate data search with server side rendering.",
      "Implementing MapBox GL with customizations and data visualization in grids and lists",
      "Implementing user data forms and form validation using React-hook-forms",
      "Assisted in conducting code reviews and peer-to-peer programming",
    ],
  },
  {
    title: "Backend Engineer",
    company_name: "S.C. CODER CONSULTING INTERNATIONAL S.R.L",
    icon: company_logo,
    iconBg: "#383E56",
    date: "Jan 2021 - July 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Fullstack developer & Software Intern Trainer",
    company_name: "Kodegenic Technologies",
    icon: company_logo,
    iconBg: "#E6DEDD",
    date: "November 2018 - December 2020",
    points: [
      "Communicated effectively with team leads to understand the training and development needs of Interns",
      "Collaborated with Interns and Junior developers to develop a Savings and Deposit platform API using NodeJS, Express and MongoDB",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Lorem ipsum dolor",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Chris Brown",
    designation: "COO",
    company: "Lorem ipsum dolor",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "Lorem ipsum dolor",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
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
    name: "Shoppy clone",
    description:
      "A fully responsive, detailed, component-built dashboard template complete with sevral features e.g Kanban Board, Charts, Dark mode, Editors and lots more.",
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
    name: "NextGen",
    description:
      "A simple frontend-based website landing page mirroring a template for an NFT gallery showcase app.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "styled-components",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: nextgen,
    source_code_link: "https://github.com/moses-py/nft_marketplace",
    site_link: "https://nftmarketplace-950c9.web.app/",
  },
  {
    name: "Alisimbi",
    description:
      "A simple frontend website template built using simple HTML, CSS, Javascript and Bootstrap",
    tags: [
      {
        name: "Vanilla JS",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "HTML?CSS",
        color: "pink-text-gradient",
      },
    ],
    image: alisimbi,
    source_code_link: "https://github.com/moses-py/alisimbi",
    site_link: "https://moses-py.github.io/alisimbi",
  },
];

export { services, technologies, experiences, testimonials, projects };
