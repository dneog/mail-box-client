import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink, useNavigate} from 'react-router-dom';
import {auth} from '../../firebase/Config';
import {signOut } from "firebase/auth";
import {  onAuthStateChanged } from "firebase/auth";
import {useDispatch, useSelector} from 'react-redux';
import { ADD_ACTIVE_USER, REMOVE_ACTIVE_USER } from '../../redux/slice/AuthSlice';
import OnLogin, { OnLogout } from '../../components/showHide/ShowHide';


const Header = () => {
  const navigate= useNavigate();
  const dispatch= useDispatch();

  useEffect(()=> {
    onAuthStateChanged(auth, (user)=> {
      if(user){
        dispatch(ADD_ACTIVE_USER({
          email: user.email,
          userID: user.uid,
          userName: user.displayName
        }))
      }else{
        dispatch(REMOVE_ACTIVE_USER())
      }
    })
  })

  const userLogOut=()=> {
    signOut(auth).then(() => {
 
 navigate('/')
}).catch((error) => {
  console.log(error)
  
});
  }
  return (
    <Navbar className="bg-body-tertiary text-decoration-none">
      <Container>
        <Navbar.Brand href="/home">Mail box</Navbar.Brand>
        
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <div class="navbar-nav fs-5">
        
        <OnLogout>
        <a class="nav-link" aria-current="page" href="/">Login</a>
        </OnLogout>
       
        <a class="nav-link " href="/home">Home</a>
        <OnLogin>
        <a class="nav-link" style={{cursor: 'pointer'}} onClick={userLogOut}>Logout</a>
        </OnLogin>
        
       
      </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header