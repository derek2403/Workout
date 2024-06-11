const express = require('express');
const router = express.Router();
const { 
    createWorkout,
    getWorkout,
    getWorkouts
 } = require('../controllers/workoutController');

router.get('/', getWorkouts)

router.get('/:id', getWorkout)

router.post('/', createWorkout)

router.delete('/:id', (req,res)=> {
    res.send('Delete Workout');
}); 

router.patch('/:id', (req,res)=> {
    res.send('Update Workout');
}); 

module.exports = router;