import * as React from 'react';
import { Pressable, TextInput, View, ImageBackground, Image, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginScreen ({ navigation }) {

  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  return (
    <LinearGradient
      colors={['rgba(110, 219, 94, 1)', 'rgba(146, 227, 143, 1)', 'rgba(55,181,151,1)']}
      style={styles.container}
    >
      <Image source={require('../assets/img/pi-logo.png')} resizeMethod="resize" style={styles.logo}></Image>
      <Text style={styles.appName}>
        IESB Chat
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder='Digite seu email'
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder='Digite sua senha'
      />
      <Pressable style={styles.button} onPress={() => navigation.navigate('SalasScreen')}>
        <Text>Login</Text>
      </Pressable>
      <Pressable style={styles.link} onPress={() => navigation.navigate('CadastroScreen')}>
        <Text>Não tenho cadastro</Text>
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
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    paddingBottom: 20,
  },
  logo: {
    width: 140,
    height: 140,
  },
  link: {
    color: '#ffffff',
    fontWeight: 'bold',
    marginTop: 30,
    fontSize: 14
  },
  button: {
    backgroundColor: '#04b79c',
    width: '80%',
    color: '#ffffff',
    padding: 12,
    borderRadius: 20,
    marginTop: 30,
    fontWeight: 'bold',
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 1, height: 2 },
  },
  input: {
    height: 40,
    width: '80%',
    margin: 12,
    borderWidth: 1,
    borderColor: '#c0c0c0',
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 20
  },
});
