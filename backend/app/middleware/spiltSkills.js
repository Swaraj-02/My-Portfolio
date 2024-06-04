module.exports = function (next) {
  if (typeof this.skills === "string") {
    this.skills = this.skills
      .split(",")
      .map((skill) => ({ name: skill.trim() }));
  }
  next();
};
