import React from 'react';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import '../src/pages/Form.css';
import { useSelector } from 'react-redux';
const App = () => {
  const wantlogin=useSelector(state=>state.auth.gologin);
  return (
    <div className='maindiv'>
      {wantlogin?<Signin/>:<Signup/>}
      
    </div>
  )
}

export default App;