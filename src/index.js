import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '~/store';
import App from './App';
import { colors } from './styles';

export default function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar backgroundColor={colors.accent} />
        <App />
      </PersistGate>
    </Provider>
  );
}
