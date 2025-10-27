import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Produto from '../components/Produto';

const PRODUTOS = [
  { id: '1', nome: 'Camiseta Básica', preco: 39.9, estoque: 12, categoria: 'Roupas' },
  { id: '2', nome: 'Fone de Ouvido', preco: 129.0, estoque: 5, categoria: 'Eletrônicos' },
  { id: '3', nome: 'Caderno A5', preco: 15.5, estoque: 30, categoria: 'Papelaria' },
  { id: '4', nome: 'Caneca Cerâmica', preco: 24.0, estoque: 8, categoria: 'Casa' },
  { id: '5', nome: 'Smartwatch', preco: 599.9, estoque: 3, categoria: 'Eletrônicos' }
];

export default function ProductsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Produtos</Text>
      <FlatList
        data={PRODUTOS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Produto {...item} />}
        contentContainerStyle={{ paddingBottom: 40 }}
        style={{ width: '100%' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12
  }
});
