import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';

export default function ListBikePage() {
  const [favorites, setFavorites] = useState({});
  const [activeFilter, setActiveFilter] = useState('All');
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    fetch("https://68d33bc4cc7017eec5464ccd.mockapi.io/lab5b")
      .then((res) => res.json())
      .then((data) => {
        setBikes(data);
      })
  }, [])
  const filters = ['All', 'Roadbike', 'Mountain'];

  const toggleFavorite = (id) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredBikes = activeFilter === 'All' 
    ? bikes 
    : bikes.filter(bike => bike.type === activeFilter);
  // <Text style={styles.heartIcon}>
  //   {favorites[bike.id] ? '' : '🤍'}
  // </Text>
  const renderItem = ({ item: bike }) => {
    return (
      <View style={styles.bikeCard}>
        <TouchableOpacity 
          style={styles.favoriteButton}
          onPress={() => toggleFavorite(bike.id)}
        >
        </TouchableOpacity>
        <View style={styles.imageWrapper}>
          <Image 
            source={{ uri: bike.url }} 
            style={styles.bikeImage}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.bikeName}>{bike.name}</Text>
        <Text style={styles.bikePrice}>$ {bike.price}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <Text style={styles.headerText}>The world's Best Bike</Text>
      </View>
      <View style={styles.filterSection}>
          {filters.map(filter => (
            <TouchableOpacity
              key={filter}
              style={[
              styles.filterButton,
              activeFilter === filter && styles.filterButtonActive
              ]}
               onPress={() => setActiveFilter(filter)}
            >
              <Text style={[
                    styles.filterText,
                    activeFilter === filter && styles.filterTextActive
              ]}>
                      {filter}
              </Text>
            </TouchableOpacity>
              ))}
            </View>
      <FlatList
        data={filteredBikes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
      />
    </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9F9',
    padding: 20,
  },
  headerSection: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  headerText: {
    fontSize: 28,
    color: '#E94141',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  filterSection: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
    paddingVertical: 10,
  },
  filterButton: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#E0E0E0',
    backgroundColor: 'white',
  },
  filterButtonActive: {
    borderColor: '#E94141',
  },
  filterText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#999',
  },
  filterTextActive: {
    color: '#E94141',
  },
  bikeSection: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  bikeCard: {
    backgroundColor: '#FFF0E6',
    borderRadius: 12,
    padding: 16,
    width: '48%',
    position: 'relative',
    alignItems: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  },
  favoriteButton: {
    position: 'absolute',
    top: 12,
    left: 12,
    zIndex: 10,
    padding: 4,
  },
  heartIcon: {
    fontSize: 24,
  },
  imageWrapper: {
    width: '100%',
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  bikeImage: {
    width: '100%',
    height: '100%',
  },
  bikeName: {
    color: '#666',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
    textAlign: 'center',
  },
  bikePrice: {
    color: '#F4A460',
    fontSize: 18,
    fontWeight: 'bold',
  },
});