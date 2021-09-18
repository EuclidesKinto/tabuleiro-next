export default function Filho(props) {
    return (
        <div>
           <p>Filho</p>
           <button onClick={props.funcao}>Falar com o Pai</button>
           <button onClick={() => props.funcao('Pai estou falando com vc')}>Falar com o Pai</button>
        </div>
    )
}