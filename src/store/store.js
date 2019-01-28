// Interested about this pattern?
// See: http://jonalvarezz.com/articles/replacing-redux-with-context-and-hooks/
import React, { useReducer } from 'react';
import StoreContext from './context';
import reducers, { initialState } from './reducers';

function Store({ children }) {
  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <StoreContext.Provider value={{ ...state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}

export default Store;
