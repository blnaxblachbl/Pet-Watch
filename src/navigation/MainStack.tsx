import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import PetInfoScreen from '../screens/PetInfo';
import TabNavigator from './TabNavigator';

export type MainStackParamList = {
  Home: undefined;
  PetInfo: { petId: number };
};

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={TabNavigator}
      options={{ title: 'Home', headerShown: false }}
    />
    <Stack.Screen
      name="PetInfo"
      component={PetInfoScreen}
      options={{ title: 'Pet Info' }}
    />
  </Stack.Navigator>
);

export default MainStack;
