function acao1(){
    console.log('acao1')
}

export default function botao(){
    function acao2(){
        console.log('acao2')
    }
    return (
        <div>
            <button onClick={acao1}>Clique 1</button>
            <button onClick={acao2}>Clique 2</button>
        </div>
    )
}