# Database Management Scripts

This folder contains scripts for managing the MySQL database.

## 📁 Structure

```
scripts/
├── sql/
│   ├── init.sql          # SQL to create database and tables
│   └── drop.sql          # SQL to drop database
├── db-init.ts            # Initialize database (Node.js)
├── db-drop.ts            # Drop database (Node.js)
├── seed.ts               # Seed database with sample data
├── db-reset.sh           # Reset database (Linux/Mac)
└── db-reset.bat          # Reset database (Windows)
```

## 🚀 Quick Start

### Option 1: Using npm scripts (Recommended)

```bash
# Initialize database (create DB and tables)
npm run db:init

# Seed database with sample data
npm run db:seed

# Drop database (will ask for confirmation)
npm run db:drop

# Reset database (drop + init + seed)
npm run db:reset
```

### Option 2: Using SQL files directly

```bash
# Initialize
mysql -u root -p < scripts/sql/init.sql

# Drop
mysql -u root -p < scripts/sql/drop.sql
```

## 📝 Detailed Commands

### 1. Initialize Database

Creates the database and tables if they don't exist.

```bash
npm run db:init
```

This will:

- ✅ Create `english_learning` database
- ✅ Create `words` table with proper schema
- ✅ Set UTF-8 encoding
- ✅ Add indexes for performance

### 2. Seed Database

Populates the database with sample English-Vietnamese word pairs.

```bash
# Add sample words (keeps existing words)
npm run db:seed

# Clear existing words and add sample words
npm run db:seed -- --clear
```

Sample data includes:

- **Greetings**: Hello, Goodbye, Thank you, etc.
- **Verbs**: Go, Come, Eat, Drink, Study, etc.
- **Nouns**: Book, Table, House, Car, etc.
- **Adjectives**: Good, Bad, Big, Small, etc.
- **Numbers**: One, Two, Three, etc.
- **Time**: Today, Tomorrow, Morning, etc.

**Total: 50+ sample words**

### 3. Drop Database

⚠️ **WARNING**: This will delete the entire database and all data!

```bash
# Drop with confirmation prompt
npm run db:drop

# Drop without confirmation (force)
npm run db:drop -- --force
```

### 4. Reset Database

Combines drop + init + seed into one command.

```bash
# Complete reset
npm run db:reset
```

This will:

1. 🗑️ Drop existing database
2. 🚀 Create new database and tables
3. 🌱 Seed with sample data

**Alternative (Windows):**

```bash
scripts\db-reset.bat
```

**Alternative (Linux/Mac):**

```bash
bash scripts/db-reset.sh
```

## 🔧 Configuration

Scripts read configuration from `.env` file:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=your_password
DB_DATABASE=english_learning
```

## 📊 Sample Data Overview

The seed script adds 50+ commonly used English words:

| Category   | Count | Examples                  |
| ---------- | ----- | ------------------------- |
| Greetings  | 5     | Hello, Goodbye, Thank you |
| Verbs      | 10    | Go, Come, Eat, Drink      |
| Nouns      | 10    | Book, Table, House, Car   |
| Adjectives | 10    | Good, Bad, Big, Small     |
| Numbers    | 8     | One, Two, Three, Ten      |
| Time       | 7     | Today, Tomorrow, Morning  |

## 🛠️ Development Workflow

### First Time Setup

```bash
npm run db:init    # Create database
npm run db:seed    # Add sample data
npm run start:dev  # Start application
```

### During Development

```bash
npm run db:seed    # Add more sample data
npm run db:reset   # Fresh start with clean data
```

### Testing

```bash
npm run db:reset   # Reset to known state
# Run your tests here
```

## 🐛 Troubleshooting

### Error: "Access denied for user"

- Check username/password in `.env`
- Ensure MySQL user has CREATE/DROP privileges

### Error: "Database already exists"

- Run `npm run db:drop` first
- Or manually drop: `DROP DATABASE english_learning;`

### Error: "Cannot connect to MySQL"

- Check MySQL is running: `mysql --version`
- Check host/port in `.env`
- Test connection: `mysql -u root -p`

### Error: "ts-node not found"

- Install dependencies: `npm install`
- ts-node is in devDependencies

## 📖 Script Details

### init.sql

- Creates database with UTF-8 support
- Creates words table with:
  - `id`: Auto-increment primary key
  - `english`: English word (VARCHAR 255)
  - `vietnamese`: Vietnamese meaning (VARCHAR 255)
  - `createdAt`: Timestamp (auto-generated)
  - Index on `createdAt` for sorting

### seed.ts

- Uses TypeORM for type-safe operations
- Connects using .env configuration
- Supports `--clear` flag to remove existing data
- Displays progress and statistics

### db-drop.ts

- Requires confirmation unless `--force` flag used
- Safely drops entire database
- Closes connection properly

### db-init.ts

- Executes init.sql via Node.js
- Handles errors gracefully
- Supports multiple statements

## 🔐 Security Notes

- ⚠️ Never commit `.env` with real credentials
- ⚠️ Use strong passwords for production
- ⚠️ Restrict database user privileges in production
- ⚠️ Always backup before running drop/reset

## 📚 Additional Resources

- [MySQL Documentation](https://dev.mysql.com/doc/)
- [TypeORM Documentation](https://typeorm.io/)
- [NestJS Database Guide](https://docs.nestjs.com/techniques/database)

## 🤝 Contributing

When adding new migrations or seeds:

1. Update the appropriate SQL file or TypeScript script
2. Test with `npm run db:reset`
3. Update this README with new commands/features
4. Commit changes to version control

---

**Happy Database Managing! 🎉**
