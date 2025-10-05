import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function StartedPage({ navigation }) {
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
            source={require('../assets/bikefour.png')}
            style={styles.bikeImage}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.title}>POWER BIKE{'\n'}SHOP</Text>
      </View>

      <View style={styles.buttonSection}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ListBikePage')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5F5',
    padding: 20,
    justifyContent: 'space-between',
  },
  headerSection: {
    alignItems: 'center',
    marginTop: 40,
  },
  headerText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#000',
    lineHeight: 24,
  },
  bikeSection: {
    alignItems: 'center',
  },
  imageContainer: {
    backgroundColor: '#FFE5E5',
    borderRadius: 12,
    padding: 30,
    marginBottom: 30,
    width: '90%',
    alignItems: 'center',
  },
  bikeImage: {
    width: '100%',
    height: 250,
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
    alignItems: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#E85D5D',
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 50,
    alignItems: 'center',
    width: '90%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
