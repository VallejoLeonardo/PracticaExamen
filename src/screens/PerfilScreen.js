import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Header from '../components/Header';
import { globalStyles } from '../styles/globalStyles';

// En un proyecto real, importaríamos la imagen desde assets
// Para este ejemplo, usamos una URL de placeholder
const profileImageSource = require('../../assets/profile.png');
// Si prefieres usar una imagen de internet:
// const profileImageSource = { uri: 'https://via.placeholder.com/150' };

const PerfilScreen = () => {
  const userData = {
    nombre: 'Leonardo Vallejo',
    correo: 'vallejo@gmail.com',
    telefono: '555-123-4567',
    direccion: 'UTD #123, Ciudad Durango',
    fechaNacimiento: '15/04/1990',
  };

  return (
    <View style={globalStyles.container}>
      <Header title="Mi Perfil" />
      
      <View style={globalStyles.pageContent}>
        <View style={globalStyles.profileInfo}>
          <Image 
            source={profileImageSource}
            style={globalStyles.profileImage}
          />
          
          <Text style={styles.profileName}>{userData.nombre}</Text>
        </View>
        
        <View style={styles.infoContainer}>
          <InfoItem icon="mail" label="Correo:" value={userData.correo} />
          <InfoItem icon="call" label="Teléfono:" value={userData.telefono} />
          <InfoItem icon="location" label="Dirección:" value={userData.direccion} />
          <InfoItem icon="calendar" label="Fecha de Nacimiento:" value={userData.fechaNacimiento} />
        </View>
      </View>
    </View>
  );
};

const InfoItem = ({ icon, label, value }) => (
  <View style={styles.infoItem}>
    <Text style={styles.infoLabel}>{label}</Text>
    <Text style={styles.infoValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  infoContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  infoItem: {
    flexDirection: 'row',
    marginVertical: 8,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
  },
  infoLabel: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4a4a4a',
  },
  infoValue: {
    flex: 2,
    fontSize: 16,
    color: '#6a6a6a',
  },
});

export default PerfilScreen;