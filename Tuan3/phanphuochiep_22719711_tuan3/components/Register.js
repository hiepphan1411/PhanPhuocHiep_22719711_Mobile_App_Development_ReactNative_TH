import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Register() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>REGISTER</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#333"
        />

        <TextInput
          style={styles.input}
          placeholder="Phone"
          placeholderTextColor="#333"
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#333"
        />

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#333"
            secureTextEntry
          />
          <TouchableOpacity style={styles.eyeIcon}>
            <Ionicons name="eye" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Birthday"
          placeholderTextColor="#333"
        />

        <View style={styles.genderContainer}>
          <View style={styles.genderOption}>
            <TouchableOpacity style={styles.radioButton}>
              <View style={styles.radioInner}></View>
            </TouchableOpacity>
            <Text style={styles.genderText}>Male</Text>
          </View>
          
          <View style={styles.genderOption}>
            <TouchableOpacity style={styles.radioButton}>
              {/* Empty view to represent unchecked radio button */}
            </TouchableOpacity>
            <Text style={styles.genderText}>Female</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerButtonText}>REGISTER</Text>
        </TouchableOpacity>
        
        <Text style={styles.termsText}>
          When you agree to terms and conditions
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5f5e5',
    padding: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#d7e8d7',
    width: '100%',
    padding: 15,
    marginBottom: 10,
    borderRadius: 4,
  },
  passwordContainer: {
    position: 'relative',
    width: '100%',
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  genderContainer: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 10,
  },
  genderOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 30,
    marginBottom: 10,
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  radioInner: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#000',
  },
  genderText: {
    fontSize: 16,
    color: '#000',
  },
  registerButton: {
    backgroundColor: '#d55b45',
    width: '100%',
    padding: 15,
    alignItems: 'center',
    borderRadius: 4,
    marginTop: 10,
    marginBottom: 10,
  },
  registerButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  termsText: {
    fontSize: 14,
    color: '#333',
    marginTop: 10,
  },
});