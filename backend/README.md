# English Learning Backend API# English Learning Backend API

Backend API for English Learning application, built with NestJS and MongoDB.Backend API cho ứng dụng học tiếng Anh, được xây dựng bằng NestJS và MySQL.

## 🛠️ Technologies## 🛠️ Công nghệ

- **NestJS**: Node.js framework- **NestJS**: Node.js framework

- **Mongoose**: MongoDB ODM- **TypeORM**: ORM cho MySQL

- **MongoDB**: NoSQL Database - **MySQL**: Database

- **TypeScript**: Type-safe development- **TypeScript**: Type-safe development

- **class-validator**: Validation- **class-validator**: Validation

- **class-transformer**: Data transformation- **class-transformer**: Data transformation

## 📋 Requirements## 📋 Yêu cầu

- Node.js >= 16- Node.js >= 16

- MongoDB (local) OR MongoDB Atlas (cloud - recommended)- MySQL >= 5.7 hoặc MySQL 8

- npm or yarn- npm hoặc yarn

## 🚀 Quick Start## 🚀 Cài đặt

### 1. Install Dependencies### 1. Cài đặt dependencies

`bash`bash

npm installnpm install

```````



### 2. Database Setup### 2. Cấu hình database



**Option A: MongoDB Atlas (Recommended - No installation needed!)****Option 1: Using database scripts (Recommended)**



1. Sign up for free at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)```bash

2. Create a free cluster (512MB storage free forever)# Initialize database and tables

3. Create a database usernpm run db:init

4. Whitelist your IP (or use 0.0.0.0/0 for development)

5. Get your connection string# Seed with sample data (50+ words)

npm run db:seed

**Option B: Local MongoDB**```



Install MongoDB Community Edition:**Option 2: Manual setup**

- [Download MongoDB](https://www.mongodb.com/try/download/community)

- Start MongoDB service: `mongod`Tạo database trong MySQL:



### 3. Environment Configuration```sql

CREATE DATABASE english_learning;

Copy `.env.example` to `.env`:```



```bashHoặc dùng MySQL Workbench/phpMyAdmin để tạo database.

cp .env.example .env

```See [DATABASE.md](./DATABASE.md) for more database management commands.



Edit `.env` file:### 3. Cấu hình environment



```envCopy file `.env.example` thành `.env` và cấu hình:

# For MongoDB Atlas (recommended)

MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/english_learning?retryWrites=true&w=majority```bash

cp .env.example .env

# OR for local MongoDB```

# MONGODB_URI=mongodb://localhost:27017/english_learning

Chỉnh sửa `.env`:

PORT=3001

``````env

DB_HOST=localhost

### 4. Seed Database (Optional)DB_PORT=3306

DB_USERNAME=root

Populate database with 50+ sample words:DB_PASSWORD=your_password

DB_DATABASE=english_learning

```bash

npm run db:seedPORT=3001

```````

Use `--clear` flag to remove existing data first:### 4. Chạy ứng dụng

```````bash**Development mode:**

npm run db:seed -- --clear

``````bash

npm run start:dev

### 5. Run Application```



**Development mode:****Production mode:**



```bash```bash

npm run start:devnpm run build

```npm run start:prod

```````

**Production mode:**

Server sẽ chạy tại: `http://localhost:3001`

````bash

npm run build## 📡 API Endpoints

npm run start:prod

```### Words API



Server will run at: `http://localhost:3001`| Method | Endpoint       | Description    | Body                        |

| ------ | -------------- | -------------- | --------------------------- |

## 📡 API Endpoints| GET    | `/words`       | Lấy tất cả từ  | -                           |

| GET    | `/words/:id`   | Lấy từ theo ID | -                           |

### Words API| GET    | `/words/count` | Đếm số từ      | -                           |

| POST   | `/words`       | Thêm từ mới    | `{ english, vietnamese }`   |

| Method | Endpoint       | Description      | Body                        || PATCH  | `/words/:id`   | Cập nhật từ    | `{ english?, vietnamese? }` |

| ------ | -------------- | ---------------- | --------------------------- || DELETE | `/words/:id`   | Xóa từ         | -                           |

| GET    | `/words`       | Get all words    | -                           |

| GET    | `/words/:id`   | Get word by ID   | -                           |### Ví dụ Request

| GET    | `/words/count` | Get words count  | -                           |

| POST   | `/words`       | Add new word     | `{ english, vietnamese }`   |**Thêm từ mới:**

| PATCH  | `/words/:id`   | Update word      | `{ english?, vietnamese? }` |

| DELETE | `/words/:id`   | Delete word      | -                           |```bash

curl -X POST http://localhost:3001/words \

### Example Requests  -H "Content-Type: application/json" \

  -d '{

**Get all words:**    "english": "Hello",

    "vietnamese": "Xin chào"

```bash  }'

curl http://localhost:3001/words```

````

**Lấy tất cả từ:**

**Add a new word:**

````bash

```bashcurl http://localhost:3001/words

curl -X POST http://localhost:3001/words \```

  -H "Content-Type: application/json" \

  -d '{"english": "Hello", "vietnamese": "Xin chào"}'**Xóa từ:**

````

```bash

**Get word count:**curl -X DELETE http://localhost:3001/words/1

```

```bash

curl http://localhost:3001/words/count## 📊 Database Schema

```

### Table: words

## 📁 Project Structure

| Column | Type | Description |

````| ---------- | ------------ | --------------------------- |

backend/| id         | INT          | Primary key, auto increment |

├── src/| english    | VARCHAR(255) | Từ tiếng Anh                |

│   ├── main.ts              # Entry point with CORS| vietnamese | VARCHAR(255) | Nghĩa tiếng Việt            |

│   ├── app.module.ts        # Root module (MongoDB connection)| createdAt  | TIMESTAMP    | Thời gian tạo               |

│   └── words/

│       ├── word.schema.ts   # Mongoose schema## 🔧 Development

│       ├── words.controller.ts  # REST API endpoints

│       ├── words.service.ts     # Business logic### Scripts

│       ├── words.module.ts      # Feature module

│       └── dto/```bash

│           ├── create-word.dto.ts  # Validation DTO# Development

│           └── update-word.dto.ts  # Update DTOnpm run start:dev

├── scripts/

│   ├── seed.ts              # Database seeding script# Build

│   └── README.md            # Scripts documentationnpm run build

├── .env.example             # Environment template

├── package.json# Production

└── README.mdnpm run start:prod

````

# Lint

## 🗄️ Databasenpm run lint

This app uses **MongoDB** instead of MySQL for simpler deployment:# Format

npm run format

### Why MongoDB?```

- ✅ **No installation needed**: Use MongoDB Atlas (free cloud hosting)### Database Management

- ✅ **Simpler setup**: Just paste connection string, no database creation needed

- ✅ **JSON-like documents**: Easy to understand and work with```bash

- ✅ **Perfect for demos**: 5-minute setup vs 20+ minutes for MySQL# Initialize database (create DB and tables)

npm run db:init

### Seeding Data

# Seed database with sample data

````bashnpm run db:seed

# Add 50+ sample words

npm run db:seed# Drop database (with confirmation)

npm run db:drop

# Clear and reseed

npm run db:seed -- --clear# Reset database (drop + init + seed)

```npm run db:reset

````

Sample data includes:

- **Greetings**: Hello, Goodbye, Thank you, etc.See [DATABASE.md](./DATABASE.md) or [scripts/README.md](./scripts/README.md) for detailed documentation.

- **Verbs**: Go, Come, Eat, Drink, Study, etc.

- **Nouns**: Book, Table, House, Car, etc.### Database Sync

- **Adjectives**: Good, Bad, Big, Small, etc.

- **Numbers**: One, Two, Three, etc.TypeORM được cấu hình với `synchronize: true` trong development, tự động tạo/cập nhật bảng.

- **Time**: Today, Tomorrow, Morning, etc.

⚠️ **Lưu ý:** Tắt `synchronize` trong production! Sử dụng migrations thay thế.

## 🔧 Development

## 🔐 CORS

### Available Scripts

CORS được enable cho frontend tại `http://localhost:3000`.

````bash

npm run start          # Start appĐể thay đổi, chỉnh sửa trong `src/main.ts`:

npm run start:dev      # Start with watch mode

npm run start:debug    # Start with debug mode```typescript

npm run build          # Build for productionapp.enableCors({

npm run start:prod     # Start production build  origin: "http://your-frontend-url",

npm run lint           # Run ESLint  credentials: true,

npm run format         # Format code with Prettier});

npm run db:seed        # Seed database```

````

## 🐛 Troubleshooting

### Code Style

### Lỗi kết nối MySQL

- ESLint + Prettier for code formatting

- TypeScript strict mode enabled1. Kiểm tra MySQL đang chạy

- Class-based architecture with NestJS decorators2. Kiểm tra username/password trong `.env`

- Mongoose schemas with TypeScript types3. Kiểm tra database đã được tạo

## 🚢 Deployment### Lỗi port đã được sử dụng

### Step-by-Step Deployment GuideThay đổi PORT trong `.env` hoặc dừng process đang chiếm port:

See [DEPLOYMENT_GUIDE.md](../DEPLOYMENT_GUIDE.md) for complete deployment instructions using Apache on Ubuntu VPS.```bash

# Windows

### Quick Deployment Summarynetstat -ano | findstr :3001

taskkill /PID <PID> /F

1. **MongoDB Atlas Setup** (5 minutes):
   - Create free cluster# Linux/Mac

   - Get connection stringlsof -ti:3001 | xargs kill

   - No VPS database installation needed!```

2. **Deploy Backend**:## 📝 Notes

   ````bash

   npm install --production- API trả về JSON format

   npm run build- Validation tự động cho tất cả DTO

   pm2 start dist/main.js --name english-backend- Error handling với status code phù hợp

   ```- Logging được enable trong TypeORM

   ````

3. **Environment Variables**:## 🔄 Tích hợp với Frontend

   ```````env

   MONGODB_URI=mongodb+srv://...Frontend cần gọi API tại `http://localhost:3001/words`

   NODE_ENV=production

   PORT=3001Ví dụ trong React/Next.js:

   CORS_ORIGIN=https://yourdomain.com

   ``````typescript
   ```````

// Get all words

### Using PM2 (Process Manager)const response = await fetch("http://localhost:3001/words");

const words = await response.json();

````bash

# Install PM2// Add word

npm install -g pm2const response = await fetch("http://localhost:3001/words", {

  method: "POST",

# Start  headers: { "Content-Type": "application/json" },

pm2 start dist/main.js --name english-backend  body: JSON.stringify({ english: "Hello", vietnamese: "Xin chào" }),

});

# Monitor

pm2 monit// Delete word

await fetch(`http://localhost:3001/words/${id}`, { method: "DELETE" });

# Logs```

pm2 logs english-backend

## 📄 License

# Restart

pm2 restart english-backendMIT


# Auto-start on boot
pm2 startup
pm2 save
````

## 🌟 Key Features

- ✅ RESTful API design
- ✅ MongoDB with Mongoose ODM (simpler than SQL!)
- ✅ TypeScript for type safety
- ✅ DTO validation with class-validator
- ✅ CORS enabled for frontend integration
- ✅ Auto-generate timestamps (createdAt, updatedAt)
- ✅ ID transformation (\_id → id) for frontend compatibility
- ✅ Error handling with HTTP exceptions
- ✅ 50+ sample words seeding script
- ✅ No complex SQL setup needed

## 📚 API Response Format

**Success Response:**

```json
{
  "id": "6540f1a2b3c4d5e6f7890123",
  "english": "Hello",
  "vietnamese": "Xin chào",
  "createdAt": "2025-10-28T10:00:00.000Z",
  "updatedAt": "2025-10-28T10:00:00.000Z"
}
```

**Error Response:**

```json
{
  "statusCode": 404,
  "message": "Word with ID 123 not found",
  "error": "Not Found"
}
```

## 🔐 CORS Configuration

CORS is enabled in `src/main.ts`:

```typescript
app.enableCors({
  origin: process.env.CORS_ORIGIN || "http://localhost:3000",
  credentials: true,
});
```

Update `CORS_ORIGIN` in `.env` for production.

## 🐛 Troubleshooting

### MongoDB Connection Error

**Issue:** "MongooseError: Cannot connect to MongoDB"

**Solutions:**

1. **Local MongoDB**: Check if MongoDB service is running

   ```bash
   # Start MongoDB
   mongod
   ```

2. **MongoDB Atlas**:
   - Verify connection string in `.env`
   - Check network access (whitelist IP)
   - Ensure database user credentials are correct

3. **Test connection**:
   ```bash
   # Using mongosh
   mongosh "mongodb://localhost:27017/english_learning"
   ```

### Port Already in Use

**Issue:** "Port 3001 is already in use"

**Solutions:**

```bash
# Find and kill process using port 3001
# Mac/Linux:
lsof -i :3001
kill -9 <PID>

# Windows:
netstat -ano | findstr :3001
taskkill /PID <PID> /F

# Or change PORT in .env
```

### Validation Errors

**Issue:** "Validation failed" when creating word

**Solution:** Ensure request body contains required fields:

```json
{
  "english": "required string",
  "vietnamese": "required string"
}
```

### Seeding Fails

**Issue:** "Cannot connect to database" when running seed script

**Solutions:**

1. Check `.env` file exists and has correct MONGODB_URI
2. Ensure MongoDB is running (local) or Atlas is accessible
3. Run with `--clear` flag if duplicate key errors:
   ```bash
   npm run db:seed -- --clear
   ```

## 🆚 MongoDB vs MySQL

| Feature            | MongoDB (Current)   | MySQL (Previous)                |
| ------------------ | ------------------- | ------------------------------- |
| **Setup Time**     | 5 minutes (Atlas)   | 20+ minutes                     |
| **Installation**   | None (cloud)        | Need to install on VPS          |
| **Configuration**  | 1 connection string | 5+ env variables                |
| **Schema**         | Flexible documents  | Rigid tables                    |
| **Learning Curve** | JSON-like (easy)    | SQL (harder)                    |
| **Best For**       | Demos, MVPs         | Production with complex queries |

## 📖 Related Documentation

- [Deployment Guide](../DEPLOYMENT_GUIDE.md) - Complete VPS deployment
- [Scripts README](./scripts/README.md) - Database scripts documentation
- [NestJS Documentation](https://docs.nestjs.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [MongoDB Atlas Guide](https://www.mongodb.com/docs/atlas/)

## 🎯 Demo Tips

For presentations and demos:

1. **Use MongoDB Atlas** - No database setup in demo
2. **Pre-seed data** - Run `npm run db:seed` before demo
3. **Test endpoints** - Use provided curl commands
4. **Show monitoring** - `pm2 monit` looks impressive
5. **Explain simplicity** - "No MySQL installation needed!"

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

MIT

---

**Made with ❤️ for English Learning**  
**Switched to MongoDB for simpler deployment! 🚀**
