import express from 'express';
import cors from 'cors';
import rootRouter from './routes/root.router.js';
import evnConfig from './config/envConfig.js';

const { portServer } = evnConfig;
const app = express();

// Middleware
app.use(express.json());      // Chuyển dữ liệu request về JSON
app.use(cors());              // Cho phép tất cả domain truy cập
app.use(rootRouter);          // Kêt nối với router chính

// Khởi tạo server với port: 8080 (default)
app.listen(
  portServer,
  () => console.log(`Server is running: http://localhost:${portServer}`)
);
