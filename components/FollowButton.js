import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function FollowButton({ isFollowing, followerCount, onFollow }) {
  return (
    <View style={styles.container}>
      <Pressable 
        style={[styles.button, isFollowing && styles.followingButton]} 
        onPress={onFollow}
      >
        <Text style={[styles.buttonText, isFollowing && styles.followingText]}>
          {isFollowing ? "✅ Following" : "Follow"}
        </Text>
      </Pressable>
      
      <Text style={styles.followerCount}>
        {followerCount.toLocaleString()} followers
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 8,
  },
  followingButton: {
    backgroundColor: '#4CAF50',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  followingText: {
    color: '#fff',
  },
  followerCount: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
});