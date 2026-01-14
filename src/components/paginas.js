import React from "react";
import {Routes, Route} from "react-router-dom";
import {Inicio} from "./Inicio";
import {ProductosLista} from "./productos/index";
import { ProductoDetalles} from "./productos/ProductoDetalles"

export const Paginas = () => {
    return (
        <section>
            <Routes>
                <Route path="/" element={<Inicio />} />   
                <Route path="/productos" element={<ProductosLista />} /> 
                <Route path="/producto/:id" element={<ProductoDetalles />} /> 
            </Routes>
        </section>
    )
}