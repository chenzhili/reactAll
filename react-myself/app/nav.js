import React from "react";
import {NavLink} from "react-router-dom";

export class Nav extends React.Component{
    render(){
        return(
            <div>
                <NavLink className="blue" activeClassName="bbb" exact to="/">
                    A
                </NavLink>&nbsp;
                <NavLink className="blue" activeClassName="bbb" to="/B/11">
                    B
                </NavLink>&nbsp;
                <NavLink to="/react" className="blue" activeClassName="bbb">
                    不存在的页面
                </NavLink>&nbsp;
                <NavLink to="/redirect" className="blue" activeClassName="bbb">
                从定向</NavLink>
            </div>
        );
    }
}