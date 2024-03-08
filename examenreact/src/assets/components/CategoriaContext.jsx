import React, { createContext, useState } from "react";

export const CategoriaContext = createContext();

export const CategoriaProvider = ({ children }) => {
  const [categoriasBuscar, setCategoriasBuscar] = useState([]);

  return (
    <CategoriaContext.Provider value={{ categoriasBuscar, setCategoriasBuscar }}>
      {children}
    </CategoriaContext.Provider>
  );
};
