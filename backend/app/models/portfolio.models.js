const mongoose = require("mongoose");
// const splitSkills = require("../middleware/spiltSkills.js");

//-> For Hero Section

const heroSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

const heroSectionSchema = new mongoose.Schema({
  welcomeText: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  caption: {
    type: [heroSchema],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  downloadCV: {
    type: String,
    required: true,
  },
});

//-> For About Section

const aboutSectionSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  description1: {
    type: String,
    required: true,
  },
  description2: {
    type: String,
    required: true,
  },
});

//-> For Skills Section

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

const skillsSectionSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  skills: {
    type: [skillSchema],
    required: true,
  },
});

// Use the middleware to split skills string into an array of skills
// skillsSectionSchema.pre("save", splitSkills);

//-> For Experiences Section

const experienceSectionSchema = new mongoose.Schema({
  period: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

//-> For Projects Section

const projectSectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  techstack: {
    type: Array,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

//-> For Education Section

const educationSectionSchema = new mongoose.Schema({
  period: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

//-> For Certificate Section

const certificateSectionSchema = new mongoose.Schema({
  period: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

//-> For Contact Section

const contactSectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

module.exports = {
  Hero: mongoose.model("heros", heroSectionSchema),
  About: mongoose.model("abouts", aboutSectionSchema),
  Skill: mongoose.model("skills", skillsSectionSchema),
  Experience: mongoose.model("experiences", experienceSectionSchema),
  Project: mongoose.model("projects", projectSectionSchema),
  Education: mongoose.model("educations", educationSectionSchema),
  Certificate: mongoose.model("certificates", certificateSectionSchema),
  Contact: mongoose.model("contacts", contactSectionSchema),
};
