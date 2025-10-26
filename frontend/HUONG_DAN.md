# Hướng dẫn sử dụng ứng dụng Học Tiếng Anh

## 🚀 Khởi chạy ứng dụng

### Lần đầu sử dụng:

```bash
cd frontend
npm install
npm run dev
```

### Các lần sau:

```bash
cd frontend
npm run dev
```

Mở trình duyệt và truy cập: **http://localhost:3000**

## 📖 Tính năng chính

### 1. ➕ Thêm Từ Mới

- Nhập từ tiếng Anh và nghĩa tiếng Việt
- Nhấn "Thêm Từ" để lưu
- Từ sẽ tự động được lưu trong trình duyệt

### 2. 📝 Danh Sách Từ

- Xem tất cả từ đã thêm
- Hiển thị số lượng từ
- Có thể xóa từ không cần thiết

### 3. 🎓 Học Từ (Flashcard)

- **Lật thẻ**: Nhấn vào thẻ để xem nghĩa
  - Mặt trước: Từ tiếng Anh
  - Mặt sau: Nghĩa tiếng Việt
- **Di chuyển**: Dùng nút "Trước" và "Sau"
- **Xáo trộn**: Học từ theo thứ tự ngẫu nhiên
- **Đặt lại**: Quay về thứ tự ban đầu
- **Theo dõi**: Xem vị trí thẻ hiện tại (X/Y)

## 💡 Mẹo học hiệu quả

1. **Học đều đặn**: Mỗi ngày học 10-20 từ mới
2. **Ôn tập**: Xáo trộn và ôn lại các từ cũ
3. **Thực hành**: Cố gắng nhớ nghĩa trước khi lật thẻ
4. **Kiên trì**: Học liên tục để ghi nhớ lâu dài

## 🎨 Giao diện

- **Thiết kế**: Hiện đại, thân thiện với người dùng
- **Màu sắc**: Gradient tím/hồng cho flashcard
- **Hiệu ứng**: Animation lật thẻ 3D
- **Responsive**: Hoạt động tốt trên cả mobile và desktop

## 📂 Cấu trúc dự án

```
frontend/
├── app/
│   ├── page.tsx          # Trang chính
│   ├── layout.tsx        # Layout chung
│   └── globals.css       # CSS toàn cục
├── components/
│   ├── WordForm.tsx      # Form thêm từ
│   ├── WordList.tsx      # Danh sách từ
│   ├── Flashcard.tsx     # Thẻ flashcard
│   └── FlashcardGame.tsx # Game học từ
├── types/
│   └── word.ts           # Type định nghĩa
├── utils/
│   └── storage.ts        # localStorage helpers
└── package.json
```

## 🛠️ Commands khác

```bash
# Build cho production
npm run build
npm start

# Lint code
npm run lint
```

## ❓ Troubleshooting

### Lỗi không tìm thấy module:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 bị chiếm:

```bash
# Dùng port khác
npm run dev -- -p 3001
```

### Xóa dữ liệu đã lưu:

Mở Developer Tools (F12) → Application → Local Storage → Xóa `english-words`

---

**Chúc bạn học tốt! 📚✨**
