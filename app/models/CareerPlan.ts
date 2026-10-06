import mongoose from 'mongoose';

const PhaseSchema = new mongoose.Schema({
  name: String,
  timeline: String,
  skills: [{
    name: String,
    priority: String,
    resources: [String],
  }],
  projects: [{
    name: String,
    description: String,
    timeline: String,
  }],
  milestones: [{
    name: String,
    deadline: Date,
    completed: { type: Boolean, default: false },
  }],
  certifications: [{
    name: String,
    provider: String,
    deadline: Date,
  }],
});

const CareerPlanSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  targetRole: String,
  phases: [PhaseSchema],
  progress: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.CareerPlan || mongoose.model('CareerPlan', CareerPlanSchema);
