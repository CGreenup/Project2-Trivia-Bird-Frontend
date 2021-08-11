import axios from "axios";

const springClient = axios.create({
  //axios allows to add to the URL when we call the axios function
  baseURL:'http://18.116.88.5:8080/project2-0.0.1-SNAPSHOT/',
  //This is how you would add headers if necessary.
  headers: {
    'Content-Type':'application/json',
  }
});

export default springClient;