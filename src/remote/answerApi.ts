import { question } from "../models/question";
import answerClient from "./answerClient";

export const postAnswer = async (userAnswer:question) => {
    const response = await answerClient.post("/game/", userAnswer)

    if (response.status === 200){
        return true;
    }
    return false;
}