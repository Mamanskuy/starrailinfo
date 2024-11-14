import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { api } from '../services/api';
import { COLORS } from '../constants/colors';
import CharacterCard from '../components/CharacterCard';

const CharacterListScreen = ({ navigation }) => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [sortAscending, setSortAscending] = useState(true);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    try {
      const data = await api.getCharacters();
      setCharacters(data);
      setFilteredCharacters(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const filtered = characters.filter(character =>
      character.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const sorted = [...filtered].sort((a, b) => {
      if (sortAscending) {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setFilteredCharacters(sorted);
  }, [searchQuery, sortAscending, characters]);

  const renderCharacterCard = ({ item }) => (
    <CharacterCard
      character={item}
      onPress={() => navigation.navigate('CharacterDetail', { character: item })}
    />
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search characters..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <View style={styles.sortButton}>
        <TouchableOpacity
          onPress={() => setSortAscending(!sortAscending)}
          style={styles.sortButtonContainer}
        >
          <Text style={styles.sortButtonText}>
            Sort: {sortAscending ? 'A-Z' : 'Z-A'}
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredCharacters}
        renderItem={renderCharacterCard}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBar: {
    margin: 10,
    padding: 10,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.accent,
  },
  list: {
    padding: 10,
  },
  sortButton: {
    alignItems: 'flex-end',
    paddingRight: 15,
    marginBottom: 10,
  },
  sortButtonContainer: {
    backgroundColor: COLORS.primary,
    padding: 8,
    borderRadius: 8,
  },
  sortButtonText: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
});

export default CharacterListScreen;