var router = require("express").Router();
const Post = require("../modles/post");

router.post("/" , async (req,res) => {
    try{
        var roll = req.body.valueTocheck
        var lst = roll.toString().split("")
        var x = lst.slice(0,3)
        if (JSON.stringify(x) == JSON.stringify([ '1', '0', '2' ])) {
           res.send("chemical")
        }
        else if (JSON.stringify(x) == JSON.stringify([ '1', '0', '7' ])) {
            res.send("ee")
        }
        else if (JSON.stringify(x) == JSON.stringify([ '1', '0', '6' ])) {
            res.send("cse")
        }
        else if (JSON.stringify(x) == JSON.stringify([ '1', '1', '1' ])) {
            res.send("me")
        }
        else if (JSON.stringify(x) == JSON.stringify([ '1', '1', '2' ])) {
            res.send("mt")
        }
        else if (JSON.stringify(x) == JSON.stringify([ '1', '1', '0' ])) {
            res.send("ice")
        }
        else if (JSON.stringify(x) == JSON.stringify([ '1', '0', '8' ])) {
            res.send("ece")
        }
        else if (JSON.stringify(x) == JSON.stringify([ '1', '1', '4' ])) {
            res.send("ece")
        }

        else{
            res.send("unkown depatment")
        }
        
        
    }
    catch(err){
        res.json( err)
    }
})

module.exports = router;