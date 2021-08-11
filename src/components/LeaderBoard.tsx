import React from "react";

//this function prints the leader board table
const LeaderBoard = () => {
    return (
        <div className='container-fluid'>
        <table>
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
            </tbody>
        </table>
        </div>)
}

export default LeaderBoard;