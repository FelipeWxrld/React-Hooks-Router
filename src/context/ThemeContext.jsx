
import { createContext, useState } from 'react';

export const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
    const [tema, setTema] = useState('claro');

    function alternarTema() {
        setTema((anterior) =>
            anterior === 'claro' ? 'escuro' : 'claro'
        );
    }

    return (
        <ThemeContext.Provider value={{ tema, alternarTema }}>
            {children}
        </ThemeContext.Provider>
    );
}
