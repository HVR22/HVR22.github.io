import React, {useState} from 'react';
import '../css/App2.css'
import '../css/App.css'

import { Login2 } from './Login2';
import { Register } from './Register';


function App2() {
  const[currentForm, setCurrentForm] = useState("login");

  const toggleForm = (forName) =>{
    setCurrentForm(forName)
  }
  return (
    <div className="App">
      {
        currentForm === "login" ? <Login2 onFormSwitch = {toggleForm}/> : <Register onFormSwitch = {toggleForm} />
      }
    </div>
  );
}

export default App2;
