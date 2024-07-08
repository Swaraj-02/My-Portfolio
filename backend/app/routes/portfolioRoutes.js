const router = require("express").Router();

const {
  Hero,
  About,
  Skill,
  Experience,
  Education,
  Project,
  Certificate,
  Contact,
} = require("../models/portfolio.models");

/* -- Get all Portfolio Data --*/
router.get("/myportfolio-data", async (req, res) => {
  try {
    const heros = await Hero.find();
    const abouts = await About.find();
    const skills = await Skill.find();
    const experiences = await Experience.find();
    const educations = await Education.find();
    const projects = await Project.find();
    const certificates = await Certificate.find();
    const contacts = await Contact.find();

    //Send the response->

    res.status(200).send({
      Hero: heros[0],
      About: abouts[0],
      Skills: skills,
      Experiences: experiences,
      Educations: educations,
      Projects: projects,
      Certificates: certificates,
      Contacts: contacts[0],
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

/*-- Update all Portfolio Data -- */

//-> Hero api (update-hero)
router.post("/update-hero", async (req, res) => {
  try {
    const hero = await Hero.findOneAndUpdate({ _id: req.body._id }, req.body, {
      new: true,
    });

    // res.status(200).send(hero);
    // Optional if you directly send message from backend

    res.status(200).send({
      data: hero,
      success: true,
      message: "Hero updated successfully!",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//-> About api (update-about)
router.post("/update-about", async (req, res) => {
  try {
    const about = await About.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );

    res.status(200).send({
      data: about,
      success: true,
      message: "About updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//-> Skill api (update-skill)
router.post("/update-skill", async (req, res) => {
  try {
    const skills = await Skill.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );

    res.status(200).send({
      data: skills,
      success: true,
      message: "Skills updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//-> Experience api (update-experience)
router.post("update-experience", async (req, res) => {
  try {
    const exps = await Experience.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );

    res.status(200).send({
      data: exps,
      success: true,
      message: "Experince updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
