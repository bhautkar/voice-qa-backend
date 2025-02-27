const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Question-Answer Data
const qaPairs = [
  { question: "What is Shivranjani?", answer: "Shivranjani is a raga from the Indian classical music tradition." },
  { question: "Tell me about Yaman", answer: "Yaman is a beautiful evening raga in Indian classical music." },
  { question: "Explain Khammaj", answer: "Khammaj is a raga in the Indian classical music tradition, typically associated with the night." }
];

// API Endpoint to Get Answers
app.post('/api/qa', (req, res) => {
    const userQuestion = req.body.question?.toLowerCase().trim();
    const answer = qaPairs.find(q => q.question.toLowerCase().trim() === userQuestion);
    
    if (answer) {
        res.json({ answer: answer.answer });
    } else {
        res.json({ answer: "I don't know the answer to that question." });
    }
});

// Root Route
app.get('/', (req, res) => {
    res.send("Voice Q&A API is running!");
});

// Start Server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
