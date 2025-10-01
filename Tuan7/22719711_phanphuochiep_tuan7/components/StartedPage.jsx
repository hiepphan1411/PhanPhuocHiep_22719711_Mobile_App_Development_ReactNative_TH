import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function StartedPage() {
  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <Text style={styles.headerText}>
          A premium online store for{'\n'}sporter and their stylish choice
        </Text>
      </View>

      <View style={styles.bikeSection}>
        <View style={styles.imageContainer}>
          <Image 
            source={require("../assets/bikefour.png")} 
            style={styles.bikeImage}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.title}>
          POWER BIKE{'\n'}SHOP
        </Text>
      </View>


      <View style={styles.buttonSection}>
        <TouchableOpacity style={styles.button}>
          Get Started
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: '100vh',
    backgroundColor: '#FFF5F5',
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  headerSection: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 20,
  },
  headerText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#000',
    lineHeight: 24,
    fontWeight: '400',
  },
  bikeSection: {
    flex: 3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 0',
  },
  imageContainer: {
    backgroundColor: '#FFE5E5',
    borderRadius: 12,
    padding: 30,
    marginBottom: 30,
    width: '90%',
    maxWidth: 400,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bikeImage: {
    width: '100%',
    height: 250,
    maxWidth: 350,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    lineHeight: 30,
    letterSpacing: 1,
  },
  buttonSection: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
    paddingHorizontal: 20,
    marginTop: 30,
  },
  button: {
    backgroundColor: '#E85D5D',
    border: 'none',
    padding: '16px 50px',
    borderRadius: 30,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    cursor: 'pointer',
    width: '90%',
    maxWidth: 300,
    boxShadow: '0 4px 8px rgba(232, 93, 93, 0.3)',
    transition: 'all 0.3s ease',
    alignItems: 'center'
  },
});