const express = require("express")

const axios = require("axios")
const cors = require("cors")

require("dotenv").config()

const app = express()
app.use(express.json())
app.use(cors())

//using gemini for selection of genre
const { GoogleGenerativeAI } = require("@google/generative-ai")

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });



app.post("/", async (req, res) => {
    let city = req.body.city
    let weather = req.body.weather
    console.log("API Key:", process.env.API_KEY);
    console.log("City:", city);
    console.log("Weather:", weather);


    const prompt = `I am providing you weather condition and city name and trying to find a spotify song/playlist 
perfect for these weather conditions and region. I am searching for songs using this endpoint 
https://api.spotify.com/v1/search?q=genre:genre&type=track&limit=5, basically give me genre for these conditions, no other bs just one response with suitable genere. Focus on giving generes suitable to those regions like for punjab region any city of punjab lets say chandigarh it should be punjabi, for any haryanavi city it should be haryanavi etc etc.Return genre and market code(based on city and availaible for spotify) seperated by ',' . Weather Conditions: ${weather}  City: ${city}`;

    console.log("Prompt:", prompt);
    const result = await model.generateContent([prompt]);


    console.log(result.response.text().split(","));

})


//interacts with Spotify api nd returns songs
async function spotifyPlaylist() {

}

app.listen(process.env.PORT, async () => {
    console.log("server is running on port " + process.env.PORT);
    console.log("API Key:", process.env.API_KEY);

})
