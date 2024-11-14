import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, View } from 'react-native';
import { COLORS } from '../constants/colors';

const EventCard = ({ event, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        source={{ uri: event.banner[0] }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>{event.title}</Text>
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
    height: 180,
  },
  info: {
    padding: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.black,
  }
});

export default EventCard;