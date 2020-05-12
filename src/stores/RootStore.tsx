import { types } from 'mobx-state-tree';

const RootStore = types
  .model({
    isAuthenticated: false,
    hasLoaded: false,
  })
  .actions((self) => ({
    setHasLoaded: (value: boolean) => {
      self.hasLoaded = value;
    },
  }));

export default RootStore.create();
