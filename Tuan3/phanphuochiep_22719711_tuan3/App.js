// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import { StyleSheet, View, Text } from 'react-native';
import ForgetPassword from './components/ForgetPassword'
import VerifiCation from './components/Verification'

export default function App() {
  // return (
  //   <View
  //     style={[
  //       styles.container,
  //       {
  //         flexDirection: 'column',
  //         minHeight: '100vh',
  //         background:
  //           'linear-gradient(to bottom, #E0F7FA 0%, #E0F7FA 60%, #00BCD4 100%)',
  //         padding: '20px',
  //         fontFamily: 'Arial, sans-serif',
  //       },
  //     ]}>
  //     <View
  //       style={{
  //         flex: 2,
  //         display: 'flex',
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //         paddingTop: '60px',
  //       }}>
  //       <View
  //         style={{
  //           width: '80px',
  //           height: '80px',
  //           borderRadius: '50%',
  //           border: '8px solid #000000',
  //           backgroundColor: 'transparent',
  //         }}></View>
  //     </View>
  //     <View
  //       style={{
  //         flex: 2,
  //         display: 'flex',
  //         flexDirection: 'column',
  //         justifyContent: 'center',

  //         padding: '0 40px',
  //       }}>
  //       <Text
  //         style={{
  //           fontSize: '28px',
  //           fontWeight: 'bold',
  //           color: '#000000',
  //           marginBottom: '20px',
  //           letterSpacing: '1px',
  //           lineHeight: '1.2',
  //           alignItems: 'center',
  //           textAlign: 'center',
  //         }}>
  //         GROW YOUR BUSINESS
  //       </Text>
  //       <Text
  //         style={{
  //           fontSize: '16px',
  //           color: '#333333',
  //           lineHeight: '1.5',
  //           maxWidth: '300px',
  //           alignItems: 'center',
  //           textAlign: 'center',
  //         }}>
  //         We will help you to grow your business using online server
  //       </Text>
  //     </View>
  //     <View
  //       style={{
  //         flex: 1,
  //         display: 'flex',
  //         flexDirection: 'row',
  //         justifyContent: 'space-around',
  //         alignItems: 'center',
  //         padding: '20px 40px',
  //         gap: '20px',
  //       }}>
  //       <button
  //         style={{
  //           backgroundColor: '#FFC107',
  //           border: 'none',
  //           padding: '15px 30px',
  //           borderRadius: '8px',
  //           fontSize: '12px',
  //           fontWeight: 'bold',
  //           color: '#000000',
  //           cursor: 'pointer',
  //           minWidth: '100px',
  //           boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
  //           transition: 'all 0.3s ease',
  //         }}>
  //         LOGIN
  //       </button>
  //       <button
  //         style={{
  //           backgroundColor: '#FFC107',
  //           border: 'none',
  //           padding: '15px 30px',
  //           borderRadius: '8px',
  //           fontSize: '12px',
  //           fontWeight: 'bold',
  //           color: '#000000',
  //           cursor: 'pointer',
  //           minWidth: '100px',
  //           boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
  //           transition: 'all 0.3s ease',
  //         }}>
  //         SIGN UP
  //       </button>
  //     </View>
  //   </View>
  // );
  return <>
      <VerifiCation />
    </>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
