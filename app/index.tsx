import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image 
          /* O caminho da imagem mudou porque o arquivo agora está em 'app/index.tsx' */
          source={require('../assets/images/logo.png')} 
          style={styles.logo} 
          resizeMode="contain"
        />

        <Text style={styles.title}>Seja Bem-Vindo!</Text>
        <Text style={styles.subtitle}>
          Vamos cuidar da inteligência emocional da sua criança?
        </Text>


         <Link href="/register" asChild>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Cadastre-se</Text>
          </TouchableOpacity>
        </Link>

        <View style={styles.loginPrompt}>
          <Text style={styles.loginPromptText}>Já possui um login? </Text>
          <Link href="/login" asChild>
            <TouchableOpacity>
              <Text style={styles.loginLink}>Entrar</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'FFFCEE',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 350,
    height: 300,
    marginBottom: -60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#A67B5B',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#A67B5B',
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  primaryButton: {
    backgroundColor: '#C8824A',
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 50,
    marginBottom: 6,
    marginTop:120,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginPrompt: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginPromptText: {
    fontSize: 14,
    color: '#BD6B3E',
  },
  loginLink: {
    fontSize: 14,
    color: '#6D4484',
    fontWeight: 'bold',
  },
});
