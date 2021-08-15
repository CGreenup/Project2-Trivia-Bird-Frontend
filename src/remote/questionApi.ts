import { question } from "../models/question";
import questionClient from "./questionClient";

export const getQuestion = async (difficulty:string) => {
    const appendedURL = "api.php?amount=1&difficulty=" + difficulty.toLowerCase()+"&type=multiple";

    const response = await questionClient.get<question>(appendedURL)
    if(response.status === 200){
        let data = response.data;
        //debug
        console.log("DEBUG IN questionAPI.ts: https://opentdb.com/" + appendedURL)
        return data;
    }
    else{
        console.log("ERROR CONNECTING TO API")
    }
}