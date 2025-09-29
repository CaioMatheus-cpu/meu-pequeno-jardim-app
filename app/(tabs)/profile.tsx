import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const childName = "Nome da Criança"; // Isso viria dos dados do usuário

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profilePicCircle}>
          <Ionicons name="person-outline" size={80} color="#fff" />
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>{childName}</Text>
        </View>

        <View style={styles.menuContainer}>
          <Link href="/parent-area" asChild>
            <TouchableOpacity style={styles.menuButton}>
              <View style={styles.iconCircle}>
                <Ionicons name="people-outline" size={30} color="#C48A5C" />
              </View>
              <Text style={styles.menuButtonText}>Aba para pais</Text>
            </TouchableOpacity>
          </Link>
          
          <Link href="/faq" asChild>
            <TouchableOpacity style={styles.menuButton}>
              <View style={styles.iconCircle}>
                <Ionicons name="chatbubble-ellipses-outline" size={30} color="#C48A5C" />
              </View>
              <Text style={styles.menuButtonText}>FAQ</Text>
            </TouchableOpacity>
          </Link>
        </View>

        <TouchableOpacity style={styles.deleteButton}>
          <Text style={styles.deleteButtonText}>Excluir conta</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#F7D9A9',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  profilePicCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#EAC87A',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#fff',
    marginTop: 40,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  nameContainer: {
    backgroundColor: '#F7EEDF',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginTop: -20, // Puxa para cima, sobrepondo levemente o header
    marginBottom: 30,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8B5E3C',
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  menuButton: {
    backgroundColor: '#F7EEDF',
    borderRadius: 20,
    padding: 60,
    alignItems: 'center',
    width: '45%',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  menuButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#8B5E3C',
  },
  deleteButton: {
    marginTop: 'auto', // Empurra o botão para a parte de baixo
    backgroundColor: '#F7EEDF',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 40,
  },
  deleteButtonText: {
    fontSize: 16,
    color: '#C48A5C',
    fontWeight: 'bold',
  },
});

