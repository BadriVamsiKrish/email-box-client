import React from 'react';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import '../src/pages/Form.css';
import { useSelector } from 'react-redux';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
const App = () => {
  const wantlogin=useSelector(state=>state.auth.gologin);
  const register=useSelector(state=>state.auth.registered);
  return (
    <div className='maindiv'>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={wantlogin?Signin:Signup}/>
          <Route path='*' Component={wantlogin?Signin:Signup}/>
          {register && <Route path='/welcome' Component={Welcome}></Route>}
        </Routes>
      </BrowserRouter> 
    </div>
  )
}

export default App;