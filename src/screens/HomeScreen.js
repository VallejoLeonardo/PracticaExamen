import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import { globalStyles, colors } from '../styles/globalStyles';

const HomeScreen = () => {
  const navigation = useNavigation();

  const menuItems = [
    {
      id: 1,
      title: 'Ahorros',
      icon: 'cash-outline',
      screen: 'Ahorros',
    },
    {
      id: 2,
      title: 'Perfil',
      icon: 'person-outline',
      screen: 'Perfil',
    },
    {
      id: 3,
      title: 'Configuración',
      icon: 'settings-outline',
      screen: 'Configuracion',
    },
  ];

  return (
    <View style={globalStyles.container}>
      <Header title="PracticaExamen" showBackButton={false} />
      
      <View style={globalStyles.pageContent}>
        <Text style={globalStyles.title}>Menú Principal</Text>
        
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={globalStyles.menuItem}
            onPress={() => navigation.navigate(item.screen)}
          >
            <Ionicons name={item.icon} size={24} color={colors.primary} />
            <Text style={globalStyles.menuItemText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default HomeScreen;