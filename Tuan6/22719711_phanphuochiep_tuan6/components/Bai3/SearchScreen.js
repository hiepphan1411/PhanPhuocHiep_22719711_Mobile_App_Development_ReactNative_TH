import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Search Screen</Text>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="gray" style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Search..."
          value={searchText}
          onChangeText={setSearchText}
          placeholderTextColor="gray"
        />
        {searchText !== '' && (
          <Ionicons
            name="close-circle"
            size={20}
            color="gray"
            style={styles.clearIcon}
            onPress={() => setSearchText('')}
          />
        )}
      </View>
      {searchText !== '' && (
        <Text style={styles.searchResult}>
          Searching for: {searchText}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 10,
    marginTop: 20,
    elevation: 3,
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    padding: 12,
    fontSize: 16,
  },
  clearIcon: {
    marginLeft: 10,
  },
  searchResult: {
    marginTop: 20,
    fontSize: 16,
    color: '#555',
  },
});

export default SearchScreen;