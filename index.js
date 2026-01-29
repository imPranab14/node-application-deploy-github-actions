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
    message:" Welcome to the Home Page of My Node Application",
    status: "success",

  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
