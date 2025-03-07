import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import { globalStyles, colors } from '../styles/globalStyles';

const AhorrosScreen = () => {
  const [ahorro, setAhorro] = useState(0);

  const incrementarAhorro = () => {
    setAhorro(ahorro + 10);
  };

  const resetearAhorro = () => {
    setAhorro(0);
  };

  return (
    <View style={globalStyles.container}>
      <Header title="Mis Ahorros" />
      
      <View style={globalStyles.pageContent}>
        <Text style={globalStyles.title}>Contador de Ahorros</Text>
        
        <View style={globalStyles.counterContainer}>
          <Text style={globalStyles.counterValue}>${ahorro}</Text>
          
          <View style={globalStyles.buttonsRow}>
            <TouchableOpacity 
              style={[globalStyles.button, styles.addButton]} 
              onPress={incrementarAhorro}
            >
              <Ionicons name="add-circle-outline" size={24} color={colors.white} />
              <Text style={globalStyles.buttonText}>Agregar $10</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[globalStyles.button, styles.resetButton]} 
              onPress={resetearAhorro}
            >
              <Ionicons name="refresh-outline" size={24} color={colors.white} />
              <Text style={globalStyles.buttonText}>Reiniciar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '45%',
  },
  resetButton: {
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '45%',
  },
});

export default AhorrosScreen;