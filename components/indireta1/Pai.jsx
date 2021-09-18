import Filho from "./Filho";

export default function Pai(props) {
    function falarComigo(params){
        console.log(params);
    }
    return (
        <div>
            <Filho funcao={falarComigo}/>
        </div>
    )
}