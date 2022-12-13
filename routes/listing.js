const express = require("express");
const router = express.Router();  
const Listing = require("../model/Listing");



//Add New Listing
router.route('/add').post((req,res,next)=>{
    Listing.create(req.body,(error,data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    });
});
 
// Get Data
router.route('/show').get((req,res)=>{
    Listing.find((error,data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    });
});


//single listing
router.route('/show/:id').get((req,res)=>{
    Listing.findById(req.params.id,(error,data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    });
});
//Update listing
router.route('/update/:id').put((req,res,next)=>{
    Listing.findByIdAndUpdate(req.params.id,{
        $set:req.body
    },(error,data)=>{
        if(error){
            return next(error);
            console.log(error)
        }else{
            res.json(data)
            console.log("updated successfully.")
        }
    });
});

//Delete listing
router.route('/delete/:id').put((req,res,next)=>{
    Listing.findByIdAndRemove(req.params.id,(error,data)=>{
        if(error){
            return next(error);
            console.log(error)
        }else{
            res.status(200).json({
                msg:data})
        }
    });
});



module.exports = router;