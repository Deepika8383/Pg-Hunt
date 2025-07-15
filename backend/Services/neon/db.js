// services/neon/db.js
// services/neon/db.js
import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_S8rcRis3OHFY@ep-gentle-lake-a1u247u4-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;

