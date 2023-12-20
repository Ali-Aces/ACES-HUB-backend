const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/routes');

const app = express();
const port = 3000;

// Connect to MongoDB (adjust the connection string accordingly)
mongoose.connect('mongodb+srv://mohdali88112:N1NB0vf7L78XB6j8@cluster0.gxglj6b.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware to parse JSON request bodies
app.use(express.json());

// Include API routes
app.use(apiRoutes);

app.post('/api/scan', async (req, res) => {
    // Your route handling logic here
    res.json({ message: 'POST request received at /api/scan' });
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
