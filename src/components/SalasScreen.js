import * as React from 'react';
import { Pressable, TextInput, View, ImageBackground, Image, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SalasScreen({ navigation }) {
  return (
    <>
        <LinearGradient
          colors={['rgba(110, 219, 94, 1)', 'rgba(146, 227, 143, 1)', 'rgba(55,181,151,1)']}
          style={styles.container}
        >
        
        <View style={styles.navBar}>
          <Image source={require('../assets/img/pi-logo.png')} resizeMethod="resize" style={styles.logo} />

          <Text style={styles.appName}>
            {'IESB Chat'}
          </Text>

        </View>
          
          <Text style={styles.pageTitle}>
            {'Salas'}
          </Text>

          <View style={styles.card}>
            
            <View style={styles.textContainer}>
              <Text>{'Sala muito louca'}</Text>
              <Text>{'25 usuario(s)'}</Text>
            </View>
            
            <View style={styles.buttonContainer}>
              <Pressable 
              style={styles.buttonCard}
              onPress={() => navigation.navigate('ChatScreen')}
              >
              <Text>{'VISUALIZAR'}</Text>
              </Pressable>

              <Pressable 
              style={styles.buttonCardExit}
              onPress={() => navigation.navigate('SalasScreenTwo')}
              >
              <Text>{'SAIR'}</Text>
              </Pressable>
            </View>
        
          </View>

          <View style={styles.card}>

            <View style={styles.textContainer}>
              <Text>{'Sala muito louca'}</Text>
              <Text>{'50 usuario(s)'}</Text>
            </View>
            
            <View style={styles.buttonContainer}>
              <Pressable 
              style={styles.buttonCardEntrar}
              onPress={() => navigation.navigate('ChatScreen')}
              >
              <Text>{'ENTRAR'}</Text>
              </Pressable>
            </View>

          </View>

          <View style={styles.card}>
            
            <View style={styles.textContainer}>
              <Text>{'Sala muito louca'}</Text>
              <Text>{'10 usuario(s)'}</Text>
            </View>
            
            <View style={styles.buttonContainer}>
              <Pressable 
              style={styles.buttonCardEntrar}
              onPress={() => navigation.navigate('ChatScreen')}
              >
              <Text>{'ENTRAR'}</Text>
              </Pressable>
            </View>
          </View>

      </LinearGradient>
          <View style={styles.bottomNavBarContainer}>
            <View style={styles.bottomNavBar}>
              <Pressable style={styles.iconsBar} onPress={() => navigation.navigate('SalasScreen')}>
                <Icon name="comments-o" size={30} color="#000" />
                <Text>Salas</Text>
              </Pressable>

              <Pressable style={styles.iconsBar} onPress={() => navigation.navigate('CriarSalaScreen')}>
                <Icon name="plus" size={30} color="#000" />
                <Text>Criar Sala</Text>
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
    justifyContent: 'start',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'Arial',
    padding: 8,
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
  card: {
    display: "flex",
    width: '100%',
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  },
  textContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25
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
    minWidth: "45%",
    borderRadius: 50,
    backgroundColor: "#04B79C",
    color: "#fff",
    fontWeight: "300"
  },
  buttonCardExit: {
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    minWidth: "45%",
    borderRadius: 50,
    backgroundColor: "#FFA320",
    color: "#fff",
    fontWeight: "300"
  },
  buttonCardEntrar: {
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    minWidth: "100%",
    borderRadius: 50,
    backgroundColor: "#04B79C",
    color: "#fff",
    fontWeight: "300"
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
    padding: 15
  },
  iconsBar: {
    justifyContent: "center",
    alignItems: "center"
  }
});
