# English Learning Flashcards

Một ứng dụng web học tiếng Anh với flashcard được xây dựng bằng Next.js.

## Tính năng

- ➕ **Thêm từ mới**: Thêm từ tiếng Anh và nghĩa tiếng Việt
- 📝 **Quản lý từ vựng**: Xem danh sách và xóa từ không cần thiết
- 🎓 **Học với Flashcard**: Luyện tập với thẻ ghi nhớ có hiệu ứng lật
- 🔀 **Xáo trộn**: Học từ theo thứ tự ngẫu nhiên
- 💾 **Lưu trữ tự động**: Dữ liệu được lưu trong trình duyệt

## Cài đặt

1. Cài đặt dependencies:

```bash
npm install
```

2. Chạy development server:

```bash
npm run dev
```

3. Mở trình duyệt và truy cập [http://localhost:3000](http://localhost:3000)

## Build cho production

```bash
npm run build
npm start
```

## Công nghệ sử dụng

- **Next.js 14**: React framework với App Router
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **localStorage**: Lưu trữ dữ liệu

## Cách sử dụng

1. **Thêm từ**: Vào tab "Thêm Từ", nhập từ tiếng Anh và nghĩa tiếng Việt
2. **Xem danh sách**: Tab "Danh Sách" hiển thị tất cả từ đã thêm
3. **Học từ**: Tab "Học Từ" cho phép luyện tập với flashcard
   - Nhấn vào thẻ để lật và xem nghĩa
   - Dùng nút "Trước/Sau" để di chuyển giữa các thẻ
   - Nhấn "Xáo Trộn" để học theo thứ tự ngẫu nhiên

## License

MIT
