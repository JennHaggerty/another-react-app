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
  quote: "Why is there bacon in the soap?!",
  about: `Jennifer enjoys developing websites and apps that warrant repeat visits through their accessibility
  and ease of use in frontend development.`,
  likeToMeet: `I'd like to meet people interested in video games, home improvement, and talking code.`,
  companies: [
    {
      title: "Frontend Engineer at TaxSlayer",
      text:
        <ul>
          <li>
            Apply C#, HTML/CSS, React, and JavaScript alterations to in-house applications.
          </li>
          <li>
            Triage broken elements and functionality.
          </li>
          <li>
            On-call support for consumer application.
          </li>
          <li>
            Execute brand cohesive website and marketing campaigns with designer provided comps.
          </li>
          <li>
            Participate in daily standups, bi-weekly grooming sessions, and adapt to SCRUM/AGILE/Kanban methodologies.
          </li>
      </ul>,
      time: "September 2021 - Present",
    },
    {
      title: "Developer, Support Specialist in freelance",
      text: 
      <ul>
        <li>
          Apply PHP, CSS, and JavaScript alterations to client themes.
        </li>
        <li>
          Keep website plugins and Wordpress versions up-to-date; triage broken elements and functionality.
        </li>
        <li>
          Working with graphic designers in creating brand cohesive ecommerce website and marketing campaigns.
        </li>
        <li>
          Build, and host, web appliances using Wordpress and Shopify.
        </li>
      </ul>,
      time:"November 2015 - December 2021",
    },
    {
      title: "Platform Integrations Specialist at GoCollect LLC",
      text: 
      <ul>
        <li>
          Pushed test driven and versioned development through MVC PHP framework.
        </li>
        <li>
          Automated company onboarding process with Docker and Ansible.
        </li>
        <li>
          Prototype campaigns from wireframe mockup and push to UI implementation.
        </li>
        <li>
          Created inventory app; Node.js and JavaScript in the backend, React on the frontend.
        </li>
        <li>
          Provided documentation for app, onboarding, case studies, and customized code.
        </li>
      </ul>,
      time:"March 2019 - April 2020",
    },
    {
      title: "Software Engineer at Fast Growing Trees ",
      text: 
      <ul>
        <li>
          Merged disparate PHP modules into a single governing module.
        </li>
        <li>
          Reduced overhead of using multiple third party ecommerce services.
        </li>
        <li>
          Conformed module stylesheets, CSS, Bootstrap, Flexbox, to brand.
        </li>
        <li>
          Interpreted SQL data with PHP returning metadata and stylizing with CSS and jQuery.
        </li>
        <li>
          Addressed critical ADA Compliance elements on mobile and desktop platforms.
        </li>
        <li>
          Automated daily reporting for core operations with PHP, javaScript, MySQL and MSSQL.
        </li>
      </ul>,
      time:"January 2018 - February 2019",
    },
    {
      title: "Web Developer at DigitalDerm Inc.",
      text: 
      <ul>
        <li>
          Migrated website from GoDaddy hosting to AWS leading to a significant reduction in operation costs.
        </li>
        <li>
          Converted static HTML/CSS website for in-house web administration using Wordpress.
        </li>
        <li>
          Themed site with responsive design, materially increasing SEO ranking.
        </li>
        <li>
          Handled social engagement and email campaigns as acting marketing manager.
        </li>
      </ul>,
      time:"November 2015 - December 2017",
    }
  ],
  details: [
    {
      title: "Status:",
      text: `Full-time`,
    },
    {
      title: "Here for:",
      text: `Friends, Networking`,
    },
    {
      title: "Hometown:",
      text: `Kaiserslautern, Germany`,
    },
    {
      title: "Education:",
      text: `BS, AAS`,
    },
    {
      title: "Occupation:",
      text: `Interface Developer`,
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
      title:"Front-end",
      text: `React, Vue.js, Angular, Ionic, Wordpress, Shopify, Magento, WooCommerce, Square Space, HTML(5), CSS, Sass/SCSS, LESS, Bootstrap, Flexbox, jQuery, javaScript`
    },
    {
      title:"Back-end",
      text: `Node.js, Express.js, Java, C#, PHP`
    },
    {
      title:"Database",
      text: `MySQL, MariaDB, MongoDB`
    },
    {
      title:"Operating Systems",
      text: `OSX, Windows, Linux`
    },
    {
      title:"Source Control",
      text: `Github, GitLab, Bitbucket`
    },
    {
      title:"Project Management",
      text: `Jira, Github, Trello`
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
