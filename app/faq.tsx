import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

// Dados de exemplo para as perguntas e respostas
const faqData = [
  {
    question: 'O que é inteligência emocional?',
    answer: 'É a capacidade de reconhecer, avaliar e lidar com os seus próprios sentimentos e os dos outros.'
  },
  {
    question: 'Como posso ajudar meu filho?',
    answer: 'Converse abertamente sobre sentimentos, valide o que ele sente e use as ferramentas do app para criar um diário de emoções.'
  },
  {
    question: 'Com que frequência devo usar o diário?',
    answer: 'O ideal é usar diariamente, criando uma rotina. Mas o mais importante é a consistência, mesmo que seja algumas vezes por semana.'
  },
];

// Componente para um item do FAQ, para manter o código organizado
const FaqItem = ({ question, answer }: { question: string, answer: string }) => (
  <>
    <View style={[styles.bubble, styles.questionBubble]}>
      <Text style={styles.bubbleText}>{question}</Text>
    </View>
    <View style={[styles.bubble, styles.answerBubble]}>
      <Text style={styles.bubbleText}>{answer}</Text>
    </View>
  </>
);

export default function FaqScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
            <View style={styles.headerIconContainer}>
                <Ionicons name="chatbubble-ellipses-outline" size={24} color="#388E3C" />
            </View>
            <Text style={styles.headerText}>Perguntas Frequentes (FAQ)</Text>
        </View>

        {faqData.map((item, index) => (
          <FaqItem key={index} question={item.question} answer={item.answer} />
        ))}

      </ScrollView>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>Voltar para a aba das Crianças</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D7F0C4', // Verde claro
  },
  scrollContainer: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
  },
  headerIconContainer: {
    backgroundColor: '#E8F5E9',
    borderRadius: 15,
    padding: 8,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#388E3C',
    marginLeft: 15,
  },
  bubble: {
    padding: 15,
    borderRadius: 20,
    marginBottom: 15,
    maxWidth: '85%',
  },
  questionBubble: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-start',
    borderTopLeftRadius: 5,
  },
  answerBubble: {
    backgroundColor: '#E8F5E9',
    alignSelf: 'flex-end',
    borderTopRightRadius: 5,
  },
  bubbleText: {
    fontSize: 16,
    color: '#333',
  },
  backButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingVertical: 15,
    margin: 20,
    marginTop: 0,
  },
  backButtonText: {
    textAlign: 'center',
    color: '#388E3C',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

