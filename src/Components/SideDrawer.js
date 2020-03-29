import React from 'react';
import './sideDrawer.css';
import { Link } from 'react-router-dom';


const SideDrawer = props => {
    let drawerClasses = ['side-drawer'];
    if(props.show){
        drawerClasses =['side-drawer', 'open'];
    }
    return(
    <nav className= {drawerClasses.join(' ')}>
        <ul>
        <div className="btn"><button className="button" onClick={props.func}><i class="fa fa-times"></i></button></div>
        
            <li><Link to="/"><h3><i class="fa fa-info"></i> About me</h3></Link></li>
            <li><Link to="/SkillSet"> <h3><i class="fa fa-tasks"></i> SkillSet </h3></Link></li>
            <li><Link to="/Experience"><h3> <i class="fa fa-graduation-cap"></i> Experience </h3></Link></li>
            <li><Link to="/Projects"><h3><i class="fa fa-flag"></i> projects </h3></Link></li>
        </ul>
    </nav>
    
    );
}
export default SideDrawer;


