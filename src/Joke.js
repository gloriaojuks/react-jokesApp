import React from "react";


function Joke(props){
    return(
         <div>
             <hr/>
            <h3 style={{display:props.question ?  "block": "none"}}>Question: {props.question}</h3>
            <h3>Answer: {props.punchLine}</h3>
            <hr/>
        </div>
    )
}



export default Joke;