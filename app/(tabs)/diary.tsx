import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';

// Componente para gerar as linhas do caderno dinamicamente
const NotebookLines = () => {
  const lines = Array.from({ length: 20 }).map((_, index) => (
    <View key={index} style={styles.line} />
  ));
  return <View style={styles.linesContainer}>{lines}</View>;
};


export default function DiaryScreen() {
  const [diaryText, setDiaryText] = useState('');
  const MAX_CHARS = 300;

  const [fontsLoaded] = useFonts({
    'IndieFlower': require('../../assets/fonts/IndieFlower-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <Text>A carregar diário...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.notebookWrapper}>
            <Image
              source={require('../../assets/images/notebook-top.png')}
              style={styles.notebookTopImage}
              resizeMode="contain"
            />
            <View style={styles.notebookContainer}>
              <View style={styles.pageContainer}>
                <NotebookLines />
                <TextInput
                  style={styles.textInput}
                  placeholder="Hoje o meu dia foi..."
                  placeholderTextColor="#BDA18D"
                  multiline={true}
                  value={diaryText}
                  onChangeText={setDiaryText}
                  maxLength={MAX_CHARS}
                  underlineColorAndroid="transparent"
                />
              </View>
            </View>
          </View>
          
          <Text style={styles.charCounter}>
            ({diaryText.length}/{MAX_CHARS})
          </Text>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  notebookWrapper: {
    // Este contentor serve como referência de posicionamento
  },
  notebookContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingTop: 70, // Ajustado para a nova sobreposição
    paddingHorizontal: 20,
    paddingBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    minHeight: 500,
  },
  notebookTopImage: {
    // Posição estática com margem negativa para sobreposição
    width: '100%',
    height: 100,
    zIndex: 1, // Garante que a imagem fique por cima do caderno branco
    marginBottom: -60, // Puxa o contentor de baixo para cima
  },
  pageContainer: {
    flex: 1,
  },
  textInput: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    fontFamily: 'IndieFlower',
    fontSize: 22,
    color: '#6B4F3A',
    textAlignVertical: 'top',
    lineHeight: 40,
    backgroundColor: 'transparent',
  },
  charCounter: {
    textAlign: 'right',
    color: '#aaa',
    marginTop: 10,
    paddingRight: 10,
    fontFamily: 'IndieFlower',
    fontSize: 16,
  },
  linesContainer: {
    flex: 1,
  },
  line: {
    height: 3,
    backgroundColor: '#EAE0D9',
    marginTop: 37,
  },
});

