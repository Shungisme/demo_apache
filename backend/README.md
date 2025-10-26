# English Learning Backend API

Backend API cho ứng dụng học tiếng Anh, được xây dựng bằng NestJS và MySQL.

## 🛠️ Công nghệ

- **NestJS**: Node.js framework
- **TypeORM**: ORM cho MySQL
- **MySQL**: Database
- **TypeScript**: Type-safe development
- **class-validator**: Validation
- **class-transformer**: Data transformation

## 📋 Yêu cầu

- Node.js >= 16
- MySQL >= 5.7 hoặc MySQL 8
- npm hoặc yarn

## 🚀 Cài đặt

### 1. Cài đặt dependencies

```bash
npm install
```

### 2. Cấu hình database

**Option 1: Using database scripts (Recommended)**

```bash
# Initialize database and tables
npm run db:init

# Seed with sample data (50+ words)
npm run db:seed
```

**Option 2: Manual setup**

Tạo database trong MySQL:

```sql
CREATE DATABASE english_learning;
```

Hoặc dùng MySQL Workbench/phpMyAdmin để tạo database.

See [DATABASE.md](./DATABASE.md) for more database management commands.

### 3. Cấu hình environment

Copy file `.env.example` thành `.env` và cấu hình:

```bash
cp .env.example .env
```

Chỉnh sửa `.env`:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=your_password
DB_DATABASE=english_learning

PORT=3001
```

### 4. Chạy ứng dụng

**Development mode:**

```bash
npm run start:dev
```

**Production mode:**

```bash
npm run build
npm run start:prod
```

Server sẽ chạy tại: `http://localhost:3001`

## 📡 API Endpoints

### Words API

| Method | Endpoint       | Description    | Body                        |
| ------ | -------------- | -------------- | --------------------------- |
| GET    | `/words`       | Lấy tất cả từ  | -                           |
| GET    | `/words/:id`   | Lấy từ theo ID | -                           |
| GET    | `/words/count` | Đếm số từ      | -                           |
| POST   | `/words`       | Thêm từ mới    | `{ english, vietnamese }`   |
| PATCH  | `/words/:id`   | Cập nhật từ    | `{ english?, vietnamese? }` |
| DELETE | `/words/:id`   | Xóa từ         | -                           |

### Ví dụ Request

**Thêm từ mới:**

```bash
curl -X POST http://localhost:3001/words \
  -H "Content-Type: application/json" \
  -d '{
    "english": "Hello",
    "vietnamese": "Xin chào"
  }'
```

**Lấy tất cả từ:**

```bash
curl http://localhost:3001/words
```

**Xóa từ:**

```bash
curl -X DELETE http://localhost:3001/words/1
```

## 📊 Database Schema

### Table: words

| Column     | Type         | Description                 |
| ---------- | ------------ | --------------------------- |
| id         | INT          | Primary key, auto increment |
| english    | VARCHAR(255) | Từ tiếng Anh                |
| vietnamese | VARCHAR(255) | Nghĩa tiếng Việt            |
| createdAt  | TIMESTAMP    | Thời gian tạo               |

## 🔧 Development

### Scripts

```bash
# Development
npm run start:dev

# Build
npm run build

# Production
npm run start:prod

# Lint
npm run lint

# Format
npm run format
```

### Database Management

```bash
# Initialize database (create DB and tables)
npm run db:init

# Seed database with sample data
npm run db:seed

# Drop database (with confirmation)
npm run db:drop

# Reset database (drop + init + seed)
npm run db:reset
```

See [DATABASE.md](./DATABASE.md) or [scripts/README.md](./scripts/README.md) for detailed documentation.

### Database Sync

TypeORM được cấu hình với `synchronize: true` trong development, tự động tạo/cập nhật bảng.

⚠️ **Lưu ý:** Tắt `synchronize` trong production! Sử dụng migrations thay thế.

## 🔐 CORS

CORS được enable cho frontend tại `http://localhost:3000`.

Để thay đổi, chỉnh sửa trong `src/main.ts`:

```typescript
app.enableCors({
  origin: "http://your-frontend-url",
  credentials: true,
});
```

## 🐛 Troubleshooting

### Lỗi kết nối MySQL

1. Kiểm tra MySQL đang chạy
2. Kiểm tra username/password trong `.env`
3. Kiểm tra database đã được tạo

### Lỗi port đã được sử dụng

Thay đổi PORT trong `.env` hoặc dừng process đang chiếm port:

```bash
# Windows
netstat -ano | findstr :3001
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:3001 | xargs kill
```

## 📝 Notes

- API trả về JSON format
- Validation tự động cho tất cả DTO
- Error handling với status code phù hợp
- Logging được enable trong TypeORM

## 🔄 Tích hợp với Frontend

Frontend cần gọi API tại `http://localhost:3001/words`

Ví dụ trong React/Next.js:

```typescript
// Get all words
const response = await fetch("http://localhost:3001/words");
const words = await response.json();

// Add word
const response = await fetch("http://localhost:3001/words", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ english: "Hello", vietnamese: "Xin chào" }),
});

// Delete word
await fetch(`http://localhost:3001/words/${id}`, { method: "DELETE" });
```

## 📄 License

MIT
