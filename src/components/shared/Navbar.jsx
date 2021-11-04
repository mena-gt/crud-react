import React from 'react';

class NavbarComponent extends React.Component {
    render () {
        return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <button className="link-button navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="no existe" />
                    </button>
                    <button className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </button>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <button className="link-button navbar-item"></button>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item"></div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavbarComponent;