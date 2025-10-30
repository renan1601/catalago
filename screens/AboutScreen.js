import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o App</Text>
      <Text style={styles.text}>
        Desenvolvedor: Renan de Oliveira Rogério
      </Text>
      <Text style={styles.text}>
        Habilidades: H1, H7, H9, H12
      </Text>
      <Text style={styles.text}>
        Este aplicativo foi criado como exercício para demonstrar navegação entre telas, componentes
        personalizados e exibição de uma lista de produtos em React Native.
      </Text>
      <Text style={styles.small}>
        (Este é um projeto exemplo — personalize com seu nome, foto e informações reais.)
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333'
  },
  small: {
    marginTop: 14,
    color: '#666'
  }
});
