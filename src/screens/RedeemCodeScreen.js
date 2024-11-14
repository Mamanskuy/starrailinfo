import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Text,
} from 'react-native';
import { api } from '../services/api.js';
import { COLORS } from '../constants/colors';
import RedeemCodeCard from '../components/RedeemCodeCard';

const RedeemCodeScreen = () => {
  const [codes, setCodes] = useState({ active: [], inactive: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCodes();
  }, []);

  const fetchCodes = async () => {
    try {
      const data = await api.getRedeemCodes();
      setCodes(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Active Codes</Text>
        {codes.active.map((code, index) => (
          <RedeemCodeCard
            key={index}
            code={code.code}
            rewards={code.rewards}
            isActive={true}
          />
        ))}
        </View>

<View style={styles.section}>
  <Text style={styles.sectionTitle}>Inactive Codes</Text>
  {codes.inactive.map((code, index) => (
    <RedeemCodeCard
      key={index}
      code={code.code}
      rewards={code.rewards}
      isActive={false}
    />
  ))}
</View>
</ScrollView>
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
section: {
padding: 10,
},
sectionTitle: {
fontSize: 22,
fontWeight: 'bold',
color: COLORS.black,
marginLeft: 10,
marginBottom: 10,
},
});

export default RedeemCodeScreen;