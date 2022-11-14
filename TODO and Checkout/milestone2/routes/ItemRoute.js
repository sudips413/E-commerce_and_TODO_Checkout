const router = require('express').Router();
const Item = require('../models/ItemSchema');
const uuid = require('uuid');
const multer = require('multer');

// this is the function that will be called when the user uploads a file

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './images/');
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
});
// this function  filters the file type

const fileFilter = (req, file, cb) => {
    // reject a file
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true);

    }else{
        cb(null, false);
    }
};
// this function contains the logic to upload the image to the server, limits and fileFilter are optional
const upload = multer({
    storage: storage,
    // limits: {
    //     fileSize: 1024 * 1024 * 5
    // },
    fileFilter: fileFilter

})



//this end contains the creation of new items in the database with the controller itself
router.post("/add",upload.single('itemImage'), async (req, res) => {
    if(req.body){
        try{
            console.log(req.file.path)
            const data=JSON.parse(req.body.data) //the data is parsed from the body of the request to object format
            const item = await Item.create({
                
                name: data.name,
                size: data.size,
                img: req.file.path,
                price: data.price,
                desc: data.desc,
                category: data.category,
                quantity: data.quantity,
                stock: data.stock,
                

            });
            res.status(200).json({
                success: true,
                data: item,
                message: "Item added successfully"
            })
        }
        catch(err){
            res.json({
                success: false,
                message: "Item adding failed",
                error: err
            })
        }  
    }

});



//this endpoint contains the controller and routing for getting all the items from the database

router.get("/get",async (req,res)=>{
    try{
        const item = await Item.find();
        res.json({
            success: true,
            data: item,
            message: "All Items fetched!"
         })
    }
    catch(err){
        res.json({
            success: false,
            message: "Item fetching failed",
            error: err
        })
    }
});

//this endpoint contains the controller and routing for updating the single item in the database

router.put("/update/:id",upload.single("ItemImage"),async(req,res)=>{
    if(req.body){
        data = JSON.parse(req.body.data); //the data is converted into object from string because it was send as string from postman rather than individual objects
        try{
            const item = await Item.findByIdAndUpdate(req.params.id,{
                name: data.name,
                size: data.size,
                img: req.file.path,
                price: data.price,
                desc: data.desc,
                category: data.category,
                quantity: data.quantity,
                stock: data.stock,
            });
            res.json({
                success: true,
                data: item,
                message: "Item updated successfully"
            })
        }
        catch(err){
            res.json({
                success: false,
                message: "Item updating failed",
                error: err
            })
        }
    }

 })    


//this endpoint contains the controller and routing for deleting the single item in the database

router.delete("/remove/:id", async(req,res)=>{
    // const user_role = req.body.user_role;
    // const user_role = "admin";
    // if(user_role === "admin"){
    const item = await Item.findById(req.params.id);
    if (item) {           
        try{
            const item = await Item.findByIdAndDelete(req.params.id);
            res.json({
                success: true,
                data: item,
                message: "Item deleted successfully"
            })
        }
        catch(err){
            res.json({
                success: false,
                message: "Item deleting failed",
                error: err
            })
        }
    }    
    else{
        res.json({
            success: false,
            message: "Item not found"
        })

    }    

    // else{
    //     res.status(400).send("You are not authorized to delete the item");
    // }
});






module.exports = router;