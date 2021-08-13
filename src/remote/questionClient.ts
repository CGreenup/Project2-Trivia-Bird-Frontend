import axios from "axios";

const questionClient = axios.create({
    baseURL:'https://opentdb.com',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default questionClient
