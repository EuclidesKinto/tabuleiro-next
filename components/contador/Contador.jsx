import { Component } from "react";

export default class Contador extends Component{
    render() {
        return (
            <div>
                <h2>{this.props.valor}</h2>
                <p>Contador usando classe</p>
            </div>
        )
    }
}