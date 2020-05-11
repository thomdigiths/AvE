import React from 'react';
import { StoreProvider } from 'stores';

import Navigator from 'navigation';

const App = () => {
  return (
    <StoreProvider>
      <Navigator />
    </StoreProvider>
  );
};

export default App;
