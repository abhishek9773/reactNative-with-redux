import {Provider} from 'react-redux';
import HomeScreen from './src/screens/HomeScreen';
import NavigaionDirection from './src/screens/NavigaionDirection';
import React from 'react';
import ReduxStore from './src/Redux/Store/ReduxStore';

export default function App({navigation}) {
  return (
    // return <NavigaionDirection />;
    <Provider store={ReduxStore}>
      <HomeScreen />
    </Provider>
  );
  // return <NavigationDrower />;
}
