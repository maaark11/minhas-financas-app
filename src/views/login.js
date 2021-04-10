import React from 'react';

import Card from '../components/card'
import InputGroup from '../components/input-group'

import { withRouter } from 'react-router-dom'

class Login extends React.Component {

    state = {
        email: '',
        senha: ''
    }

    prepareCadastro = () => {
        this.props.history.push('/register')
    }

    entrar = () => {
        console.log('Email: ' + this.state.email)
        console.log('Senha: ' + this.state.senha)
    }

    render() {
        return (
            <div className="col-6 offset-3">
                <Card title="Login">
                    <div className="row">
                        <div className="col">
                            <div className="bs-component">
                                <fieldset>
                                    <InputGroup
                                        htmlFor="inputEmail"
                                        label="Email:"
                                        inputType="email"
                                        value={this.state.email}
                                        onChange={e => this.setState({ email: e.target.value })} />
                                    <InputGroup
                                        htmlFor="inputSenha"
                                        label="Senha:"
                                        inputType="password"
                                        value={this.state.senha}
                                        onChange={e => this.setState({ senha: e.target.value })} />
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <button onClick={this.entrar} className="btn btn-success" > Entrar</button>
                                        <button onClick={this.prepareCadastro} className="btn btn-primary"> Cadastrar</button>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </Card>
            </div >
        )
    }
}

export default withRouter( Login )