import { create } from 'zustand';
import { Culture } from './types';

interface CultureState {
  selectedCulture: Culture;
  userLocation: string | null;
  setSelectedCulture: (culture: Culture) => void;
  setUserLocation: (location: string | null) => void;
}

export const useCultureStore = create<CultureState>((set) => ({
  selectedCulture: 'japan',
  userLocation: null,
  setSelectedCulture: (culture) => set({ selectedCulture: culture }),
  setUserLocation: (location) => set({ userLocation: location }),
}));