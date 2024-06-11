const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');

//all
const getWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find({}).sort({ createdAt: -1 });
        res.status(200).json(workouts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
//single
const getWorkout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'Workout not found' });
    }
    const workout = await Workout.findById(id);
    if (!workout) {
        return res.status(404).json({ message: 'Workout not found' });
    } else {
        res.status(200).json(workout);
    }
}

//new
const createWorkout = async (req,res)=> {
    const {title, reps, load} = req.body
    try{
        const workout = await Workout.create({title, reps, load})
        res.status(200).json(workout);
    } catch(err) {
        res.status(400).json({message: err.message});
    }
}

//delete

//update

module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout
}