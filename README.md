# 🎓 English Learning Application

A full-stack flashcard application for learning English vocabulary - Built with Next.js, NestJS, and MongoDB.

---

## � Quick Start

### Prerequisites

- **Node.js** (v16+)
- **MongoDB**: Local OR [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) (free cloud - recommended)

### 1. Backend Setup

```bash
cd backend
npm install
```

**Configure `.env`:**

```env
# MongoDB Atlas (recommended - no installation needed!)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/english_learning

# OR Local MongoDB
MONGODB_URI=mongodb://localhost:27017/english_learning

PORT=3001
```

**Seed database and start:**

```bash
npm run db:seed
npm run start:dev
```

✅ Backend running at: `http://localhost:3001`

### 2. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

✅ Frontend running at: `http://localhost:3000`

---

## 📁 Project Structure

```
Demo/
├── frontend/              # Next.js frontend
│   ├── app/              # App router pages
│   ├── components/       # React components
│   └── types/            # TypeScript types
├── backend/              # NestJS backend API
│   ├── src/
│   │   ├── words/       # Words module
│   │   └── main.ts      # Entry point
│   └── scripts/         # Database scripts
└── README.md             # This file
```

---

## 🛠️ Tech Stack

| Layer          | Technology                                        |
| -------------- | ------------------------------------------------- |
| **Frontend**   | Next.js 14 + React 18 + TypeScript + Tailwind CSS |
| **Backend**    | NestJS + Mongoose + TypeScript                    |
| **Database**   | MongoDB (Atlas cloud or local)                    |
| **Styling**    | Tailwind CSS                                      |
| **Validation** | class-validator + class-transformer               |

---

## 📚 Features

### ✨ Frontend

- ➕ **Add Words**: Create English-Vietnamese vocabulary pairs
- 📝 **Word List**: View and manage all saved words
- 🎓 **Flashcard Game**: Study with interactive flip cards
- 🔀 **Shuffle**: Randomize card order
- 💾 **Persistent Storage**: Saved to MongoDB

### ⚡ Backend API

- 🔌 RESTful API with 6 endpoints
- 💾 MongoDB with Mongoose ODM
- ✅ DTO validation
- 🔐 CORS enabled
- 📊 Full CRUD operations
- 🌱 Seed script with 60+ sample words

---

## 📡 API Endpoints

| Method | Endpoint       | Description    | Body                        |
| ------ | -------------- | -------------- | --------------------------- |
| GET    | `/words`       | Get all words  | -                           |
| GET    | `/words/count` | Get word count | -                           |
| GET    | `/words/:id`   | Get word by ID | -                           |
| POST   | `/words`       | Add new word   | `{ english, vietnamese }`   |
| PATCH  | `/words/:id`   | Update word    | `{ english?, vietnamese? }` |
| DELETE | `/words/:id`   | Delete word    | -                           |

**Example:**

```bash
# Get all words
curl http://localhost:3001/words

# Add a word
curl -X POST http://localhost:3001/words \
  -H "Content-Type: application/json" \
  -d '{"english": "Hello", "vietnamese": "Xin chào"}'
```

---

## 🔧 Available Scripts

### Backend

```bash
npm run start:dev    # Development with hot reload
npm run build        # Build for production
npm run start:prod   # Production mode
npm run db:seed      # Seed database with sample words
npm run lint         # Run ESLint
```

### Frontend

```bash
npm run dev          # Development server (port 3000)
npm run build        # Build for production
npm run start        # Start production build
npm run lint         # Run ESLint
```

---

## 💾 Database Setup Options

### Option A: MongoDB Atlas (Recommended - 5 minutes)

1. Sign up: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Create free cluster (512MB)
3. Create database user
4. Whitelist IP: `0.0.0.0/0` (for development)
5. Get connection string
6. Paste in `backend/.env`

**Benefits:**

- ✅ No installation needed
- ✅ Free 512MB storage
- ✅ Auto backups
- ✅ Built-in monitoring

### Option B: Local MongoDB

1. Download: [MongoDB Community](https://www.mongodb.com/try/download/community)
2. Install and start MongoDB service
3. Update `backend/.env`:
   ```env
   MONGODB_URI=mongodb://localhost:27017/english_learning
   ```

---

## 🐛 Troubleshooting

### Backend cannot connect to MongoDB

**MongoDB Atlas:**

- Check connection string in `.env`
- Verify IP whitelist (Network Access)
- Check database user credentials

**Local MongoDB:**

```bash
# Check if MongoDB is running
mongod --version

# Start MongoDB
mongod
```

### Port already in use

**Backend (3001):**

```bash
# Change port in backend/.env
PORT=3002
```

**Frontend (3000):**

```bash
# Use different port
npm run dev -- -p 3002
```

### Frontend cannot connect to backend

1. Check backend is running: `curl http://localhost:3001/words`
2. Check CORS settings in `backend/src/main.ts`
3. Open browser DevTools → Network tab

---

## 📖 Detailed Documentation

- **[Backend README](./backend/README.md)** - API documentation & setup
- **[QUICK_START.md](./QUICK_START.md)** - Quick reference guide

---

## 🎯 Todo / Roadmap

- [ ] User authentication (JWT)
- [ ] User progress tracking
- [ ] Word categories/topics
- [ ] Quiz mode
- [ ] Text-to-speech pronunciation
- [ ] Spaced repetition algorithm
- [ ] Mobile app (React Native)
- [ ] Dark mode

---

## 📄 License

MIT

---

**Made with ❤️ for English Learning**  
**Tech Stack:** Next.js + NestJS + MongoDB Atlas
