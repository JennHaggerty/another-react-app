"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.user = void 0;

var _jennifer_portrait = _interopRequireDefault(require("./images/jennifer_portrait.JPG"));

var _samson_portrait = _interopRequireDefault(require("./images/samson_portrait.JPG"));

var _iris_portrait = _interopRequireDefault(require("./images/iris_portrait.jpeg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var user = {
  fname: "Jennifer",
  lname: "Haggerty",
  email: "thejenniferhaggerty@protonmail.com",
  location: "Remote, EST United States",
  photoLink: "https://studiovonjenn.com",
  age: 100,
  pronouns: "She/xe",
  photo: _jennifer_portrait["default"],
  quote: "Why is there bacon in the soap?!",
  about: "Jennifer enjoys developing websites and apps that warrant repeat visits through their accessibility\n  and ease of use in frontend development.",
  likeToMeet: "I'd like to meet people interested in video games, home improvement, and talking code.",
  companies: [{
    title: "Frontend Engineer at TaxSlayer",
    text: "\n        Apply C#, HTML/CSS, React, and JavaScript alterations to in-house applications. <br/>\n        Triage broken elements and functionality.\n        On-call support for consumer application.\n        Execute brand cohesive website and marketing campaigns with designer provided comps.\n        Participate in daily standups, bi-weekly grooming sessions, and adapt to SCRUM/AGILE/Kanban methodologies.\n      ",
    time: "September 2021 - Present"
  }, {
    title: "Developer, Support Specialist in freelance",
    text: "\n        Apply PHP, CSS, and JavaScript alterations to client themes.\n        Keep website plugins and Wordpress versions up-to-date; triage broken elements and functionality.\n        Working with graphic designers in creating brand cohesive ecommerce website and marketing campaigns.\n        Build, and host, web appliances using Wordpress and Shopify.\n      ",
    time: "November 2015 - December 2021"
  }, {
    title: "Platform Integrations Specialist at GoCollect LLC",
    text: "\n        Pushed test driven and versioned development through MVC PHP framework.\n        Automated company onboarding process with Docker and Ansible.\n        Prototype campaigns from wireframe mockup and push to UI implementation.\n        Created inventory app; Node.js and JavaScript in the backend, React on the frontend.\n        Provided documentation for app, onboarding, case studies, and customized code.\n      ",
    time: "March 2019 - April 2020"
  }, {
    title: "Software Engineer at Fast Growing Trees ",
    text: "\n        Merged disparate PHP modules into a single governing module.\n        Reduced overhead of using multiple third party ecommerce services.\n        Conformed module stylesheets, CSS, Bootstrap, Flexbox, to brand.\n        Interpreted SQL data with PHP returning metadata and stylizing with CSS and jQuery.\n        Addressed critical ADA Compliance elements on mobile and desktop platforms.\n        Automated daily reporting for core operations with PHP, javaScript, MySQL and MSSQL.\n      ",
    time: "January 2018 - February 2019"
  }, {
    title: "Web Developer at DigitalDerm Inc.",
    text: "\n        Migrated website from GoDaddy hosting to AWS leading to a significant reduction in operation costs.\n        Converted static HTML/CSS website for in-house web administration using Wordpress.\n        Themed site with responsive design, materially increasing SEO ranking.\n        Handled social engagement and email campaigns as acting marketing manager.\n      ",
    time: "November 2015 - December 2017"
  }],
  details: [{
    title: "Status:",
    text: "Full-time"
  }, {
    title: "Here for:",
    text: "Friends, Networking"
  }, {
    title: "Hometown:",
    text: "Kaiserslautern, Germany"
  }, {
    title: "Education:",
    text: "BS, AAS"
  }, {
    title: "Occupation:",
    text: "Interface Developer"
  }],
  friends: [{
    name: "Samson",
    photo: _samson_portrait["default"],
    title: "Greyhound ambassador",
    hobbies: "Samson's hobbies include sleeping, leaning, and walks in the park."
  }, {
    name: "Iris",
    photo: _iris_portrait["default"],
    title: "Intern",
    hobbies: "Iris' hobbies include eating, playing with toys, and meeting new people."
  }],
  interests: [{
    title: "Front-end",
    text: "React, Vue.js, Angular, Ionic, Wordpress, Shopify, Magento, WooCommerce, Square Space, HTML(5), CSS, Sass/SCSS, LESS, Bootstrap, Flexbox, jQuery, javaScript"
  }, {
    title: "Back-end",
    text: "Node.js, Express.js, Java, C#, PHP"
  }, {
    title: "Database",
    text: "MySQL, MariaDB, MongoDB"
  }, {
    title: "Operating Systems",
    text: "OSX, Windows, Linux"
  }, {
    title: "Versioning",
    text: "Github, GitLab, Bitbucket"
  }, {
    title: "Project Management",
    text: "Jira, Github, Trello"
  }],
  schools: [{
    title: "\n      University of South Carolina\n      Columbia, SOUTH CAROLINA\n      Grad Year: 2012\n      Student Status: Alumni\n      Degree: BA\n      Major: Studio arts\n      ",
    text: "From 2008 to 2012"
  }, {
    title: "\n      Augusta Technical College\n      Augusta, GEORGIA\n      Grad Year: 2021\n      Student Status: Alumni\n      Degree: AAS\n      Major: C#, Java, and cross-platform programming\n      ",
    text: "From 2021 to 2021"
  }]
};
exports.user = user;
var _default = user;
exports["default"] = _default;