import React from 'react';

import NavbarItem from './navbar-item'

function Navbar() {
    return (
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
            <div className="container">
                <a className="navbar-brand" href="#">Minhas Finanças</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">
                        <NavbarItem href="#/home" label="Home" />
                        <NavbarItem href="#/register" label="Usuários" />
                        <NavbarItem href="#/lancamento" label="Lançamentos" />
                        <NavbarItem href="#/login" label="Login" />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar