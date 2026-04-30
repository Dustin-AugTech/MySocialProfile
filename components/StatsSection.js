import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StatsSection({ 
  followerCount, 
  likeCount, 
  selectedCount, 
  totalInterests 
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>📊 Live Stats</Text>
      
      <View style={styles.statsGrid}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{followerCount.toLocaleString()}</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{likeCount}</Text>
          <Text style={styles.statLabel}>Likes Given</Text>
        </View>
        
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{selectedCount}</Text>
          <Text style={styles.statLabel}>Interests Selected</Text>
        </View>
        
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{totalInterests}</Text>
          <Text style={styles.statLabel}>Total Interests</Text>
        </View>
      </View>

      <Text style={styles.derivedText}>
        You have selected {selectedCount} out of {totalInterests} interests
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#333',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statCard: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 12,
    width: '48%',
    marginBottom: 12,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  statLabel: {
    fontSize: 13,
    color: '#666',
    marginTop: 4,
  },
  derivedText: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'italic',
    color: '#555',
  },
});