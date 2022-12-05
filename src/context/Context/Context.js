import React, { useState } from "react";
import { createContext } from "react";

const Context = createContext();
const { Provider } = Context;

const ContextProvider = ({children}) => {
    const [ options, setOptions ] = useState("movie");

    return (
        <Provider value={{options, setOptions}}>
            {children}
        </Provider>
    );
};

export { Context, ContextProvider };