import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LoginCMEye() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/icon_eye.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Ionicons name="person-outline" size={24} color="#4285F4" />
          <TextInput
            style={styles.input}
            placeholder="Please input user name"
            placeholderTextColor="#AAAAAA"
          />
        </View>

        <View style={styles.inputWrapper}>
          <Ionicons name="lock-closed-outline" size={24} color="#4285F4" />
          <TextInput
            style={styles.input}
            placeholder="Please input password"
            placeholderTextColor="#AAAAAA"
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>
        
        <View style={styles.optionsContainer}>
          <TouchableOpacity>
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
          
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>Other Login Methods</Text>
          <View style={styles.divider} />
        </View>
        
        <View style={styles.socialLoginContainer}>
          <TouchableOpacity style={[styles.socialButton, styles.blueButton]}>
            <Ionicons name="person-add" size={24} color="white" />
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.socialButton, styles.orangeButton]}>
            <Ionicons name="wifi" size={24} color="white" />
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
            <Ionicons name="logo-facebook" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  inputContainer: {
    width: '100%',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
    marginBottom: 25,
    paddingBottom: 5,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#333333',
  },
  loginButton: {
    backgroundColor: '#4285F4',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  registerText: {
    color: '#333333',
    fontSize: 16,
  },
  forgotPasswordText: {
    color: '#333333',
    fontSize: 16,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#DDDDDD',
  },
  dividerText: {
    paddingHorizontal: 10,
    color: '#333333',
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blueButton: {
    backgroundColor: '#46B4FF',
  },
  orangeButton: {
    backgroundColor: '#FDA850',
  },
  facebookButton: {
    backgroundColor: '#3B5998',
  },
});