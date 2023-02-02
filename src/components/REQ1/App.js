import React, {useState} from 'react';
import '../css/App2.css';
import '../css/App.css'
import { Login1} from './Login1';
import { Register } from './Register';


function App() {
  const[currentForm, setCurrentForm] = useState("login");

  const toggleForm = (forName) =>{
    setCurrentForm(forName)
  }
  return (
    <div className="App">
      {
        currentForm === "login" ? <Login1 onFormSwitch = {toggleForm}/> : <Register onFormSwitch = {toggleForm} />
      }
    </div>
  );
}



export default App;
