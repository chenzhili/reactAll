import React from "react";
import {Prompt} from "react-router-dom";

class B extends React.Component{
    constructor(){
        super();
    }
    test(){
        console.log(this);
    }
    componentDidMount(){
        console.log(this.props);
    }
    render(){
        return (
            <div>
                <Prompt message="是否退出" when={false}/>
                <h1 onClick={this.test}>B页面{this.props.match.params.id}</h1>
            </div>
        );
    }
}
export {B};