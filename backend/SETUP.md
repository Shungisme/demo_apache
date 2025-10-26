# Hướng dẫn cài đặt Backend

## Bước 1: Cài đặt MySQL

### Windows:

1. Tải MySQL từ: https://dev.mysql.com/downloads/installer/
2. Chạy MySQL Installer
3. Chọn "Developer Default" setup
4. Làm theo hướng dẫn, đặt password cho root
5. Khởi động MySQL Server

### Kiểm tra MySQL đang chạy:

```bash
mysql --version
```

## Bước 2: Tạo Database

### Cách 1: Dùng MySQL Command Line

```bash
mysql -u root -p
```

Nhập password, sau đó:

```sql
CREATE DATABASE english_learning;
SHOW DATABASES;
EXIT;
```

### Cách 2: Dùng MySQL Workbench

1. Mở MySQL Workbench
2. Connect to database
3. Chạy query: `CREATE DATABASE english_learning;`

## Bước 3: Cài đặt Backend

```bash
cd backend
npm install
```

## Bước 4: Cấu hình .env

Mở file `.env` và điền thông tin:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=your_mysql_password_here
DB_DATABASE=english_learning

PORT=3001
```

## Bước 5: Chạy Backend

```bash
npm run start:dev
```

Bạn sẽ thấy:

```
🚀 Application is running on: http://localhost:3001
```

## Bước 6: Test API

Mở browser hoặc dùng curl:

```bash
# Test API
curl http://localhost:3001/words

# Thêm từ test
curl -X POST http://localhost:3001/words \
  -H "Content-Type: application/json" \
  -d '{"english":"Hello","vietnamese":"Xin chào"}'
```

## ✅ Hoàn tất!

Backend đang chạy và sẵn sàng cho frontend kết nối.

## 🔧 Commands hữu ích

```bash
# Chạy development mode (auto reload)
npm run start:dev

# Build cho production
npm run build

# Chạy production
npm run start:prod

# Xem logs
# Logs sẽ hiển thị trong terminal
```

## ❌ Xử lý lỗi thường gặp

### Lỗi: "Can't connect to MySQL server"

- Kiểm tra MySQL đang chạy
- Kiểm tra password trong .env
- Thử ping: `ping localhost`

### Lỗi: "Unknown database 'english_learning'"

- Database chưa được tạo
- Chạy: `CREATE DATABASE english_learning;`

### Lỗi: "Port 3001 already in use"

- Đổi PORT trong .env thành 3002 hoặc port khác
- Hoặc tắt process đang dùng port 3001

### Lỗi: "Access denied for user"

- Sai username hoặc password
- Kiểm tra lại thông tin trong .env
