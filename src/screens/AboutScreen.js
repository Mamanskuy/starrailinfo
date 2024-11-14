import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Linking,
} from 'react-native';
import { COLORS } from '../constants/colors';

const AboutScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileSection}>
        <Image
          source={require('../../assets/images/profile.jpg')} 
          style={styles.profileImage}
        />
        <Text style={styles.name}>Alman Kamal Mahdi</Text>
        <Text style={styles.nim}>21120122120024</Text>
        <Text style={styles.major}>Teknik Komputer 2022</Text>
      </View>

      <View style={styles.appInfoSection}>
        <Text style={styles.sectionTitle}>Tentang Aplikasi Starrailinfo</Text>
        <Text style={styles.description}>
        Starrailinfo merupakan sebuah aplikasi untuk pendamping pemain Game Honkai: Star Rail.
        Aplikasi ini menyediakan informasi tentang karakter, event terbaru, dan kode redeem aktif.
        </Text>
        <Text style={styles.features}>Fitur Utama:</Text>
        <Text style={styles.featureItem}>• Informasi Beberapa Karakter Honkai: Starrail</Text>
        <Text style={styles.featureItem}>• Informasi Tentang Event Game</Text>
        <Text style={styles.featureItem}>• Informasi Reedem Code</Text>
      </View>

      <View style={styles.creditSection}>
        <Text style={styles.sectionTitle}>Credits</Text>
        <Text style={styles.creditText}>
          Data provided by HSR API and Ennead.cc
        </Text>
        <Text style={styles.copyright}>
          © 2024 Star Rail Info App. All rights reserved.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  profileSection: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: COLORS.primary,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: COLORS.white,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 5,
  },
  nim: {
    fontSize: 18,
    color: COLORS.white,
    marginBottom: 5,
  },
  major: {
    fontSize: 16,
    color: COLORS.white,
    fontStyle: 'italic',
  },
  appInfoSection: {
    padding: 20,
    backgroundColor: COLORS.white,
    margin: 15,
    borderRadius: 15,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: COLORS.black,
    lineHeight: 24,
    marginBottom: 15,
  },
  features: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 10,
  },
  featureItem: {
    fontSize: 16,
    color: COLORS.black,
    marginBottom: 5,
    paddingLeft: 10,
  },
  creditSection: {
    padding: 20,
    alignItems: 'center',
  },
  creditText: {
    fontSize: 14,
    color: COLORS.black,
    marginBottom: 5,
  },
  copyright: {
    fontSize: 12,
    color: COLORS.black,
    marginTop: 10,
  },
});

export default AboutScreen;