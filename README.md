# English Learning Application

A full-stack English learning application with flashcards - Built with Next.js and NestJS.

## 📁 Project Structure

```
Demo/
├── frontend/          # Next.js frontend
├── backend/           # NestJS backend API
├── start-frontend.bat # Script to start frontend
├── start-backend.bat  # Script to start backend
├── INTEGRATION.md     # Integration guide
└── README.md          # This file
```

## 🚀 Quick Start

### 1. Install MySQL

Make sure MySQL is installed and running.

Create database:

```sql
CREATE DATABASE english_learning;
```

### 2. Configure Backend

```bash
cd backend
npm install
```

Configure `.env` file:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=your_password
DB_DATABASE=english_learning
PORT=3001
```

### 3. Install Frontend

```bash
cd frontend
npm install
```

### 4. Start Application

**Windows:**

- Double click `start-backend.bat` (run first)
- Double click `start-frontend.bat`

**Linux/Mac:**

```bash
# Terminal 1
cd backend && npm run start:dev

# Terminal 2
cd frontend && npm run dev
```

### 5. Access Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001
- **API Docs**: http://localhost:3001/words

## 📚 Features

### Frontend (Next.js)

- ➕ Add new vocabulary
- 📝 View word list
- 🎓 Study with flashcards (flip cards)
- 🔀 Shuffle cards
- 💾 Save to database

### Backend (NestJS)

- 🔌 REST API
- 💾 MySQL database with TypeORM
- ✅ Validation
- 🔐 CORS enabled
- 📊 CRUD operations

## 📖 Documentation

- [Frontend README](./frontend/README.md) - Frontend guide
- [Backend README](./backend/README.md) - Backend API guide
- [Backend SETUP](./backend/SETUP.md) - Detailed setup instructions
- [INTEGRATION](./INTEGRATION.md) - Frontend-backend integration guide

## 🛠️ Tech Stack

### Frontend

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

### Backend

- NestJS
- TypeORM
- MySQL
- TypeScript

## 📡 API Endpoints

| Method | Endpoint     | Description    |
| ------ | ------------ | -------------- |
| GET    | `/words`     | Get all words  |
| POST   | `/words`     | Add new word   |
| GET    | `/words/:id` | Get word by ID |
| PATCH  | `/words/:id` | Update word    |
| DELETE | `/words/:id` | Delete word    |

## 🔧 Development

### Backend

```bash
cd backend
npm run start:dev    # Development mode
npm run build        # Build
npm run start:prod   # Production mode
```

### Frontend

```bash
cd frontend
npm run dev         # Development mode
npm run build       # Build
npm run start       # Production mode
```

## 🐛 Troubleshooting

### Backend Cannot Connect to MySQL

1. Check if MySQL is running
2. Check credentials in `.env`
3. Check if database exists

### Frontend Cannot Connect to Backend

1. Check if backend is running on port 3001
2. Check CORS in `backend/src/main.ts`
3. Check Network tab in DevTools

### Port Already in Use

- Backend: Change PORT in `backend/.env`
- Frontend: Use `npm run dev -- -p 3002`

## 📝 TODO / Next Steps

- [ ] Add user authentication
- [ ] Add word categories/topics
- [ ] Add progress tracking
- [ ] Add quiz/test features
- [ ] Add pronunciation (text-to-speech)
- [ ] Deploy to production
- [ ] Add mobile responsive design
- [ ] Add dark mode

## 📄 License

MIT

## 👨‍💻 Author

English Learning Application
