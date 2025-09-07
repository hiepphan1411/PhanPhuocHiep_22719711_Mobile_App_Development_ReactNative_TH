// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import { StyleSheet, View, Text } from 'react-native';
import ForgetPassword from './components/ForgetPassword'
import VerifiCation from './components/Verification'
import Login from './components/Login'
import Register from './components/Register'
import LoginAdmin from './components/Login_admin'
import LoginXMEye from './components/LoginXMEye'
import MenuLogin from './components/MenuLogin'

export default function App() {
  return <>
      <MenuLogin />
    </>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
