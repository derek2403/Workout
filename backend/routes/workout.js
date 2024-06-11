const express = require('express');
const Workout = require('../models/workoutModel');
const router = express.Router();

router.get('/', (req,res)=> {
    res.send('Get All Workouts');
});

router.get('/:id', (req,res)=> {
    res.send('Get Single Workout');
}); 

router.post('/', async (req,res)=> {
    const {title, reps, load} = req.body
    try{
        const workout = await Workout.create({title, reps, load})
        res.status(200).json(workout);
    } catch(err) {
        res.status(400).json({message: err.message});
    }
})

router.delete('/:id', (req,res)=> {
    res.send('Delete Workout');
}); 

router.patch('/:id', (req,res)=> {
    res.send('Update Workout');
}); 

module.exports = router;