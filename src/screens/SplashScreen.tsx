import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Splash from 'react-native-splash-screen';

import { colors } from 'theme';
import { useStores } from 'stores';

const SplashScreen = () => {
  const RootStore = useStores();
  useEffect(() => {
    Splash.hide();

    setTimeout(() => {
      RootStore.setHasLoaded(true);
    }, 1000);
  }, []);

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
