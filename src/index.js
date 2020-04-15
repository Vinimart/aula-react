import React from 'react';
import ReactDOM from 'react-dom'
import BomDia from './componentes/BomDia'

const $ = document.querySelector.bind(document)
const mainHeader = $('header')

// Props do .render = (jsx, incluir em elemento)

ReactDOM.render(<BomDia nome='Vinícius' />, mainHeader)