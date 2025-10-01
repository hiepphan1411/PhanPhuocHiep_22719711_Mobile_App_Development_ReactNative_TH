import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { useState } from 'react';

export default function ListBikePage() {
  const [favorites, setFavorites] = useState({});
  const [activeFilter, setActiveFilter] = useState('All');

  const bikes = [
    {
      "createdAt": "2025-09-30T10:32:35.389Z",
      "name": "Pinarello",
      "url": "https://res.cloudinary.com/dna6pzryj/image/upload/v1759280674/1_ka1tjs.png",
      "price": 1800,
      "type": "Mountain",
      "id": "1"
    },
    {
      "createdAt": "2025-09-30T14:45:32.261Z",
      "name": "Pina Mountai",
      "url": "https://res.cloudinary.com/dna6pzryj/image/upload/v1759280675/6_jg4pvc.png",
      "price": 1700,
      "type": "Mountain",
      "id": "2"
    },
    {
      "createdAt": "2025-09-30T15:20:10.123Z",
      "name": "Pina Bike",
      "url": "https://res.cloudinary.com/dna6pzryj/image/upload/v1759280674/1_ka1tjs.png",
      "price": 1500,
      "type": "Roadbike",
      "id": "3"
    },
    {
      "createdAt": "2025-09-30T16:10:22.456Z",
      "name": "Pinarello",
      "url": "https://res.cloudinary.com/dna6pzryj/image/upload/v1759280675/6_jg4pvc.png",
      "price": 1900,
      "type": "Roadbike",
      "id": "4"
    },
    {
      "createdAt": "2025-09-30T17:30:45.789Z",
      "name": "Pinarello",
      "url": "https://res.cloudinary.com/dna6pzryj/image/upload/v1759280674/1_ka1tjs.png",
      "price": 2700,
      "type": "Mountain",
      "id": "5"
    },
    {
      "createdAt": "2025-09-30T18:45:33.321Z",
      "name": "Pinarello",
      "url": "https://res.cloudinary.com/dna6pzryj/image/upload/v1759280675/6_jg4pvc.png",
      "price": 1350,
      "type": "Mountain",
      "id": "6"
    }
  ];

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

  const renderItem = ({ item: bike }) => {
    return (
      <View style={styles.bikeCard}>
        <TouchableOpacity 
          style={styles.favoriteButton}
          onPress={() => toggleFavorite(bike.id)}
        >
          <Text style={styles.heartIcon}>
            {favorites[bike.id] ? '❤️' : '🤍'}
          </Text>
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
        <Text style={styles.headerText}>
          The world's Best Bike
        </Text>
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

      <View style={styles.bikeSection}>
        <FlatList
          data={filteredBikes}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: '100vh',
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