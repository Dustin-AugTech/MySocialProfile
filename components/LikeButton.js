import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function LikeButton({ isLiked, likeCount, onLike }) {
  return (
    <View style={styles.container}>
      <Pressable 
        style={[styles.button, isLiked && styles.likedButton]} 
        onPress={onLike}
      >
        <Text style={styles.heart}>
          {isLiked ? "❤️" : "♡"}
        </Text>
        <Text style={styles.count}>
          {likeCount} Likes
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  likedButton: {
    borderColor: '#ff4081',
    backgroundColor: '#fff0f5',
  },
  heart: {
    fontSize: 28,
    marginRight: 10,
  },
  count: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
});