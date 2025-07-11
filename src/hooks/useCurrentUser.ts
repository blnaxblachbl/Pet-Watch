import { useState, useEffect } from 'react';
import { getCurrentUser } from '../mocks/api/index';

export function useCurrentUser() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    setLoading(true);
    getCurrentUser()
      .then((user) => {
        setData(user);
        setError(null);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}
