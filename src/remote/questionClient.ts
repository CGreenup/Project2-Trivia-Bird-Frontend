import axios from "axios";

const questionClient = axios.create({
    baseURL:'https://opentdb.com/api.php',
    headers: {
        'Content-Type': 'application/json'
    }
});