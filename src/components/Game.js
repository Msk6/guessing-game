import React, {useState, useEffect} from "react";
//images
import longOrShortOrRepeating from "../images/question-mark.png"
import keepGuessing from "../images/keep-guessing.png"
import closedBox from "../images/closed-box-1.png"
import common from "../images/common.png"
import start from "../images/welcome.png"
//components
import Choices from "./Choices"


const Game = (props) => {
    const [askHelp, setAskHelp] = useState(false)
    const [attempt, setAttempt] = useState([])
    const [message, setMessage] = useState("Hello, Can you guess what inside the box??")
    const [characterImage, setCharacterImage] = useState(start)

    const handleAskHelp = () => setAskHelp(!askHelp)

    const getUserInput = (event) => {
        let guess = event.target.value
        guess = guess.split(" ").join("").toLowerCase()
        setAttempt([guess])
    }

    const handleUserGuesses = () => {
        let userAnswer = attempt[0]
        if (userAnswer){
            if (userAnswer.length === props.answer.name.length && userAnswer === props.answer.name.toLowerCase()){
                props.setSuccess(true)
                props.setCounter(-1)
            } else {
            if (props.userAnswers.includes(userAnswer)){
                setMessage("You are repeating your self")
                setCharacterImage(longOrShortOrRepeating)
            } else {
                if (userAnswer.length > props.answer.name.length + 2){
                setMessage("Too long word")
                setCharacterImage(longOrShortOrRepeating)

            } else if (userAnswer.length < props.answer.name.length - 2){
                setMessage("Too short word")
                setCharacterImage(longOrShortOrRepeating)

            } else if (userAnswer.length === props.answer.name.length && userAnswer !== props.answer.name.toLowerCase()){
                setMessage("Common you are so close!!")
                setCharacterImage(common)
            } else {
                setMessage("Keep trying you will get it you are so close")
                setCharacterImage(keepGuessing)
            }

            let updatedUserAnswers = attempt.concat(props.userAnswers)
            props.setCounter(props.counter-1)
            props.setUserAnswers(updatedUserAnswers)
            setAskHelp(false)
            setAttempt([])
            }

        }
    }
    }

    return (
 
        <div className="text-center" style={{margin: "auto", width:"70%"}}>
            <div className="row">
                <div className="col">
                    <div className="mt-5 mb-5">
                        <h3>{message}</h3>
                        <img src={characterImage}/>
                    </div>
                </div>
                <div className="col-8">
                <img src={closedBox}/>
                </div>
            </div>
            <div className="form-group">
                <input type="text" className="form-control text-center"
                onChange={getUserInput} value={attempt} placeholder="Your guess.." />
            </div>
            <button className="btn btn-info w-100" onClick={handleUserGuesses}>Guess</button>
            <p>Reamining Attempts {props.counter}</p>
            <div className="m-3">
                <button className="btn btn-info m-2 w-25" onClick={()=>props.setCounter(0)} >Surrender</button>
                <button className="btn btn-info m-2 w-25" onClick={handleAskHelp}>Choices</button>
            </div>
            {
                (askHelp)?(
                    < Choices choices={props.data} setAttempt={setAttempt} />
                ):(
                    <div>
                        <br></br>
                    </div>
                )
            }

        </div>
    )
}

export default Game;