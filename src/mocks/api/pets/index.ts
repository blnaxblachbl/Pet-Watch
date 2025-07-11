import { Pet } from '../types';
import { pets } from './data';

export function getPetsList(): Promise<Pet[]> {
  return new Promise(() => {
    setTimeout(resolve => resolve(pets), 500);
  });
}
export function getPetsById(id: number): Promise<Pet | undefined> {
  return new Promise(() => {
    const pet = pets.find(pet => pet.id === id);
    setTimeout(resolve => resolve(pet), 500);
  });
}
