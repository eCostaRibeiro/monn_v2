import "./App.css"
import React from "react"
import Card from "./components/Card"
import Primeiro from "./components/Primeiro"

export default (props) => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#01 - Primeiro Componente" color="#92B06A">
                <Primeiro />
            </Card>
        </div>
    </div>
);