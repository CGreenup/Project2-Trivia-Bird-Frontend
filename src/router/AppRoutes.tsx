import React from "react";
import { Route, Switch } from "react-router-dom";
import DifficultyButton from "../components/DifficultyButton";
import DifficultySelector from "../components/DifficultySelector";
import GameUI from "../components/GameUI";
import LeaderBoard from "../components/LeaderBoard";
import LogIn from "../components/LogIn";
import NewProfile from "../components/NewProfile";

const AppRoutes:React.FC<unknown> = (props) =>{
    return(
        <Switch>
            <Route exact path ='/' render = {() => {return(
                <div className='container-fluid'>
                    <div className='row'>
                        <h1 className='col-lg-12'>Insert component here! AppRoutes.tsx</h1>
                    </div>
                </div>
            )}}/>
            
            <Route exact path = '/game' component={DifficultySelector}/>
        
            <Route path = '/login' component={LogIn}/>

            <Route path = '/newprofile' component={NewProfile}/>
            
            <Route path = '/game/:difficulty' component= {GameUI}/>
            
            <Route path = '/leaderboard' component={LeaderBoard}/>

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