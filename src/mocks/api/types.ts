export type Pet = {
  id: number;
  name: string;
  age: number;
  images?: string[];
  owner?: User;
};
export type User = {
  id: number;
  name: string;
  avatar?: string;
  pets: Pet[];
};
