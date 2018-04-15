import React from "react";
import ReactDOM from "react-dom";

import {BrowserRouter as Router,HashRouter,Route,Switch,Redirect} from "react-router-dom";
import A from "./a";
import {B} from "./b";
import {Err} from "./error";

import {Nav} from "./nav";

import "./index.css";

ReactDOM.render(
    <HashRouter basename="demo" forceRefresh={true}> 
        <div>
        <Nav/>
        <Switch>
            <Route exact path="/" component={A}/>
            <Route path="/B/:id" component={B}/>
            <Redirect from="/redirect" to="/B:id"/>
            {/* <Route component={A}/> */} 
            {/* 这个相当于从定向，必须写在所有的最后 */}
            
            <Route component={Err}/>
        </Switch>
        </div>
    </HashRouter>,
    document.getElementById("root")
);