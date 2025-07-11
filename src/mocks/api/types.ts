import { ImageSourcePropType } from "react-native";

export type Pet = {
  id: number;
  name: string;
  age: number;
  image?: ImageSourcePropType;
  owner?: User;
  description: string;
};
export type User = {
  id: number;
  name: string;
  avatar?: string;
  pets: Pet[];
};
