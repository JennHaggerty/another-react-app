import jenn_pic from "./images/jennifer_portrait.JPG";
import samson_pic from "./images/samson_portrait.JPG";
import iris_pic from "./images/iris_portrait.jpeg";

export const user = {
  fname: "Jennifer",
  lname: "Haggerty",
  email: "thejenniferhaggerty@protonmail.com",
  location: "Remote, EST United States",
  photoLink: "https://studiovonjenn.com",
  age: 100,
  pronouns: "She/xe",
  photo: jenn_pic,
  quote: "wee :D",
  about: `Jennifer enjoys developing websites and apps that warrant repeat visits through their accessibility
  and ease of use in frontend development.`,
  likeToMeet: `I'd like to meet people interested in video games, home improvement, and talking code.`,
  companies: [
    {
      title: "Frontend Engineer at TaxSlayer",
      text: `
        Apply C#, HTML/CSS, React, and JavaScript alterations to in-house applications.
        Triage broken elements and functionality.
        On-call support for consumer application.
        Execute brand cohesive website and marketing campaigns with designer provided comps.
        Participate in daily standups, bi-weekly grooming sessions, and adapt to SCRUM/AGILE/Kanban methodologies.
      `,
      time: "September 2021 - Present",
    },
    {
      title: "Developer, Support Specialist in freelance",
      text: `
        Apply PHP, CSS, and JavaScript alterations to client themes.
        Keep website plugins and Wordpress versions up-to-date; triage broken elements and functionality.
        Working with graphic designers in creating brand cohesive ecommerce website and marketing campaigns.
        Build, and host, web appliances using Wordpress and Shopify.
      `,
      time:"November 2015 - December 2021",
    },
    {
      title: "Platform Integrations Specialist at GoCollect LLC",
      text: `
        Pushed test driven and versioned development through MVC PHP framework.
        Automated company onboarding process with Docker and Ansible.
        Prototype campaigns from wireframe mockup and push to UI implementation.
        Created inventory app; Node.js and JavaScript in the backend, React on the frontend.
        Provided documentation for app, onboarding, case studies, and customized code.
      `,
      time:"March 2019 - April 2020",
    },
    {
      title: "Software Engineer at Fast Growing Trees ",
      text: `
        Merged disparate PHP modules into a single governing module.
        Reduced overhead of using multiple third party ecommerce services.
        Conformed module stylesheets, CSS, Bootstrap, Flexbox, to brand.
        Interpreted SQL data with PHP returning metadata and stylizing with CSS and jQuery.
        Addressed critical ADA Compliance elements on mobile and desktop platforms.
        Automated daily reporting for core operations with PHP, javaScript, MySQL and MSSQL.
      `,
      time:"January 2018 - February 2019",
    },
    {
      title: "Web Developer at DigitalDerm Inc.",
      text: `
        Migrated website from GoDaddy hosting to AWS leading to a significant reduction in operation costs.
        Converted static HTML/CSS website for in-house web administration using Wordpress.
        Themed site with responsive design, materially increasing SEO ranking.
        Handled social engagement and email campaigns as acting marketing manager.
      `,
      time:"November 2015 - December 2017",
    }
  ],
  details: [
    {
      title: "Status",
      text: `Full-time`,
    },
    {
      title: "Here for",
      text: `Friends, Networking`,
    },
    {
      title: "Hometown",
      text: `Kaiserslautern`,
    },
    {
      title: "Education",
      text: `BS, AAS`,
    },
    {
      title: "Occupation",
      text: `Front-end Engineer`,
    },
  ],
  friends: [
    {
      name: "Samson",
      photo: samson_pic,
      title: "Greyhound ambassador",
      hobbies: "Samson's hobbies include sleeping, leaning, and walks in the park."
    },
    {
      name: "Iris",
      photo: iris_pic,
      title: "Intern",
      hobbies: "Iris' hobbies include eating, playing with toys, and meeting new people."
    }
  ],
  interests: [
    {
      title:"General",
      text: `Dogs, photography, painting, and costume making.`
    },
    {
      title:"Music",
      text: `Metal, medieval, synthwave.`
    },
    {
      title:"Movies",
      text: `90's slashers, epic fantasies, and the occasional tearjerker.`
    },
    {
      title:"Television",
      text: `Mostly for background while gaming or sewing.`
    },
    {
      title:"Books",
      text: `The Hollows by Kim Harrison.`
    },
    {
      title:"Heroes",
      text: `Cassandra Pentaghast, Haurchefant Greystone, Olivier Mira Armstrong`
    }
  ],
  schools: [
    {
      title: `
      University of South Carolina
      Columbia, SOUTH CAROLINA
      Grad Year: 2012
      Student Status: Alumni
      Degree: BA
      Major: Studio arts
      `,
      text: "From 2008 to 2012"
    },
    {
      title: `
      Augusta Technical College
      Augusta, GEORGIA
      Grad Year: 2021
      Student Status: Alumni
      Degree: AAS
      Major: C#, Java, and cross-platform programming
      `,
      text: "From 2021 to 2021"
    }
  ],
}

export default user;
