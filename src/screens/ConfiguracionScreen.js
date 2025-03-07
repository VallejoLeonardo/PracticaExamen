import React from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import { globalStyles, colors } from '../styles/globalStyles';

const ConfiguracionScreen = () => {
  const configuraciones = [
    {
      id: 1,
      titulo: 'Cambiar tema',
      icono: 'color-palette-outline',
      accion: () => mostrarAlerta('Has seleccionado cambiar el tema'),
    },
    {
      id: 2,
      titulo: 'Cambiar idioma',
      icono: 'language-outline',
      accion: () => mostrarAlerta('Has seleccionado cambiar el idioma'),
    },
    {
      id: 3,
      titulo: 'Notificaciones',
      icono: 'notifications-outline',
      accion: () => mostrarAlerta('Has seleccionado configurar notificaciones'),
    },
    {
      id: 4,
      titulo: 'Privacidad',
      icono: 'lock-closed-outline',
      accion: () => mostrarAlerta('Has seleccionado ajustes de privacidad'),
    },
    {
      id: 5,
      titulo: 'Ayuda y soporte',
      icono: 'help-circle-outline',
      accion: () => mostrarAlerta('Has seleccionado ayuda y soporte'),
    },
  ];

  const mostrarAlerta = (mensaje) => {
    Alert.alert(
      'Configuración',
      mensaje,
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
      { cancelable: false }
    );
  };

  return (
    <View style={globalStyles.container}>
      <Header title="Configuración" />
      
      <View style={globalStyles.pageContent}>
        <Text style={globalStyles.title}>Opciones de Configuración</Text>
        
        {configuraciones.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.configItem}
            onPress={item.accion}
          >
            <Ionicons name={item.icono} size={24} color={colors.primary} />
            <Text style={styles.configItemText}>{item.titulo}</Text>
            <Ionicons name="chevron-forward" size={20} color="#c5c5c5" />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  configItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  configItemText: {
    fontSize: 16,
    color: '#4a4a4a',
    flex: 1,
    marginLeft: 15,
  },
});

export default ConfiguracionScreen;