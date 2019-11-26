import React, { Component } from 'react';

class Menu extends Component{
    render(){
        return <h2>Hola Mundo: {this.props.usuario}</h2>
    }
}

export { Menu };