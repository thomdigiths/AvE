import { types } from 'mobx-state-tree';

const RootStore = types.model({
  isAuthenticated: false,
  hasLoaded: false,
});

export default RootStore.create();
