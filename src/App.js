
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
  HashRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";


function App() {
  const[mode,setMode]=useState("light");
  const [alert,setAlert]=useState(null); 
  

  const showAlert=(message,type)=>{
    setAlert({msg:message,
    type:type})
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode==="light"){
      document.body.style.backgroundColor="#051327eb"
      setMode("dark");
      showAlert("Dark mode has been enabled","success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor="white"
      showAlert("Light mode has been enabled","success");
    }
   
    
    
  }
  return (
    <>
    <Router>
    <Navbar title ="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <Routes>
        <Route exact path="/about" element={<div className='container my-3'><About mode={mode}/></div>}></Route>
        <Route exact path="/home" element={<div className='container'><TextForm heading="Enter your text below" showAlert={showAlert} mode={mode} /></div>}></Route>
    </Routes>
    </Router>
    
    
    
    </>
  );
}

export default App;
