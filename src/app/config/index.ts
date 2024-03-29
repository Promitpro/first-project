import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });
//D:\next_level_developer\first-project\.env
export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
};
