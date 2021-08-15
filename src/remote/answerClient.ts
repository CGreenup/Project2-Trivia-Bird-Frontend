import axios from "axios";

const answerClient = axios.create({
    baseURL:"localhost:8080",
    headers:{
        "Content-Type:":'application/json',
    }
});

export default answerClient;