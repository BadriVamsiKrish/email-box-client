import React, { useRef, useState } from 'react';
import { Button,Form} from 'react-bootstrap';
import './Form.css';
import { AuthActions } from '../Store/Auth-slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Signin = () => {
  const[err,setErr]=useState(false);
  const navigate=useNavigate();
  const emailref=useRef();
  const passwordref=useRef();
  const conformpassword=useRef();
  const dispatch=useDispatch();
  const Signupbtn = () =>{
    dispatch(AuthActions.setlogin());
  };
  const Signinhandler = async () => {
    setErr(false);
    const apiKey = 'AIzaSyAKqFeOETMUmLT1WIt6gLvnW1aXBuI3J0g'; // Replace with your Firebase API key
    const email = emailref.current.value;
    const password = passwordref.current.value;
  
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;
  
    try {
      const response = await fetch(url, {
        method: 'POST', // Use POST for sign-in
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        dispatch(AuthActions.setRegistered());
        dispatch(AuthActions.setToken(responseData.idToken));
        console.log(responseData.idToken);
        navigate('/welcome');
        // Handle successful sign-in here (e.g., store user data, redirect, etc.)
      } else {
        console.log('Error signing in');
        setErr(true);
        // Handle sign-in error (e.g., show error message)
      }
    } catch (error) {
      console.log('An error occurred:', error);
      setErr(true);
      // Handle unexpected errors (e.g., network issues)
    }
  };
  
  return (
    <div className='centered-container'>
      <Form className='centered-form'>
        <h2>Sign in</h2>
        {err && <h3 style={{color:'red',textAlign:'center'}}>Error araised while loging...?</h3>}
        <Form.Group>
          <Form.Label className='itemlabel'>User Email:</Form.Label>
          <Form.Control type='text' className='item' ref={emailref} required></Form.Control>
          <Form.Label className='itemlabel'>User Password:</Form.Label>
          <Form.Control type='password'className='item' ref={passwordref}required></Form.Control>
          <Form.Label className='itemlabel'>conform password:</Form.Label>
          <Form.Control type='password' className='item' ref={conformpassword}required></Form.Control>
        </Form.Group>
        <Button className='item' onClick={Signinhandler}>Signin</Button>
      </Form>
      <Button className='item' variant='success' onClick={Signupbtn}>create an account...!</Button>
    </div>
  )
}

export default Signin;