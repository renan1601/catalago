import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Produto({ id, nome, preco, estoque, categoria }) {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.preco}>R$ {preco.toFixed(2)}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.info}>Estoque: {estoque}</Text>
        <Text style={styles.info}>Categoria: {categoria}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f8fafc',
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  nome: {
    fontSize: 16,
    fontWeight: '600'
  },
  preco: {
    fontSize: 16,
    fontWeight: '700'
  },
  info: {
    fontSize: 14,
    color: '#555',
    marginTop: 6
  }
});
