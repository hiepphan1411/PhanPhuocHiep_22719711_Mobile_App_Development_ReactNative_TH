import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Text style={styles.name}>Phan Phuoc Hiep</Text>
        <Text style={styles.username}>@hieppphan</Text>
      </View>

      <View style={styles.infoSection}>
        
        <View style={styles.infoItem}>
          <Text style={styles.infoText}>MSSV: 22719711</Text>
        </View>
        
        <View style={styles.infoItem}>
          <Ionicons name="location-outline" size={24} color="#555" />
          <Text style={styles.infoText}>Ho Chi Minh City, Vietnam</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: 'white',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 4,
  },
  avatarContainer: {
    borderRadius: 75,
    borderWidth: 5,
    borderColor: '#f0f0f0',
    overflow: 'hidden',
  },
  avatar: {
    width: 150,
    height: 150,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
  },
  username: {
    fontSize: 16,
    color: '#777',
    marginTop: 5,
  },
  infoSection: {
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 15,
    padding: 20,
    elevation: 2,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  infoText: {
    fontSize: 16,
    marginLeft: 15,
    color: '#333',
  },
});

export default ProfileScreen;