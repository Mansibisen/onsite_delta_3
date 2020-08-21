var router = require("express").Router();
const Post = require("../modles/post");
router.delete('/:postId' , async (req,res) => {
    try{
        const removedata = await Post.deleteOne({ rollnumber: req.params.postId});
        res.json(removedata)

    }catch(err){
        res.json({message:err})
    }
})


module.exports = router;

