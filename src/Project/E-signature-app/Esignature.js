import React from "react";
import Title from "../Components/Title";
import { useState } from "react";
function Esignature() {
    const[name,setName]=useState("your signature");
        const[date,setDate]=useState("");
    const handleNameChange=(e)=>(
        // console.log(e.target.value)
        setName(e.target.value)
        
    )
    const handleDate=(e)=>(
        setDate(e.target.value)
    )
   const inputStyle={
    border:"none",
    borderBottom:"2px dotted",
    outline:"none",
    padding:".35rem 0"
   };

  document.body.style.background="#eee"

  return (
    <div className="container text-center">
      <Title classes={"title"} text={name} />
      <Title classes={"main-title mb-4"} text={!date ? "DoB":date} />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <footer className="d-flex" style={{justifyContent:"space-around",position:"relative",top:"40vh"}}>
      <input type="date" value={date} style={inputStyle} onChange={handleDate} />
        <input type="text" value={name} style={inputStyle} onChange={
         handleNameChange   
        }/>
   </footer>
    </div>
  );
}

export default Esignature;
