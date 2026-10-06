import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  currentRole: String,
  targetRole: String,
  experience: Number,
  skills: [String],
  languages: [String],
  preferences: {
    language: { type: String, default: 'en' },
    voiceEnabled: { type: Boolean, default: true },
    timeline: String,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
