import React, { createContext, useState, useEffect } from 'react';
import Data from '../Data.js';

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [productos, setproductos] = useState([]);


    useEffect(() => {
        const producto = Data
        setproductos(producto)
    }, [])
    
    const value = {
        productos: [productos]
    }


    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )

}