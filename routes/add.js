var router = require("express").Router();
const Post = require("../modles/post");
//const { db } = require("../modles/post");
router.route("/")
   .post(async (req,res) => {
        const post = new Post ({
            rollnumber : req.body.rollnumber,
            name : req.body.name

        });
        try{
            const saveddata = await post.save();
            //res.json(saveddata)
           // res.send("data saved succesfully")
            var result = {rollnumber:saveddata.rollnumber,name: saveddata.name}
            res.render("search",{result:result})
        }
        catch(err){
            res.json({message:err})
        }

        
    })
    .get(async (req,res) => {
        try{
            var data = await Post.find()
            res.json(data)
        }
        catch(err){
            res.json({message:err})
        }
    })




module.exports = router;