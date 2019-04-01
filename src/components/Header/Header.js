import React from "react";
import "./Header.css";

export default function Header(props) {
    let mappedHeader = props.Header.map(game => {
      return (
        <div>
           <input placeholder="Search Game"/>
       <button>Submit</button>
        </div>
      )})
      return <div className="Header">{mappedHeader}</div>;
    
    }
   