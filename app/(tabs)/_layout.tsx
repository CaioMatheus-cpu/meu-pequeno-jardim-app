import React from 'react';
import { Tabs, useSegments } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

// 1. Criamos um mapa de cores para cada tela
const tabColors: { [key: string]: string } = {
  'index': '#A5D15D',      // Verde para Início
  'diary': '#ECC062',      // Azul para Diário
  'calendar': '#6D4484',   // Amarelo para Calendário
  'videos': '#A5D15D',     // Laranja para Vídeos
  'profile': '#ECC062',    // Roxo para Perfil
};

export default function TabLayout() {
  // 2. Usamos o hook 'useSegments' para descobrir a rota ativa
  const segments = useSegments();
  const currentTab = segments[segments.length - 1] || 'index';

  // 3. Pegamos a cor correspondente do nosso mapa, com uma cor padrão
  const activeTabBackgroundColor = tabColors[currentTab] || '#A5D15D';

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#c77a51ff',
        tabBarInactiveTintColor: '#ffffffff',
        tabBarStyle: {
          // 4. Aplicamos a cor de fundo dinâmica aqui
          backgroundColor: activeTabBackgroundColor, 
          borderTopWidth: 0,
          elevation: 4,
          height: 60,
          paddingBottom: 5,
        },
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="diary"
        options={{
          title: 'Diário',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: 'Calendário',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="videos"
        options={{
          title: 'Vídeos',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="videocam-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}

