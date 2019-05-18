import React, {Component} from 'react';
import './Conversor.css';

class Conversor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            valor: '',
            resultado: 0,
            unidadeMonetaria: '$',
        }

        this.converter = this.converter.bind(this);
        this.capturar_unidMonetaria = this.capturar_unidMonetaria.bind(this);
    }

    capturar_unidMonetaria() {
        let moedaDestino = `${ this.props.moedaB }`;
        let url = `https://gist.githubusercontent.com/Fluidbyte/2973986/raw/b0d1722b04b0a737aade2ce6e055263625a0b435/Common-Currency.json`
    
        fetch(url).then(res => {
            return res.json();
        }).then(dados => {
            let unidadeMonetaria = dados[moedaDestino].symbol;
            
            this.setState({ unidadeMonetaria });
        })
    }

    converter() {
        let de_para = `${ this.props.moedaA },${ this.props.moedaB }`;
        let url = `https://api.exchangeratesapi.io/latest?symbols=${ de_para }`;

        fetch(url).then(res => {
            return res.json();
        }).then(dados => {
            let cotacao = dados.rates[`${this.props.moedaB}`];
            let resultado = (parseFloat(this.state.valor) * cotacao).toFixed(2);

            this.setState({ resultado });
        })
    }

    render() {
        return (
            <div className="conversor">
                { this.capturar_unidMonetaria() }
                <p>{ this.props.moedaA } para { this.props.moedaB }</p>
                <input type="number" placeholder="Digite um valor" onChange={(event) => { this.setState({ valor: event.target.value } ) }}></input>
                <input type="button" value="Converter" onClick={ this.converter }></input><hr/>
                <h2>{ this.state.unidadeMonetaria } { this.state.resultado }</h2>
            </div>
        );
    }
}

export default Conversor;