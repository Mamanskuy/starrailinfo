import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { COLORS } from '../constants/colors';

const EventDetailScreen = ({ route }) => {
  const { event } = route.params;

  const openEventLink = async () => {
    try {
      await Linking.openURL(event.url);
    } catch (error) {
      console.error('Error opening URL:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: event.banner[0] }}
        style={styles.banner}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.title}>{event.title}</Text>
        <Text style={styles.description}>{event.description}</Text>
        <TouchableOpacity
          style={styles.linkButton}
          onPress={openEventLink}
        >
          <Text style={styles.linkButtonText}>Kunjungi Halaman Event</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  banner: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: COLORS.black,
    lineHeight: 24,
    marginBottom: 20,
  },
  linkButton: {
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  linkButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EventDetailScreen;