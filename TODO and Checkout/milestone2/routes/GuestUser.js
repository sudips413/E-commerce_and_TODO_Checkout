const router = require('express').Router();
const Guest = require("../models/Guest");


const totalcount = async (req, res) => {
    const totalcount = await Guest.countDocuments();
    console.log("totalcount");
}



// catch the details of checkout details from guest user
router.post("/checkout", async (req, res) => {
    // calculation of total price
    let totalPrice = 0;    
    for (var i = 0; i < req.body.orders.length; i++) {
        const total = req.body.orders[i].price * req.body.orders[i].quantity;
        totalPrice = totalPrice + total;
        
    } 
    try{
        if(req.body){
            
            
            const guest = await Guest.create({
                name: req.body.name,
                email: req.body.email,
                address: req.body.address,
                phone: req.body.phone,
                orders: req.body.orders,
                total: totalPrice
            });

            totalcount();
            res.status(200).json({
                success: true,
                data: guest,
                message: "Guest user credentials successfully"
            })
        }
        
        else{
            res.status(400).send("Checkout details are not saved");
        }
    
    }
    catch(err){
        res.json({
            success: false,
            message: "Checkout failed",
            error: err
        })
}
    
});

//this endpoint contains the controller and routing for getting a guest checkout and its details from the database

router.get("/guestdetail/:userid",async (req,res)=>{
    try{
     const user = await Guest.findOne(req.params._id);
     res.json({
        success: true,
        data: user,
        message: "User fetched!"
     })
    }
     catch(err){
        res.status(400).json({
            success: false,
            message: "The use does not exist",
            error: err
        })
     }
 })


 //this endpoint contains the controller and routing for getting all the items from the database
 router.get("/getallguest",async (req,res)=>{
     try{
         const user = await Guest.find();
         const userMap = {};
         user.forEach((user)=>{
             userMap[user._id] = user;
         }
         )
         res.json({
            success: true,
            data: userMap,
            message: "All users fetched!"
         })
 
     }
     catch(err){
         res.send(400).json({
                success: false,
                message: "User fetching failed",
                error: err

         })
     }
 })
 

module.exports = router;
