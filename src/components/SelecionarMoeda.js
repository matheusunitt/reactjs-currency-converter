import React, { Component } from 'react';
import '../Theme.css';

import { NavLink } from 'react-router-dom';

class SelecionarMoeda extends Component {

    constructor(props) {
        super(props);

        this.state = {
            unidadeA: '',
            unidadeB: '',
        }

        this.checarValores = this.checarValores.bind(this);
        this.avancar = this.avancar.bind(this);
    }

    checarValores() {
        if (this.state.unidadeA != '' && this.state.unidade != '') {
            if (this.state.unidadeA != this.state.unidadeB) {
                this.avancar();
            } else {
                // valores iguais!
            }
        } else {
            // uma ou mais opções não selecionados!
        }
    }

    avancar() {
        // redireciona para a outra página
    }

    render() {
        return (
            <div className="app">
                <h2>Selecione as unidades monetárias</h2><hr/>

                <label>De
                    <select onChange={ (event) => { this.setState({ unidadeA: event.target.value }) } }>
                        <option disabled defaultValue>Selecione</option>
                        <option>BRL</option>
                        <option>CAD</option>
                        <option>USD</option>
                    </select>
                </label>

                <label>Para
                    <select onChange={ (event) => { this.setState({ unidadeB: event.target.value }) } }>
                        <option disabled defaultValue>Selecione</option>
                        <option>BRL</option>
                        <option>CAD</option>
                        <option>USD</option>
                    </select>
                </label>
                <p>{ this.state.unidadeA } – { this.state.unidadeB }</p><hr/>
                <NavLink to='/convesor'>
                    <input type="button" value="Continuar" onClick={ this.checarValores }></input>
                </NavLink>
            </div>
        );
    }
}

export default SelecionarMoeda;