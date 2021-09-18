import { useState } from "react"

export default function mouse() {
    // const arrayX = useState(0)
    // let x = arrayX[0]
    // const alterarX = arrayX[1]
    const [x, setX] = useState(0)
    
    // const arrayY = useState(0)
    // let y = arrayY[0]
    // const alterarY = arrayY[1]
    const [y, alterarY] = useState(1)

    const estilo= { 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#222",
        color: "#fff",
        height: "100vh"
    }
    function moverMouse(ev){
       setX(ev.clientX)
       alterarY(ev.clientY)
    }

    return (
        <div style={estilo} onMouseMove={moverMouse}>
           <div>Eixo X:  {x}</div>           
           <div>Eixo Y: {y}</div>
        </div>
    )
}