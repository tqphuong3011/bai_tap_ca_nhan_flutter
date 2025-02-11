const mongoose = require('mongoose')
const User = require('../models/user');

const sampleUsers = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "234-567-8901",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    name: "Michael Johnson",
    email: "michael.j@example.com",
    phone: "345-678-9012",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    name: "Emily Davis",
    email: "emily.d@example.com",
    phone: "456-789-0123",
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    name: "David Wilson",
    email: "david.w@example.com",
    phone: "567-890-1234",
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    name: "Sarah Brown",
    email: "sarah.b@example.com",
    phone: "678-901-2345",
    image: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    name: "Robert Taylor",
    email: "robert.t@example.com",
    phone: "789-012-3456",
    image: "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
    name: "Lisa Anderson",
    email: "lisa.a@example.com",
    phone: "890-123-4567",
    image: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    name: "James Martin",
    email: "james.m@example.com",
    phone: "901-234-5678",
    image: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    name: "Emma Thompson",
    email: "emma.t@example.com",
    phone: "012-345-6789",
    image: "https://randomuser.me/api/portraits/women/5.jpg"
  }
];

async function initializeUsers() {
  try {
    await mongoose.connect('mongodb://localhost:27017/flutter-rest-api', {
      serverSelectionTimeoutMS: 30000,
      connectTimeoutMS: 30000
    });
    console.log('Connected to MongoDB');

    // Clear existing users
    await User.deleteMany({});
    console.log('Cleared existing users');

    // Insert new users
    const insertedUsers = await User.insertMany(sampleUsers);
    console.log(`Successfully inserted ${insertedUsers.length} users`);

    // Log the inserted users
    insertedUsers.forEach(user => {
      console.log(`- Created user: ${user.name} (${user.email})`);
    });

  } catch (error) {
    console.error('Error:', error);
  } finally {
    // Close the connection
    await mongoose.connection.close();
    console.log('Database connection closed');
    process.exit(0);
  }
}

initializeUsers();