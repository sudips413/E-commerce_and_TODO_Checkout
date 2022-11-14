const Todo = require('../models/Todo');
const TodoProgress = require('../models/Inprogress');
const TodoComplete = require ("../models/Complete")
const TodoDone = require('../models/Done');

//createTodo function works as given below
// task:"model design" => saved to todo card
// task:"model design", status:"inprogress" => saved to inprogress card
// task:"model design", status:"complete" => saved to complete card
// task:"model design", status:"done" => saved to done card
//but who does this????
//we can comment 28 to 60 lines
exports.createTodo = async (req, res) => {
    
    try {   
        if(req.body.task){   
            const todo = await Todo.create(req.body);  
            await todo.save();      
            if(todo){
                
                res.status(201).json({
                    success:true,
                    data: todo,
                    message:"Todo created successfully"
                })
            } 
        }
        else{
            res.json({
                success:false,
                message:"You entered an empty task"
            })
        }          
    
    } catch (error) {
        res.json({
            success:false,
            message:"Todo not created",
            data: error
        })
    }
}


// works on basis of status changed
// status options in frontend are {inprogress, complete, done, null}
//status changed from todo card
exports.UpdateTodo = async (req, res) => {
    try{
        const todo = await Todo.findById( req.params.id);//finds the todo according to id
        if(req.params.id == todo._id){//if user le pass gareko id and todo ko id match gareko ho vane
            if(req.body.status==="inprogress"){
                
                try{
                    await Todo.remove({_id: req.params.id}); //removes todo from todo card
                    const inprogress = new TodoProgress(req.body); //creates new todo in inprogress card
                    await inprogress.save(); //saves the todo in inprogress card
                    if(inprogress){
                        res.status(201).json({
                            success:true,
                            data: inprogress,
                            message:"Todo Saved in Inprogress"
                        })
                    }
                }
                catch(error){
                    res.status(400).json({ message: "Todo not updated" }).send("could not update into in-progress card");
                }
            }
            else if (req.body.status==="completed"){
                try{
                    await Todo.remove({_id: req.params.id});
                    const completed =new TodoComplete(req.body);
                    await completed.save();
                    if(completed){
                        res.status(201).json({
                            success:true,
                            data: completed,
                            message:"Todo Saved in completed"
                        })
                    }
                }
                catch(error){
                    res.status(400).json({ message: "Todo not updated" }).send("could not update into complete card");
                }
            }
            else if (req.body.status==="done"){
                try{
                    await Todo.remove({_id: req.params.id});
                    const done = new TodoDone(req.body);
                    await done.save();
                    if(done){
                        res.status(201).json({
                            success:true,
                            data: done,
                            message:"Todo Saved in Done"
                        })
                    }
                }
                catch(error){
                    res.status(400).json({ message: "Todo not updated" }).send("could not update into done card");
                }
            }
            else{
                try{
                    const newtodo = await Todo.findById(req.params.id);
                    newtodo.task = req.body.task;
                    await newtodo.save();
                    if(newtodo){
                        res.status(201).json({
                            success:true,
                            data: newtodo,
                            message:"Todo updated successfully"
                        })
                    }

                } 
                catch(error){
                    res.status(400).json({ message: "Todo not updated" }).send("could not update into todo card");
                }

            }
        }
    }
    catch(error){
        res.status(400);
        res.send("update failed, the given todo task doesnt exist");
    }

}

//status changing from inprogress card
exports.UpdateInprogress = async (req, res) => {
    try{
        const inprogress = await TodoProgress.findById( req.params.id);
        if(req.params.id == inprogress._id){
            if(req.body.status==="completed"){
                try{
                    // await TodoProgress.remove({_id: req.params.id});
                    const completed =new TodoComplete(req.body);
                    await completed.save();
                    if(completed){
                        res.status(201).json({
                            success:true,
                            data: completed,
                            message:"Todo Saved in completed"
                        })
                    }
                }
                catch(error){
                    res.status(400).json({ message: "Todo not updated" }).send("could not update into complete card");
                }
            }
            else if (req.body.status==="done"){
                try{
                    await TodoProgress.remove({_id: req.params.id});
                    const done = new TodoDone(req.body);
                    await done.save();
                    if(done){
                        res.status(201).json({
                            success:true,
                            data: done,
                            message:"Todo Saved in Done"
                        })
                    }
                }
                catch(error){
                    res.status(400).json({ message: "Todo not updated" }).send("could not update into done card");
                }
            }
            else{
                try{
                    const newtodo = await TodoProgress.findById(req.params.id);
                    newtodo.task = req.body.task;
                    await newtodo.save();
                    if(newtodo){
                        res.status(201).json({
                            success:true,
                            data: newtodo,
                            message:"Todo updated successfully"
                        })
                    }

                } 
                catch(error){
                    res.status(400).json({ message: "Todo not updated" }).send("could not update into todo card");
                }

            }
        }
    }
    catch(error){
        res.status(400);
        res.send("update failed, the given todo task doesnt exist");
    }

}
//status changing from completed card
exports.UpdateCompleted = async (req, res) => {
    try{
        const completed = await TodoComplete.findById( req.params.id);
        if(req.params.id == completed._id){
            if(req.body.status==="done"){
                try{
                    await TodoComplete.remove({_id: req.params.id});
                    const done = new TodoDone(req.body);
                    await done.save();
                    if(done){
                        res.status(201).json({
                            success:true,
                            data: done,
                            message:"Todo Saved in Done"
                        })
                    }
                }
                catch(error){
                    res.status(400).json({ message: "Todo not updated" }).send("could not update into done card");
                }
            }
            else{
                try{
                    const newtodo = await TodoComplete.findById(req.params.id);
                    newtodo.task = req.body.task;
                    await newtodo.save();
                    if(newtodo){
                        res.status(201).json({
                            success:true,
                            data: newtodo,
                            message:"Todo updated successfully"
                        })
                    }

                } 
                catch(error){
                    res.status(400).json({ message: "Todo not updated" }).send("could not update into todo card");
                }

            }
        }
    }
    catch(error){
        res.status(400);
        res.send("update failed, the given todo task doesnt exist");
    }

}
