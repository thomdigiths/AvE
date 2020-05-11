import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';

import { colors } from 'theme';

const SplashScreen = ({}) => {
  // useEffect(() => {
  //   Splash.hide();
  // }, []);

  return (
    <View style={styles.container}>
      <Text>Splash Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
