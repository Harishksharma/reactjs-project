
import React, {useState} from 'react'

export default function Textarea(props) {

      const [Text, setText] = useState('');

     const handleUpClick = () => {

        let upperText = Text.toUpperCase();
        setText(upperText);   
     };

     const handlelowClick = () => {

        let lowerText = Text.toLowerCase();
        setText(lowerText);   
     };

     const handleCapClick = () => {

           let capital = Text.toLowerCase().split(' ').map((e) => e.charAt(0).toUpperCase() + e.substring(1).toLowerCase() ).join(" ");

           setText(capital);
     };

     const handleClearAll = (event) => {

        let clear= ""

        setText(clear);
  };

     const handleOnChange = (event) => {

           setText(event.target.value);
         
     };




    return (
        <>
            <div className="container mb-3">
               <h1 style={{color:props.Mode==='light'?'black':'white'}}>{props.headings}</h1>
               <textarea className="form-control" id="Text"  value={Text} onChange={handleOnChange} style={{backgroundColor:props.Mode==='light'?'white':'#2B3856',color:props.Mode==='light'?'black':'white'}} rows="8"></textarea>
            </div>
            <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handlelowClick}>Convert to lowercase</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleCapClick}>Convert to Capitalized Case</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleClearAll}>Clear All</button>
            <div  style={{color:props.Mode==='light'?'black':'white'}}>
                <h2  >Your Text Summary</h2>
                <h5  >{Text.split(" ").length}  words , {Text.length}  charcters</h5>
                <h6  >{0.008*Text.split(" ").length} WPM</h6>
                <h3  > **Preview** </h3>
                <h6  >{Text.length>0 ? Text: "Enter the in above area for preview something"}</h6>


            </div>
        </>
    )
}

