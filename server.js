const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

const submissionsFilePath = path.join(__dirname, 'models', 'submissions.json');

app.use(cors()); // Use the cors middleware to enable CORS
app.use(bodyParser.json());

app.post('/submit-form', (req, res) => {
    const formData = req.body;

    // Read existing submissions (if any)
    let submissions = [];
    if (fs.existsSync(submissionsFilePath)) {
        const submissionsData = fs.readFileSync(submissionsFilePath);
        submissions = JSON.parse(submissionsData);
    }

    // Add new submission
    submissions.push(formData);

    // Write to JSON file
    fs.writeFileSync(submissionsFilePath, JSON.stringify(submissions, null, 2));

    res.send('Form data saved successfully!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
