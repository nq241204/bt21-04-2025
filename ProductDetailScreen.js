import React from 'react'; 
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProductDetailScreen({ route, navigation }) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={typeof product.image === 'number' ? product.image : { uri: product.image.uri }}
        style={styles.image}
      />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Text style={styles.description}>
        Apples are rich in fiber and vitamin C. They may aid weight loss and improve gut and heart health.
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add To Basket</Text>
      </TouchableOpacity>

      {/* Nút quay lại HomeScreen */}
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()} // Quay lại màn hình trước đó (HomeScreen)
      >
        <Text style={styles.backButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, backgroundColor: '#fff', alignItems: 'center' },
  image: { width: 200, height: 200, marginBottom: 20, resizeMode: 'contain' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  price: { fontSize: 18, color: '#555', marginBottom: 10 },
  description: { textAlign: 'center', color: '#888', marginBottom: 20, paddingHorizontal: 10 },
  button: {
    backgroundColor: 'green',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 20,
  },
  buttonText: { color: '#fff', fontSize: 16 },
  backButton: {
    marginTop: 20,
    backgroundColor: '#ddd',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  backButtonText: { color: '#000', fontSize: 16 },
});
