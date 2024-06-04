const exprees = require("express");
const cors = require("cors");
require("dotenv").config({});

const connectDB = require("./app/db/index");
const portfolioRoutes = require("./app/routes/portfolioRoutes");

const app = exprees();

// Enable CORS for all routes
app.use(cors());

// Application type json
app.use(exprees.json());

// Use your portfolio routes
app.use("/api/portfolio", portfolioRoutes);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server is Working");
});

//-> Make it Asycn function for optimization of App
connectDB().then(() => {
  //-> try catch method for app (server ) running or not running
  try {
    app.listen(PORT, () => {
      console.log(`\n Server is running at PORT - http://localhost:${PORT}`);
    });

    app.on("app is not listen at the PORT", (err) => {
      throw err;
    });
  } catch (error) {
    console.log(
      "Server is not running some error occures while connection PORT !!",
      error
    );
  }
});
