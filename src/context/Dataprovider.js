import React, { createContext, useState, useEffect } from 'react';
import Data from '../Data.js';

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [productos, setproductos] = useState([]);
    const [menu, setMenu] = useState(false)
    const [carrito, setCarrito] = useState([])


    useEffect(() => {
        const producto = Data.items
        if (producto) {
            setproductos(producto)
        }else{
            setproductos([])
        }
        
    }, [])

    const addCarrito = (id) => {
        const check = carrito.every(item => {
            return item.id !== id
        })
        if (check) {
            const data = productos.filter(producto => {
                return producto.id === id
            })
            setCarrito([...carrito, ...data])
        } else {
            alert("El producto ya ha sido agregado al carrito")
        }
    }
    
    const value = {
        productos: [productos],
        menu: [menu, setMenu],
        addCarrito: addCarrito,
        carrito: [carrito, setCarrito]
    }


    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )

}