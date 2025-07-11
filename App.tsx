import { StyleSheet, View } from 'react-native';
import HomeScreen from './src/screens/Home';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

function App() {
  return <Navigation />;
}

export default App;
