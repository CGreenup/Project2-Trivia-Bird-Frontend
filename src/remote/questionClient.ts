import axios from "axios";

const questionClient = axios.create({
    baseURL:'https://opentdb.com/api.php?amount=1&difficulty=',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default questionClient