import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LoginAdmin() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>LOGIN</Text>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <View style={styles.iconContainer}>
            <Ionicons name="person" size={24} color="black" />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="#333"
          />
        </View>

        <View style={styles.inputWrapper}>
          <View style={styles.iconContainer}>
            <Ionicons name="lock-closed" size={24} color="black" />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#333"
            secureTextEntry
          />
          <TouchableOpacity style={styles.eyeIcon}>
            <Ionicons name="eye" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.createAccountButton}>
          <Text style={styles.createAccountText}>CREATE ACCOUNT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCC00', 
    padding: 20,
    justifyContent: 'center',
  },
  headerContainer: {
    marginBottom: 60,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E6BE33', 
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 4,
    marginBottom: 20,
    height: 50,
    width: '100%',
  },
  iconContainer: {
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    color: '#000',
  },
  eyeIcon: {
    padding: 10,
  },
  loginButton: {
    backgroundColor: '#000000',
    width: '100%',
    padding: 15,
    alignItems: 'center',
    borderRadius: 4,
    marginTop: 10,
    marginBottom: 20,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  createAccountButton: {
    marginTop: 10,
  },
  createAccountText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});