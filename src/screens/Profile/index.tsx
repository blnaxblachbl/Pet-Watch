import React from 'react';
import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native';
import styles from './styles';
import { useCurrentUserContext } from '../../context/CurrentUserContext';
import PetCard from '../../components/PetCard';

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
    <FlatList
      data={user.pets}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => <PetCard pet={item} />}
      contentContainerStyle={styles.petsList}
      style={styles.petsListStyle}
      ListEmptyComponent={
        <Text style={styles.noPetsText}>No adopted pets yet.</Text>
      }
      ListHeaderComponent={
        <View style={styles.container}>
          <Image
            source={user.avatar}
            style={styles.avatar}
            resizeMode="cover"
          />
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.sectionTitle}>Adopted Pets</Text>
        </View>
      }
    />
  );
};

export default Profile;
