import axios from "axios";

const answerClient = axios.create({
    baseURL:"localhost:8080/project2/"
});

export default answerClient;