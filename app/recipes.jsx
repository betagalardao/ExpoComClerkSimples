import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Image, Text } from 'react-native';

export default function Recipes() {
  const [searchQuery, setSearchQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&number=10&apiKey=c40f03a7c6e34b4580542402c0aeffd1`
      );
      const data = await response.json();
      setRecipes(data.results || []);
    } catch (error) {
      console.error('Erro ao buscar receitas:', error);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Digite o nome da receita"
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />
      <Button title="Pesquisar" onPress={handleSearch} />
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 10 }}>
            <Text>{item.title}</Text>
            <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
          </View>
        )}
      />
    </View>
  );
}