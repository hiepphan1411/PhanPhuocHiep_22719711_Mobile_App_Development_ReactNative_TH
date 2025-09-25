import { StyleSheet, Text, View } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';
import HomeScreen from './components/Bai3/HomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DemoApp from './components/Bai3/DemoApp'
const Stack = createNativeStackNavigator();
import DemoBai2 from './components/Bai2/DemoBai2'
import DemoBai4 from './components/Bai4/DemoBai4'
import DemoBai5 from './components/Bai5/DemoBai5'

export default function App() {
  return (
    //Bai 1, 2
      // <DemoBai2 />
    //Bai 3
    // <DemoApp/>
    //Bai 4
    // <DemoBai4 />
    //Bai 5
    <DemoBai5 />
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
