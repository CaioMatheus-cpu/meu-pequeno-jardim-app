import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';

export default function HomeScreen() {
  // O nome viria dos dados do usuário logado no futuro
  const userName = "Criança"; 

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContent}>
        <Text style={styles.greetingText}>
          Oii {userName}, bem vindo! {'\n'}
          Vamos criar Seu Pequeno {'\n'}
          Jardim de emoções?
        </Text>
        <Image 
          source={require('../../assets/images/fontelonga.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A5D15D', // Fundo verde principal
  },
  mainContent: {
    flex: 1,
    backgroundColor: '#F8F4E3', // Área de conteúdo branca
    marginHorizontal: 20, // Cria as laterais verdes
    marginTop:-60,
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
    justifyContent: 'space-around', // Espaça o texto e a logo
    paddingVertical: 20, // Adiciona um respiro vertical
  },
  greetingText: {
    fontSize: 26,
    color: '#8B5E3C',
    textAlign: 'center',
    lineHeight: 40,
  },
  logo: {
    width: 250,
    height: 100,
  },
});

