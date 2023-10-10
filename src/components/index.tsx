import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default function ListaDeItens() {
  const [itens, setItens] = useState<string[]>([]);
  const [novoItem, setNovoItem] = useState<string>('');

  const adicionarItem = () => {
    if (novoItem.trim() !== '') {
      setItens([...itens, novoItem]);
      setNovoItem('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Itens</Text>
      <FlatList
        data={itens}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Digite um novo item"
          value={novoItem}
          onChangeText={(text) => setNovoItem(text)}
        />
        <Button title="Adicionar" onPress={adicionarItem} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'blue'
  },
  item: {
    fontSize: 18,
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 8,
    paddingHorizontal: 8,
    backgroundColor: 'lightgray'
  },
});
