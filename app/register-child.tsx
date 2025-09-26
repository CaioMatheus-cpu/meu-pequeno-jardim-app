import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Platform, ScrollView, Alert, Image } from 'react-native';
import { Link, Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function RegisterChildScreen() {
  const router = useRouter();
  
  const [nome, setNome] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [serieEscolar, setSerieEscolar] = useState('');
  const [imageUri, setImageUri] = useState<string | null>(null);

  const handleSelectImage = () => {
    // A lógica para selecionar uma imagem da galeria seria implementada aqui
    // Por enquanto, vamos apenas simular a seleção
    Alert.alert("Inserir Imagem", "Funcionalidade de seleção de imagem a ser implementada.");
  };

  const handleRegister = () => {
    if (!nome || !nascimento || !serieEscolar) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    console.log("Dados da Criança:", { nome, nascimento, serieEscolar });
    Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
    // Navega de volta para a tela inicial após o registro
    router.replace('/');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: 'Dados da criança' }} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          <Text style={styles.title}>Dados da criança</Text>

          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
            placeholderTextColor="#A9A9A9"
          />
          <TextInput
            style={styles.input}
            placeholder="Nascimento"
            value={nascimento}
            onChangeText={setNascimento}
            placeholderTextColor="#A9A9A9"
          />
          <TextInput
            style={styles.input}
            placeholder="Série Escolar"
            value={serieEscolar}
            onChangeText={setSerieEscolar}
            placeholderTextColor="#A9A9A9"
          />

          <View style={styles.imagePickerContainer}>
            <TouchableOpacity style={styles.imagePickerButton} onPress={handleSelectImage}>
                <Ionicons name="camera-outline" size={32} color="#888" />
                <Text style={styles.imagePickerText}>Inserir imagem</Text>
            </TouchableOpacity>
            <View style={styles.imageInstructions}>
              <Text style={styles.infoTitle}>Informações:</Text>
              <Text style={styles.infoText}>• Proporção - 3x4;</Text>
              <Text style={styles.infoText}>• Fundo branco;</Text>
              <Text style={styles.infoText}>• Rosto visível;</Text>
            </View>
          </View>
          
          <TouchableOpacity style={styles.primaryButton} onPress={handleRegister}>
            <Text style={styles.primaryButtonText}>Registrar</Text>
          </TouchableOpacity>

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
    backgroundColor: '#FBF8F3',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8B5E3C',
    textAlign: 'center',
    marginBottom: 32,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 50,
    paddingVertical: Platform.OS === 'ios' ? 16 : 12,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#333',
    width: '100%',
    marginBottom: 16,
  },
  imagePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 24,
    marginTop: 8,
  },
  imagePickerButton: {
    width: 100,
    height: 120,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePickerText: {
    marginTop: 4,
    fontSize: 12,
    color: '#888',
  },
  imageInstructions: {
    marginLeft: 16,
    flex: 1,
  },
  infoTitle: {
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 4,
  },
  infoText: {
    fontSize: 12,
    color: '#888',
  },
  primaryButton: {
    backgroundColor: '#6D4484', // Cor roxa do Figma
    paddingVertical: 16,
    borderRadius: 50,
    alignItems: 'center',
    width: '100%',
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
