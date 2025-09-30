import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, FlatList, Dimensions, ViewToken } from 'react-native';

// 1. Defina os dados para cada emoção com as suas imagens personalizadas
const EMOTIONS = [
  { 
    name: 'FELIZ', 
    // CORREÇÃO: Usar o caminho relativo correto a partir da pasta app/(tabs)
    image: require('../../assets/images/Feliz.png')
  },
  { 
    name: 'RAIVOSO', 
    // CORREÇÃO: Usar o caminho relativo correto
    image: require('../../assets/images/Raiva.png') 

  },
  { 
    name: 'ANSIOSO', 
    // CORREÇÃO: Usar o caminho relativo correto
    image: require('../../assets/images/Anisoso.png') 

  },
  { 
    name: 'NÃO SEI', 
    // CORREÇÃO: Usar o caminho relativo correto
    image: require('../../assets/images/NS.png') 

  },
  { 
    name: 'TRISTE', 
    // CORREÇÃO: Usar o caminho relativo correto
    image: require('../../assets/images/Triste.png') 

  },
  { 
    name: 'SONOLENTO', 
    // CORREÇÃO: Usar o caminho relativo correto
    image: require('../../assets/images/Sonolento.png') 

  },
  { 
    name: 'ENTEDIADO', 
    // CORREÇÃO: Usar o caminho relativo correto
    image: require('../../assets/images/Entediado.png') 

  },
  { 
    name: 'DOENTE', 
    // CORREÇÃO: Usar o caminho relativo correto
    image: require('../../assets/images/Doente.png') 

  },
  // Adicione as outras emoções aqui...
];

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const userName = "Criança"; 

  const onViewableItemsChanged = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index ?? 0);
    }
  }).current;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContent}>
        <Text style={styles.greetingText}>
          Oii {userName}, bem vindo! {'\n'}
          Vamos criar Seu Pequeno {'\n'}
          Jardim de emoções?
        </Text>
        
        <View style={styles.carouselWrapper}>
          <FlatList
            ref={flatListRef}
            data={EMOTIONS}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <View style={styles.emotionSlide}>
                <View style={styles.emotionCard}>
                  <Text style={styles.emotionPrompt}>Como está se sentindo hoje?</Text>
                  <Image source={item.image} style={styles.emotionImage} resizeMode="contain" />
                  <View style={styles.emotionNameContainer}>
                    <Text style={styles.emotionName}>{item.name}</Text>
                  </View>
                </View>
              </View>
            )}
            onViewableItemsChanged={onViewableItemsChanged}
            viewabilityConfig={{
              itemVisiblePercentThreshold: 50,
            }}
          />
        </View>

        <View style={styles.dotContainer}>
          {EMOTIONS.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, { backgroundColor: index === activeIndex ? '#8B5E3C' : '#D3C4B3' }]}
            />
          ))}
        </View>

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
    backgroundColor: '#A5D15D', // Verde das laterais
    justifyContent: 'center',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  greetingText: {
    fontSize: 22,
    color: '#8B5E3C',
    textAlign: 'center',
    lineHeight: 30,
  },
  carouselWrapper: {
    height: 380, // Altura ajustada para o carrossel
  },
  emotionSlide: {
    width: width - 60, // Largura do slide (largura do ecrã - margens laterais do mainContent - padding do mainContent)
    alignItems: 'center',
    justifyContent: 'center',
  },
  emotionCard: {
    backgroundColor: '#F0F8E8', // Verde claro do card
    borderRadius: 20,
    width: '90%',
    height: '100%',
    alignItems: 'center',
    padding: 20,
  },
  emotionPrompt: {
    color: '#6B4F3A',
    fontSize: 16,
    fontWeight: '600',
    backgroundColor: '#FFFFFF',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 15,
    overflow: 'hidden', // Para o borderRadius funcionar no iOS
    textAlign: 'center',
    marginBottom: 15,
  },
  emotionImage: {
    width: 180,
    height: 180,
    flex: 1,
  },
  emotionNameContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 40,
    marginTop: 15,
  },
  emotionName: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
  dotContainer: {
    flexDirection: 'row',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  logo: {
    width: '70%',
    height: 80,
  },
});

