import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Card, Input } from 'react-native-elements';

import { colors, margins, typings } from 'theme';

const EnterCodeScreen = () => {
  return (
    <View style={styles.container}>
      <Card containerStyle={styles.card}>
        <View style={styles.welcomeContainer}>
          <Image resizeMode="contain" source={require('images/logo.png')} style={styles.logo} />
          <Text style={styles.welcomeText}>
            Welkom bij uw VvE omgeving. Vul hieronder de unieke code in van uw VvE. Heeft u deze
            niet? Vraag hiernaar bij uw pandbeheerder.
          </Text>
        </View>
        <Input containerStyle={styles.input} label="Voer uw gebouwcode in" />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  card: {
    marginTop: margins.xxl,
    justifyContent: 'flex-end',
  },
  logo: {
    width: 69,
    height: 69,
  },
  input: {
    marginTop: 'auto',
    marginBottom: 0,
  },
  welcomeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: margins.xxl,
  },
  welcomeText: {
    ...typings.regular,
    flex: 1,
    marginLeft: margins.sm,
  },
});

export default EnterCodeScreen;
