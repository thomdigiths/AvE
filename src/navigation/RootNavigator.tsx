import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { observer } from 'mobx-react-lite';

import AuthStack from './AuthStack';
import { useStores } from 'stores';
import { SplashScreen } from 'screens';
import AppStack from './App/AppStack';

const Stack = createStackNavigator();

const RootNavigator = () => {
  const RootStore = useStores();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!RootStore.hasLoaded ? (
          <Stack.Screen name="Splash" component={SplashScreen} />
        ) : !RootStore.isAuthenticated ? (
          <Stack.Screen name="Auth" component={AuthStack} />
        ) : (
          <Stack.Screen name="App" component={AppStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default observer(RootNavigator);
