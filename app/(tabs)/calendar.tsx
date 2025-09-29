import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

// 1. Configuração para deixar o calendário em Português (Brasil)
LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  monthNamesShort: ['Jan.', 'Fev.', 'Mar.', 'Abr.', 'Mai.', 'Jun.', 'Jul.', 'Ago.', 'Set.', 'Out.', 'Nov.', 'Dez.'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'],
  today: "Hoje"
};
LocaleConfig.defaultLocale = 'pt-br';

export default function CalendarScreen() {
  const [selectedDate, setSelectedDate] = useState('');

  // Pega a data de hoje no formato YYYY-MM-DD
  const today = new Date().toISOString().slice(0, 10);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Este é o "quadrado roxo" do seu design */}
        <View style={styles.calendarContainer}>
          <Calendar
            // Marca o dia selecionado
            onDayPress={day => {
              setSelectedDate(day.dateString);
            }}
            markedDates={{
              [selectedDate]: { selected: true, selectedColor: '#A06CD5' }, // Roxo mais escuro para seleção
              [today]: { marked: true, dotColor: '#FF6347' } // Um ponto para o dia de hoje
            }}
            // Customização da aparência
            theme={{
              backgroundColor: 'transparent',
              calendarBackground: 'transparent',
              textSectionTitleColor: '#6A057F',
              selectedDayBackgroundColor: '#A06CD5',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#FF6347',
              dayTextColor: '#2d4150',
              textDisabledColor: '#d9e1e8',
              arrowColor: '#6A057F',
              monthTextColor: '#4B0082',
              indicatorColor: 'blue',
              textDayFontWeight: '300',
              textMonthFontWeight: 'bold',
              textDayHeaderFontWeight: 'bold',
              textDayFontSize: 16,
              textMonthFontSize: 20,
              textDayHeaderFontSize: 14,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Fundo cinza claro
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  calendarContainer: {
    backgroundColor: '#E6E0F8', // O roxo claro do seu design
    borderRadius: 20,
    padding: 10,
    // Sombra para dar um efeito de elevação
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    elevation: 8,
  },
  selectedDateContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  selectedDateText: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
});

