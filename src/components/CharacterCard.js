import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, View } from 'react-native';
import { COLORS } from '../constants/colors';

const CharacterCard = ({ character, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        source={{ uri: character.img }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.info}>
        <Text style={styles.name}>{character.name}</Text>
        <Text style={styles.path}>{character.path}</Text>
        <View style={styles.rarity}>
          {'★'.repeat(character.rarity)}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 15,
    margin: 10,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  info: {
    padding: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  path: {
    fontSize: 14,
    color: COLORS.accent,
    marginTop: 5,
  },
  rarity: {
    flexDirection: 'row',
    marginTop: 5,
    color: '#FFD700',
  }
});

export default CharacterCard;