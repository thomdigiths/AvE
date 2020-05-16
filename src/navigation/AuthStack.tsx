import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { EnterCodeScreen } from 'screens';

const AuthStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EnterCode"
        component={EnterCodeScreen}
        options={{ headerShown: false }}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthStack;
