import React, { useState } from "react";

export default function Textform(props) {
  const handleUpclick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("OnChange");
    setText(event.target.value);
  };

  const handlelowerclick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpclick}>
          convert to uppercase
        </button>
        <button className="btn btn-primary  mx-3" onClick={handlelowerclick}>
          convert to lowercase
        </button>
      </div>
      <div className="container my-3">
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <h2> Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
