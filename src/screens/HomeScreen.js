import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from 'react-native';
import { COLORS } from '../constants/colors';

const HomeScreen = ({ navigation }) => {
  const { width } = useWindowDimensions();

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Honkai: Star Rail</Text>
        <Text style={styles.subtitle}>
          Selamat Datang Trailblazer!
        </Text>
      </View>

      {/* Main Features */}
      <View style={styles.featuresContainer}>
        <TouchableOpacity
          style={styles.featureCard}
          onPress={() => navigation.navigate('Characters')}
        >
          <Text style={styles.featureTitle}>Karakter</Text>
          <Text style={styles.featureDescription}>
            Jelajahi karakter dan detailnya
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.featureCard}
          onPress={() => navigation.navigate('Events')}
        >
          <Text style={styles.featureTitle}>Events</Text>
          <Text style={styles.featureDescription}>
           Periksa Event Saat Ini dan Yang Akan Datang
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.featureCard}
          onPress={() => navigation.navigate('RedeemCode')}
        >
          <Text style={styles.featureTitle}>Redeem Codes</Text>
          <Text style={styles.featureDescription}>
           Dapatkan Redeem Code
          </Text>
        </TouchableOpacity>
      </View>

      {/* Game Description */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionTitle}>Tentang Game</Text>
        <Text style={styles.descriptionText}>
        Honkai: Star Rail adalah RPG fantasi ruang angkasa berbasis giliran yang dikembangkan dan diterbitkan oleh HoYoverse untuk platform PC, PS5, dan iOS/Android. Bergabunglah bersama kami di Astral Express, Trailblazers!</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    padding: 20,
    backgroundColor: COLORS.primary,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.white,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.white,
    textAlign: 'center',
    marginTop: 10,
  },
  featuresContainer: {
    padding: 20,
  },
  featureCard: {
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 5,
  },
  featureDescription: {
    fontSize: 14,
    color: COLORS.black,
  },
  descriptionContainer: {
    padding: 20,
    backgroundColor: COLORS.secondary,
    margin: 20,
    borderRadius: 15,
  },
  descriptionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: COLORS.black,
    lineHeight: 24,
  },
});

export default HomeScreen;