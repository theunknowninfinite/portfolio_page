// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Suriya",
  middleName: "",
  lastName: "Suresh",
  message: "Robotics Engineer, Tinkerer, Petrolhead",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/theunknowninfinite",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/suriya-suresh/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/images.png"),
  imageSize: 375,
  message:
    "I'm a grad student doing his Master of Engineering in Robotics at the University of Maryland,College Park. Focused on pursing a career in Autonmous Vechicles and self-driving cars. Specialized in Computer Vision, Robot Localization and Machine Learning. Passionate in learning and trying to be the best I can be. Part-time Tech enthusiast and Petrolhead ",
  // resume: require("../editable-stuff/resume_github.pdf"),
  resume: "https://drive.google.com/file/d/1BAzfgIpKKatnuIZ8xzF8dr3ocPXyP6Jb/view?usp=sharing"
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "theunknowninfinite", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["toy_car_in_ros","Modeling-and-Simulation-of-Martian-Rover","robot_navigation_with_ML"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/images.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/images.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 50 },
    { name: "PLC Programming", value: 75 },
    { name: "Linux", value: 70 },
    { name: "ROS", value:50 },
    { name: "Matlab", value: 50 },
    { name: "Solidworks", value: 65 },
  ],
  softSkills: [
    { name: "Collaboration", value: 70 },
    { name: "Positivity", value: 80 },
    { name: "Goal-Oriented", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Empathy", value: 75 },
    { name: "Organization", value: 70 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time/part-time opportunities in Autonomous Vehicles! If you know of any postions that are available or just want to connect,please feel free to email me at theogsuriyas[AT]gmail[DOT]com",
  // email: "theogsuriyas[AT]gmail[DOT]com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Research Trainee',// Here Add Company Name
      companylogo: require('../assets/img/LOGO(1).png'),
      date: 'August 2021 – June 2022',
    },
    {
      role: 'Intern',
      companylogo: require('../assets/img/logo_1(1).png'),
      date: 'Janurary 2021 – April 2021',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
