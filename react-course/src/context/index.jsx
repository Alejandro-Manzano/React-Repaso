import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    const [count, setCount] = useState(0) //valor 0 para que el carrito empiece contando desde 0
    console.log('COUNT:', count);

    return (
        <ShoppingCartContext.Provider value={{
            count, //podrá leer los dos datos (leer y modificar)
            setCount
        }}>
            {children}
        </ShoppingCartContext.Provider>     
    )
}