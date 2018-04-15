import React,{Component} from "react";

class Card extends Component{
    constructor(props){
        super(props);
        console.log(this.props);
        this.state = {
            content:"<h1>富文本</h1>"
        }
    }
    render(){
        return (
            <div className="card_container" >
                <div dangerouslySetInnerHTML={{__html:this.state.content}}></div>
                {this.state.content}
                {this.props.children}
            </div>
        );
    }
}
export class A extends React.Component{
    aa(){
        console.log(1);
    }
    render(){
        return (
            <Card>
                <h1>标题</h1>
                <div>姓名
                    <div>age</div>
                </div>
            </Card>
        );
    }
}