import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import SideDrawer from './Components/SideDrawer';
import Router from './Components/Router';


// import Modal from './Components/Modal';


class App extends Component {
  state= {
    sideDrawerOpen: false  
  };
 contentClickHandler = ()=> {
  this.setState((prevState)=>{
    return {sideDrawerOpen: !prevState.sideDrawerOpen};
  });
 };
 contentCloser = ()=>{
   this.setState({sideDrawerOpen: false});
 };
  render(){
    // let main;
    // if(this.state.sideDrawerOpen){
    //   main = />;

    // }
    return (
      <div style ={{height:'100%'}}>
        <NavBar contentClickHandler={this.contentClickHandler}/>
        <Router contentCloser={this.contentCloser}/>
        <SideDrawer show={this.state.sideDrawerOpen} func={this.contentCloser}/>
        
        
        
      </div>
    );
  }
}

export default App;
