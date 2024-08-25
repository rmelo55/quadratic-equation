import React from "react";
import '../NavBar/NavBar.css'

function NavBar() {
    return(
        <div className="NavBar">
            <div>
                <h1>Equação do 2º Grau</h1>
            </div>
            <div className="menu">
                <a href="/" className="itemMenu">Bhaskara</a>
                <a href="/" className="itemMenu">Fórmulas</a>
                <a href="/" className="itemMenu">Idealizadores</a>
            </div>
        </div>
    )
}

export default NavBar