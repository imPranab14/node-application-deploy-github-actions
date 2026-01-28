import express from 'express';
const app = express();
const port = 8090;


// Define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello World!');
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});