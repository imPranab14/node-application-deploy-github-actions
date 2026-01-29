import express from "express";
const app = express();
const port = 8090;

// Define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//Home route
app.get("/home", (req, res) => {
  res.status(200).send({
    message:"Home Route Working Fine",
    status: "success",

  });
});

// Start the server
app.listen(port,'0.0.0.0', () => {
  console.log(`Server is running at port ${port}`);
});
