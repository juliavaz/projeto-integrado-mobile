import * as React from 'react';
import { View, ImageBackground, Image, Text, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoadingScreen({ navigation }) {

  return (
      <LinearGradient
        colors={['rgba(110, 219, 94, 1)', 'rgba(146, 227, 143, 1)', 'rgba(55,181,151,1)']}
        style={styles.container}
      >
      <Pressable onPress={() => navigation.navigate('LoginScreen')}>
        <Image source={require('../assets/img/pi-logo.png')} resizeMethod="resize" style={styles.logo}></Image>
        <Text style={styles.appName}>
          IESB Chat
        </Text>
        <Text style={styles.paragraph}>
          carregando...
        </Text>
      </Pressable>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 8,
    fontFamily: 'Arial',
  },
  appName: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 5,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
  },
  logo: {
    width: 180,
    height: 180,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff'
  },
});
