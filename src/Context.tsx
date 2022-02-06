import React, { useContext, createContext, useReducer, useEffect } from "react";

import reducer, { initialState } from "./store/reducer";
import { addItem, updateItem, deleteItem } from "./store/actions";

const appStoreContext = createContext<any>(null);

export function AppStoreProvider({ children }: any) {
  const store = useAppStoreProvider();
  return (
    <appStoreContext.Provider value={store}>
      {children}
    </appStoreContext.Provider>
  );
}

export const useAppStore = () => {
  return useContext(appStoreContext);
};

export function useAppStoreProvider() {
  const [state, dispatch] = useReducer<any>(reducer, initialState);

  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem('items', JSON.stringify(state));
    }, 500);

    return () => clearTimeout(timer);
  }, [state]);

  return {
    addItem,
    deleteItem,
    updateItem,
    state,
    dispatch,
  };
}
