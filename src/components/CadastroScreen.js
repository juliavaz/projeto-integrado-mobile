import * as React from 'react';
import { Pressable, TextInput, View, ImageBackground, Image, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function CadastroScreen ({ navigation }) {

  const [nickname, onChangeNickname] = React.useState('');
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [passwordConfirm, onChangePasswordConfirm] = React.useState('');

  return (
    <LinearGradient
      colors={['rgba(110, 219, 94, 1)', 'rgba(146, 227, 143, 1)', 'rgba(55,181,151,1)']}
      style={styles.container}
    >
      <View style={styles.navBar}>
        <Image source={require('../assets/img/pi-logo.png')} resizeMethod="resize" style={styles.logo}></Image>
        <Text style={styles.appName}>
          IESB Chat
        </Text>
      </View>
      <Text style={styles.pageTitle}>
        Cadastro
      </Text>
      <View style={styles.card}>
        <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>
          Para realizar o seu cadastro por favor preencha os dados abaixo.
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNickname}
          value={nickname}
          placeholder='Seu nickname'
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder='Seu email'
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder='Sua senha'
        // secureTextEntry='true'
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePasswordConfirm}
          value={passwordConfirm}
          placeholder='Confirme sua senha'
        // secureTextEntry='true'
        />
      </View>
      <Pressable style={styles.button} onPress={() => navigation.navigate('SalasScreen')}>
        <Text>
          Cadastrar
        </Text>
      </Pressable>
      <Pressable style={styles.link} onPress={() => navigation.navigate('LoginScreen')}>
        <Text>
          Já tenho cadastro
        </Text>
      </Pressable>
    </LinearGradient>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    textAlign: 'center',
    padding: 8,
    fontFamily: 'Arial',
  },
  navBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomColor: '#ffffff',
    borderBottomWidth: 1,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    width: '95%',
    padding: 10,
  },
  pageTitle: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    padding: 10,
    marginBottom: 20,
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    paddingBottom: 20,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 20,
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
    width: '90%',
    margin: 12,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#c0c0c0',
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10
  },
});
