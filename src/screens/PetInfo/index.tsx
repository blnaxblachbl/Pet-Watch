import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import { RouteProp, useRoute } from '@react-navigation/native';
import { usePetById } from '../../hooks/usePetById';
import { useCurrentUserContext } from '../../context/CurrentUserContext';
import PaymentModal from '../../components/PaymentModal';
import type { Pet } from '../../mocks/api/types';

type PetInfoRouteProp = RouteProp<{ params: { petId: number } }, 'params'>;

const PetInfoScreen: React.FC = () => {
  const route = useRoute<PetInfoRouteProp>();
  const { petId } = route.params;
  const { data: pet, loading } = usePetById(petId);

  const { user, setUser } = useCurrentUserContext();
  const [showPayment, setShowPayment] = useState(false);

  const alreadyAdopted = useMemo(
    () => user?.pets?.some((p: Pet) => p.id === petId),
    [user?.pets, petId]
  );

  const handleAdopt = () => {
    if (!user) return;
    if (alreadyAdopted) return;
    setShowPayment(true);
  };

  const handlePaymentComplete = () => {
    if (!user || !pet) return;
    setUser({
      ...user,
      pets: [...(user.pets || []), pet],
    });
    setShowPayment(false);
  };

  const handlePaymentCancel = () => {
    setShowPayment(false);
  };

  return (
    <ScrollView
      style={styles.container}
      refreshControl={<RefreshControl refreshing={loading} />}
    >
      {pet && (
        <>
          <Image
            source={pet.image}
            style={styles.petImage}
            resizeMode="cover"
          />
          <View style={styles.contentContainer}>
            <Text style={styles.petName}>{pet.name}</Text>
            <Text style={styles.petAge}>Age: {pet.age}</Text>
            <Text style={styles.petDescription}>{pet.description}</Text>
            <TouchableOpacity
              style={[
                styles.adoptButton,
                alreadyAdopted && { backgroundColor: "#aaa" },
              ]}
              onPress={handleAdopt}
              disabled={alreadyAdopted}
            >
              <Text style={styles.adoptButtonText}>
                {alreadyAdopted ? "Adopted" : "Adopt"}
              </Text>
            </TouchableOpacity>
          </View>
          <PaymentModal
            visible={showPayment}
            pet={pet}
            onComplete={handlePaymentComplete}
            onCancel={handlePaymentCancel}
          />
        </>
      )}
    </ScrollView>
  );
};

export default PetInfoScreen;
