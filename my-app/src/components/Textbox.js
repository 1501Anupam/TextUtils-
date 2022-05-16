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
      <h3 className="my-3">{props.heading}</h3>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          value={text}
          onChange={onChangeClicked}
          rows="6"
        ></textarea>
      </div>
      <button className="btn btn-success" onClick={onUpClicked}>
        Convert to Upper case
      </button>
      <button className="mx-2 btn btn-warning" onClick={onLowClicked}>
        Convert to Lower case
      </button>
      <button className="mx-1 btn btn-info" onClick={clearTextClicked}>
        Clear text
      </button>
    </div>
    <div className="container my-3">
      <h3 style={{color: props.mode === "dark"? "white": "black"}}>Word Counter</h3>
      <p style={{color: props.mode === "dark"? "white": "black"}}>The number of words are {text.split(" ").length} and the number of characters are {text.length}</p>
      <p style={{color: props.mode === "dark"? "white": "black"}}>The time required to read the text is {0.008 * text.split(" ").length} minutes</p>
    </div>
    <div className="container my-3">
      <h3 style={{color: props.mode === "dark"? "white": "black"}}>Preview</h3>
      <p style={{color: props.mode === "dark"? "white": "black"}}>{text.length>0 ?text: "Enter some text to preview it here!"}</p>
    </div>
    </>
  );
}
