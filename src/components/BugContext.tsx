import React, { createContext } from 'react';

import initialState from '../mock-data';

// reducer
const reducer = (state, action) => {
  if (action.type === 'ADD_BUG') {
    return [action.payload.bug, ...state];
  }

  if (action.type === 'TOGGLE_RESOLVE') {
    return state.map(bug => {
      if (action.payload?.id !== bug?.id) return bug;
      return { ...bug, resolved: !bug?.resolved };
    })
  }

  return state;
}

export const BugContext = createContext(initialState);

const BugContextProvider = ({ children }) => {
  const [bugs, dispatch] = React.useReducer(reducer, initialState);

  const handleSubmit = React.useCallback((bug) => {
    dispatch({
      type: 'ADD_BUG',
      payload: { bug }
    })
  }, [dispatch])

  const toggleResolved = React.useCallback((id) => {
    dispatch({
      type: 'TOGGLE_RESOLVE',
      payload: { id }
    });
  }, [dispatch]);

  const value = { bugs, handleSubmit, toggleResolved }

  return (
    <BugContext.Provider value={value}>{children}</BugContext.Provider>
  );

}

export default BugContextProvider;
