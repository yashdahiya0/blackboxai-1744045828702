const express = require('express');
const router = express.Router();
const Match = require('../models/Match');
const auth = require('../middleware/auth');

// Get all matches
router.get('/', async (req, res) => {
  try {
    const matches = await Match.find()
      .sort({ date: 1 })
      .limit(50);
    res.json(matches);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create new match (protected route)
router.post('/', auth, async (req, res) => {
  try {
    const { teamA, teamB, date, location } = req.body;
    
    const newMatch = new Match({
      teamA,
      teamB,
      date,
      location,
      status: 'upcoming'
    });

    const savedMatch = await newMatch.save();
    res.status(201).json(savedMatch);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update match (protected route)
router.patch('/:id', auth, async (req, res) => {
  try {
    const updatedMatch = await Match.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedMatch);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;