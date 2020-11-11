import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store';

import Wrapper from './src/app';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#2B32C4" translucent={true} />
      <Wrapper />
    </Provider>
  );
};

export default App;
