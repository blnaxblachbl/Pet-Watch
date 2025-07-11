import { useState, useEffect } from 'react';
import { getPetsList } from '../mocks/api/index';
import { Pet } from '../mocks/api/types';

export function usePetsList() {
  const [data, setData] = useState<Pet[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    setLoading(true);
    getPetsList()
      .then((pets) => {
        setData(pets);
        setError(null);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}
