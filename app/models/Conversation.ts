import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
  role: String,
  content: String,
  timestamp: { type: Date, default: Date.now },
  audioUrl: String,
});

const ConversationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  messages: [MessageSchema],
  context: mongoose.Schema.Types.Mixed,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Conversation || mongoose.model('Conversation', ConversationSchema);
