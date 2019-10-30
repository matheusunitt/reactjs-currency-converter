import React, { Component } from 'react';
import '../Theme.css';

import { Redirect } from 'react-router-dom';

class SelecionarMoeda extends Component {
    constructor(props) {
        super(props);

        this.state = {
            unidadeA: '',
            unidadeB: '',
            unidadesMonetarias: []
        }

        this.checarValores = this.checarValores.bind(this);
        this.avancar = this.avancar.bind(this);
    }

    getUnidadeDados() {
        let url = `https://gist.githubusercontent.com/Fluidbyte/2973986/raw/b0d1722b04b0a737aade2ce6e055263625a0b435/Common-Currency.json`

        fetch(url).then(res => {
            return res.json();
        }).then(dados => {
            this.setState({ unidadesMonetarias: Object.values(dados) });
        })
    }

    componentDidMount() {
        this.getUnidadeDados();
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
        const { unidadesMonetarias, unidadeA, unidadeB } = this.state;
        return (
            <div className="app">
                <form onSubmit={this.checarValores}>
                    <h2>Selecione as unidades monetárias</h2><hr />
                    <label>De
                        <select onChange={(e) => { this.setState({ unidadeA: e.target.value }) }} defaultValue={unidadeA}>
                            <option disabled value=''>Selecione</option>
                            {(unidadesMonetarias || []).map((unidade, k) => <option key={k} value={unidade.code}>{unidade.code}</option>)}
                        </select>
                    </label>
                    <label>Para
                        <select onChange={(e) => { this.setState({ unidadeB: e.target.value }) }} defaultValue={unidadeB}>
                            <option disabled value=''>Selecione</option>
                            {(unidadesMonetarias || []).map((unidade, k) => <option key={k} value={unidade.code}>{unidade.code}</option>)}
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