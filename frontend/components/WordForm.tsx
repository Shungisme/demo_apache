"use client";

import React, { useState } from "react";
import { addWord } from "@/services/api";

interface WordFormProps {
  onWordAdded: () => void;
}

export default function WordForm({ onWordAdded }: WordFormProps) {
  const [english, setEnglish] = useState("");
  const [vietnamese, setVietnamese] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!english.trim() || !vietnamese.trim()) {
      setMessage("Please enter all information!");
      return;
    }

    try {
      setLoading(true);
      await addWord(english.trim(), vietnamese.trim());
      setEnglish("");
      setVietnamese("");
      setMessage("Word added successfully! ✅");
      onWordAdded();

      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      console.error("Error adding word:", error);
      setMessage("Failed to add word ❌");
      setTimeout(() => setMessage(""), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Word</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="english"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            English
          </label>
          <input
            type="text"
            id="english"
            value={english}
            onChange={(e) => setEnglish(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
            placeholder="Enter English word..."
          />
        </div>

        <div>
          <label
            htmlFor="vietnamese"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Vietnamese
          </label>
          <input
            type="text"
            id="vietnamese"
            value={vietnamese}
            onChange={(e) => setVietnamese(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
            placeholder="Enter Vietnamese meaning..."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {loading ? "Adding..." : "Add Word"}
        </button>

        {message && (
          <div
            className={`text-center py-2 rounded ${
              message.includes("✅") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </div>
        )}
      </form>
    </div>
  );
}
