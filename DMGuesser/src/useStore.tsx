import { create } from 'zustand';

interface GameState {
    word: string;
    setWord: (word: string) => void;

    guesses: string[];
    setGuesses: (guesses: string[]) => void;

    currentGuess: number;
    setCurrentGuess: (currentGuess: number) => void;

    hasGameEnded: boolean;
    setHasGameEnded: (hasGameEnded: boolean) => void;
}

export const useStore = create<GameState>((set) => ({
    word: '',
    setWord: (word) => set({ word }),

    guesses: [],
    setGuesses: (guesses) => set({ guesses }),

    currentGuess: 0,
    setCurrentGuess: (currentGuess) => set({ currentGuess }),

    hasGameEnded: false,
    setHasGameEnded: (hasGameEnded) => set({ hasGameEnded })
}));
