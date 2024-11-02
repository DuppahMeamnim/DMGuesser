import { create } from 'zustand';

interface GameState {
    word: string;
    guesses: string[];
    currentGuess: number;
    setWord: (word: string) => void;
    setGuesses: (guesses: string[]) => void;
    setCurrentGuess: (currentGuess: number) => void;
}

export const useStore = create<GameState>((set) => ({
    word: '',
    guesses: [],
    currentGuess: 0,
    setWord: (word) => set({ word }),
    setGuesses: (guesses) => set({ guesses }),
    setCurrentGuess: (currentGuess) => set({ currentGuess }),
}));
