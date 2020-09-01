import axios from "axios"

const KEY = "AIzaSyDtOR3326hLYvZp2y1LCQbcisBA9dWsJ2A"


// search template for youtube api to make things easier on us later
export default axios.create({

    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type:'video',
        maxResults: 5,
        key: KEY
    }
    
})
