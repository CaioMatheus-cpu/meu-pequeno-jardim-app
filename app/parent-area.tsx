import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

// Os dados das emoções que vamos visualizar
const emotionData = [
  { name: 'Feliz', value: 20, color: '#FFD700' },
  { name: 'Ansioso', value: 5, color: '#FF8C00' },
  { name: 'Entediado', value: 50, color: '#4B0082' },
  { name: 'Raiva', value: 15, color: '#DC143C' },
  { name: 'Doente', value: 10, color: '#90EE90' },
];

// Componente para a legenda (permanece o mesmo)
const Legend = () => (
  <View style={styles.legendContainer}>
    <View style={styles.legendColumn}>
      <View style={styles.legendItem}><View style={[styles.legendColor, { backgroundColor: '#FFD700' }]} /><Text style={styles.legendText}>Feliz</Text></View>
      <View style={styles.legendItem}><View style={[styles.legendColor, { backgroundColor: '#FF8C00' }]} /><Text style={styles.legendText}>Ansioso</Text></View>
      <View style={styles.legendItem}><View style={[styles.legendColor, { backgroundColor: '#4B0082' }]} /><Text style={styles.legendText}>Entediado</Text></View>
      <View style={styles.legendItem}><View style={[styles.legendColor, { backgroundColor: '#1E90FF' }]} /><Text style={styles.legendText}>Triste</Text></View>
    </View>
    <View style={styles.legendColumn}>
      <View style={styles.legendItem}><View style={[styles.legendColor, { backgroundColor: '#DC143C' }]} /><Text style={styles.legendText}>Raiva</Text></View>
      <View style={styles.legendItem}><View style={[styles.legendColor, { backgroundColor: '#A0522D' }]} /><Text style={styles.legendText}>Sonolento</Text></View>
      <View style={styles.legendItem}><View style={[styles.legendColor, { backgroundColor: '#90EE90' }]} /><Text style={styles.legendText}>Doente</Text></View>
      <View style={styles.legendItem}><View style={[styles.legendColor, { backgroundColor: '#D3D3D3' }]} /><Text style={styles.legendText}>Não sabe</Text></View>
    </View>
  </View>
);

// Novo componente de gráfico de barras que não usa bibliotecas externas
const SimpleBarChart = ({ data }: { data: typeof emotionData }) => {
    const maxValue = Math.max(...data.map(item => item.value));

    return (
        <View style={styles.barChartContainer}>
            {data.map((item) => (
                <View key={item.name} style={styles.barItem}>
                    <Text style={styles.barValue}>{item.value}%</Text>
                    <View style={[styles.bar, { height: `${(item.value / maxValue) * 80}%`, backgroundColor: item.color }]} />
                    <Text style={styles.barLabel}>{item.name}</Text>
                </View>
            ))}
        </View>
    );
};

export default function ParentAreaScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerIconContainer}>
            <Ionicons name="person-circle-outline" size={32} color="#4B0082" />
        </View>
        <Text style={styles.headerText}>Aba para os Pais</Text>
      </View>
      
      <View style={styles.chartSection}>
        {/* Usamos o nosso novo gráfico de barras */}
        <SimpleBarChart data={emotionData} />

        <Text style={styles.chartLabel}>LEGENDA DO GRÁFICO</Text>
        <Legend />
      </View>

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>Voltar para a aba das Crianças</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#6A057F' },
  header: { backgroundColor: '#E6E0F8', flexDirection: 'row', alignItems: 'center', padding: 15, borderRadius: 20, margin: 20 },
  headerIconContainer: { backgroundColor: '#FFF', borderRadius: 20, padding: 5 },
  headerText: { fontSize: 18, fontWeight: 'bold', color: '#4B0082', marginLeft: 15 },
  chartSection: { flex: 1, backgroundColor: '#FFFFFF', marginHorizontal: 20, borderRadius: 20, padding: 20 },
  
  // Estilos para o novo gráfico de barras
  barChartContainer: {
    flexDirection: 'row',
    height: 250,
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 20,
  },
  barItem: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  barValue: {
    fontSize: 12,
    color: '#333',
    marginBottom: 5,
  },
  bar: {
    width: '80%',
    borderRadius: 5,
  },
  barLabel: {
    marginTop: 8,
    fontSize: 11,
    color: '#666',
    textAlign: 'center',
  },

  chartLabel: { textAlign: 'center', fontWeight: 'bold', color: '#333', marginVertical: 15 },
  legendContainer: { flexDirection: 'row', justifyContent: 'center' },
  legendColumn: { marginHorizontal: 10 },
  legendItem: { flexDirection: 'row', alignItems: 'center', marginVertical: 5 },
  legendColor: { width: 20, height: 20, borderRadius: 5, marginRight: 10 },
  legendText: { fontSize: 14, color: '#333' },
  backButton: { backgroundColor: '#E6E0F8', borderRadius: 20, paddingVertical: 15, margin: 20 },
  backButtonText: { textAlign: 'center', color: '#4B0082', fontSize: 16, fontWeight: 'bold' },
});

