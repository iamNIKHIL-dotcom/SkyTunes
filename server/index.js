const express = require("express")

const axios = require("axios")
const cors = require("cors")

require("dotenv").config()

const app = express()
app.use(express.json())
app.use(cors)

//using gemini for selection of genre
const { GoogleGenerativeAI } = require("@google/generative-ai")

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });



app.post("/", async (req,res)=>{
    

})


//interacts with Spotify api nd returns songs
async function spotifyPlaylist() {
    
}

app.listen(process.env.PORT, ()=>{
    console.log("server is running on port "+ process.env.PORT);
})
