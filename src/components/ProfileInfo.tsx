import React from 'react';
import { useState, useEffect } from "react";
import { UserProfile } from "../models/UserProfile";
import { ApiUpdateScreenName } from "../remote/SpringApi";


const ProfileInfo = () => {
    //const [userProfileSet, setUserProfiles] = useState<UserProfile[]>([]);
    const [profile, setProfile] = useState<UserProfile>();
    const [profileBio, setProfileBio] = useState<string>('');
    const [profileScreenName, setScreenName] = useState<string>('');



    useEffect(()=>{
      getUserProfile()
    }, [])

    const getUserProfile = async () => {
      let allProfiles:UserProfile[] = await ApiGetProfiles();
      setUserProfiles(UserProfile);
    }



    return (
        <div className='container-fluid'>
          <h2>Profile Information</h2>
         
          <br></br>
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