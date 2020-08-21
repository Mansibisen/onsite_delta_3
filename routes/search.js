

var router = require("express").Router();
const Post = require("../modles/post");

/*router.get('/:postId' , async (req,res) => {
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }
    catch (err){
        res.json({message :err})
    }
})*/
router.post("/" , async (req,res) => {
    try{
        //code to search
        var data = req.body.rollnumber
        const post = await Post.find({rollnumber : data})
        
        var jsondata = post[0]
        console.log(post)
        var result = {rollnumber:jsondata.rollnumber,name: jsondata.name}
        
        res.render("search",{result:result})
        
    }
    catch (err){
        res.json({message : err})
    }
})
module.exports = router;

