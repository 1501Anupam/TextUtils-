import React, { useState } from "react";

export default function Textbox(props) {
  const [text, setText] = useState("Enter the text here!");

  const onUpClicked = () => {
    let upperText = text.toUpperCase();
    setText(upperText);
    props.showAlert("Text is converted into uppercase","success");
  };

  const onLowClicked = () => {
    let lowerText = text.toLocaleLowerCase();
    setText(lowerText);
    props.showAlert("Text is converted into lowercase","success");
  };

  const clearTextClicked = () => {
    let clearText = "";
    setText(clearText);
    props.showAlert("Text is cleared","success");
  };

  const onChangeClicked = (event) => {
    setText(event.target.value);
  };

  return (
    <>
    <div className="container my-3" style={{color: props.mode === "dark"? "white": "black"}}>
      <h4 className="my-3">{props.heading}</h4>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          value={text}
          onChange={onChangeClicked}
          rows="6"
        ></textarea>
      </div>
      <button disabled = {text.length ===0} style={{fontWeight: 600}} className="btn btn-success my-1" onClick={onUpClicked}>
        Convert To Upper Case
      </button>
      <button disabled = {text.length ===0} style={{fontWeight: 600}} className="mx-2 my-1 btn btn-warning" onClick={onLowClicked}>
        Convert To Lower Case
      </button>
      <button disabled = {text.length ===0} style={{fontWeight: 600}} className="mx-1 my-1 btn btn-info" onClick={clearTextClicked}>
        Clear Text
      </button>
    </div>
    <div className="container my-3">
      <h4 style={{color: props.mode === "dark"? "white": "black"}}>Word Counter</h4>
      <p style={{color: props.mode === "dark"? "white": "black"}}>The number of words are {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} and the number of characters are {text.length}</p>
      <p style={{color: props.mode === "dark"? "white": "black"}}>The time required to read the text is {0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes</p>
    </div>
    <div className="container my-3">
      <h4 style={{color: props.mode === "dark"? "white": "black"}}>Preview</h4>
      <p style={{color: props.mode === "dark"? "white": "black"}}>{text.length>0 ?text: "Nothing to preview!"}</p>
    </div>
    </>
  );
}
