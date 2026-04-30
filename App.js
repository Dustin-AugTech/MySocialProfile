import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, SafeAreaView } from 'react-native';

import ProfileHeader from './components/ProfileHeader';
import EditableProfileSection from './components/EditableProfileSection';
import LikeButton from './components/LikeButton';
import FollowButton from './components/FollowButton';
import InterestsList from './components/InterestsList';
import StatsSection from './components/StatsSection';

export default function App() {
  // ==================== STATE =======================
  const [user, setUser] = useState({
    name: "Dustin Gaskins",
    bio: "Husband, Father, Brother | Student Developer",
    location: "Augusta, GA",
    jobTitle: "Student Developer"
  });

  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(342);

  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(1250);

  const [interests, setInterests] = useState([
    { id: 1, name: 'React Native', selected: true },
    { id: 2, name: 'JavaScript', selected: true },
    { id: 3, name: 'UI/UX Design', selected: false },
    { id: 4, name: 'Mobile Development', selected: true },
    { id: 5, name: 'Long Walks', selected: false },
  ]);

  // ==================== HANDLERS ====================
  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    setFollowerCount(isFollowing ? followerCount - 1 : followerCount + 1);
  };

  const toggleInterest = (id) => {
    setInterests(interests.map(item =>
      item.id === id 
        ? { ...item, selected: !item.selected } 
        : item
    ));
  };

  const updateUser = (newData) => {
    setUser(prev => ({ ...prev, ...newData }));
  };

  // ==================== DERIVED DATA ====================
  const selectedCount = interests.filter(i => i.selected).length;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.appTitle}>My Social Profile</Text>
        
        <ProfileHeader user={user} />
        
        <EditableProfileSection user={user} onUpdateUser={updateUser} />

        <LikeButton 
          isLiked={isLiked} 
          likeCount={likeCount} 
          onLike={handleLike} 
        />

        <FollowButton 
          isFollowing={isFollowing} 
          followerCount={followerCount} 
          onFollow={handleFollow} 
        />

        <InterestsList 
          interests={interests} 
          onToggleInterest={toggleInterest} 
        />

        <StatsSection 
          followerCount={followerCount}
          likeCount={likeCount}
          selectedCount={selectedCount}
          totalInterests={interests.length}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  scrollContent: { padding: 20 },
  appTitle: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 20,
    color: '#1a1a1a'
  },
});