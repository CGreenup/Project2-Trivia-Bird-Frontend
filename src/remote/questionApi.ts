import { question } from "../models/question";
import questionClient from "./questionClient";

export const getQuestion = async (difficulty:string) => {
    const response = await questionClient.get<question>(difficulty + "&type=multiple")
    if(response.status == 200){
        let data = response.data;
        //debug
        console.log("DEBUG IN questionAPI.ts:")
        console.log("This is the data returned");
        console.log(data)
        return data;
    }
    else{
        console.log("ERROR CONNECTING TO API")
    }
}