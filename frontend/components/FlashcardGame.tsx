"use client";

import React, { useEffect, useState } from "react";
import { Word } from "@/types/word";
import { getWords } from "@/services/api";
import Flashcard from "./Flashcard";

interface FlashcardGameProps {
  refresh: number;
}

export default function FlashcardGame({ refresh }: FlashcardGameProps) {
  const [words, setWords] = useState<Word[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isShuffled, setIsShuffled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [originalWords, setOriginalWords] = useState<Word[]>([]);

  useEffect(() => {
    loadWords();
  }, [refresh]);

  const loadWords = async () => {
    try {
      setLoading(true);
      const loadedWords = await getWords();
      setWords(loadedWords);
      setOriginalWords(loadedWords);
      setCurrentIndex(0);
    } catch (error) {
      console.error("Error loading words:", error);
    } finally {
      setLoading(false);
    }
  };

  const shuffleArray = (array: Word[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleNext = () => {
    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleShuffle = () => {
    const shuffled = shuffleArray(words);
    setWords(shuffled);
    setCurrentIndex(0);
    setIsShuffled(true);
  };

  const handleReset = () => {
    setWords(originalWords);
    setCurrentIndex(0);
    setIsShuffled(false);
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Study</h2>
        <p className="text-gray-500 text-center py-8">Loading...</p>
      </div>
    );
  }

  if (words.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Study</h2>
        <p className="text-gray-500 text-center py-8">
          No words to study. Add some words first!
        </p>
      </div>
    );
  }

  const currentWord = words[currentIndex];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Study</h2>
        <div className="text-sm text-gray-600">
          {currentIndex + 1} / {words.length}
        </div>
      </div>

      <div className="mb-6">
        <Flashcard word={currentWord} />
      </div>

      <div className="flex gap-3 mb-4">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          ← Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === words.length - 1}
          className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          Next →
        </button>
      </div>

      <div className="flex gap-3">
        <button
          onClick={handleShuffle}
          className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
        >
          🔀 Shuffle
        </button>
        {isShuffled && (
          <button
            onClick={handleReset}
            className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
          >
            🔄 Reset
          </button>
        )}
      </div>

      <div className="mt-4 text-center text-sm text-gray-500">
        💡 Tip: Click on the card to flip and see the meaning
      </div>
    </div>
  );
}
