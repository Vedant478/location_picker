import React, {useEffect, useState} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {store, persistor} from './src/Redux/store';
import {PersistGate} from 'redux-persist/integration/react';

import CarpoolList1 from './src/Views/CarpoolList1/CarpoolList1';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <CarpoolList1 />
        </PaperProvider>
      </PersistGate>
      
    </Provider>
  );
};

export default App;
