import { createConnection } from "mysql2/promise";
import { config } from "dotenv";
import * as fs from "fs";
import * as path from "path";
import * as readline from "readline";

// Load environment variables
config();

async function askConfirmation(): Promise<boolean> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(
      "⚠️  WARNING: This will delete the entire database and all data!\n   Are you sure? (yes/no): ",
      (answer) => {
        rl.close();
        resolve(answer.toLowerCase() === "yes");
      }
    );
  });
}

async function dropDatabase() {
  console.log("🗑️  Dropping database...");

  // Check for --force flag to skip confirmation
  const forceFlag = process.argv.includes("--force");

  if (!forceFlag) {
    const confirmed = await askConfirmation();
    if (!confirmed) {
      console.log("❌ Operation cancelled");
      process.exit(0);
    }
  }

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

    // Read and execute drop SQL
    const sqlPath = path.join(__dirname, "sql", "drop.sql");
    const sql = fs.readFileSync(sqlPath, "utf8");

    await connection.query(sql);
    console.log("✅ Database dropped successfully!");

    await connection.end();
    console.log("👋 Connection closed");
  } catch (error) {
    console.error("❌ Error dropping database:", error);
    process.exit(1);
  }
}

dropDatabase();
