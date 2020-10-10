import React from "react";
//images
import Character from "../images/success.png"

const Success = (props) => {

    const handleClick = ()=>{
        props.setCounter(5)
        props.setSuccess(false)
    }
   
    return (
        <div className="text-center" style={{margin: "auto", width:"50%"}}>
                <div className="mt-5 mb-5">
                    <h3>You got it you are so smart</h3>
                    <img src={Character}/>
                </div>
            <button className="btn btn-info w-100" onClick={handleClick}>Play again</button>
        </div>
    )
}

export default Success;