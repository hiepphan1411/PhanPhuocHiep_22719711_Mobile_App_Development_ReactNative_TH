import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>My App</Text>
      </View>
      // <DrawerItemList {...props} />
      <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
        <Text style={{ padding: 16, fontSize: 18 }}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
        <Text style={{ padding: 16, fontSize: 18 }}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Settings')}>
        <Text style={{ padding: 16, fontSize: 18 }}>Settings</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;