import React, { Component } from 'react';
import '../Theme.css';

import { Redirect } from 'react-router-dom';

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

    checarValores(e) {
        e.preventDefault();

        if (this.state.unidadeA === '' || this.state.unidadeB === '')
            return

        if (this.state.unidadeA === this.state.unidadeB) {
            alert("Conversão entre unidades iguais não é possível!");
            return
        }

        this.avancar();
    }

    avancar() {
        this.props.history.push({
            pathname: 'conversor',
            conversorProps: {
                unidadeA: this.state.unidadeA,
                unidadeB: this.state.unidadeB
            }
        });
    }

    render() {
        return (
            <div className="app">
                <form onSubmit={this.checarValores}>
                    <h2>Selecione as unidades monetárias</h2><hr />
                    <label>De
                        <select onChange={(e) => { this.setState({ unidadeA: e.target.value }) }} defaultValue={this.state.unidadeA}>
                            <option disabled value=''>Selecione</option>
                            <option value='BRL'>BRL</option>
                            <option value='CAD'>CAD</option>
                            <option value='USD'>USD</option>
                        </select>
                    </label>
                    <label>Para
                        <select onChange={(e) => { this.setState({ unidadeB: e.target.value }) }} defaultValue={this.state.unidadeB}>
                            <option disabled value=''>Selecione</option>
                            <option value='BRL'>BRL</option>
                            <option value='CAD'>CAD</option>
                            <option value='USD'>USD</option>
                        </select>
                    </label>
                    <hr />
                    <input type="submit" value="Continuar" />
                </form>
            </div>
        );
    }
}

export default SelecionarMoeda;