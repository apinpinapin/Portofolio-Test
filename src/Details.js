// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";
import projectImage7 from "./assets/projects/project7.jpg";
import projectImage8 from "./assets/projects/project8.jpg";
import projectImage9 from "./assets/projects/project9.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Apin.Mp5",
  tagline: "Newbie Programming",
  img: profile,
  about: `I am a graduate of Informatics Engineering from the University of Madura with a strong interest in the IT world, particularly coding, computer/laptop troubleshooting, operating system reinstallation, WhatsApp and Telegram bot development, and online business. I am also interested in application security analysis and understanding system vulnerabilities from a technical perspective. I am accustomed to working meticulously, am a fast learner, am communicative, and am capable of handling various technical and operational digital needs.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/",
  github: "https://github.com/apinpinapin",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/coreinpin/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Bot Whatsapp & Telegram",
    Company: `Apin.Mp5 Company`,
    Location: "Antartica",
    Type: "Full Time",
    Duration: "Sep 2021 - Present",
  },
  {
    Position: "Owner Apinstore.ID",
    Company: `Apin.Mp5 Company`,
    Location: "Antartica",
    Type: "Internship",
    Duration: "Sep 2021 - Present",
  },
  {
    Position: "Freelance",
    Company: `Apin.Mp5 Company`,
    Location: "Antartica",
    Type: "Internship",
    Duration: "Sep 2021 - Present",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Frontend Development",
    Company: "Udemy, YouTube, Google, Medium",
    Location: "Online",
    Type: "Full Time",
    Duration: "Jan 2022 - Present",
  },
  {
    Position: "Bachelor in Electronics & Communication",
    Company: `Your College Name here`,
    Location: "Antartica",
    Type: "Full Time",
    Duration: "Aug 2020 - Present",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title : "Script Bug Bot Whatsapp Via Telegram",
    perangkat : "-",
    "versi whatsapp" : "(messenger & business).",
    enkripsi : "150.000.",
    tidakEnkripsi : "300.000.",
    note : "-",
    image: projectImage1,
    description : `Support Panel & VPS`,
    previewLink : "https://google.com",
    githubLink : "https://github.com",
  },
  {
    title : "Bug Nomor WhatsApp iPhone/ios.",
    "versi whatsapp" : "2.26.20.73/xxx (Messenger & Business).",
    jasabug : "25.000 / nomor.",
    jumlahBug : "1000 / Submit.",
    "kode bug" : "100.000.",
    note : "-",
    image : projectImage2,
    "efek bug" : `Menyebabkan WhatsApp target tertutup otomatis di beranda saat dibuka (Force Close Home) + Blank. Bug bersifat Invisible (tidak terlihat).`,
    previewLink : "https://drive.google.com/file/d/1exl5eZhvsWoVDEcL6AsqfUnbXPATuTRm",
    githubLink : "https://github.com",
  },
  {
    title : "Bug Nomor WhatsApp iPhone/ios.",
    "versi whatsapp" : "2.26.20.73/xxx (Messenger & Business).",
    jasabug : "25.000 / nomor.",
    jumlahBug : "1000 / Submit.",
    "kode bug" : "100.000.",
    note : "-",
    image : projectImage3,
    "efek bug" : `Menyebabkan WhatsApp target macet-macetan di beranda saat dibuka (Lag Home), Bug bersifat Invisible (tidak terlihat).`,
    previewLink : "https://drive.google.com/file/d/1gqH_FDYfsh5bl5kh3xDJh2kPR74pYrLa",
    githubLink : "https://github.com",
  },
  {
    title : "Bug Nomor Link Group iPhone/ios.",
    "versi whatsapp" : "2.26.20.73/xxx (Messenger & Business).",
    jasabug : "25.000 / nomor.",
    jumlahBug : "1000 / Submit.",
    "kode bug" : "100.000.",
    note : "-",
    image : projectImage4,
    "efek bug" : `Dapat menyebabkan Whatsapp target macet saat membuka pesan pada Group, Admin & Member terkena efeknya (pengguna iphone).`,
    previewLink : "-",
    githubLink : "https://github.com",
  },
  {
    title : "Bug Nomor WhatsApp Android.",
    "versi whatsapp" : "2.26.20.73/xxx (Messenger & Business).",
    jasabug : "25.000 / nomor.",
    jumlahBug : "1000 / Submit.",
    "kode bug" : "100.000.",
    note : "Nomor pengirim (Bot) wajib sekontak/saling save dengan nomor target.",
    image : projectImage5,
    "efek bug" : `Menyebabkan WhatsApp target tertutup otomatis di beranda saat dibuka (Force Close Home), Bug bersifat Invisible (tidak terlihat).`,
    previewLink : "https://drive.google.com/file/d/1FiqA-4EjndYFeW8bgF8N5d1iVcrOW9di/",
    githubLink : "https://github.com",
  },
  {
    title : "Bug Nomor WhatsApp Android.",
    "versi whatsapp" : "2.26.20.73/xxx (Messenger & Business).",
    jasabug : "30.000 / nomor.",
    jumlahBug : "1000 / Submit.",
    "kode bug" : "100.000.",
    note : "Bug Aktif Di Jam Tertentu Konsultasi Admin Terlebih Dahulu.",
    image : projectImage6,
    "efek bug" : `Menyebabkan WhatsApp target mengalami keterlambatan saat mengirim & menerima pesan (Delay Chat) + macet (Freeze Chat) + aplikasi tertutup secara paksa (Force Close Home), Bug bersifat tidak terlihat (Invisible).`,
    previewLink : "https://drive.google.com/file/d/1NjU4FsTBx1UsVzDd0rkYeeg5E1SMaglL/view",
    githubLink : "https://github.com",
  },
  {
    title : "Bug Nomor Whatsapp Playstore ",
    perangkat : "Android.",
    "versi whatsapp" : "Latest (messenger & business)",
    jasabug : "25.000",
    "kode bug" : "100.000",
    note : "-",
    image : projectImage7,
    description : `Effect Bug : Dapat Menyebabkan Whatsapp Macet Saat Membuka Pesan Sticker Dari Bot.`,
    previewLink : "https://drive.google.com/file/d/1HKIUR4BD6BxgmC2UqXj2Ssj836J0VLrR",
    githubLink : "https://github.com",
  },
  {
    title : "Bug Nomor Whatsapp Playstore ",
    perangkat : "Android",
    "versi whatsapp" : "Latest (messenger & business)",
    jasabug : "25.000",
    "kode bug" : "100.000",
    note : "-",
    image : projectImage8,
    description : `Effect Bug : Dapat Menyebabkan Lembat Saat Mengirim & Menerima Chat Kepada Pengguna Lain, Bug ini Bersifat invisible (Tidak Terlihat Oleh Target),`,
    previewLink : "https://drive.google.com/file/d/1WKozrlh214NiMlqPcpl2HY-QKZOPNs1E",
    githubLink : "https://github.com",
  },
  {
    title : "Bug Nomor Whatsapp Playstore ",
    perangkat : "Android",
    "versi whatsapp" : "Latest (messenger & business)",
    jasabug : "25.000",
    "kode bug" : "100.000",
    note : "-",
    image : projectImage9,
    description : `Effect Bug : Dapat Menyebabkan Lembat Saat Mengirim & Menerima Chat Kepada Pengguna Lain, Bug ini Bersifat invisible (Tidak Terlihat Oleh Target),`,
    previewLink : "https://drive.google.com/file/d/1WKozrlh214NiMlqPcpl2HY-QKZOPNs1E",
    githubLink : "https://github.com",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "hackaccepted2000@gmail.com",
  phone: "+6281231948641",
};
