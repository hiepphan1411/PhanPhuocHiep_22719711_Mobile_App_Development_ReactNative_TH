// You can import supported modules from npm
import { Card } from 'react-native-paper';

import { StyleSheet, View, Text, Image, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ForgetPassword() {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
          minHeight: '100vh',
          background:
            'linear-gradient(to bottom, #E0F7FA 0%, #E0F7FA 60%, #00BCD4 100%)',
          padding: '20px',
          fontFamily: 'Arial, sans-serif',
        },
      ]}>
      <View
        style={{
          flex: 3,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '60px',
        }}>
        <Image
        style={styles.tinyLogo}
        source={require('../assets/lock.png')}
      />
      </View>
      <View
        style={{
          flex: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 40px',
        }}>
        <Text
          style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#000000',
            marginBottom: '20px',
            letterSpacing: '1px',
            lineHeight: '1.2',
            alignItems: 'center',
            textAlign: 'center',
          }}>
          FORGET PASSWORD
        </Text>
        <Text
          style={{
            fontSize: '13px',
            color: '#333333',
            lineHeight: '1.5',
            maxWidth: '300px',
            alignItems: 'center',
            textAlign: 'center',
            paddingBottom: '15px',
            fontWeight: 'bold'
          }}>
          Provide your account’s email for which you want to reset your password
        </Text>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#e0e0e0',
          borderRadius: 4,
          paddingHorizontal: 10,
          height: 40,
          width: '100%'
        }}>
          <MaterialCommunityIcons name = "email-outline" size={24} color = "#666"/>
          <TextInput style = {{
              flex: '1',
              fontSize: '16',
              color: '#333',
              marginLeft: 10,
              border: 'none'
          }}
          keyboardType="email-address"
          autoCapitalize= "none"
          />
        </View>
      </View>
      <View
        style={{
          flex: 2,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: '20px 40px',
          gap: '20px',
        }}>
        <button
          style={{
            backgroundColor: '#FFC107',
            border: 'none',
            padding: '15px 30px',
            borderRadius: '8px',
            fontSize: '12px',
            fontWeight: 'bold',
            color: '#000000',
            cursor: 'pointer',
            minWidth: '100px',
            width: '100%',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease',
          }}>
          NEXT
        </button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});