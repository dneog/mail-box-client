import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/Config';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
    const navigate= useNavigate()
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
  

    const handleSubmit=(e)=> {
        e.preventDefault();
       

        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   
    const user = userCredential.user;
  
   
     navigate('/')
   
  })
  .catch((error) => {
    console.log(error.message);
   
  });
    }

  return (
    <div className='w-25 m-auto mt-5'>
        <div className='pt-5 '>
        <Form onSubmit={handleSubmit} className='border py-4 px-3' >
        <h4 className='text-center'>Login</h4>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=> setEmail(e.target.value)} />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={(e)=> setPassword(e.target.value)}  placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
       
      </Form.Group>
     
      <div className='text-center'>
      <Button  variant="primary" type="submit">
        Submit
      </Button>
      </div>
      
    </Form>
        </div>
      <p className='text-center'>Don't have an account ?  <Link to={'/signup'}>
        SignUp
      </Link> </p>
     

    </div>
  )
}

export default Login