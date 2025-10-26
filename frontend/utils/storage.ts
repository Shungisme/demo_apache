import { Word } from "@/types/word";

const STORAGE_KEY = "english-words";

export const getWords = (): Word[] => {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error("Error loading words:", error);
    return [];
  }
};

export const saveWords = (words: Word[]): void => {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(words));
  } catch (error) {
    console.error("Error saving words:", error);
  }
};

export const addWord = (english: string, vietnamese: string): Word => {
  const newWord: Word = {
    id: Date.now().toString(),
    english,
    vietnamese,
    createdAt: Date.now(),
  };

  const words = getWords();
  words.unshift(newWord);
  saveWords(words);

  return newWord;
};

export const deleteWord = (id: string): void => {
  const words = getWords();
  const filtered = words.filter((word) => word.id !== id);
  saveWords(filtered);
};

export const shuffleWords = (words: Word[]): Word[] => {
  const shuffled = [...words];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
