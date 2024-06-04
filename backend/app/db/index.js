const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const instantConnection = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `\n Mongo Db Connected Succesfully !! DB Host at ${instantConnection.connection.host}`
    );
  } catch (error) {
    console.log("Mongo Db Connection Failed ", error);
  }
};

module.exports = connectDB;
