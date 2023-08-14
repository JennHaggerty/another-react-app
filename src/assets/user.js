import jenn_pic from "./images/jennifer_portrait.JPG";
import samson_pic from "./images/samson_portrait.JPG";
import iris_pic from "./images/iris_portrait.jpeg";

export const user = {
  fname: "Jennifer",
  lname: "Haggerty",
  email: "thejenniferhaggerty@protonmail.com",
  location: <>GEORGIA, <br/> United States</>,
  photoLink: "https://studiovonjenn.com",
  age: 100,
  pronouns: "She/her",
  photo: jenn_pic,
  quote: "Have you tried turning it off and back on?",
  about: `Jennifer enjoys developing websites, admininstrative dashboards, and apps that users visit repeatedly and enjoy. `,
  likeToMeet: `I'd like to meet people interested in video games, home improvement, and talking code.`,
  companies: [
    {
      title: "Interface Developer at CQL",
      text:
      <>
        <span>January 2023 - Present</span>
        <ul>
            <li>
              Build React, Shopify, and JavaScript solutions for clients.
            </li>
            <li>
              Triage broken elements and functionality.
            </li>
            <li>
              Execute brand cohesive website and marketing campaigns with designer provided comps.
            </li>
        </ul>
      </>,
    },
    {
      title: "Frontend Engineer at TaxSlayer",
      text:
      <>
        <span>September 2021 - December 2022</span>
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
        </ul>
      </>,
    },
    {
      title: "Developer, Support Specialist in freelance",
      text:
      <>
        <span>November 2015 - December 2021</span>
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
        </ul>
      </>,
    },
    {
      title: "Platform Integrations Specialist at GoCollect LLC",
      text:
      <>
        <span>March 2019 - April 2020</span>
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
        </ul>
      </>,
    },
    {
      title: "Software Engineer at Fast Growing Trees ",
      text: 
      <>
      <span>January 2018 - February 2019</span>
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
      </ul>
      </>,
    },
    {
      title: "Web Developer at DigitalDerm Inc.",
      text: 
      <>

      <span>November 2015 - December 2017</span>
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
      </ul>
      </>,
    }
  ],
  details: [
    {
      title: "Status:",
      text: `Full-time`,
    },
    {
      title: "Here for:",
      text: `Networking`,
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
      title:
      <>
        <a href="https://www.augustatech.edu/">Augusta Technical College</a> <br/>
        Augusta, GEORGIA <br/>
        Grad Year: 2021 <br/>
        Student Status: Alumni <br/>
        Degree: AAS <br/>
        Major: C#, Java, and cross-platform programming <br/>
      </>,
      text: "From 2021 to 2021"
    },
    {
      title:
      <>
        <a href="https://sc.edu/">University of South Carolina</a> <br/>
        Columbia, SOUTH CAROLINA <br/>
        Grad Year: 2012 <br/>
        Student Status: Alumni <br/>
        Degree: BA <br/>
        Major: Studio arts <br/>
      </>,
      text: "From 2008 to 2012"
    }
  ],
}

export default user;
