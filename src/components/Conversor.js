import React, { Component } from 'react';
import '../Theme.css';

import { NavLink } from 'react-router-dom';

class Conversor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            valor: 0,
            resultado: 0,
            unidadeMonetaria: '$',
        }

        this.capturar_unidMonetaria = this.capturar_unidMonetaria.bind(this);
        this.converter = this.converter.bind(this);
    }

    capturar_unidMonetaria() {
        let moedaDestino = `${this.props.location.conversorProps.unidadeB}`;
        let url = `https://gist.githubusercontent.com/Fluidbyte/2973986/raw/b0d1722b04b0a737aade2ce6e055263625a0b435/Common-Currency.json`

        fetch(url).then(res => {
            return res.json();
        }).then(dados => {
            let unidadeMonetaria = dados[moedaDestino].symbol;

            this.setState({ unidadeMonetaria });
        })
    }

    converter() {
        let de_moeda = this.props.location.conversorProps.unidadeA;
        let para_moeda = this.props.location.conversorProps.unidadeB;
        let url = `https://api.exchangeratesapi.io/latest?symbols=${de_moeda},${para_moeda}`;

        fetch(url).then(res => {
            return res.json();
        }).then(dados => {
            let cotacao = dados.rates[de_moeda] / dados.rates[para_moeda];
            let resultado = (parseFloat(this.state.valor) / cotacao).toFixed(2);

            this.setState({ resultado });
        })
    }

    render() {
        return (
            <div className="app">
                {this.capturar_unidMonetaria()}
                <h2>{this.props.location.conversorProps.unidadeA} para {this.props.location.conversorProps.unidadeB}</h2>
                <NavLink to='/' className="block">alterar unidades</NavLink>
                <input type="number" placeholder="Digite um valor" onChange={(e) => { this.setState({ valor: e.target.value }) }} />
                <input type="button" value="Converter" onClick={this.converter} />
                <hr />
                <p>{this.state.unidadeMonetaria} {this.state.resultado}</p>
            </div>
        );
    }
}

export default Conversor;