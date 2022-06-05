import React from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Button } from 'react-native';


import CadastroScreen from './src/components/CadastroScreen';
import ChatScreen from './src/components/ChatScreen';
import CriarSalaScreen from './src/components/CriarSalaScreen';
import LoadingScreen from './src/components/LoadingScreen';
import LoginScreen from './src/components/LoginScreen';
import SalasScreen from './src/components/SalasScreen';
import SalasScreenTwo from './src/components/SalasScreenTwo';
import SobreScreen from './src/components/SobreScreen';


export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoadingScreen" screenOptions={{headerShown: false}}>

        <Stack.Screen name="CadastroScreen" component={ CadastroScreen } options={{ title: 'Cadastro' }} />
        <Stack.Screen name="CriarSalaScreen" component={ CriarSalaScreen } options={{ title: 'CriarSala' }} />
        <Stack.Screen name="LoadingScreen" component={ LoadingScreen } options={{ title: 'Loading' }} />
        <Stack.Screen name="LoginScreen" component={ LoginScreen } options={{ title: 'Login' }} />
        <Stack.Screen name="SalasScreen" component={ SalasScreen } options={{ title: 'Salas' }} />
        <Stack.Screen name="SalasScreenTwo" component={ SalasScreenTwo } options={{ title: 'Salas' }} />
        <Stack.Screen name="SobreScreen" component={ SobreScreen } options={{ title: 'Sobre' }} />
        <Stack.Screen name="ChatScreen" component={ ChatScreen } options={{ headerTitle: 'Chat', 
          headerRight: () => (
            <Button
              onPress={() => alert('Você salvou um novo recado!')}
              title="Salvar"
              color="#EB445A"
              style={{ borderRadius: 10 }}
            />
          ), }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
