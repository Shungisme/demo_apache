import { DataSource } from "typeorm";
import { config } from "dotenv";
import { Word } from "../src/words/word.entity";

// Load environment variables
config();

// Sample words for seeding
const sampleWords = [
  // Greetings
  { english: "Hello", vietnamese: "Xin chào" },
  { english: "Goodbye", vietnamese: "Tạm biệt" },
  { english: "Thank you", vietnamese: "Cảm ơn" },
  { english: "Sorry", vietnamese: "Xin lỗi" },
  { english: "Please", vietnamese: "Làm ơn" },

  // Common Verbs
  { english: "Go", vietnamese: "Đi" },
  { english: "Come", vietnamese: "Đến" },
  { english: "Eat", vietnamese: "Ăn" },
  { english: "Drink", vietnamese: "Uống" },
  { english: "Study", vietnamese: "Học" },
  { english: "Work", vietnamese: "Làm việc" },
  { english: "Sleep", vietnamese: "Ngủ" },
  { english: "Read", vietnamese: "Đọc" },
  { english: "Write", vietnamese: "Viết" },
  { english: "Speak", vietnamese: "Nói" },

  // Common Nouns
  { english: "Book", vietnamese: "Sách" },
  { english: "Table", vietnamese: "Bàn" },
  { english: "Chair", vietnamese: "Ghế" },
  { english: "House", vietnamese: "Nhà" },
  { english: "Car", vietnamese: "Xe hơi" },
  { english: "Phone", vietnamese: "Điện thoại" },
  { english: "Computer", vietnamese: "Máy tính" },
  { english: "Water", vietnamese: "Nước" },
  { english: "Food", vietnamese: "Thức ăn" },
  { english: "Friend", vietnamese: "Bạn bè" },

  // Adjectives
  { english: "Good", vietnamese: "Tốt" },
  { english: "Bad", vietnamese: "Xấu" },
  { english: "Big", vietnamese: "To" },
  { english: "Small", vietnamese: "Nhỏ" },
  { english: "Fast", vietnamese: "Nhanh" },
  { english: "Slow", vietnamese: "Chậm" },
  { english: "Happy", vietnamese: "Vui" },
  { english: "Sad", vietnamese: "Buồn" },
  { english: "Beautiful", vietnamese: "Đẹp" },
  { english: "Ugly", vietnamese: "Xấu" },

  // Numbers
  { english: "One", vietnamese: "Một" },
  { english: "Two", vietnamese: "Hai" },
  { english: "Three", vietnamese: "Ba" },
  { english: "Four", vietnamese: "Bốn" },
  { english: "Five", vietnamese: "Năm" },
  { english: "Ten", vietnamese: "Mười" },
  { english: "Hundred", vietnamese: "Trăm" },
  { english: "Thousand", vietnamese: "Nghìn" },

  // Time
  { english: "Today", vietnamese: "Hôm nay" },
  { english: "Tomorrow", vietnamese: "Ngày mai" },
  { english: "Yesterday", vietnamese: "Hôm qua" },
  { english: "Morning", vietnamese: "Buổi sáng" },
  { english: "Afternoon", vietnamese: "Buổi chiều" },
  { english: "Evening", vietnamese: "Buổi tối" },
  { english: "Night", vietnamese: "Đêm" },
];

async function seed() {
  console.log("🌱 Starting database seeding...");

  // Create data source
  const dataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT) || 3306,
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_DATABASE || "english_learning",
    entities: [Word],
    synchronize: false,
  });

  try {
    // Initialize connection
    await dataSource.initialize();
    console.log("✅ Database connection established");

    // Get repository
    const wordRepository = dataSource.getRepository(Word);

    // Clear existing data (optional)
    const existingCount = await wordRepository.count();
    if (existingCount > 0) {
      console.log(`⚠️  Found ${existingCount} existing words`);
      const shouldClear = process.argv.includes("--clear");

      if (shouldClear) {
        await wordRepository.clear();
        console.log("🗑️  Cleared existing words");
      } else {
        console.log(
          "ℹ️  Keeping existing words. Use --clear flag to remove them."
        );
      }
    }

    // Insert sample words
    console.log(`📝 Inserting ${sampleWords.length} sample words...`);

    for (const wordData of sampleWords) {
      const word = wordRepository.create(wordData);
      await wordRepository.save(word);
    }

    const totalCount = await wordRepository.count();
    console.log(`✅ Seeding completed! Total words in database: ${totalCount}`);
  } catch (error) {
    console.error("❌ Error during seeding:", error);
    process.exit(1);
  } finally {
    // Close connection
    await dataSource.destroy();
    console.log("👋 Database connection closed");
  }
}

// Run seeding
seed();
