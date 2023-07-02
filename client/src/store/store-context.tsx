import { createContext, FC, ReactNode, useContext } from 'react';

import Store from './store';

interface State {
  store: Store;
}

interface StoreContextProviderProps {
  children: ReactNode;
}

const store = new Store();
const StoreContext = createContext<State>({ store });

export const StoreContextProvider: FC<StoreContextProviderProps> = ({ children }) => (
  <StoreContext.Provider value={{ store }}>
    {children}
  </StoreContext.Provider>
);

export const useStore = () => useContext(StoreContext);