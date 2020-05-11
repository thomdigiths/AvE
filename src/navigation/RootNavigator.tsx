import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthStack from './AuthStack';
import { useStore } from 'stores';
import { SplashScreen } from 'screens';
import AppStack from './App/AppStack';

const Stack = createStackNavigator();

const RootNavigator = () => {
  const RootStore = useStore();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!RootStore.hasLoaded ? (
          <Stack.Screen name="Splash" component={SplashScreen} />
        ) : RootStore.isAuthenticated ? (
          <Stack.Screen name="App" component={AppStack} />
        ) : (
          <Stack.Screen name="Auth" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
