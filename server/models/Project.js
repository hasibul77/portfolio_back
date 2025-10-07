import mongoose from 'mongoose';
const ProjectSchema = new mongoose.Schema({
title: { type: String, required: true },
description: String,
image: String,
tech: [String],
github: String,
demo: String,
createdAt: { type: Date, default: Date.now }
});
export default mongoose.model('Project', ProjectSchema);