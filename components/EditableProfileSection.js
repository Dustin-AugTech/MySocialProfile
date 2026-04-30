import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';

export default function EditableProfileSection({ user, onUpdateUser }) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(user.name);
  const [tempBio, setTempBio] = useState(user.bio);

  const handleSave = () => {
    onUpdateUser({ name: tempName, bio: tempBio });
    setIsEditing(false);
    Alert.alert('Success', 'Profile updated! ✅');
  };

  const handleCancel = () => {
    setTempName(user.name);
    setTempBio(user.bio);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <View style={styles.editContainer}>
        <Text style={styles.sectionTitle}>✏️ Edit Profile</Text>
        
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={tempName}
          onChangeText={setTempName}
          placeholder="Enter your name"
        />

        <Text style={styles.label}>Bio</Text>
        <TextInput
          style={[styles.input, styles.bioInput]}
          value={tempBio}
          onChangeText={setTempBio}
          placeholder="Enter your bio"
          multiline={true}
          numberOfLines={4}
        />

        <View style={styles.buttonRow}>
          <Pressable style={[styles.button, styles.cancelButton]} onPress={handleCancel}>
            <Text style={styles.buttonText}>Cancel</Text>
          </Pressable>
          
          <Pressable style={[styles.button, styles.saveButton]} onPress={handleSave}>
            <Text style={styles.buttonText}>Save Changes</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.displayContainer}>
      <Pressable 
        style={styles.editButton} 
        onPress={() => setIsEditing(true)}
      >
        <Text style={styles.editButtonText}>✏️ Edit Name & Bio</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 5,
    color: '#444',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 15,
  },
  bioInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    flex: 1,
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  saveButton: {
    backgroundColor: '#4CAF50',
  },
  cancelButton: {
    backgroundColor: '#999',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  displayContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  editButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});