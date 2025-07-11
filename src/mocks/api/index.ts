import { Pet, User } from './types';
import { pets, currentUser } from './data';

export function getPetsList(): Promise<Pet[]> {
  return new Promise(resolve => {
    setTimeout(() => resolve(pets), 500);
  });
}
export function getPetsById(id: number): Promise<Pet | undefined> {
  return new Promise(resolve => {
    const pet = pets.find(pet => pet.id === id);
    setTimeout(() => resolve(pet), 500);
  });
}
export function getCurrentUser(): Promise<User> {
  return new Promise(resolve => {
    setTimeout(() => resolve(currentUser), 500);
  });
}
