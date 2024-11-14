import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { api } from '../services/api';
import { COLORS } from '../constants/colors';
import EventCard from '../components/EventCard';

const EventScreen = ({ navigation }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const data = await api.getEvents();
      setEvents(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const renderEventCard = ({ item }) => (
    <EventCard
      event={item}
      onPress={() => navigation.navigate('EventDetail', { event: item })}
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
      <FlatList
        data={events}
        renderItem={renderEventCard}
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
  list: {
    padding: 10,
  },
});

export default EventScreen;