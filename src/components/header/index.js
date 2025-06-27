import React from "react";
import Nike from "../../images/Nike.jpg"
import { Link } from "react-router-dom"; 


export const Header = () => {
    return (
        <header className="header">
            <Link to="/">
                <div className="logo">
                    <img src={Nike} alt="logo" width={150} />
                </div>
            </Link>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/productos">Productos</Link></li>
            </ul>
            <div className="cart">
                <box-icon name="cart"></box-icon>
                <span className="item_total">0</span>
            </div>
        </header>
    )
} 