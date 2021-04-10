import React from 'react';

import Card from '../components/card'
import InputGroup from '../components/input-group'

import { withRouter } from 'react-router-dom'

class Home extends React.Component {

    state = {
        saldo: 0
    }

    cadastrarLancamento = () => {
        this.props.history.push('/lancamento')
    }

    cadastrarUsuario = () => {
        this.props.history.push('/register')
    }

    render() {
        return (
            <div className="col-12">
                <div className="jumbotron">
                    <h1 className="display-3">Bem vindo!</h1>
                    <p className="lead">Esse é o seu sistema de finanças.</p>
                    <p className="lead">Seu saldo atual é de R$ {this.state.saldo}</p>
                    <hr className="my-4" />
                    <p>E essa é a área administrativa, utilize um dos menus abaixo para navegação</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p className="lead">
                            <a className="btn btn-primary btn-lg"
                                onClick={this.cadastrarLancamento}
                                role="button"><i className="fa fa-users"></i>
                            Novo Lançamento
                            </a>
                        </p>
                        <p className="lead">
                            <a className="btn btn-primary btn-lg"
                                onClick={this.cadastrarUsuario}
                                role="button"><i className="fa fa-users"></i>
                            Novo Usuário
                            </a>
                        </p>
                    </div>
                </div>
            </div >
        )
    }
}

export default withRouter(Home)