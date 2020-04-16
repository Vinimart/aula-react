import React from 'react';
import ReactDOM from 'react-dom'
import Saudacao from './componentes/Saudacao';

// Vincula $ ao DOM
const $ = document.querySelector.bind(document)
const mainHeader = $('header')

// Props do .render = (jsx, incluir em elemento)
ReactDOM.render(<Saudacao tipo='Bom dia' nome='Vinícius'/>, mainHeader)