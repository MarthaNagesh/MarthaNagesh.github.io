import React, { Component } from 'react';
import img from '../img.JPG';
import './Mainpage.css';

export default class MainPage extends Component {
    render() {
        return (
            <div className="row backdrop" onClick={this.props.click}>
               
                <div className="row">
                    <div className="col-sm-6 mx-auto col-md-6 my-3">
                        <img src={img} alt="profile pic" className="py-5 img-responsive profile"/>
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-5">
                        <h2><strong>Resume</strong></h2><br/><br/>
                        <h4>"I am a <cite>Software Developer</cite> with over 5 years of experience in developing User Interface (UI)
                         web applications using front End/user Interface technologies like JavaScript, React JS, Bootstrap 
                         and CSS."</h4>
                
                </div>

            </div>
            </div>
            
        )
    }
}
