require('dotenv').config();
const axios = require('axios');
const cors = require('cors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

console.log('ENV:', process.env.PORT, process.env.OPENAI_API_KEY);

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


const response = openai.createCompletion({
    model: "text-davinci-003",
    prompt: "  Valley of Kings?\nA:",
    temperature: 0,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
});


response.then((r) => {
    console.log(r.data);
})



const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Welcome: Server is running on port ${PORT}`);
});