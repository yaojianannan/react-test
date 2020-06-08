import React from 'react';
import ReactDOM, {render} from 'react-dom';
import './index.css';

// hello-world
// const name = 'Josh';
// const element = <h1>Hello,{name}</h1>

//在 JSX 中嵌入表达式
// function formatName(user){
//     return user.firstName+ ' ' + user.lastName;
// }
//
// function getGreeting(user) {
//     if (user){
//         return <h1>hello,{formatName(user)}!</h1>
//     }else{
//         return <h1>hello,stanger.</h1>
//     }
// }
// const user = {
//     firstName:"Harper",
//     lastName:"Perez",
// }
// const element = (
//     <h1>hello,{formatName(user)}</h1>
// )

// // 计时器
// function tick(){
//     const element = (
//         <div>
//             <h1> hello,world!</h1>
//             <h2>Is is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
//     ReactDOM.render(element,document.getElementById('root'));
// }
// setInterval(tick,1000);

//渲染组件
// function Welcome(props){
//     return <h1>Hello,{props.name}</h1>
// }
// class Welcome extends React.Component{
//     render() {
//         return <h1>Hello,{this.props.name}</h1>;
//     }
// }
// const element = <Welcome name='Sara'></Welcome>


// //组合组件
// class Welcome extends React.Component{
//     render() {
//         return <h1>hello,{this.props.name}</h1>;
//     }
// }
// class App extends React.Component{
//     render() {
//         return (
//             <div>
//                 <Welcome name = "Sata"/>
//                 <Welcome name = "Cahal"/>
//                 <Welcome name = "Edite"/>
//             </div>
//         );
//     }
// }
// ReactDOM.render(
//     <App/>,
//     document.getElementById('root'),
// );

// //state&生命周期
// class Clock extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {date: new Date()};
//     }
//
//     componentDidMount() {
//         this.timerID = setInterval(
//             () => this.tick(),1000
//         )
//     }
//
//     componentWillUnmount() {
//         clearInterval(this.timerID)
//     }
//
//     tick(){
//         this.setState({
//             date : new Date()
//         });
//     }
//
//     render() {
//         return( <div>
//             <h1>hello,world!</h1>
//             <h2>It is {this.state.date.toLocaleTimeString()}</h2>
//         </div>);
//     }
// }
//
// ReactDOM.render(
//     <Clock/>,
//     document.getElementById('root'),
// );

// function ActionLink() {
//     function handleClick(e) {
//         e.preventDefault();
//         console.log('the link was clicked.')
//     };
//     return(
//         <a href='http://www.baidu.com' onClick={handleClick}>
//             click me
//         </a>
//     );
// }
// ReactDOM.render(
//     <ActionLink/>,
//     document.getElementById('root'),
// );


//事件处理
class Toggle extends React.Component{
    constructor(props) {
        super(props);
        this.state = {isToggleOn : true};
        //为了在回调函数中使用'this'，这个绑定是必不可少的
        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
           //// 此语法确保 `handleClick` 内的 `this` 已被绑定。
            <button onClick={() => this.handleClick()}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}
ReactDOM.render(
    <Toggle/>,
    document.getElementById('root')
)