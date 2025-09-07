import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>LOGIN</Text>
      </View>

      <View style={styles.inputContainer}>
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

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>

        <Text style={styles.termsText}>
          When you agree to terms and conditions
        </Text>

        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
        </TouchableOpacity>

        <Text style={styles.orLoginText}>Or login with</Text>

        <View style={styles.socialLoginContainer}>
          <TouchableOpacity
            style={[styles.socialButton, styles.facebookButton]}>
            <Image
              style={styles.sizeLogo}
              source={require('../assets/facebook-logo-facebook-icon-transparent-free-png.webp')}
            />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.socialButton, styles.zaloButton]}>
            <Image
              style={styles.sizeLogo}
              source={require('../assets/Letter-Z-icon.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
            <Image
              style={styles.sizeLogo}
              source={require('../assets/gg-icon.png')}
            />
          </TouchableOpacity>
        </View>
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
    marginTop: 40,
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
    marginBottom: 20,
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
  loginButton: {
    backgroundColor: '#d55b45',
    width: '100%',
    padding: 15,
    alignItems: 'center',
    borderRadius: 4,
    marginTop: 10,
    marginBottom: 10,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  termsText: {
    fontSize: 14,
    color: '#333',
    marginTop: 10,
  },
  forgotPasswordText: {
    color: '#6a5acd',
    marginTop: 15,
    fontSize: 14,
  },
  orLoginText: {
    marginTop: 20,
    marginBottom: 20,
    color: '#333',
    fontSize: 14,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  socialButton: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 2,
    height: '50px',
  },
  facebookButton: {
    backgroundColor: '#0080ff',
  },
  zaloButton: {
    backgroundColor: '#3b88c3',
  },
  googleButton: {
    backgroundColor: '#e5f5e5',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  sizeLogo: {
    width: '50px',
    height: '50px',
  },
});
