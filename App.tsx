import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store';
import Router from './src/navigation';
import {SafeAreaView} from "react-native";

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <Router />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
