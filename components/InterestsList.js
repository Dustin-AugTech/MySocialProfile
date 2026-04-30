import React from 'react';
import { View, Text, Pressable, FlatList, StyleSheet } from 'react-native';

export default function InterestsList({ interests, onToggleInterest }) {
  const renderInterest = ({ item }) => (
    <Pressable
      style={[
        styles.interestTag,
        item.selected && styles.selectedTag
      ]}
      onPress={() => onToggleInterest(item.id)}
    >
      <Text style={[styles.tagText, item.selected && styles.selectedText]}>
        {item.selected ? '✅ ' : ''}{item.name}
      </Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Your Interests</Text>
      <Text style={styles.subtitle}>Tap to toggle selection</Text>
      
      <FlatList
        data={interests}
        renderItem={renderInterest}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        scrollEnabled={false} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  row: {
    justifyContent: 'space-between',
  },
  interestTag: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 18,
    marginBottom: 10,
    width: '48%',
    alignItems: 'center',
  },
  selectedTag: {
    borderColor: '#4CAF50',
    backgroundColor: '#e8f5e9',
  },
  tagText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#444',
  },
  selectedText: {
    color: '#2e7d32',
  },
});