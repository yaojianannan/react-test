import React from 'react';
import ReactDOM from 'react-dom';
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
// class Toggle extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             isToggleOn : true
//         };
        //为了在回调函数中使用'this'，这个绑定是必不可少的
        // this.handleClick = this.handleClick.bind(this);
    // }

//     handleClick(){
//         this.setState(state => ({
//             isToggleOn: !state.isToggleOn
//         }));
//     }
//
//     render() {
//         return (
//            //// 此语法确保 `handleClick` 内的 `this` 已被绑定。
//             <button onClick={() => this.handleClick()}>
//                 {this.state.isToggleOn ? 'ON' : 'OFF'}
//             </button>
//         );
//     }
// }
// ReactDOM.render(
//     <Toggle/>,
//     document.getElementById('root')
// )


//条件渲染
// function UserGreeting(props) {
//     return <h1>Welcome back!</h1>
// };
//
// function GuestGreeting(props) {
//     return <h1>Please sign up!</h1>
// };
//
// function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if(isLoggedIn){
//         return <UserGreeting/>;
//     }
//     return <GuestGreeting/>;
// }
//
// function LoginButton(props){
//     return(
//         <button onClick={props.onClick}>Login</button>
//     )
// }
//
// function LogoutButton(props){
//     return (
//         <button onClick={props.onClick}>
//             Logout
//         </button>
//     )
// }
//
// class LoginControl extends React.Component{
//     constructor(props) {
//         super(props);
//         this.handleLoginClick = this.handleLoginClick.bind(this);
//         this.handleLogoutClick = this.handleLogoutClick.bind(this);
//         this.state = {isLoggedIn: false};
//     };
//     handleLoginClick(){
//         this.setState({isLoggedIn: true});
//     };
//     handleLogoutClick(){
//         this.setState({isLoggedIn: false});
//     };
//     render() {
//         const isLoggedIn = this.state.isLoggedIn;
//         let button;
//         if (isLoggedIn){button = <LogoutButton onClick={this.handleLogoutClick} />}
//         else{button = <LoginButton onClick={this.handleLoginClick} />}
//                 return (<div>
//                 <Greeting isLoggedIn={isLoggedIn}/>
//                 {button}
//             </div>);
//     }
// }
// ReactDOM.render(
//     <LoginControl />,
//     document.getElementById('root')
// )


//列表和key
// const numbers = [1,2,3,4,5];
// const listItems = numbers.map((number) =>
//     <li>{number}</li>
// );
// function NumberList(props){
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) =>
// <li key={number.toString()}>{number}</li>
// );
//     return(<ul>{listItems}</ul>)
// }
// const numbers = [1,2,3,4,5];
// ReactDOM.render(
//
//     <NumberList numbers={numbers}/>,
//     document.getElementById('root')
// )

//表单
// class NameForm extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: ''
//         };
//         this.hanleChange = this.hanleChange.bind(this);
//         this.hanleSubmit = this.hanleSubmit.bind(this);
//     };
//     hanleChange(event){
//         this.setState({value:event.target.value})
//     };
//     hanleSubmit(event){
//         alert('提交的名字：' + this.state.value);
//         event.preventDefault();
//     }
//     render() {
//         return (
//             <form onSubmit={this.hanleSubmit}>
//                 <label>
//                     名字：
//                     <input type='text' value={this.state.value} onChange={this.hanleChange}/>
//                 </label>
//                 <input type='submit' value={'提交'}/>
//             </form>
//         );
//     }
// }
//
// class EssayForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: '请撰写一篇关于你喜欢的 DOM 元素的文章.'
//         };
//
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//
//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }
//
//     handleSubmit(event) {
//         alert('提交的文章: ' + this.state.value);
//         event.preventDefault();
//     }
//
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     文章:
//                     <textarea value={this.state.value} onChange={this.handleChange} />
//                 </label>
//                 <input type="submit" value="提交" />
//             </form>
//         );
//     }
// }
//
// class FlavorForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: 'coconut'};
//
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//
//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }
//
//     handleSubmit(event) {
//         alert('你喜欢的风味是: ' + this.state.value);
//         event.preventDefault();
//     }
//
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     选择你喜欢的风味:
//                     <select value={this.state.value} onChange={this.handleChange}>
//                         <option value="grapefruit">葡萄柚</option>
//                         <option value="lime">酸橙</option>
//                         <option value="coconut">椰子</option>
//                         <option value="mango">芒果</option>
//                     </select>
//                 </label>
//                 <input type="submit" value="提交" />
//             </form>
//         );
//     }
// }
//
// class Reservation extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isGoing: true,
//             numberOfGuests: 2
//         };
//
//         this.handleInputChange = this.handleInputChange.bind(this);
//     }
//
//     handleInputChange(event) {
//         const target = event.target;
//         const value = target.name === 'isGoing' ? target.checked : target.value;
//         const name = target.name;
//
//         this.setState({
//             [name]: value
//         });
//     }
//
//     render() {
//         return (
//             <form>
//                 <label>
//                     参与:
//                     <input
//                         name="isGoing"
//                         type="checkbox"
//                         checked={this.state.isGoing}
//                         onChange={this.handleInputChange} />
//                 </label>
//                 <br />
//                 <label>
//                     来宾人数:
//                     <input
//                         name="numberOfGuests"
//                         type="number"
//                         value={this.state.numberOfGuests}
//                         onChange={this.handleInputChange} />
//                 </label>
//             </form>
//         );
//     }
// }
// ReactDOM.render(
//     <Reservation />,
//     document.getElementById('root')
// )

//状态提升
function BoilingVerdict(props) {
    if (props.celsius > 100){
        return <p>the water would boil.</p>
    }
    return <p>the water would not boil.</p>
}

class Calculator extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            temperature:''
        };
    }
    handleChange(e){
        this.setState({temperature:e.target.value});
        alert(e.target.value)
    }
    render() {
        const temperature = this.state.temperature;
        return (
            <fieldset>
                <legend>Enter temperature in Celsius:</legend>
                <input
                    value={temperature}
                    onChange={this.handleChange}
                />
                <BoilingVerdict celsius={parseFloat(temperature)}/>
            </fieldset>
        );
    }
}
ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
)