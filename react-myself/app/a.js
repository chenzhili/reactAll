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
            )
    }
}
class Child extends React.Component{
    constructor(){
        super();
        this.state = {
            num:1,
            name:"aa"
        }
    }
    clickMe(){
        this.props.n = 2;//报错
        /* 原因：
            你不能改变一个组件被渲染的时候传进来的 props。React.js 希望一个组件在输入确定的 props 的时候，能够输出确定的 UI 显示形态。如果 props 渲染过程中可以被修改，那么就会导致这个组件显示形态和行为变得不可预测，这样会可能会给组件使用者带来困惑；

            想改变 props 的值，可以通过在 传入组件的时候去改变props 到达，页面的 重新渲染；而不是在 渲染的过程中去改变 props 的状态，会导致 渲染 的 不可预测；
        */
        // this.setState({
        //     num:this.state.num+this.props.n
        // });
        this.setState((prv,props)=>{//这个是异步执行的所以上面的方式不一定得到 props的值进行操作
            // console.log(prv);
            // console.log(props);
            return {
                num:prv.num+props.n
            }
        });
        // console.log(this.state.num);//这个打印先触发


        this.setState({ count: 0 }) // => this.state.count 还是 undefined
        console.log(this.state.count);
        this.setState({ count: this.state.count + 1}) // => undefined + 1 = NaN
        console.log(this.state.count);
        this.setState({ count: this.state.count + 2}) 
        console.log(this.state.count);
        // 这里说明 了 setState 是异步操作，里面的this.state.count是同步读取的，所以 undefined + 1和undefined + 2
    }
    render(){
        return(
            <div>
                <div>{this.state.count}</div>
                <div>{this.state.num}</div>
                <div onClick={this.clickMe.bind(this)} style={{width:100,height:100,textAlign:"center",color:"#f00",backgroundColor:"#ff0",lineHeight:"100px"}}>点击我</div>
            </div>
        );
    }
}
export class A extends React.Component{
    aa(){
        console.log(1);
class A extends React.Component{
    constructor(){
        super();
    }
   
    render(){
        return (
            <Card>
                <h1>标题</h1>
                <div>姓名
                    <div>age</div>
                </div>
            </Card>
            <Child n="2"/>
        );
    }
}