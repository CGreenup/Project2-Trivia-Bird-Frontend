import React from "react";
import { Route, Switch } from "react-router-dom";

const AppRoutes:React.FC<unknown> = (props) =>{
    return(
        <Switch>
            <Route exact path ='/this' render = {() => {return(
                <div className='container-fluid'>
                    <div className='row'>
                        <h1 className='col-lg-12'>Insert component here! AppRoutes.tsx</h1>
                    </div>
                </div>
            )}}/>
            
            <Route path = '/games' /*component={}*/ />

            <Route path = '/example' component={() => {return(<h1>Instead of a lambda and a header here, you put a component, like the example above! AppRoutes.tsx</h1>) }} />
        </Switch>
    );
}

export default AppRoutes