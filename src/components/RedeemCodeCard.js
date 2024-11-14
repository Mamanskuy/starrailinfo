import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants/colors';

const RedeemCodeCard = ({ code, rewards, isActive }) => {
  return (
    <View style={[styles.card, !isActive && styles.inactiveCard]}>
      <Text style={styles.codeText}>{code}</Text>
      <View style={styles.rewardsContainer}>
        {rewards.map((reward, index) => (
          <Text key={index} style={styles.rewardText}>• {reward}</Text>
        ))}
      </View>
      <View style={[styles.status, isActive ? styles.activeStatus : styles.inactiveStatus]}>
        <Text style={styles.statusText}>
          {isActive ? 'Active' : 'Inactive'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 15,
    margin: 10,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inactiveCard: {
    opacity: 0.7,
  },
  codeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 10,
  },
  rewardsContainer: {
    marginTop: 5,
  },
  rewardText: {
    fontSize: 14,
    color: COLORS.black,
    marginBottom: 2,
  },
  status: {
    position: 'absolute',
    top: 15,
    right: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  activeStatus: {
    backgroundColor: '#4CAF50',
  },
  inactiveStatus: {
    backgroundColor: '#F44336',
  },
  statusText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: 'bold',
  }
});

export default RedeemCodeCard;