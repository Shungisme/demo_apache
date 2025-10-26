"use client";

import React, { useState } from "react";
import { Word } from "@/types/word";

interface FlashcardProps {
  word: Word;
}

export default function Flashcard({ word }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`flip-card ${
        isFlipped ? "flipped" : ""
      } w-full h-80 cursor-pointer`}
      onClick={handleFlip}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="text-center">
            <div className="text-sm opacity-75 mb-2">English</div>
            <div className="text-4xl font-bold">{word.english}</div>
            <div className="text-sm opacity-75 mt-8">
              👆 Click to see meaning
            </div>
          </div>
        </div>
        <div className="flip-card-back">
          <div className="text-center">
            <div className="text-sm opacity-75 mb-2">Vietnamese</div>
            <div className="text-4xl font-bold">{word.vietnamese}</div>
            <div className="text-sm opacity-75 mt-8">👆 Click to see word</div>
          </div>
        </div>
      </div>
    </div>
  );
}
