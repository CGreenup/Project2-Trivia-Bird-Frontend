import React from "react";
import { Route, Switch } from "react-router-dom";
import DifficultyButton from "../components/DifficultyButton";
import DifficultySelector from "../components/DifficultySelector";
import LeaderBoard from "../components/LeaderBoard";

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

            <Route exact path = '/this' render = {() => {return(
                <div>
                    <input type="radio" className="btn-check" name="options-outlined" id="success-outlined" autoComplete="off" checked />
                    <label className="btn btn-outline-success" htmlFor="success-outlined">Checked success radio</label>
            
                    <input type="radio" className="btn-check" name="options-outlined" id="danger-outlined" autoComplete="off" />
                    <label className="btn btn-outline-danger" htmlFor="danger-outlined">Danger radio</label>
                </div>
            )}}/>

            <Route exact path = '/game' component={DifficultySelector}/>

            <Route path = '/game/:diff' />
            
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