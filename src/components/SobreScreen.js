import * as React from 'react';
import { View, ImageBackground, Image, Text, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function SobreScreen({ navigation }) {

  return (
      <LinearGradient
        colors={['rgba(110, 219, 94, 1)', 'rgba(146, 227, 143, 1)', 'rgba(55,181,151,1)']}
        style={styles.container}
      >
      <View style={styles.backButtonContainer}>
      <Pressable onPress={() => navigation.navigate('SalasScreen')}>
        <Image source={require('../assets/img/pi-back.png')} resizeMethod="resize" style={styles.backButton} />
      </Pressable>
      </View>
      <Image source={require('../assets/img/pi-logo.png')} resizeMethod="resize" style={styles.logo}></Image>
      <Text style={styles.appName}>
          IESB Chat
        </Text>
      <Text style={styles.paragraph}>
        Modernizamos os bilhetinhos de aula para chats de interação entre alunos.
      </Text>


      <View style={styles.card}>
        <View style={styles.rows}>
          <Image source={require('../assets/img/roman.png')} resizeMethod="resize" style={styles.icon}></Image>
          <Text style={styles.subtitle}>
            Roman
          </Text>
          <Text style={styles.subtitle}>
            Cunha
          </Text>
        </View>

        <View style={styles.rows}>
          <Image source={require('../assets/img/barbara.png')} resizeMethod="resize" style={styles.icon}></Image>
          <Text style={styles.subtitle}>
            Bárbara
          </Text>
          <Text style={styles.subtitle}>
            Caputo
          </Text>
        </View>

        <View style={styles.rows}>
          <Image source={require('../assets/img/carlos.png')} resizeMethod="resize" style={styles.icon}></Image>
          <Text style={styles.subtitle}>
            Carlos
          </Text>
          <Text style={styles.subtitle}>
            Daniel
          </Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.rows}>
          <Image source={require('../assets/img/henrique.png')} resizeMethod="resize" style={styles.icon}></Image>        
          <Text style={styles.subtitle}>
            Henrique
          </Text>
          <Text style={styles.subtitle}>
            Fontenele
          </Text>
        </View>

        <View style={styles.rows}>
          <Image source={require('../assets/img/julia.png')} resizeMethod="resize" style={styles.icon}></Image>
          <Text style={styles.subtitle}>
            Júlia
          </Text>
          <Text style={styles.subtitle}>
            Vaz
          </Text>
        </View>

        <View style={styles.rows}>
          <Image source={require('../assets/img/leandro.png')} resizeMethod="resize" style={styles.icon}></Image>        
          <Text style={styles.subtitle}>
            Leandro
          </Text>
          <Text style={styles.subtitle}>
            Faria
          </Text>
        </View>
      </View>
      
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  card:{
    flexDirection: "row",
    marginBottom: 20,
  },
  backButtonContainer: {
    width: '80%',
    textAlign: 'left',
    position: 'absolute',
    top: 20,
    left: 20
  },
  backButton: {
    width: 40,
    height: 40,
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 5,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
  },
  rows:{
    alignItems: "center",
    alignContent: "flex-start",
    textAlign: "center",
    marginRight: 10,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  icon: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  subtitle: {
    color: '#ffffff',
    textTransform: 'uppercase',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 5,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
  },
  paragraph: {    
    margin: 24,
    marginBottom: 40,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 5,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
  },
});