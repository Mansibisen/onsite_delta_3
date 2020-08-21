var router = require("express").Router();
const Post = require("../modles/post");
/*router.patch("/:postId/:newId" , async (req,res) => {
    try{
        console.log(params)
        const updatedata =  await Post.updateOne({name : req.params.postId},{ $set : {rollnumber : req.params.newId}})
        res.json(updatedata)
    }
    catch(err){
        res.json({message : err})
    }
})*/
router.post("/", async (req,res) => {
    try{
        console.log( req.body.valueToupdate)
        console.log(req.body.modifiedName)
        const updatedata = await Post.updateOne({rollnumber : req.body.valueToupdate},{ $set : {name : req.body.modifiedName}})
        //var result = {}
        console.log(updatedata)
       
        var result = {rollnumber:req.body.valueToupdate,name: req.body.modifiedName}
        res.render("search",{result:result})
    }
    catch(err){
        res.json({message:err})
    }
})
router.post("/roll", async (req,res) => {
    try{
        
        const updatedata2 = await Post.updateOne({name : req.body.oldname},{ $set : {rollnumber: req.body.modifiedroll}})
       console.log(updatedata2)
       
        var result = {name:req.body.oldname,rollnumber: req.body.modifiedroll}
        res.render("search",{result:result})
    }
    catch(err){
        res.json({message:err})
    }
})

module.exports = router;