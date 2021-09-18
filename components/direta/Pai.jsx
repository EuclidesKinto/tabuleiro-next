import Filho from "./FIlho";

export default function Pai(props) {
    return (
        <div>
            <Filho nome="Euclides" familia={props.familia} />
        </div>
    )
}