
import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import { Destination } from '../types';

interface DestinationsContextState {
  destinations: Destination[];
  isLoading: boolean;
  error: string | null;
  getDestinationById: (id: string) => Destination | undefined;
}

const DestinationsContext = createContext<DestinationsContextState | undefined>(undefined);

export const DestinationsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch('./data/destinations.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Destination[] = await response.json();
        setDestinations(data);
      } catch (e) {
        console.error("Failed to fetch destinations:", e);
        setError("Failed to load the adventure atlas. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  const getDestinationById = (id: string): Destination | undefined => {
    return destinations.find(d => d.id === id);
  };

  return (
    <DestinationsContext.Provider value={{ destinations, isLoading, error, getDestinationById }}>
      {children}
    </DestinationsContext.Provider>
  );
};

export const useDestinations = () => {
  const context = useContext(DestinationsContext);
  if (context === undefined) {
    throw new Error('useDestinations must be used within a DestinationsProvider');
  }
  return context;
};
