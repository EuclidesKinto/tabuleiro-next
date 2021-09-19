import { Component } from 'react';
import Contador from '../../components/contador/Contador';

export default class ContadorPage extends Component{

    render() {
        return (
            <div>
                <Contador valor={100}/>
            </div>
        )
    }

}