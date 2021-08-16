import axios from "axios";

const answerClient = axios.create({
    baseURL:"http://localhost:8080/project2/",
    headers: {
        'Content-Type':'application/json',
      }
});

export default answerClient;