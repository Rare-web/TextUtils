import React from 'react'

export default function About(props) {
    // const [myStyle,setMyStyle]= useState({
    //     color : "black",
    //     backgroundColor: "white"
    // })
    let myStyle={
      color:props.mode==="dark"?"white":"black",
      backgroundColor:props.mode==="dark"?"#051327eb":"white"
    }
    
  return (
    <>
    <div style={{color:props.mode==="dark"?"white":"black"}} className="rounded">
    <h2 >About Us</h2>
    <div className="accordion "  id="accordionExample">
  <div className="accordion-item " style={myStyle}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" style={myStyle}  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze your text </strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        You can analyze your text easily in TextUtils like count words or characters or convert them to uppercase or lowercase
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
         <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        TextUtils is a free word or character counter tool that provides instant character count or word count statistics for a given text .TextUtils returns number of words and characters. Thus it is suitable for writing text with limited characters
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
         <strong>Browser compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        This web app works in any web Browser such as chrome,safari,Firefox,internet explorer,opera. It suits to count characters in Facebook, blog, books ,excel documents etc.
      </div>
    </div>
  </div>
</div>
</div>

    </>
  )
}
