const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3001;

// Enable CORS for all routes
app.use(cors({
  origin: 'http://localhost:3000' // Allow only this origin
}));

app.use(express.json());

app.post('/addUser', (req, res) => {
  const newUser = req.body;
  const filePath = path.join(__dirname, 'my-react-app', 'public', 'data.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error reading file' });
    }

    const jsonData = JSON.parse(data);
    jsonData.users.push(newUser);

    fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: 'Error writing file' });
      }

      res.json({ message: 'User added successfully' });
    });
  });
});

// Endpoint to remove a user by ID
app.post('/removeUser', (req, res) => {
  const userId = req.body.userId;
  const filePath = path.join(__dirname, 'my-react-app', 'public', 'data.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error reading file' });
    }

    const jsonData = JSON.parse(data);
    const updatedUsers = jsonData.users.filter(user => user.id !== userId);
    jsonData.users = updatedUsers;

    fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: 'Error writing file' });
      }

      res.json({ message: 'User removed successfully' });
    });
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});