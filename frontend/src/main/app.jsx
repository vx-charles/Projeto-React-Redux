//importando duas dependências.
//Sistema de módulos do ecmascript 2015, import e export
import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'
import Menu from '../template/menu'
import Routes from './routes'

//componente baseado em uma função.
export default props => (
    <div className='container'>
        <Menu />
        <Routes />
    </div>
)