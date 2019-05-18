import React, {Component} from 'react';
import './Conversor.css';
import {Redirect} from 'react-router-dom';

class SelecionarMoeda extends Component {

    constructor(props) {
        super(props);

        this.state = {
            unidadeA: '',
            unidadeB: '',
            paraConversao: false,
        }

        this.checarValores = this.checarValores.bind(this);
        this.avancar = this.avancar.bind(this);
    }

    checarValores() {
        if (this.state.unidadeA != '' && this.state.unidade != '') {
            this.avancar();
        }
    }

    avancar() {
        this.setState(() => ({ paraConversao: true }))
    }

    render() {
        if (this.state.paraConversao === true) {
            this.props.history.push('/converter');
        }

        return (
            <div className="conversor">
                <h2>Selecione as unidades monetárias</h2><hr/>

                <label>De
                    <select onChange={ (event) => { this.setState({ unidadeA: event.target.value }) } }>
                        <option disabled selected>Selecione</option>
                        <option>BRL</option>
                        <option>CAD</option>
                        <option>USD</option>
                    </select>
                </label>

                <label>Para
                    <select onChange={ (event) => { this.setState({ unidadeB: event.target.value }) } }>
                        <option disabled selected>Selecione</option>
                        <option>BRL</option>
                        <option>CAD</option>
                        <option>USD</option>
                    </select>
                </label>
                <p>{ this.state.unidadeA } { this.state.unidadeB }</p>
                <hr/><input type="button" value="Continuar" onClick={ this.checarValores }></input>
            </div>
        );
    }
}

export default SelecionarMoeda;