import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import projectsRoute from './routes/projects.js';
import messagesRoute from './routes/messages.js';


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB error', err));


app.use('/api/projects', projectsRoute);
app.use('/api/messages', messagesRoute);
app.get('/', (req, res) => res.send('Portfolio API running'));


const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`🚀 Server running on port ${port}`));