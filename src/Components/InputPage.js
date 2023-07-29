import React from "react";
import './Input.css';

const InputPage = () =>
{
    return (
        <div>
           <h1>Upload Page</h1>
           <form>
            <label className="input-label">Enter Name: <input className="input-area" type="text"></input></label>
            <label className="input-label">Enter Description: <textarea className="input-area"></textarea></label>
            <input type="file"></input>
            <button type="submit" >Submit</button>
           </form>
        </div>
    )
}

export default InputPage;