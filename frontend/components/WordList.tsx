"use client";

import React, { useEffect, useState } from "react";
import { Word } from "@/types/word";
import { getWords, deleteWord } from "@/services/api";

interface WordListProps {
  refresh: number;
}

export default function WordList({ refresh }: WordListProps) {
  const [words, setWords] = useState<Word[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadWords();
  }, [refresh]);

  const loadWords = async () => {
    try {
      setLoading(true);
      const data = await getWords();
      setWords(data);
    } catch (error) {
      console.error("Error loading words:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this word?")) {
      try {
        await deleteWord(id);
        await loadWords();
      } catch (error) {
        console.error("Error deleting word:", error);
        alert("Failed to delete word");
      }
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Word List</h2>
        <p className="text-gray-500 text-center py-8">Loading...</p>
      </div>
    );
  }

  if (words.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Word List</h2>
        <p className="text-gray-500 text-center py-8">
          No words yet. Add some words to get started!
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Word List ({words.length})
      </h2>
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {words.map((word) => (
          <div
            key={word.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex-1">
              <div className="font-semibold text-gray-800">{word.english}</div>
              <div className="text-gray-600 text-sm">{word.vietnamese}</div>
            </div>
            <button
              onClick={() => handleDelete(word.id)}
              className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-sm"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
