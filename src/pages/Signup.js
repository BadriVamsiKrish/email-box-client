import React,{useRef} from 'react';
import { Button,Form} from 'react-bootstrap';
import './Form.css';
import { AuthActions } from '../Store/Auth-slice';
import { useDispatch } from 'react-redux';
const Signup = () => {
  const emailref=useRef();
  const passwordref=useRef();
  const conformpassword=useRef();
  const dispatch=useDispatch();
  const Signupbtn = () =>{
    dispatch(AuthActions.setlogin());
  };
  const Signuphandler = async() =>{
    const apiKey = 'AIzaSyAKqFeOETMUmLT1WIt6gLvnW1aXBuI3J0g'; // Replace with your Firebase API key
    const email = emailref.current.value;
    const password = passwordref.current.value;
  
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`;
  
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
        // Handle successful sign-in here (e.g., store user data, redirect, etc.)
      } else {
        console.log('Error signing in');
        // Handle sign-in error (e.g., show error message)
      }
    } catch (error) {
      console.log('An error occurred:', error);
      // Handle unexpected errors (e.g., network issues)
    }
  }; 
  return (
    <div className='centered-container'>
      <Form className='centered-form'>
        <h2>Sign up</h2>
        <Form.Group>
          <Form.Label className='item'>User Email:</Form.Label>
          <Form.Control type='text' className='itemlabel' ref={emailref}></Form.Control>
          <Form.Label className='itemlabel'>User Password:</Form.Label>
          <Form.Control type='password'className='item' ref={passwordref}></Form.Control>
          <Form.Label className='itemlabel'>conform password:</Form.Label>
          <Form.Control type='password' className='item' ref={conformpassword}></Form.Control>
        </Form.Group>
        <Button className='item' onClick={Signuphandler}>Signup</Button>
      </Form>
      <Button className='item' variant='success' onClick={Signupbtn}>Have an account?Login</Button>
    </div>
  )
}

export default Signup;