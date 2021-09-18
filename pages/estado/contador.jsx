import { useState } from "react"
import Contador from "../../components/Contador"

export default function contator() {
    const [numero, setNumero] = useState(0)
    const estilo= { 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#222",
        color: "#fff",
        height: "100vh"
    }

    function somar(){
        console.log('mais')
        setNumero(numero + 1)

    }

    function menos(){
        console.log('menos')
        setNumero(numero - 1)
    }

    function vezes(){
        console.log('menos')
        setNumero(numero * 2)
    }
    
    function divi(){
        console.log('menos')
        setNumero(numero / 2)
    }

    return (
        <div style={estilo}>
            <h2>Contador</h2>
            <Contador numero={numero}/>
            <div>
                <span>
                    <button onClick={somar}>+</button>
                </span>
                <span>
                    <button onClick={menos}>-</button>
                </span>
                <span>
                    <button onClick={vezes}>x2</button>
                </span>
                <span>
                    <button onClick={divi}>/2</button>
                </span>
            </div>
            
        </div>
    )
}