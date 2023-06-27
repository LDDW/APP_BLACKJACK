import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import StackNavigator from './src/navigator/stack.navigator';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <StackNavigator/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
