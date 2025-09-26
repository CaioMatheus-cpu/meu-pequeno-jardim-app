import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Platform, ScrollView } from 'react-native';
import { Link, Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function RegisterScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: 'Dados do responsável', headerShown: true }} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          <Text style={styles.title}>Dados do responsável</Text>

          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Nome" placeholderTextColor="#A9A9A9" />
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Nascimento" placeholderTextColor="#A9A9A9"/>
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="E-mail" keyboardType="email-address" autoCapitalize="none" placeholderTextColor="#A9A9A9"/>
          </View>
          
          <View style={styles.inputContainer}>
            <View style={styles.passwordInputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#A9A9A9"
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
                <Ionicons 
                  name={showPassword ? 'eye-off-outline' : 'eye-outline'} 
                  size={24} 
                  color="#888" 
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.passwordInputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Confirmar senha"
                placeholderTextColor="#A9A9A9"
                secureTextEntry={!showConfirmPassword}
              />
              <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={styles.eyeIcon}>
                <Ionicons 
                  name={showConfirmPassword ? 'eye-off-outline' : 'eye-outline'} 
                  size={24} 
                  color="#888" 
                />
              </TouchableOpacity>
            </View>
          </View>
          
          <Link href="/register-child" asChild>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Próximo</Text>
          </TouchableOpacity>
          </Link>
          <View style={styles.loginPrompt}>
            <Text style={styles.loginPromptText}>Já possui uma conta? </Text>
            <Link href="/login" asChild>
              <TouchableOpacity>
                <Text style={styles.loginLink}>Entrar</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBF8F3', // Cor de fundo do Figma
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  content: {
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8B5E3C', // Cor do título do Figma
    textAlign: 'center',
    marginBottom: 32,
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#8F9090',
    borderRadius: 50,
    paddingVertical: Platform.OS === 'ios' ? 16 : 12,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#333',
    width: '100%',
  },
  
  passwordInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    right: 20,
  },
  primaryButton: {
    backgroundColor: '#C5D86D', // Cor do botão do Figma
    paddingVertical: 16,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 24,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginPrompt: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginPromptText: {
    fontSize: 14,
    color: '#666666',
  },
  loginLink: {
    fontSize: 14,
    color: '#6D4484',
    fontWeight: 'bold',
  },
});
