import { createConnection } from "mysql2/promise";
import { config } from "dotenv";
import * as fs from "fs";
import * as path from "path";

// Load environment variables
config();

async function initDatabase() {
  console.log("🚀 Initializing database...");

  try {
    // Connect to MySQL server (without database)
    const connection = await createConnection({
      host: process.env.DB_HOST || "localhost",
      port: parseInt(process.env.DB_PORT) || 3306,
      user: process.env.DB_USERNAME || "root",
      password: process.env.DB_PASSWORD || "",
      multipleStatements: true,
    });

    console.log("✅ Connected to MySQL server");

    // Read and execute init SQL
    const sqlPath = path.join(__dirname, "sql", "init.sql");
    const sql = fs.readFileSync(sqlPath, "utf8");

    await connection.query(sql);
    console.log("✅ Database and tables created successfully!");

    await connection.end();
    console.log("👋 Connection closed");
  } catch (error) {
    console.error("❌ Error initializing database:", error);
    process.exit(1);
  }
}

initDatabase();
