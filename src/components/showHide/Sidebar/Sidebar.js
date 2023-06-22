import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
  return (
   <div>
   <div id="wrapper" class="toggled">


<div id="sidebar-wrapper">
    <ul class="sidebar-nav mt-3">
       
        <li>
        <NavLink to={'/home/compose'}>
        Compose
        </NavLink>
            
        </li>
        <li>
        <NavLink to={'/home/inbox'}>
        Inbox
        </NavLink>
            
        </li>
        
        <li>
            <a href="#">Sent</a>
        </li>
        <li>
            <a href="#">All Mails</a>
        </li>
        <li>
            <a href="#">Profile</a>
        </li>
        
    </ul>
</div>






</div>
   </div>
  )
}

export default Sidebar