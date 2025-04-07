const mongoose = require('mongoose');

const MatchSchema = new mongoose.Schema({
  teamA: {
    type: String,
    required: true,
    trim: true
  },
  teamB: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  score: {
    type: String,
    default: '0-0'
  },
  status: {
    type: String,
    enum: ['upcoming', 'ongoing', 'completed', 'postponed'],
    default: 'upcoming'
  },
  description: {
    type: String,
    trim: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Add text index for search functionality
MatchSchema.index({
  teamA: 'text',
  teamB: 'text',
  location: 'text',
  description: 'text'
});

module.exports = mongoose.model('Match', MatchSchema);