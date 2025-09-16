import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState('8');
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecial, setIncludeSpecial] = useState(false);

  const generatePassword = () => {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?/';
    
    let availableChars = '';
    
    if (includeLowercase) availableChars += lowercaseChars;
    if (includeUppercase) availableChars += uppercaseChars;
    if (includeNumbers) availableChars += numberChars;
    if (includeSpecial) availableChars += specialChars;
    
    if (availableChars === '') {
      availableChars = lowercaseChars;
      setIncludeLowercase(true);
    }
    
    const length = parseInt(passwordLength) || 8;
    let newPassword = '';
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * availableChars.length);
      newPassword += availableChars[randomIndex];
    }
    
    setPassword(newPassword);
  };

  const renderCheckbox = (value, onPress) => (
    <TouchableOpacity 
      style={[styles.checkbox, value ? styles.checkboxChecked : {}]} 
      onPress={onPress}
    >
      {value && <Ionicons name="checkmark" size={18} color="white" />}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PASSWORD GENERATOR</Text>
      
      <View style={styles.passwordDisplay}>
        <Text style={styles.passwordText}>{password}</Text>
      </View>
      
      <View style={styles.optionContainer}>
        <Text style={styles.optionLabel}>Password length</Text>
        <TextInput 
          style={styles.lengthInput}
          value={passwordLength}
          onChangeText={setPasswordLength}
          keyboardType="numeric"
        />
      </View>
      
      <View style={styles.optionContainer}>
        <Text style={styles.optionLabel}>Include lower case letters</Text>
        {renderCheckbox(includeLowercase, () => setIncludeLowercase(!includeLowercase))}
      </View>
      
      <View style={styles.optionContainer}>
        <Text style={styles.optionLabel}>Include upcase letters</Text>
        {renderCheckbox(includeUppercase, () => setIncludeUppercase(!includeUppercase))}
      </View>
      
      <View style={styles.optionContainer}>
        <Text style={styles.optionLabel}>Include number</Text>
        {renderCheckbox(includeNumbers, () => setIncludeNumbers(!includeNumbers))}
      </View>
      
      <View style={styles.optionContainer}>
        <Text style={styles.optionLabel}>Include special symbol</Text>
        {renderCheckbox(includeSpecial, () => setIncludeSpecial(!includeSpecial))}
      </View>
      
      <TouchableOpacity style={styles.generateButton} onPress={generatePassword}>
        <Text style={styles.generateButtonText}>GENERATE PASSWORD</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2050',
    padding: 20,
    borderRadius: 20,
    maxWidth: 400,
    alignSelf: 'center',
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  passwordDisplay: {
    backgroundColor: '#10132b',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 4,
  },
  passwordText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  optionLabel: {
    color: 'white',
    fontSize: 14,
  },
  lengthInput: {
    backgroundColor: 'white',
    width: 60,
    height: 30,
    textAlign: 'center',
  },
  checkbox: {
    width: 22,
    height: 22,
    backgroundColor: 'white',
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#3498db',
  },
  generateButton: {
    backgroundColor: '#3a42ad',
    borderRadius: 4,
    padding: 14,
    alignItems: 'center',
    marginTop: 20,
  },
  generateButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
