import React, { ReactNode } from 'react';
import RootStore from './RootStore';

const StoreContext = React.createContext(RootStore);

export const useStore = () => {
  const store = React.useContext(StoreContext);
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error('useStore must be used within a StoreProvider.');
  }
  return store;
};

export const StoreProvider = ({ children }: { children?: ReactNode | ReactNode[] }) => {
  return <StoreContext.Provider value={RootStore}>{children}</StoreContext.Provider>;
};
