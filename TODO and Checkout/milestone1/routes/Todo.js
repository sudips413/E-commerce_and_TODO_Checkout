const express = require('express');
const router = express.Router();


const { createTodo, UpdateTodo ,UpdateCompleted,UpdateInprogress} = require('../controllers/Todo');



router.post('/create', createTodo);
router.put("/updatetodo/:id", UpdateTodo);
router.put("/updateinprogress/:id", UpdateInprogress);
router.put("/updatecompleted/:id", UpdateCompleted);


module.exports = router;

