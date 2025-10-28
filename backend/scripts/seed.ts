import * as mongoose from "mongoose";
import * as dotenv from "dotenv";

// Load environment variables
dotenv.config();

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

  const mongoUri =
    process.env.MONGODB_URI || "mongodb://localhost:27017/english_learning";

  try {
    // Initialize connection
    console.log("🔌 Connecting to MongoDB...");
    console.log(`📍 URI: ${mongoUri}`);
    await mongoose.connect(mongoUri);
    console.log("✅ Database connection established");

    // Define Word schema inline
    const wordSchema = new mongoose.Schema(
      {
        english: { type: String, required: true },
        vietnamese: { type: String, required: true },
      },
      { timestamps: true }
    );

    const Word = mongoose.model("Word", wordSchema);

    // Check for --clear flag
    const shouldClear = process.argv.includes("--clear");
    const existingCount = await Word.countDocuments();

    if (existingCount > 0) {
      console.log(`⚠️  Found ${existingCount} existing words`);

      if (shouldClear) {
        await Word.deleteMany({});
        console.log("🗑️  Cleared existing words");
      } else {
        console.log(
          "ℹ️  Keeping existing words. Use --clear flag to remove them."
        );
      }
    }

    // Insert sample words
    console.log(`📝 Inserting ${sampleWords.length} sample words...`);
    await Word.insertMany(sampleWords);

    const totalCount = await Word.countDocuments();
    console.log(`✅ Seeding completed! Total words in database: ${totalCount}`);

    // Show some sample words
    console.log("\n📚 Sample words:");
    const samples = await Word.find().limit(5).sort({ createdAt: -1 });
    samples.forEach((word: any, index: number) => {
      console.log(`  ${index + 1}. ${word.english} → ${word.vietnamese}`);
    });
  } catch (error) {
    console.error("❌ Error during seeding:", error);
    process.exit(1);
  } finally {
    // Close connection
    await mongoose.disconnect();
    console.log("👋 Database connection closed");
  }
}

// Run seeding
seed();
