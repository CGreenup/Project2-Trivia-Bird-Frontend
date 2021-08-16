import React from "react";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import DifficultyButton from "../components/DifficultyButton";
import DifficultySelector from "../components/DifficultySelector";
import GameUI from "../components/GameUI";
import LeaderBoard from "../components/LeaderBoard";
import LogIn from "../components/LogIn";
import NewProfile from "../components/NewProfile";
import ProfileInfo from "../components/ProfileInfo";
import { UserProfile } from "../models/UserProfile";

const AppRoutes:React.FC<unknown> = (props) =>{
    const [profile, setProfile] = useState<UserProfile>(new UserProfile("", "", "", "", "", 0 , 0, 0));

    function login(input:UserProfile){
        setProfile(input);

        console.log("APP-ROUTES.TSX LOGIN FUNCTION:")
        console.log(profile);
    }

    return(
        <Switch>
            <Route exact path ='/' render = {() => {return(
                <div className='container-fluid'>
                    <div className='row'>
                        <h1 className='col-lg-12'>Insert component here! AppRoutes.tsx</h1>
                    </div>
                </div>
            )}}/>
            
            <Route exact path = '/game' render={() =>{ return <DifficultySelector userProfile={profile}/> }} />
        
            <Route path = '/login' render={() => {return <LogIn  callback= {login}/>}}/>

            <Route path = '/newprofile' component={NewProfile}/>
            
            <Route path = '/game/:difficulty' render = {() => { return <GameUI userProfile={profile} />}}/>
            
            <Route path = '/leaderboard' component={LeaderBoard}/>

            <Route path = '/profile' render = {() => { return <ProfileInfo userProfile={profile} />}}/>

            <Route path = '/example' render = { () => {return <DifficultyButton 
                    difficulty='Easy' 
                    bootstrapColor="success" 
                    onClick = {() => {console.log("button clicked")}}
                    />}
                }/>
        </Switch>
    );
}

export default AppRoutes