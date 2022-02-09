import React, {
  useContext,
  createContext,
  useReducer,
  useEffect,
  Dispatch,
} from "react";

import reducer, { initialState } from "./store/reducer";
import { addItem, updateItem, deleteItem, Actions, AddItem, UpdateItem, DeleteItem } from "./store/actions";
import State from "./common/State";
import Item from "./common/Item";

interface ContextProps {
  children: React.ReactNode,
}

export interface IAppStoreContext {
  addItem: (payload: Item) => AddItem;
  updateItem: (payload: Item) => UpdateItem;
  deleteItem:  (payload: number) => DeleteItem;
  state: State;
  dispatch: Dispatch<Actions>;
}

const appStoreContext = createContext<IAppStoreContext>({
  addItem,
  updateItem,
  deleteItem,
  state: initialState,
  dispatch: () => undefined,
});

export function AppStoreProvider({ children }: ContextProps) {
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
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem("items", JSON.stringify(state));
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
