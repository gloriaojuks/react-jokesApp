import React from "react"
import Joke from "./Joke";

function App() {
    return (
        <div>
            <h1 className="heading"> Proramming Riddles and Jokes</h1>
            <Joke question="what goes on and never comes back" punchLine="water"/>
            <Joke question="what is never eaten alive" punchLine="Animals" />
            <Joke question="" punchLine="It starts from zero position"/>
            <Joke question="Which Mathematician has the negative number" punchLine="Alfred"/>
            <Joke question="Methods begin with arrows" punchLine="Arrow Functions"/>
            <button className="btns">Previous</button>
            <button className="btns">Next</button>
        </div>
    )
}

export default App