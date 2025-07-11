import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/Home';
import Profile from './src/screens/Profile';
import { CurrentUserProvider } from './src/context/CurrentUserContext';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <CurrentUserProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Pets" component={HomeScreen} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </CurrentUserProvider>
  );
}

export default App;
