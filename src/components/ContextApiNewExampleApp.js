import React, { createContext, useContext } from 'react';

const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
};

const ThemeContext = createContext({
    theme: themes.dark,
    toggleTheme: () => { }
})

const ThemeTogglerButton = () => {
    return <>
        <ThemeContext.Consumer>
            {({ theme, toggleTheme }) => (
                <button onClick={toggleTheme} style={{ backgroundColor: theme.background }}>
                    Toggle Theme!
                </button>
            )}
        </ThemeContext.Consumer>
    </>
}

const ContextApiNewExampleApp = () => {
    return <>
        <h3>hello</h3>
    </>
}

export default ContextApiNewExampleApp;