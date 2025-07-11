import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getCurrentUser } from '../mocks/api/index';

type CurrentUser = any; // Replace 'any' with a specific type if available

interface CurrentUserContextType {
  user: CurrentUser;
  loading: boolean;
  error: unknown;
  setUser: React.Dispatch<React.SetStateAction<CurrentUser>>;
  refetch: () => void;
}

const CurrentUserContext = createContext<CurrentUserContextType | undefined>(undefined);

export const CurrentUserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<CurrentUser>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);

  const fetchUser = () => {
    setLoading(true);
    getCurrentUser()
      .then((userData) => {
        setUser(userData);
        setError(null);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <CurrentUserContext.Provider value={{ user, loading, error, setUser, refetch: fetchUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export const useCurrentUserContext = () => {
  const context = useContext(CurrentUserContext);
  if (context === undefined) {
    throw new Error('useCurrentUserContext must be used within a CurrentUserProvider');
  }
  return context;
};
