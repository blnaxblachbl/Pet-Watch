import { Pet, User } from './types';
const cat = require('../../assets/cat.png');
const avatar = require('../../assets/user.png');

export const pets: Pet[] = [
  {
    id: 1,
    name: 'Fish Lover',
    age: 1,
    image: cat,
    owner: undefined,
    description: 'A lovely pet looking for a home.',
  },
  {
    id: 2,
    name: 'Cheese Lover',
    age: 1,
    image: cat,
    owner: undefined,
    description: 'A lovely pet looking for a home.',
  },
  {
    id: 3,
    name: 'Funny Cat',
    age: 1,
    image: cat,
    owner: undefined,
    description: 'A lovely pet looking for a home.',
  },
  {
    id: 4,
    name: 'Lord of the mice',
    age: 1,
    image: cat,
    owner: undefined,
    description: 'A lovely pet looking for a home.',
  },
];
export const currentUser: User = {
  id: 1,
  name: 'Current User',
  avatar,
  pets: [],
};
export const users: User[] = [
  {
    id: 1,
    name: 'Current User',
    avatar,
    pets: [],
  },
  {
    id: 1,
    name: 'Dave',
    avatar,
    pets: [],
  },
];
