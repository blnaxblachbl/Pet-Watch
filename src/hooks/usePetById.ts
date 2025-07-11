import { useState, useEffect } from 'react';
import { getPetsById } from '../mocks/api/index';
import { Pet } from '../mocks/api/types';

export function usePetById(id: number | undefined) {
  const [data, setData] = useState<Pet | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(!!id);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    if (id === undefined) {
      setData(undefined);
      setLoading(false);
      return;
    }
    setLoading(true);
    getPetsById(id)
      .then((pet) => {
        setData(pet);
        setError(null);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [id]);

  return { data, loading, error };
}
