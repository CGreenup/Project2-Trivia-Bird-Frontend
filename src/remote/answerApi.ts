import { question } from "../models/question";
import answerClient from "./answerClient";

export const postAnswer = async (userAnswer:question) => {
    const response = await answerClient.post<question>("/game/", userAnswer)

    if (response.status === 200){
        return response.data;
    }
    return false;
}