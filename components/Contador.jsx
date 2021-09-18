export default function Contador(props) {
    const contator = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50px',
        width: '50px',
        borderRadius: '25px',
        backgroundColor: '#fff',
        color: '#222',
        fontSize: '2rem',
        marginBottom: '0.5rem',
    }
    return (
        <div style={contator}>
            {props.numero}
        </div>
    )
}