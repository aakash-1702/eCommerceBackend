import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv"

dotenv.config({
    path: './.env'
});

const connectDB = async () => {
    try {
        const sql = neon(process.env.DATABASE_URL);
        // const result = await sql`SELECT * FROM employees`;
        // console.log(`Employees retrieved successfully:`, result);
        
        return sql;
    } catch (error) {
        console.log(`Query FAILED: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;
