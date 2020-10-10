import React from "react";

const Choices = (props) => {
    
    const choicesList = props.choices.map((choice) => {
        return <button className="btn btn-outline-info m-2 w-25" onClick={() => props.setAttempt([choice.name.toLowerCase()])}>
            {choice.name}
            </button>
    })

    return (
        <div>
            {choicesList}
        </div>
    )
}

export default Choices;