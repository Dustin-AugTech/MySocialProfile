import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProfileHeader({ user }) {
  return (
    <View style={styles.header}>
      <Image 
        source={require('../assets/profile.jpg')}
        style={styles.avatar} 
      />
      
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.jobTitle}>{user.jobTitle}</Text>
      <Text style={styles.location}>{user.location}</Text>
      
      <View style={styles.bioContainer}>
        <Text style={styles.bio}>{user.bio}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 4,
    borderColor: '#fff',
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  jobTitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  location: {
    fontSize: 16,
    color: '#888',
    marginBottom: 12,
  },
  bioContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginTop: 10,
    width: '100%',
  },
  bio: {
    fontSize: 16,
    lineHeight: 22,
    color: '#333',
    textAlign: 'center',
  },
});