import * as React from 'react';
import { View, ImageBackground, Image, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CriarSalasScreen({ navigation }) {

  const [sala, onChangeSala] = React.useState('');

  return (
    <>
      <LinearGradient
          colors={['rgba(110, 219, 94, 1)', 'rgba(146, 227, 143, 1)', 'rgba(55,181,151,1)']}
          style={styles.container}
        >
          <View style={styles.backButtonContainer}>
            <Pressable onPress={() => navigation.navigate('SalasScreen')}>
              <Image source={require('../assets/img/pi-back.png')} resizeMethod="resize" style={styles.backButton} />
            </Pressable>
          </View>
        
        <View style={styles.navBar}>
          <Image source={require('../assets/img/pi-logo.png')} resizeMethod="resize" style={styles.logo} />

          <Text style={styles.appName}>
            {'IESB Chat'}
          </Text>

        </View>
           
          <Text style={styles.pageTitle}> 
            {'Sala Muito Louca'}
          </Text>

          <View style={styles.card}></View>
          
      </LinearGradient>
      <View style={styles.bottomNavBarContainer}>
            <View style={styles.bottomNavBar}>
              <Pressable style={styles.iconsBar} onPress={() => navigation.navigate('SalasScreen')}>
                <Icon name="comments-o" size={30} color="#000" />
                <Text>Salas</Text>
              </Pressable>

              
              <Pressable style={styles.iconsBar} onPress={() => navigation.navigate('SobreScreen')}>
                <Icon name="book" size={30} color="#000" />
                <Text>Sobre</Text>
              </Pressable>

              <Pressable style={styles.iconsBar} onPress={() => navigation.navigate('LoginScreen')}>
                <MaterialCommunityIcons name="logout" size={30} color="#000" />
                <Text>Sair</Text>
              </Pressable>
            
            </View>
          </View>
          </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'Arial',
    padding: 8,
  },
   backButtonContainer: {
    width: '80%',
    textAlign: 'left',
    position: 'absolute',
    top: 65,
    left: 20,
  },
  backButton: {
    width: 40,
    height: 40,
  },
  navBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomColor: '#ffffff',
    borderBottomWidth: 1,
  },
  pageTitle: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 5,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    padding: 10
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 5,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    paddingBottom: 20,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 20,
  },
  textTitle: {
    fontWeight: "bold"
  },
  card: {
    display: "flex",
    width: '100%',
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    minHeight: "86%"
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 25,
    
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonCard: {
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    minWidth: "100%",
    borderRadius: 50,
    backgroundColor: "#04B79C",
    fontWeight: "300",
    marginTop: 30
  },
  buttonValue: {
    color: "#fff",
    fontWeight: "bold",
    fontStyle: "italic"
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center", 
    width: '100%',
    marginBottom : 12,
    borderColor: '#c0c0c0',
    backgroundColor: '#ffffff',
    borderRadius: 20,
  },
  input: {
    height: 40,
    width: '100%',
    margin: 12,
    borderWidth: 1,
    borderColor: '#c0c0c0',
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    fontStyle: "italic"
  },
  bottomNavBarContainer: {
    width: "100%",
  },
  bottomNavBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "#fff",
    padding: 8
  },
  iconsBar: {
    justifyContent: "center",
    alignItems: "center"
  }
});