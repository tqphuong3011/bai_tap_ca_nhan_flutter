const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/user');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/flutter-rest-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));
app.use(userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 