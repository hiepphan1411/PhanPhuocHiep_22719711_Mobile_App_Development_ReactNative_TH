import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
  Dimensions,
  ScrollView,
} from 'react-native';

const { width } = Dimensions.get('window');

const GalleryApp = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isGridView, setIsGridView] = useState(false);
  const [featuredImages, setFeaturedImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('https://picsum.photos/v2/list?page=1&limit=20');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setImages(data);
        
        setFeaturedImages(data.slice(0, 5));
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const toggleView = () => {
    setIsGridView(!isGridView);
  };

  const renderImageItem = ({ item }) => (
    <View style={[styles.imageItem, isGridView && styles.gridItem]}>
      <Image
        source={{ uri: item.download_url }}
        style={[styles.image, isGridView && styles.gridImage]}
        resizeMode="cover"
      />
      <Text style={styles.imageAuthor}>{item.author}</Text>
    </View>
  );

  const renderFeaturedItem = ({ item }) => (
    <View style={styles.featuredItem}>
      <Image
        source={{ uri: item.download_url }}
        style={styles.featuredImage}
        resizeMode="cover"
      />
      <Text style={styles.featuredAuthor}>{item.author}</Text>
    </View>
  );

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#2196F3" barStyle="light-content" />
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#2196F3" />
          <Text style={styles.loadingText}>Loading Gallery...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#2196F3" barStyle="light-content" />
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Gallery App</Text>
        <TouchableOpacity style={styles.viewToggle} onPress={toggleView}>
          <Text style={styles.viewToggleText}>
            {isGridView ? 'Switch to List View' : 'Switch to Grid View'}
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Images</Text>
          <FlatList
            horizontal
            data={featuredImages}
            renderItem={renderFeaturedItem}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.featuredListContent}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>All Images</Text>
          <FlatList
            data={images}
            renderItem={renderImageItem}
            keyExtractor={(item) => item.id}
            numColumns={isGridView ? 2 : 1}
            key={isGridView ? 'grid' : 'list'} numColumns
            scrollEnabled={false} 
            contentContainerStyle={[
              styles.imageListContent,
              isGridView && styles.gridListContent
            ]}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About This Gallery</Text>
          <View style={styles.aboutCard}>
            <Text style={styles.aboutText}>
              This is a gallery app showcasing images from various photographers.
              You can view the images in list or grid format. The featured section highlights
              some of our favorite picks.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#2196F3',
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  viewToggle: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  viewToggleText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  scrollView: {
    flex: 1,
  },
  section: {
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginVertical: 8,
    color: '#333',
  },
  featuredListContent: {
    paddingLeft: 16,
    paddingRight: 8,
  },
  featuredItem: {
    marginRight: 8,
    width: width * 0.7,
    maxWidth: 280,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  featuredImage: {
    height: 180,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  featuredAuthor: {
    padding: 10,
    fontSize: 14,
    fontWeight: '500',
  },
  imageListContent: {
    padding: 8,
  },
  gridListContent: {
    justifyContent: 'space-between',
  },
  imageItem: {
    backgroundColor: 'white',
    marginHorizontal: 8,
    marginVertical: 8,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  gridItem: {
    flex: 1,
    maxWidth: '46%',
  },
  image: {
    height: 220,
    width: '100%',
  },
  gridImage: {
    height: 150,
  },
  imageAuthor: {
    padding: 12,
    fontSize: 14,
    fontWeight: '500',
  },
  aboutCard: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginBottom: 20,
    padding: 16,
    borderRadius: 10,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  aboutText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#555',
  },
});

export default GalleryApp;
