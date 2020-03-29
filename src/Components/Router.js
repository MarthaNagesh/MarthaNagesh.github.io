import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './MainPage';
import SkillSet from './SkillSet';
import Experience from './Experience';
import Projects from './Projects';

const Router = props => {
    return (
        <Switch>
          <Route exact path="/" component={()=> <MainPage click={props.contentCloser}/>} />
          <Route path="/SkillSet" component={()=> <SkillSet click={props.contentCloser}/>} />
          <Route path="/Experience" component={()=> <Experience click={props.contentCloser}/>}/>
          <Route path="/Projects" component={()=> <Projects click={props.contentCloser}/>} />
        </Switch>
        
    );
}   
export default Router;
