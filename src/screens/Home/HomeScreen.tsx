import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from 'theme';

const HomeScreen = ({}) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default HomeScreen;
