"use client";

import { useState } from "react";
import WordForm from "@/components/WordForm";
import WordList from "@/components/WordList";
import FlashcardGame from "@/components/FlashcardGame";

type TabType = "add" | "list" | "study";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>("add");
  const [refresh, setRefresh] = useState(0);

  const handleWordAdded = () => {
    setRefresh((prev) => prev + 1);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            📚 Learn English
          </h1>
          <p className="text-gray-600">
            Add new words and practice with flashcards
          </p>
        </header>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-md p-2 mb-6">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("add")}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors ${
                activeTab === "add"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              ➕ Add Words
            </button>
            <button
              onClick={() => setActiveTab("list")}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors ${
                activeTab === "list"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              📝 Word List
            </button>
            <button
              onClick={() => setActiveTab("study")}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors ${
                activeTab === "study"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              🎓 Study
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === "add" && <WordForm onWordAdded={handleWordAdded} />}
          {activeTab === "list" && <WordList refresh={refresh} />}
          {activeTab === "study" && <FlashcardGame refresh={refresh} />}
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 text-gray-600 text-sm">
          <p>💡 Tip: Practice daily to remember words longer!</p>
        </footer>
      </div>
    </main>
  );
}
