# Database Scripts Quick Reference

## 🚀 Common Commands

```bash
# First time setup
npm run db:init      # Create database and tables
npm run db:seed      # Add sample words

# Regular use
npm run db:seed      # Add more sample data
npm run db:reset     # Fresh start (drop + init + seed)

# Maintenance
npm run db:drop      # Delete database (with confirmation)
```

## 📊 What Gets Created

### Database

- Name: `english_learning`
- Charset: UTF-8 (utf8mb4)
- Collation: utf8mb4_unicode_ci

### Table: words

| Column     | Type         | Description                 |
| ---------- | ------------ | --------------------------- |
| id         | INT          | Primary key, auto-increment |
| english    | VARCHAR(255) | English word                |
| vietnamese | VARCHAR(255) | Vietnamese meaning          |
| createdAt  | TIMESTAMP    | Auto-generated timestamp    |

### Sample Data

- **50+ words** across multiple categories
- Greetings, verbs, nouns, adjectives, numbers, time words
- Perfect for testing the flashcard feature

## 💡 Tips

- Run `db:reset` when you need a clean database state
- Use `db:seed --clear` to replace all existing words
- Add `--force` to skip confirmation prompts
- Check `.env` file for database credentials

## 🔗 More Info

See [scripts/README.md](./scripts/README.md) for detailed documentation.
