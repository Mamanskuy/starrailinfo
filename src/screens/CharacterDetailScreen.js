import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import { COLORS } from '../constants/colors';

const CharacterDetailScreen = ({ route }) => {
  const { character } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: character.img }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{character.name}</Text>
        <View style={styles.rarityContainer}>
          <Text style={styles.rarity}>{'★'.repeat(character.rarity)}</Text>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Path</Text>
            <Text style={styles.statValue}>{character.path}</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Element</Text>
            <Text style={styles.statValue}>{character.element}</Text>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Introduction</Text>
          <Text style={styles.description}>{character.introduction}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  image: {
    width: '100%',
    height: 300,
  },
  infoContainer: {
    padding: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.black,
    textAlign: 'center',
  },
  rarityContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  rarity: {
    fontSize: 24,
    color: '#FFD700',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  statBox: {
    backgroundColor: COLORS.secondary,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    minWidth: 120,
  },
  statLabel: {
    fontSize: 14,
    color: COLORS.black,
    marginBottom: 5,
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  descriptionContainer: {
    backgroundColor: COLORS.white,
    padding: 20,
    borderRadius: 15,
    marginTop: 20,
  },
  descriptionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: COLORS.black,
    lineHeight: 24,
  },
});

export default CharacterDetailScreen;