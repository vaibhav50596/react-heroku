import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput.js'
import UserOutput from './components/UserOutput.js'


class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "derek"  //match this key with setState below
    };
  }

  changeUserName = (event) => {
    console.log("What's newUserName: ", event.target.value);
    //1. You write a method which changes the state username
    //2. Call this method from a button click of UserInput child component
    //3. This function will be passed as a reference to the UserInput child component
    let newUserName = event.target.value;
    this.setState({
      username: newUserName
    });

    console.log("What's onChange state now? ", this.state);
  }

  handleClick = (event) => {
    console.log("What's newUserName: ", event.target.previousElementSibling.value);
    let newUserName = event.target.previousElementSibling.value;
    this.setState({
      username: newUserName
    });
    console.log("What's onClick state now? ", this.state);
  }


  //You can write ES5/ES6 JavaScript before render() JSX...

  //DANGER  render() CONTAINS JSX   use {} for JS calls
  render() {
    return (
      <div className="App">
        <UserInput handleClickUN = {this.handleClick} changeUN = {this.changeUserName} currentValue={ this.state.username }></UserInput>
        <UserOutput userName = {this.state.username}>This is two-way binding!</UserOutput>
        <UserOutput userName="sally">This is hardcoded value!</UserOutput>
      </div>
    );
  }

}
export default App;
