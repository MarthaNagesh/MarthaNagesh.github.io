import React, { Component } from "react";
import './SkillSet.css';

const skills = { lang:'Html5, CSS, JavaScript and Styled-Components.',
                frameworks: 'React JS, Express JS and Boostrtrap.'    };
export default class SkillSet extends Component{
   
    render(){
        return(
            <div className="skills mx-auto" onClick={this.props.click}>
                <div>
                <h2>Front End Languages</h2>
                <p>{skills.lang}</p>
                </div>
                <div>
                <h2>Frameworks</h2>
                <p>{skills.frameworks}</p>
                </div>
                <div>
                <h2>Server side Languages</h2>
                <p>Node JS.</p>
                </div>
                <div>
                <h2>Version control</h2>
                <p>gitHub.</p>
                </div>
                <div>
                <h2>Tools</h2>
                <p>Visual Studio and Eclipse.</p>
                </div>
            </div>
        );
    }
}

