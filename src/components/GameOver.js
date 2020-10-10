import React from "react"; 
// images
import Character from "../images/question-mark.png"
import openedBox from "../images/opened-box-1.png"

const GameOver = (props) => {
    return (
        <div className="text-center row" style={{margin: "auto", width:"60%"}}>
            <div className="col">
                <div className="mt-5 mb-5">
                    <h3>You will get next time..</h3>
                    <img src={Character}/>
                </div>
            </div>
            <div className="col-8">
            <h1 style={{fontSize: "100px"}}>{props.answer.name}</h1>
            {/* <img src={props.image}/> */}
            <img src={openedBox}/>
            </div>
            <button className="btn btn-info w-100" onClick={()=>props.setCounter(5)}>Play again</button>
        </div>
    )
}


export default GameOver;