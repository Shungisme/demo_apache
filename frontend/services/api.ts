import { Word } from "@/types/word";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

interface BackendWord {
  id: string;
  english: string;
  vietnamese: string;
  createdAt: string;
}

// Convert backend word format to frontend format
function convertWord(backendWord: BackendWord): Word {
  return {
    id: backendWord.id,
    english: backendWord.english,
    vietnamese: backendWord.vietnamese,
    createdAt: new Date(backendWord.createdAt).getTime(),
  };
}

export async function getWords(): Promise<Word[]> {
  try {
    const response = await fetch(`${API_URL}/words`);
    if (!response.ok) {
      throw new Error("Failed to fetch words");
    }
    const data: BackendWord[] = await response.json();
    return data.map(convertWord);
  } catch (error) {
    console.error("Error fetching words:", error);
    throw error;
  }
}

export async function addWord(
  english: string,
  vietnamese: string
): Promise<Word> {
  try {
    const response = await fetch(`${API_URL}/words`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ english, vietnamese }),
    });

    if (!response.ok) {
      throw new Error("Failed to add word");
    }

    const data: BackendWord = await response.json();
    return convertWord(data);
  } catch (error) {
    console.error("Error adding word:", error);
    throw error;
  }
}

export async function deleteWord(id: string): Promise<void> {
  try {
    const response = await fetch(`${API_URL}/words/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete word");
    }
  } catch (error) {
    console.error("Error deleting word:", error);
    throw error;
  }
}

export async function updateWord(
  id: string,
  english: string,
  vietnamese: string
): Promise<Word> {
  try {
    const response = await fetch(`${API_URL}/words/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ english, vietnamese }),
    });

    if (!response.ok) {
      throw new Error("Failed to update word");
    }

    const data: BackendWord = await response.json();
    return convertWord(data);
  } catch (error) {
    console.error("Error updating word:", error);
    throw error;
  }
}
