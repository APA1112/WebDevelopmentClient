import { createContext, useState } from "react";

//Datos que tenemo que consumir
export const IndiceContext = createContext();

//Lo que nos provee el acceso al contexto
export function IndiceProvider({children}){
    const [indice, setIndice] = useState(1)

    return (
        <IndiceContext.Provider value={{indice, setIndice}}>
            {children}
        </IndiceContext.Provider>
    )
}