import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PetsStack from './src/navigation/MainStack';
import Profile from './src/screens/Profile';
import { CurrentUserProvider } from './src/context/CurrentUserContext';
import MainStack from './src/navigation/MainStack';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <CurrentUserProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </CurrentUserProvider>
  );
}

export default App;
