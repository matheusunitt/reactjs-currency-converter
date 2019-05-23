import React, { Component } from 'react';
import '../Theme.css';

import { NavLink } from 'react-router-dom';

class PaginaDesconhecida extends Component {
    render() {
        return (
            <div className="app">
               <p className="errlbl">A página especificada não existe!</p><hr/>
               <NavLink to='/'>
                    <input type="button" value="Voltar ao início"></input>
                </NavLink>
            </div>
        );
    }
}

export default PaginaDesconhecida;