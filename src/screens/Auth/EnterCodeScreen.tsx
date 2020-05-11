import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { colors } from 'theme';

const EnterCodeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>HOME</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default EnterCodeScreen;
