// You can import supported modules from npm
import { Card } from 'react-native-paper';

import { StyleSheet, View, Text, TextInput } from 'react-native';

export default function Verification() {
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
          flex: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '60px',
        }}>
        <Text 
          style={{
            fontSize: '40px',
            fontWeight: 'bold',
            letterSpacing: '1px'
          }}>
          CODE
        </Text>
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
            fontSize: '15px',
            fontWeight: 'bold',
            color: '#000000',
            marginBottom: '20px',
            lineHeight: '1.2',
            alignItems: 'center',
            textAlign: 'center',
          }}>
          VERIFICATION
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
          Enter online password sent on {"\n"} ++849092605798
        </Text>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          width: '100%',
          marginVertical: 10
        }}>
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <TextInput
              key = {index}
              style = {{
                width: 40,
                height: 40,
                borderWidth: 1,
                borderColor: "#000",
                textAlign: 'center',
                fontSize: '16'
              }}
              keyboardType="number-pad"
              maxLength={1}
              selectTextOnFocus>
            </TextInput>
          ))}
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