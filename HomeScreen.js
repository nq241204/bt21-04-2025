import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

// Import hình ảnh cục bộ
import redAppleImage from '../assets/images/redApple.jpg';
import greenAppleImage from '../assets/images/greenApple.jpg';

const products = [
  {
    id: '1',
    name: 'Red Apple',
    price: '$4.99',
    image: redAppleImage, // Sử dụng hình ảnh cục bộ
  },
  {
    id: '2',
    name: 'Green Apple',
    price: '$5.49',
    image: greenAppleImage, // Sử dụng hình ảnh cục bộ
  },
];

export default function HomeScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('ProductDetail', { product: item })}
    >
      <Image source={item.image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to Apple Store 🍎</Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50, backgroundColor: '#fff' },
  heading: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  list: { paddingHorizontal: 20 },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginBottom: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  image: { width: 80, height: 80, marginRight: 15, borderRadius: 8 },
  info: { flex: 1 },
  title: { fontSize: 18, fontWeight: 'bold' },
  price: { fontSize: 16, color: '#555' },
});
