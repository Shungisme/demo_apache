# Kiến trúc hệ thống English Learning App

## 📐 Sơ đồ kiến trúc

```
┌─────────────────────────────────────────────────────────────┐
│                         Browser                              │
│                   http://localhost:3000                      │
└────────────────────────────┬────────────────────────────────┘
                             │
                             │ HTTP Requests
                             │
┌────────────────────────────▼────────────────────────────────┐
│                    Frontend (Next.js)                        │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Components:                                           │ │
│  │  - WordForm.tsx      (Thêm từ)                        │ │
│  │  - WordList.tsx      (Danh sách)                      │ │
│  │  - Flashcard.tsx     (Thẻ học)                        │ │
│  │  - FlashcardGame.tsx (Game học)                       │ │
│  └────────────────────────────────────────────────────────┘ │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Services:                                             │ │
│  │  - api.ts            (API calls)                       │ │
│  └────────────────────────────────────────────────────────┘ │
└────────────────────────────┬────────────────────────────────┘
                             │
                             │ REST API Calls
                             │ (GET, POST, DELETE, PATCH)
                             │
┌────────────────────────────▼────────────────────────────────┐
│                    Backend (NestJS)                          │
│                   http://localhost:3001                      │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Controllers:                                          │ │
│  │  - WordsController   (API Endpoints)                   │ │
│  └─────────────────────────┬──────────────────────────────┘ │
│                            │                                 │
│  ┌─────────────────────────▼──────────────────────────────┐ │
│  │  Services:                                             │ │
│  │  - WordsService      (Business Logic)                  │ │
│  └─────────────────────────┬──────────────────────────────┘ │
│                            │                                 │
│  ┌─────────────────────────▼──────────────────────────────┐ │
│  │  Entities:                                             │ │
│  │  - Word.entity       (Database Model)                  │ │
│  └─────────────────────────┬──────────────────────────────┘ │
│                            │                                 │
│  ┌─────────────────────────▼──────────────────────────────┐ │
│  │  TypeORM                                               │ │
│  └─────────────────────────┬──────────────────────────────┘ │
└────────────────────────────┼────────────────────────────────┘
                             │
                             │ SQL Queries
                             │
┌────────────────────────────▼────────────────────────────────┐
│                    MySQL Database                            │
│                      localhost:3306                          │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Database: english_learning                            │ │
│  │  ┌──────────────────────────────────────────────────┐ │ │
│  │  │  Table: words                                    │ │ │
│  │  │  - id (INT, PK, AUTO_INCREMENT)                  │ │ │
│  │  │  - english (VARCHAR(255))                        │ │ │
│  │  │  - vietnamese (VARCHAR(255))                     │ │ │
│  │  │  - createdAt (TIMESTAMP)                         │ │ │
│  │  └──────────────────────────────────────────────────┘ │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

## 🔄 Luồng dữ liệu

### 1. Thêm từ mới

```
User → WordForm → API Service → POST /words → WordsController
  → WordsService → TypeORM → MySQL → Save → Response
  → API Service → Update UI
```

### 2. Xem danh sách từ

```
User → WordList → API Service → GET /words → WordsController
  → WordsService → TypeORM → MySQL → Query → Response
  → API Service → Display Words
```

### 3. Xóa từ

```
User → WordList → API Service → DELETE /words/:id → WordsController
  → WordsService → TypeORM → MySQL → Delete → Response
  → API Service → Refresh List
```

## 📊 Request/Response Flow

### POST /words (Thêm từ)

**Request:**

```http
POST http://localhost:3001/words
Content-Type: application/json

{
  "english": "Hello",
  "vietnamese": "Xin chào"
}
```

**Response:**

```json
{
  "id": 1,
  "english": "Hello",
  "vietnamese": "Xin chào",
  "createdAt": "2025-10-26T10:30:00.000Z"
}
```

### GET /words (Lấy tất cả từ)

**Request:**

```http
GET http://localhost:3001/words
```

**Response:**

```json
[
  {
    "id": 1,
    "english": "Hello",
    "vietnamese": "Xin chào",
    "createdAt": "2025-10-26T10:30:00.000Z"
  },
  {
    "id": 2,
    "english": "Goodbye",
    "vietnamese": "Tạm biệt",
    "createdAt": "2025-10-26T10:31:00.000Z"
  }
]
```

### DELETE /words/:id (Xóa từ)

**Request:**

```http
DELETE http://localhost:3001/words/1
```

**Response:**

```http
204 No Content
```

## 🔐 Security & CORS

```
Frontend (localhost:3000) → Backend (localhost:3001)
                          ↓
                      CORS Check
                          ↓
                  Origin: localhost:3000
                          ↓
                      ✅ Allowed
```

CORS Configuration in `backend/src/main.ts`:

```typescript
app.enableCors({
  origin: "http://localhost:3000",
  credentials: true,
});
```

## 📦 Dependencies

### Frontend

- `react` - UI library
- `next` - React framework
- `tailwindcss` - Styling
- `typescript` - Type safety

### Backend

- `@nestjs/core` - Framework core
- `@nestjs/typeorm` - ORM integration
- `typeorm` - ORM
- `mysql2` - MySQL driver
- `class-validator` - Validation
- `class-transformer` - Data transformation

## 🎯 API Endpoints Summary

| Endpoint       | Method | Description    | Request Body  | Response |
| -------------- | ------ | -------------- | ------------- | -------- |
| `/words`       | GET    | Lấy tất cả từ  | -             | Word[]   |
| `/words/:id`   | GET    | Lấy từ theo ID | -             | Word     |
| `/words`       | POST   | Thêm từ mới    | CreateWordDto | Word     |
| `/words/:id`   | PATCH  | Cập nhật từ    | UpdateWordDto | Word     |
| `/words/:id`   | DELETE | Xóa từ         | -             | 204      |
| `/words/count` | GET    | Đếm số từ      | -             | number   |

## 🔍 Error Handling

```
Request Error → Backend Validation → 400 Bad Request
              → Not Found → 404 Not Found
              → Server Error → 500 Internal Server Error
```

### Ví dụ Error Response:

```json
{
  "statusCode": 400,
  "message": [
    "Từ tiếng Anh không được để trống",
    "Nghĩa tiếng Việt không được để trống"
  ],
  "error": "Bad Request"
}
```

## 🚀 Deployment Architecture (Future)

```
┌─────────────────┐
│   Users         │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   CDN/Vercel    │  ← Frontend (Next.js)
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Load Balancer │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Backend API   │  ← NestJS on Cloud
│   (Docker)      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   MySQL DB      │  ← Cloud Database
│   (RDS/Cloud)   │
└─────────────────┘
```
