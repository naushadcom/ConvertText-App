import React,{useState} from 'react'



export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Upper was clicked"+text)
        let newText=text.toUpperCase()
        setText(newText)
    }
    const handleLoClick=()=>{
      // console.log("Upper was clicked"+text)
      let newText=text.toLowerCase()
      setText(newText)
    }
    const handleClearClick=()=>{
      let newText=""
      setText(newText)
    }
    const handleCopy=()=>{
      var text =document.getElementById("myBox")
      text.select()
      // text.setSelectionRange(0,9999)
      navigator.clipboard.writeText(text.value)
    }
    const handleExtraSpaces=()=>{
      let newText =text.split(/[ ]+/)
      setText(newText.join(" "))
    }
    const handleOnChange=(event)=>{
        // console.log("On change")
        setText(event.target.value)
    }
    const [text, setText] = useState("");
//    text="new text"----//wrong way to change the state
//    setText("new text")   //correct way to change the state

  return (
    <>
    <div className='container'>
        <h2>{props.heading}</h2>
        <div className="mb-3">
        {/* <label for="myBox" class="form-label">Example textarea</label> */}
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert into uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert into Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3">
      <h3>Your text summery</h3>
      <p>{text.split(" ").length} words and {text.length} charscters</p>
      <p>{0.008 * text.length}  Minutes read for letter </p>
      <p>{0.008 * text.split(" ").length} Minutes read  for word</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}

