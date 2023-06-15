const Hobby = require('../models/hobbyModel');

// GET all hobbies
exports.getAllHobbies = async (req, res) => {
  try {
    const hobbies = await Hobby.find();
    res.json(hobbies);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve hobbies' });
  }
};

// GET a single hobby by ID
exports.getHobbyById = async (req, res) => {
  try {
    const hobby = await Hobby.findById(req.params.id);
    if (!hobby) {
      return res.status(404).json({ error: 'Hobby not found' });
    }
    res.json(hobby);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve hobby' });
  }
};

// POST a new hobby
exports.createHobby = async (req, res) => {
  try {
    const newHobby = new Hobby(req.body);
    const savedHobby = await newHobby.save();
    res.json(savedHobby);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create hobby' });
  }
};

// PUT (update) an existing hobby
exports.updateHobby = async (req, res) => {
  try {
    const hobby = await Hobby.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!hobby) {
      return res.status(404).json({ error: 'Hobby not found' });
    }
    res.json(hobby);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update hobby' });
  }
};

// DELETE a hobby
exports.deleteHobby = async (req, res) => {
  try {
    const hobby = await Hobby.findByIdAndDelete(req.params.id);
    if (!hobby) {
      return res.status(404).json({ error: 'Hobby not found' });
    }
    res.json({ message: 'Hobby deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete hobby' });
  }
};
