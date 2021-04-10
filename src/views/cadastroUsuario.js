import React from 'react';

import Card from '../components/card'
import FormGroup from '../components/form-group'

import { withRouter } from 'react-router-dom'

class CadastroUsuario extends React.Component {

    state = {
        nome: '',
        email: '',
        senha: '',
        confirmaSenha: ''
    }

    cancelar = () => {
        console.log(this.state)
        this.props.history.push('/login')
    }

    salvar = () => {
        console.log(this.state)
    }

    render() {
        return (
            <Card title="Cadastro de Usuário">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-component">
                            <div className="row">
                                <div className="col-lg-6" >
                                    <FormGroup
                                        className="col-lg-12"
                                        htmlFor="inputNome"
                                        label="Nome: *"
                                        name="nome"
                                        inputType="text"
                                        value={this.state.nome}
                                        onChange={e => this.setState({ nome: e.target.value })} />
                                </div>
                                <div className="col-lg-6" >
                                    <FormGroup
                                        htmlFor="inputEmail"
                                        label="Email: *"
                                        name="email"
                                        inputType="email"
                                        value={this.state.email}
                                        onChange={e => this.setState({ email: e.target.value })} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6" >
                                    <FormGroup
                                        htmlFor="inputSenha"
                                        label="Senha: *"
                                        name="senha"
                                        inputType="password"
                                        value={this.state.senha}
                                        onChange={e => this.setState({ senha: e.target.value })} />
                                </div>
                                <div className="col-lg-6" ><FormGroup
                                    htmlFor="inputConfirmaSenha"
                                    label="Confirme a senha: *"
                                    name="senha"
                                    inputType="password"
                                    value={this.state.confirmaSenha}
                                    onChange={e => this.setState({ confirmaSenha: e.target.value })} />
                                </div>
                            </div>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row-reverse'
                            }}>
                                <button onClick={this.cancelar} className="btn btn-danger">Cancelar</button>
                                <button onClick={this.salvar} className="btn btn-success">Salvar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

export default withRouter( CadastroUsuario )