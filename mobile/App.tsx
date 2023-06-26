import React from 'react';
import {SafeAreaProvider} from "react-native-safe-area-context";
import StackNavigator from "./src/navigator/stack.navigator";

const App = () => {
  return (
    <SafeAreaProvider>
      <StackNavigator/>
    </SafeAreaProvider>
  )
}

export default App
