import React from 'react';
import { useState, useEffect } from "react";
import { UserProfile } from "../models/UserProfile";
import { ApiUpdateScreenName } from "../remote/SpringApi";
import { ApiUpdateProfileBio } from "../remote/SpringApi";
import { ApiGetProfile } from "../remote/SpringApi";

type Props = {
  userProfile: UserProfile
}

const ProfileInfo:React.FC<Props> = (props) => {
    const [profile, setProfile] = useState<UserProfile>(new UserProfile("", "", "", "", "", 0 , 0, 0));
    const [profileBio, setProfileBio] = useState<string>('');
    const [profileScreenName, setScreenName] = useState<string>('');


    useEffect(()=>{
      getUserProfile();
  })

    const updateScreenName = async () => {

      let tempProfile = await ApiGetProfile(props.userProfile.username.toString());

      tempProfile.screenName = profileScreenName;

      ApiUpdateScreenName(tempProfile);

      setProfile(tempProfile);
    }

    const updateProfileBio = async () => {

      let tempProfile = await ApiGetProfile(props.userProfile.username.toString());

      tempProfile.bio = profileBio;

      ApiUpdateProfileBio(tempProfile);

      setProfile(tempProfile);
    }

    const getUserProfile = async () => {
      let tempProfile = await ApiGetProfile(props.userProfile.username.toString());
      setProfile(tempProfile);
   }



    return (
        <div className='container-fluid'>
          <h2>Profile Information</h2>
          <br></br>
          <br></br>
          <form>
            <label className="label col-sm-3">Screen Name: {profile.screenName}</label>
            <br></br>
            <label className="label col-sm-3">Email: {profile.email}</label>
            <br></br>
            <label className="label col-sm-3">Bio: {profile.bio}</label>
            <br></br>
            <label className="label col-sm-3">Accuracy: {profile.accuracy}</label>
            <br></br>
            <label className="label col-sm-3">Number of Questions: {profile.number_of_questions}</label>
            <br></br>
            <label className="label col-sm-3">Score: {profile.score}</label>
            <br></br>

          </form>

          <br></br>

          <form>
            <h4>Update Screen Name</h4>
            <div>
              <label className="label col-sm-3">Screen Name</label>
              <input type="text" onChange={(e) => { setScreenName(String(e.target.value)) }} name="updateScreenName" className="form-control" placeholder="Update Screen Name"/>
              <button onClick={() => { updateScreenName() }} className="btn btn-secondary" type="button">Update Screen Name</button>
            </div>
          </form>

          <form>
            <h4>Update Biography</h4>
            <div>
              <label className="label col-sm-3">Profile Bio</label>
              <input type="text" onChange={(e) => { setProfileBio(String(e.target.value)) }} name="updateProfileBio" className="form-control" placeholder="Update Biography"/>
              <button onClick={() => { updateProfileBio() }} className="btn btn-secondary" type="button">Update Biography</button>
            </div>
          </form>
        </div>
    )
}

export default ProfileInfo;