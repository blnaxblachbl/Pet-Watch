import React from 'react';
import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native';
import styles from './styles';
import { useCurrentUserContext } from '../../context/CurrentUserContext';
import PetCard from '../../components/PetCard';

const AVATAR_PLACEHOLDER = 'https://placekitten.com/150/150';

const Profile = () => {
  const { user, loading, error } = useCurrentUserContext();

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#888" />
      </View>
    );
  }

  if (error || !user) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Failed to load profile.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: user.avatar || AVATAR_PLACEHOLDER }}
        style={styles.avatar}
      />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.sectionTitle}>Adopted Pets</Text>
      {user.pets.length === 0 ? (
        <Text style={styles.noPetsText}>No adopted pets yet.</Text>
      ) : (
        <FlatList
          data={user.pets}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <PetCard pet={item} />}
          contentContainerStyle={styles.petsList}
        />
      )}
    </View>
  );
};

export default Profile;
