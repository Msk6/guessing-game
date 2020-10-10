import React, {useEffect, useState} from 'react';
import './App.css';
import data from "./data"

// components
import GameOver from "./components/GameOver"
import Success from "./components/Success"
import Game from "./components/Game"

//styles
import {Background} from "./styles"

function App() {

  const [counter, setCounter] = useState(5)
  const [success, setSuccess] = useState(false)
  const [choices, setChoices] = useState([])
  const [answer, setAnswer] = useState("")
  const [userAnswers, setUserAnswers] = useState([])

  useEffect(() => {
    if(counter === 5) {
      let newAnswer = startNewGame()
      setAnswer(newAnswer)
      let newChoices = getRandomChoices()
      newChoices.splice([Math.floor(Math.random()*counter + 1)],1,newAnswer)
      setChoices(newChoices)

    } else {
      let newChoices = getRandomChoices()
      newChoices.splice([Math.floor(Math.random()*counter + 1)],1,answer)
      setChoices(newChoices)
    }  
  },[counter])

  const getRandomChoices = () => {
    let tempChoices = []
    let loopCounter = 1
      while(loopCounter <= counter*2){
        let index = Math.floor(Math.random()*data.length + 1)
        let element = data[index]
          if (element && element !== answer){
            tempChoices.push(element)
            loopCounter++;
           }
          }
          // Gives me undefined answer
          // let newAnswer = currentAnswer
          // tempChoices.splice(Math.floor(Math.random()*counter*2 + 1),1,newAnswer)
          let checkChoicesArray = [...tempChoices]
          let isDuplicate = checkChoicesArray.some((choice, i) => 
             i !== checkChoicesArray.lastIndexOf(choice))
            if (!isDuplicate){
              return tempChoices
            } else {
              return getRandomChoices()
            }
   }

  const startNewGame = () => {
    let randomChoices = getRandomChoices(counter)
    let newAnswer = randomChoices[(Math.floor(Math.random()*randomChoices.length + 1))]
    if(newAnswer)
    return newAnswer
    else {
      return startNewGame()
    }
  }

  const setView = () =>{
    if (success){
      return <Success setCounter={setCounter} setSuccess={setSuccess}/>
    } else if (counter){ 
        
      console.log(getRandomChoices())
      return <Game data={choices} counter={counter} setCounter={setCounter} 
      setSuccess={setSuccess} answer={answer} userAnswers={userAnswers} setUserAnswers={setUserAnswers} />
    } else {
      return <GameOver setCounter={setCounter} answer={answer} key={answer.id}/>
    } 
  }

  return (
    <Background>
      <div className="container">
          {setView()}  
      </div>
    </Background>
  )
}

export default App;


//Inside loops can't check the duplicate using includes or any other array function
//so i used recursion after finishing the loop check duplicate 
