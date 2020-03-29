import React, { Component } from 'react';
import './Experience.css';

export default class Experience extends Component {
    render(){
        return(
                <div className="experience" onClick={this.props.click}>
                    <h2>Experience Summery</h2>
                    <ul><li>Strong practical expertise in creating web pages using Html5 and CSS along with styled-components.</li>
                    <li>	Hands on experience in JavaScript and DOM manipulation.</li>
                    <li>	Expertise in Front end development and design using Bootstrap framework.</li>
                    <li>	Have knowledge on react Hooks and context api.</li>
                    <li>	Experience in creating single page applications (SPA) using React-Router. </li>
                    <li>	Extensively worked on Front end by using React jS, Bootstrap and JavaScript frameworks.</li>
                    <li>	Experience in developing applications in agile environment.</li>
                    <li>	Experience on different IDEs such as Visual Studio and Eclipse.</li>
                    <li>	Have knowledge about Rest API and Graphql.</li>
                    <li>	A little understanding of Node.js (willing to learn).</li>
</ul>
                </div>
        )
    }
}