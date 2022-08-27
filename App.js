import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import LoginScreen from './screens/LoginScreen';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
    primary: '#4984B8'
    
  }
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
            name="Home"
            component={LoginScreen}
            options={{headerShown: false}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
