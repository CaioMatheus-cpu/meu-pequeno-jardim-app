import React, { useState, useCallback, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, FlatList, Text, Alert, TouchableOpacity, Modal, Pressable, TextInput } from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

// IDs dos vídeos da sua playlist
const VIDEOS_PLAYLIST = [
  { id: 'sO0HTmrNV9k', title: 'Vídeo Educativo 1' },
  { id: '3tmd-ClpJxA', title: 'Vídeo Educativo 2' },
  { id: 'inpok4MKVLM', title: 'Vídeo Educativo 3' },
];

// Limites de tempo em segundos
const TIME_LIMITS = {
  '2-5': 60 * 60,      // 1 hora
  '6-10': 90 * 60,     // 1.5 horas
  '11-12': 120 * 60,   // 2 horas
};

// Helper para formatar o tempo
const formatTime = (totalSeconds: number) => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  if (hours > 0) {
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

export default function VideosScreen() {
  const childAge = 4; 
  
  const [timeLimit, setTimeLimit] = useState(TIME_LIMITS['2-5']);
  const [timeWatched, setTimeWatched] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  
  // Novos estados para o modal de PIN
  const [isPinModalVisible, setIsPinModalVisible] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const CORRECT_PIN = '0000';

  useEffect(() => {
    if (childAge >= 2 && childAge <= 5) setTimeLimit(TIME_LIMITS['2-5']);
    else if (childAge >= 6 && childAge <= 10) setTimeLimit(TIME_LIMITS['6-10']);
    else if (childAge >= 11 && childAge <= 12) setTimeLimit(TIME_LIMITS['11-12']);
  }, [childAge]);

  useFocusEffect(
    useCallback(() => {
      const loadTime = async () => {
        const today = new Date().toISOString().slice(0, 10);
        const storedDate = await AsyncStorage.getItem('video_date');
        
        if (storedDate === today) {
          const storedTime = await AsyncStorage.getItem('video_time_watched');
          setTimeWatched(Number(storedTime) || 0);
        } else {
          await AsyncStorage.setItem('video_date', today);
          await AsyncStorage.setItem('video_time_watched', '0');
          setTimeWatched(0);
        }
      };
      loadTime();
      const interval = setInterval(() => {
        if (playingVideoId && !isLocked) {
          setTimeWatched(prevTime => prevTime + 1);
        }
      }, 1000);
      return () => clearInterval(interval);
    }, [playingVideoId, isLocked])
  );

  useEffect(() => {
    AsyncStorage.setItem('video_time_watched', timeWatched.toString());
    if (timeWatched >= timeLimit) {
      setIsLocked(true);
      setPlayingVideoId(null);
    } else {
      setIsLocked(false);
    }
  }, [timeWatched, timeLimit]);

  const onStateChange = useCallback((state: string, videoId: string) => {
    if (isLocked) {
      setPlayingVideoId(null);
      return;
    }
    if (state === 'playing') setPlayingVideoId(videoId);
    else if (state === 'paused' || state === 'ended') setPlayingVideoId(null);
  }, [isLocked]);
  
  const handleTestLock = async () => {
    setTimeWatched(timeLimit);
    await AsyncStorage.setItem('video_time_watched', timeLimit.toString());
    Alert.alert("Teste de Bloqueio", "O tempo de ecrã foi esgotado.");
  };

  const handleAdd30Seconds = () => {
    setTimeWatched(prevTime => {
        const newTime = prevTime + 30;
        return newTime > timeLimit ? timeLimit : newTime;
    });
  };

  // Nova função para adicionar 5 minutos com senha
  const handleAddTimeWithPin = () => {
    if (pinInput === CORRECT_PIN) {
        // Adiciona 5 minutos (300 segundos) ao tempo limite total
        setTimeLimit(prevLimit => prevLimit + 300);
        Alert.alert("Sucesso", "5 minutos foram adicionados ao tempo de ecrã.");
        setPinInput('');
        setIsPinModalVisible(false);
    } else {
        Alert.alert("Erro", "PIN incorreto. Por favor, tente novamente.");
        setPinInput('');
    }
  };

  const remainingTime = timeLimit - timeWatched;

  return (
    <SafeAreaView style={styles.container}>
      {/* Modal de Controlo Parental */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={isPinModalVisible}
        onRequestClose={() => setIsPinModalVisible(false)}
      >
        <View style={styles.modalCenteredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalTitle}>Controlo Parental</Text>
                <Text style={styles.modalText}>Insira o PIN de 4 dígitos para adicionar 5 minutos.</Text>
                <TextInput
                    style={styles.pinInput}
                    keyboardType="number-pad"
                    maxLength={4}
                    value={pinInput}
                    onChangeText={setPinInput}
                    secureTextEntry
                    placeholder="****"
                    placeholderTextColor="#ccc"
                />
                <View style={styles.modalButtonContainer}>
                    <Pressable
                        style={[styles.modalButton, styles.buttonCancel]}
                        onPress={() => { setIsPinModalVisible(false); setPinInput(''); }}
                    >
                        <Text style={styles.textStyle}>Cancelar</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.modalButton, styles.buttonConfirm]}
                        onPress={handleAddTimeWithPin}
                    >
                        <Text style={styles.textStyle}>Confirmar</Text>
                    </Pressable>
                </View>
            </View>
        </View>
      </Modal>

      <View style={styles.timerContainer}>
        <View>
            <Text style={styles.timerLabel}>Tempo Restante:</Text>
            <Text style={[styles.timerText, remainingTime < 600 && styles.timerWarning]}>
                {formatTime(remainingTime > 0 ? remainingTime : 0)}
            </Text>
        </View>
        <View style={styles.buttonGroup}>
            <TouchableOpacity onPress={() => setIsPinModalVisible(true)} style={[styles.testButton, styles.parentButton]}>
                <Ionicons name="shield-checkmark-outline" size={24} color="#FFF" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleAdd30Seconds} style={styles.testButton}>
                <Ionicons name="add-outline" size={24} color="#FFF" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleTestLock} style={[styles.testButton, styles.resetButton]}>
                <Ionicons name="bug-outline" size={24} color="#FFF" />
            </TouchableOpacity>
        </View>
      </View>

      <View style={styles.listWrapper}>
        {isLocked ? (
          <View style={styles.lockContainer}>
            <Ionicons name="time-outline" size={80} color="#666" />
            <Text style={styles.lockText}>O seu tempo de tela por hoje acabou ❤️</Text>
          </View>
        ) : (
          <FlatList
            data={VIDEOS_PLAYLIST}
            renderItem={({ item }) => (
              <View style={styles.videoCard}>
                <YoutubeIframe
                  height={200}
                  play={playingVideoId === item.id}
                  videoId={item.id}
                  onChangeState={(state) => onStateChange(state, item.id)}
                />
                <Text style={styles.videoTitle}>{item.title}</Text>
              </View>
            )}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.listContainer}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c7e990ff',
  },
  timerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  timerLabel: {
    fontSize: 14,
    color: '#666',
  },
  timerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  timerWarning: {
    color: '#D9534F',
  },
  buttonGroup: {
    flexDirection: 'row',
  },
  testButton: {
    backgroundColor: '#5BC0DE',
    padding: 10,
    borderRadius: 50,
    marginLeft: 10,
  },
  resetButton: {
    backgroundColor: '#E74C3C',
  },
  parentButton: {
    backgroundColor: '#4CAF50',
  },
  listWrapper: {
    flex: 1,
  },
  listContainer: {
    padding: 20,
  },
  videoCard: {
    marginBottom: 25,
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
    textAlign: 'center',
  },
  lockContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  lockText: {
    color: '#333',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  // Estilos do Modal
  modalCenteredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalText: {
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  pinInput: {
    height: 50,
    width: '80%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 24,
    letterSpacing: 15,
    marginBottom: 25,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    borderRadius: 10,
    paddingVertical: 12,
    elevation: 2,
    flex: 0.48,
  },
  buttonCancel: {
    backgroundColor: '#E74C3C',
  },
  buttonConfirm: {
    backgroundColor: '#4CAF50',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

