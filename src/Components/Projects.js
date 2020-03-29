import React, { Component } from 'react';
import './Projects.css';

export default class Projects extends Component {
    render() {
        return (
            <div className="projects" style={{height: '80vh', width: '100%'}} onClick={this.props.click} >
                <div className="col-sm-12 col-md-6">
                    <h2>Project 1</h2>
                    <h4><strong>Responsibilities</strong></h4>
                    <ul>
                        <li>Worked on AGILE development principles to build organized code.</li>
                        <li>Developed the User Interface using javaScript, React JS, HTML5, CSS3, and enhanced response using Bootstrap3.</li>
                        <li>Developed and maintained reusable components.</li>
                        <li>Designed, developed a custom, single-page, responsive web application on front end using React.</li>
                        <li>Handled client related issues in the production environment.</li>
                        <li>Designed CSS templates for use in all pages on the website working with CSS Background, positioning, text, border, margin, padding, and table.</li>
                    </ul><br/>
                    <h4><strong>Environment:</strong></h4>
                    <p>JavaScript, HTML5, CSS3 Sass, React JS, Bootstrap, Agile methodology, RESTful Web Services.</p>
                </div>
                <div className="col-sm-12 col-md-6">
                    <h2>Project 2</h2>
                    <h4><strong>Responsibilities</strong></h4>
                    <ul>
                        <li>Design, develop and test HTML5, CSS3, Bootstrap, JavaScript, jQuery and React.JS that meets accessibility and web browser standards for website.</li>
                        <li>Used React-Router to turn application into Single Page Application.</li>
                        <li>Used React JS for templating for faster compilation and developing reusable components.</li>
                        <li>Worked on Front end by using JavaScript.</li>
                        <li>Wrote external CSS file, which linked to the HTML file to increase the traffic of the web site.</li>
                    </ul><br/>
                    <h4><strong>Environment:</strong></h4>
                    <p>React JS , JavaScript, HTML5, CSS.</p>
                </div>
            </div>
        )
    }
}
