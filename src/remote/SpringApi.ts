import { UserProfile } from "../models/UserProfile";
import SpringClient from "./SpringClient";

//get top ten profiles from back end
export const ApiGetProfiles = async():Promise<UserProfile[]> => {
    const response = await SpringClient.get<UserProfile[]>('/profile/');

    if (response.status === 200) {
        return response.data;
    }

    return [];
}


//check login profile with back end
export const ApiValidateProfiles = async(checkProfile:UserProfile):Promise<UserProfile|boolean> => {
    const response = await SpringClient.post<UserProfile>('/profile/', checkProfile);
    

    if (response.status === 200) {
        let data = await response.data;
        return data;
    }

    return false;
}

//create new profile with back end
export const ApiPutProfiles = async(checkProfile:UserProfile):Promise<boolean> => {
    const response = await SpringClient.put<UserProfile>('/profile/', checkProfile);

    if (response.status === 200) {
        return true;
    }

    return false;
}

export const ApiUpdateScreenName = async(checkProfile:UserProfile):Promise<boolean> => {
    const response = await SpringClient.put<UserProfile>('/profile/', checkProfile);

    if (response.status === 200) {
        return true;
    }

    return false;
}

export const ApiUpdateProfileBio = async(checkProfile:UserProfile):Promise<boolean> => {
    const response = await SpringClient.put<UserProfile>('/profile/', checkProfile);

    if (response.status === 200) {
        return true;
    }

    return false;
}

export const ApiGetProfile = async(username:string):Promise<UserProfile> => {
    const response = await SpringClient.get<UserProfile>('/profile/'+ username);

        return await response.data;

}