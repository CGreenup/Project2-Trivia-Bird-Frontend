import axios from "axios";

const SpringClient = axios.create({
  //axios allows to add to the URL when we call the axios function
  // baseURL:'http://18.116.88.5:8080/project2-0.0.1-SNAPSHOT/',
  baseURL:'http://localhost:8080/project2/',
  //This is how you would add headers if necessary.
  headers: {
    // 'Access-Control-Allow-Origin' : '*',
    // 'Access-Control-Allow-Methods':'GET',
    'Content-Type':'application/json',
  }
});

export default SpringClient;
