import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import DetailScreen from './DetailScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProductScreen from './ProductScreen';
import IinfoScreen from './IinfoScreen';

const Tab = createBottomTabNavigator();

export default function NavigaionDirection() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="navigationTab" component={NavigaitonTab} />
        <Stack.Screen name="Home" component={HomeScreen} />/
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function NavigaitonTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Product" component={ProductScreen} />
      <Tab.Screen name="Info" component={IinfoScreen} />
    </Tab.Navigator>
  );
}

// const Drower = createDrawerNavigator();
// export default function NavigationDrower() {
//   return (
//     <Drower.Navigator>
//       <Drower.Screen name={'Profile'} component={ProfileScreen} />
//       <Drower.Screen name="Notification" component={Notification} />
//     </Drower.Navigator>
//   );
// }
