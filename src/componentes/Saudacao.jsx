import React, { Component } from 'react'

export default class Saudacao extends Component {

    constructor(props) {
        // super passa as props para a super-classe Component
        super(props)

        this.state = {
            tipo: this.props.tipo,
            nome: this.props.nome
        }

        // Vincula this.setTipo à classe Saudacao
        this.setTipo = this.setTipo.bind(this)
        this.setNome = this.setNome.bind(this)
    }

    // Através do evento onChange o valor do input é capturado
    // setTipo atribui o valor do input para state.tipo
    
    setTipo(e) {
        this.setState({ tipo: e.target.value })
    }

    setNome(e) {
        this.setState({ nome: e.target.value })
    }

    render() {
        const {tipo, nome} = this.state

        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr/>
                <input type="text" placeholder='Tipo' value={tipo} onChange={ this.setTipo }/>
                <input type="text" placeholder='Nome' value={nome} onChange={ this.setNome }/>
            </div>
        )
    }
    
}