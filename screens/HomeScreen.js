import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catálogo de Produtos</Text>
      <Text style={styles.subtitle}>
        Um app simples para visualizar uma lista de produtos em componentes personalizados.
      </Text>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=60' }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Products')}>
          <Text style={styles.buttonText}>Ver Produtos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonSecondary]} onPress={() => navigation.navigate('About')}>
          <Text style={styles.buttonText}>Sobre o App</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginTop: 8
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 12,
    color: '#444'
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 16
  },
  buttons: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  },
  button: {
    flex: 1,
    backgroundColor: '#2563eb',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 6
  },
  buttonSecondary: {
    backgroundColor: '#10b981'
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600'
  }
});
