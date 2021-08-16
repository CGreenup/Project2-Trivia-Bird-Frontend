import React from "react";
import { useState, useEffect } from "react";
import { UserProfile } from "../models/UserProfile";
import { ApiGetProfiles } from "../remote/SpringApi";

//this function prints the leader board table
const LeaderBoard = () => {
    const [userProfileSet, setUserProfiles] = useState<UserProfile[]>([]);
    let [userRank, setUserRank] = useState<number>(1);


    useEffect(()=>{
      getAllUserProfiles()
    }, [])

    const getAllUserProfiles = async () => {
      let allProfiles:UserProfile[] = await ApiGetProfiles();
      setUserProfiles(allProfiles);
    }

    
    const profileTable = () => (
      userProfileSet.map(
        (profiles: UserProfile) => (
        <tr>
          <td>{userRank++}</td>
          <td>{profiles.screenName}</td>
          <td>{profiles.number_of_questions}</td>
          <td>{profiles.accuracy}</td>
          <td>{profiles.score}</td>
        </tr>
      ))
    );

    return (
        <div className='container-fluid'>
          <h2>Leader Board</h2>
          <hr/>
          <table className="table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Quetions Answered</th>
                <th>Accuracy</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {profileTable()}
            </tbody>
          </table>
        </div>
    )
}

export default LeaderBoard;