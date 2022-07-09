
import React ,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
        
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLoClick =()=>{
        
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleClearClick =()=>{
        setText("");
    }
    const handleCopy = () =>{
        let currentText=document.getElementById("myBox");
        currentText.select();
        navigator.clipboard.writeText(currentText.value);
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const [text,setText]=useState("");
  return (
    <>
        
        <div className="mb-3 my-3 mx-5 " style={{color:props.mode==="light"?'black':'white'}}>
        <h2>{props.heading}</h2>
        <textarea className="form-control" style={{backgroundColor:props.mode==="dark"?'#051327eb':'white',color:props.mode==="light"?'black':'white'}} id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
        </div>
        <div className='mx-5' >
        <button type="button" onClick={handleUpClick} className="btn btn-primary  mx-1">Convert to uppercase</button>
        <button type="button" onClick={handleLoClick} className="btn btn-primary mx-1">Convert to lowercase</button>
        <button type="button" onClick={handleClearClick} className="btn btn-primary mx-1">Clear text</button>
        <button type="button" onClick={handleCopy} className="btn btn-primary mx-1">Copy text</button>
        </div>
        
        <div className="container mx-5 my-3" style={{color:props.mode==="light"?'black':'white'}}>
        <h2>Summary of your text</h2>
        <p><b> {text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
        <p><b>{0.008 * text.split(" ").length}</b> minutes read</p>
        </div>
    </>
  )
}
