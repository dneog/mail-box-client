import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsDataClicked } from '../../../redux/slice/BlurTickSlice';
const Sidebar = () => {

   const DataTick= useSelector(selectIsDataClicked)

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
        <li className='hov'>
        <NavLink to={'/home/inbox'}>
        <div className='d-flex justify-content-between'>
   Inbox
       <span className='pe-2'><span style={{paddingLeft:4,fontSize:14, paddingRight:4}} className='rounded bg-primary primary text-white '>{DataTick}</span> unread</span>
        </div>
        </NavLink>
        </li>
        
        <li>
        <NavLink to={'/home/unread'}>
           Unread
           </NavLink>
        </li>
        <li>
        <NavLink to={'/home/sent'}>
            Sent
            </NavLink>
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