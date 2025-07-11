import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import styles from './styles';
import { useCurrentUserContext } from '../../context/CurrentUserContext';
import PetCard from '../../components/PetCard';

const Profile = () => {
  const { user, loading, error } = useCurrentUserContext();
  const [location, setLocation] = useState<{ latitude: number | null; longitude: number | null }>({
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      error => {
        setLocation({
          latitude: null,
          longitude: null,
        });
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }, []);

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
          {location.latitude !== null && location.longitude !== null ? (
            <Text style={styles.locationText}>
              Location: {location.latitude.toFixed(6)}, {location.longitude.toFixed(6)}
            </Text>
          ) : (
            <Text style={styles.locationText}>Location: Not available</Text>
          )}
          <Text style={styles.sectionTitle}>Adopted Pets</Text>
        </View>
      }
    />
  );
};

export default Profile;
