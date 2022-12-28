require('dotenv').config()
const { Configuration, OpenAIApi } = require("openai");
const express = require('express')
const app = express()
const PORT = 5200

const configuration = new Configuration({
    organization: "org-DIzidFgzbakCHvWfCHmhVhBE",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
//const response = await openai.listEngines();

async function callApi(){
 
  ;
}
callApi()

app.get('/', async (req, res) => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "introduction",
    max_tokens: 7,
    temperature: 0,
  })
  res.status(200).json({data: response.data})
})

app.listen(PORT, console.log('server running on port', PORT))
