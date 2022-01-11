import { createContext, useReducer } from 'react';

const ThemeContext = createContext({
  darkMode: false,
  themeHandler: () => {},
});

const INITIAL_STATE = { darkMode: false };

const ThemeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

const ThemeProvider = (props) => {
  const [stateTheme, dispatchTheme] = useReducer(ThemeReducer, INITIAL_STATE);

  const themeHandler = () => {
    dispatchTheme({ type: 'TOGGLE' });
  };

  const state = {
    darkMode: stateTheme.darkMode,
    themeHandler: themeHandler,
  };

  return (
    <ThemeContext.Provider value={state}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
