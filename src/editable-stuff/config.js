// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#000000, #5e0800, #ff9b11, #9b59b6, #ff7f7f, #fcd307",
  firstName: "Denis",
  middleName: "",
  lastName: "Iliescu",
  message: " Focused on solving all incoming problems. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/denisiliescu",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/denis-iliescu/",
    }
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
//     i.e resume: require("../editable-stuff/resume.pdf")

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/profilepic.jpg"),
  imageSize: 375,
  message:
    "My name is Denis Iliescu. I’m a graduate student at Technical University of Cluj-Napoca, Faculty of Automation and Computer Science.I'm most passionate about bringing new ideas to life, and my goal is to achieve everything I have dreamt of.",
  resume: "https://drive.google.com/file/d/1EdsyVWT6F52VYLC71Djizo1bDWfZNhNs/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "denisiliescu", //i.e."johnDoe12Gh"
  reposLength: 1,
  specificRepos: ["denisiliescu.github.io", "SPP_ML", "Sci-Fi_Tech", "GalaxyShooter"],
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 50 },
    { name: "SQL", value: 25 },
    { name: "Data Structures", value: 20 },
    { name: "C/C++", value: 30 },
    { name: "JavaScript", value: 25 },
    { name: "React", value: 25 },
    { name: "HTML/CSS", value: 35 },
    { name: "C#", value: 35 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 90 },
    { name: "Adaptability", value: 90 },
    { name: "Problem Solving", value: 80 },
    { name: "Empathy", value: 100 },
    { name: "Organization", value: 85 },
    { name: "Creativity", value: 70 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "denisiliescu@gmail.com",
};


const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, getInTouch, experiences};
