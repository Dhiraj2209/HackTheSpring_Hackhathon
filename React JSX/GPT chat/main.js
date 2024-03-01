   
const express = require("express");
const OpenAI = require("openai");
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
    apiKey: "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"
});

app.post('/getResponse', async (req, res) => {
    const userMessage = req.body.message;
    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{ "role": "user", "content": userMessage }],
            max_tokens: 200
        });
        console.log(userMessage);
        console.log(response.choices[0].message.content);
        res.json({ response: response.choices[0].message.content });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(4000, () => {
    console.log("server started")
});
