import { UserProfile } from "../models/UserProfile";
import SpringClient from "./SpringClient";

//get all profiles from back end
export const ApiGetProfiles = async():Promise<UserProfile[]> => {
    const response = await SpringClient.get<UserProfile[]>('/profile/');

    if (response.status = 200) {
        return response.data;
    }

    return [];
}