import {
  adobexd,
  angular,
  backend,
  carrent,
  creator,
  css,
  donga,
  figma,
  git,
  html,
  javascript,
  jobit,
  mobile,
  reactjs,
  rionlab,
  rxjs,
  tailwind,
  tripguide,
  typescript,
  web,
  lunk,
  asbes,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Angular Developer",
      icon: mobile,
    },
    {
      title: "Reactjs Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      name: "Angular",
      icon: angular,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Rxjs",
      icon: rxjs,
    },
    {
      name: "AdobeXD",
      icon: adobexd,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "STUDENT",
      company_name: "ĐongA University",
      icon: donga,
      iconBg: "#383E56",
      date: "August 2027 - September 2021",
      points: [
        "Completed internships and academic projects focused on web development, gaining experience in designing and building user interfaces.",
        "Worked on various personal and group projects, creating web applications and learning effective teamwork and project management.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Developed skills in HTML, CSS, JavaScript, and frameworks like React, along with tools like Git for version control.",
      ],
    },
    {
      title: "FrontEnd Developer",
      company_name: "Rionlab VietNam",
      icon: rionlab,
      iconBg: "#E6DEDD",
      date: "rionlab 2021 - Current",
      points: [
        "Developing and maintaining web applications using Angular and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "LUNK",
      description:
        "Developed a platform for job seekers and creators to find job openings, featuring a comprehensive dashboard for administrators.",
      responsibilities:[
        "Built the website from scratch, focusing on frontend development.",
        "Developed a chat feature using Socket.io",
        "Resolved website issues and improved performance.",
        "Styled the site using SCSS and implemented designs from XD files.",
        "Created reusable components like pagination and alerts."
      ],
      tags: [
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
        {
          name: "Angular CLI",
          color: "blue-text-gradient",
        },
        {
          name: "RxJS",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "blue-text-gradient",
        },
        {
          name: "Socket.io",
          color: "green-text-gradient",
        },
        {
          name: "SCSS",
          color: "pink-text-gradient",
        },
      ],
      image: lunk,
      source_code_link: "https://lunk.jp/",
    },
    {
      name: "ASBESTOS",
      description:
        "Developed a management website to handle survey and construction data, including project names, materials, images, and supervision progress",
      responsibilities:[
          "Developed the website from scratch using Angular.",
          "Fixed issues and enhanced overall website performance.",
          "Created reusable components (pagination, loading, alerts).",
          "Styled the website using SCSS based on XD designs",
          "Ensured cross-browser compatibility"
      ],
      tags: [
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
        {
          name: "Angular CLI",
          color: "blue-text-gradient",
        },
        {
          name: "RxJS",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "blue-text-gradient",
        },
        {
          name: "Socket.io",
          color: "green-text-gradient",
        },
        {
          name: "SCSS",
          color: "pink-text-gradient",
        },
      ],
      image: asbes,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      responsibilities:[],
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { experiences, projects, services, technologies, testimonials };
