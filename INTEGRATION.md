# Frontend-Backend Integration

Guide to connecting Next.js application with NestJS API.

## 🎯 Overview

- **Frontend**: Next.js running at `http://localhost:3000`
- **Backend**: NestJS running at `http://localhost:3001`
- **Database**: MySQL with database `english_learning`

## 🚀 Start Both Servers

### Terminal 1 - Backend:

```bash
cd backend
npm run start:dev
```

### Terminal 2 - Frontend:

```bash
cd frontend
npm run dev
```

## 🔄 Update Frontend to Use API

Currently frontend uses localStorage. To switch to API:

### 1. Create API Service

Create file `frontend/services/api.ts`:

```typescript
const API_URL = "http://localhost:3001";

export interface Word {
  id: number;
  english: string;
  vietnamese: string;
  createdAt: string;
}

export const wordsApi = {
  // Get all words
  async getAll(): Promise<Word[]> {
    const response = await fetch(`${API_URL}/words`);
    if (!response.ok) throw new Error("Failed to fetch words");
    return response.json();
  },

  // Add new word
  async create(english: string, vietnamese: string): Promise<Word> {
    const response = await fetch(`${API_URL}/words`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ english, vietnamese }),
    });
    if (!response.ok) throw new Error("Failed to create word");
    return response.json();
  },

  // Delete word
  async delete(id: number): Promise<void> {
    const response = await fetch(`${API_URL}/words/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete word");
  },

  // Update word
  async update(id: number, data: Partial<Word>): Promise<Word> {
    const response = await fetch(`${API_URL}/words/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to update word");
    return response.json();
  },
};
```

### 2. Update Type Definition

Update `frontend/types/word.ts`:

```typescript
export interface Word {
  id: number; // Change from string to number
  english: string;
  vietnamese: string;
  createdAt: string; // Change from number to string (ISO date)
}
```

### 3. Update WordForm Component

Change in `frontend/components/WordForm.tsx`:

```typescript
import { wordsApi } from "@/services/api";

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!english.trim() || !vietnamese.trim()) {
    setMessage("Please enter all information!");
    return;
  }

  try {
    await wordsApi.create(english.trim(), vietnamese.trim());
    setEnglish("");
    setVietnamese("");
    setMessage("Word added successfully! ✅");
    onWordAdded();

    setTimeout(() => setMessage(""), 3000);
  } catch (error) {
    setMessage("Error adding word! ❌");
  }
};
```

### 4. Update WordList Component

Change in `frontend/components/WordList.tsx`:

```typescript
import { wordsApi, Word } from "@/services/api";

const [words, setWords] = useState<Word[]>([]);
const [loading, setLoading] = useState(false);

useEffect(() => {
  loadWords();
}, [refresh]);

const loadWords = async () => {
  setLoading(true);
  try {
    const data = await wordsApi.getAll();
    setWords(data);
  } catch (error) {
    console.error("Error loading words:", error);
  } finally {
    setLoading(false);
  }
};

const handleDelete = async (id: number) => {
  if (confirm("Are you sure you want to delete this word?")) {
    try {
      await wordsApi.delete(id);
      loadWords();
    } catch (error) {
      console.error("Error deleting word:", error);
    }
  }
};
```

### 5. Update FlashcardGame Component

Change in `frontend/components/FlashcardGame.tsx`:

```typescript
import { wordsApi, Word } from "@/services/api";

const [words, setWords] = useState<Word[]>([]);
const [loading, setLoading] = useState(false);

useEffect(() => {
  loadWords();
}, [refresh]);

const loadWords = async () => {
  setLoading(true);
  try {
    const data = await wordsApi.getAll();
    setWords(data);
    setCurrentIndex(0);
  } catch (error) {
    console.error("Error loading words:", error);
  } finally {
    setLoading(false);
  }
};
```

## ✅ Checklist

- [ ] MySQL is running
- [ ] Database `english_learning` created
- [ ] Backend running on port 3001
- [ ] Frontend running on port 3000
- [ ] CORS configured correctly
- [ ] API service created
- [ ] Components updated

## 🧪 Test API

### Test with Browser

Open: `http://localhost:3001/words`

You'll see JSON array (empty at first):

```json
[]
```

### Test with curl

```bash
# Add word
curl -X POST http://localhost:3001/words \
  -H "Content-Type: application/json" \
  -d '{"english":"Hello","vietnamese":"Xin chào"}'

# Get all words
curl http://localhost:3001/words
```

## 🔍 Debug

### Check Backend Logs

View terminal running backend, you'll see:

- SQL queries (if any)
- HTTP requests
- Errors (if any)

### Check Frontend Network

1. Open DevTools (F12)
2. Network tab
3. Perform actions (add/delete words)
4. View requests to `localhost:3001`

### CORS Error

If encountering CORS error, check in `backend/src/main.ts`:

```typescript
app.enableCors({
  origin: "http://localhost:3000",
  credentials: true,
});
```

## 📊 localStorage vs API Comparison

| Feature          | localStorage | API + MySQL |
| ---------------- | ------------ | ----------- |
| Data persistence | Browser only | Server      |
| Multi-device     | ❌           | ✅          |
| Data sharing     | ❌           | ✅          |
| Security         | Low          | Higher      |
| Scalability      | Low          | High        |

## 🎉 Complete!

After completing these steps, the application will:

- ✅ Save words to MySQL database
- ✅ Data persists after closing browser
- ✅ Can access from multiple devices
- ✅ Ready to add more features

## 🔜 Next Steps

1. Add user authentication
2. Add categories for words
3. Add learning progress tracking
4. Add quiz/test features
5. Deploy to production
