
import React ,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
        
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase","success");
    }
    const handleLoClick =()=>{
        
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase","success");
    }
    const handleClearClick =()=>{
        setText("");
        props.showAlert("Text cleared","success");
    }
    const handleCopy = () =>{
        let currentText=document.getElementById("myBox");
        currentText.select();
        navigator.clipboard.writeText(currentText.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard","success");
    }
    const handleExtraSpace=()=>{
        let nT=text.replace(/\s+/g,' ');
        setText(nT);
        props.showAlert("Extra space removed","success");
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
        <div className='mx-5 ' >
        <button type="button" disabled={text.length===0} onClick={handleUpClick} className="btn btn-primary  mx-1 my-1">Convert to uppercase</button>
        <button type="button" disabled={text.length===0} onClick={handleLoClick} className="btn btn-primary mx-1 my-1">Convert to lowercase</button>
        <button type="button" disabled={text.length===0} onClick={handleClearClick} className="btn btn-primary mx-1 my-1">Clear text</button>
        <button type="button" disabled={text.length===0} onClick={handleCopy} className="btn btn-primary mx-1 my-1">Copy text</button>
        <button type="button" disabled={text.length===0} onClick={handleExtraSpace} className="btn btn-primary mx-1 my-1">Remove extra space</button>
        </div>
        
        <div className="container mx-5 my-3" style={{color:props.mode==="light"?'black':'white'}}>
        <h2>Summary of your text</h2>
        <p><b> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> words and <b>{text.replace(/\s+/g,'').length}</b> characters</p>
        <p><b>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}</b> minutes read</p>
        <h2>Preview</h2>
        <p>{text.length===0?"Nothing to preview":text}</p>
        </div>
    </>
  )
}
