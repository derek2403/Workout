const express = require('express');

const router = express.Router();

router.get('/', (req,res)=> {
    res.send('Get All Workouts');
});

router.get('/:id', (req,res)=> {
    res.send('Get Single Workout');
}); 

router.post('/', (req,res)=> {
    res.send('Post Workout'); 
});

router.delete('/:id', (req,res)=> {
    res.send('Delete Workout');
}); 

router.patch('/:id', (req,res)=> {
    res.send('Update Workout');
}); 

module.exports = router;