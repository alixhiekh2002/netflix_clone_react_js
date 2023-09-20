import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",///movie/550?api_key=0bc2342b65e68332c4737d2dd9cf7897
})
export default instance;    