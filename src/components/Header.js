import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../styles/globalStyles';

const Header = ({ title, showBackButton = true }) => {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.header}>
      {showBackButton && (
        <TouchableOpacity
          style={globalStyles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={globalStyles.backButtonText}>← Atrás</Text>
        </TouchableOpacity>
      )}
      <Text style={globalStyles.headerTitle}>{title}</Text>
    </View>
  );
};

export default Header;