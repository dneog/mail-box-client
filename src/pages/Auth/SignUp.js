import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useNavigate } from 'react-router-dom';
import {auth} from '../../firebase/Config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const SignUp = () => {
    const navigate= useNavigate()
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [confirmPassword, setConfirmPassword]= useState('');

    const handleSubmit=(e)=> {
        e.preventDefault();
        if(password !== confirmPassword){
            alert('Password Dont match')
        }

        createUserWithEmailAndPassword(auth, email, password)
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
        <div className='pt-5'>
        <Form onSubmit={handleSubmit} className='border py-4 px-3' >
        <h4 className='text-center'>Sign Up</h4>
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
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}  />
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
      <p className='text-center'>Already have an account ?  <Link to={'/'}>
        Login
      </Link> </p>
     

    </div>
  )
}

export default SignUp