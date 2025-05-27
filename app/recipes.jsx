import { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, Image, StyleSheet } from 'react-native';

export default function Inicio() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async () => {
    const appId = '052adf08';
    const appKey = '225843d7705b02b002860a4a24eb0440';
    const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setRecipes(data.hits);
    } catch (error) {
      console.error('Erro ao buscar receitas:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Digite um ingrediente (ex: frango)"
        value={query}
        onChangeText={setQuery}
        style={styles.input}
      />
      <Button title="Buscar Receitas" onPress={searchRecipes} />

      <FlatList
        data={recipes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.recipe.label}</Text>
            <Image source={{ uri: item.recipe.image }} style={styles.image} />
            <Text style={styles.link}>Fonte: {item.recipe.source}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, flex: 1, backgroundColor: '#fff' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  card: {
    marginBottom: 24,
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 8,
    elevation: 2,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  image: {
    height: 150,
    borderRadius: 8,
    marginTop: 8,
  },
  link: {
    marginTop: 6,
    fontSize: 12,
    color: '#777',
  },
});