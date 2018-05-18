import React from "react";
import {Prompt} from "react-router-dom";
import PropTypes from 'prop-types';

// const Theme = React.createContext("#f00");
// 这种写法的版本在 16.3.2
// 当前版本16.2.0，对于 Context的用法不一样，见下面；这个只能在 当前申明元素的 子元素 可以访问这个 变量，但是必须记得 申明他的类型

// 简单对于高阶组件的理解
let test = (TestComponent,name)=>{
    class NewComponent extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                name:""
            }
        }
        componentWillMount(){
            this.setState({name});
        }
        render(){
            return (
                <div>
                    <h2>test</h2>
                    <TestComponent 
            name={this.state.name}
            />
                </div>
            )
        }
    }
    return NewComponent;
}
class Test extends React.Component{
    render(){
        return (
            <input defaultValue={this.props.name}/>
        ); 
    }
}
// 对于组件的上拉刷新和下啦加载
let RefreshAndLoad = (LoadComponent,type)=>{
    class NewComponent extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                data:null
            }
        }
        componentWillMount(){
            // 这里获取数据并且进行操作
            // console.log(LoadComponent);
            // 感觉这种写法需要把 数据的 ui也要下载里面
        }
        load(){
            type == "fresh" && console.log("刷新");
            type == "load" && console.log("加载");
        }
        render(){
            return(
                <LoadComponent load={this.load.bind(this)} data={this.state.data}/>
            );
        }
    }
    return NewComponent;
}
function RefreshComponent(props){
    return (
        <div onClick={()=>{props.load()}}>
            下拉刷新
        </div>
    );
}
class LoadComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div onClick={()=>{props.load()}} style={{color:this.context.color}}>
                    上拉加载
                </div>
        );
    }
}
// 这里是想用 context 的写法
LoadComponent.contextTypes = {
    color: PropTypes.string
  };
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
    // 这里是 申明 变量的地方
    getChildContext() {
        return {color: "#f00"};
    }
    render(){
        // console.log(test(Test,"测试"));
        const TestCom = test(Test,"测试");
        const Refresh = RefreshAndLoad(RefreshComponent,"fresh");
        const Load = RefreshAndLoad(LoadComponent,"load");
        return (
            <div>
                <Prompt message="是否退出" when={false}/>
                <h1 onClick={this.test}>B页面{this.props.match.params.id}</h1>
                <Refresh/>
                <TestCom/>
                <Load/>
            </div>
        );
    }
}
// 这里是 在 当前 组件 申明 context的写法
B.childContextTypes={
    color:PropTypes.string
}

// export {B};
export default B;