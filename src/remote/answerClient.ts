import axios from "axios";

const answerClient = axios.create({
    // baseURL:"http://localhost:8080/project2/",
    baseURL:'http://18.116.88.5:8080/project2-0.0.1-SNAPSHOT/',
    headers: {
        'Content-Type':'application/json',
      }
});

export default answerClient;