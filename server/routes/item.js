const router = require("express").Router();
const User = require("../models/User");
const fetchuser = require('../middleware/fetchuser');
const Item = require('../models/Item');
const data = require('../dummyData.js');


router.get("/getallitems", async(req, res) => {
  try {
    const items = await Item.find();
    res.json(items)

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }

});


// view single item
router.get("/viewitem/:id", async (req, res)=>{
  try{
    const item = await Item.findById(req.params.id);
    res.status(200).json(item)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

//add to cart
router.put("/addtocart/:id", fetchuser, async (req, res)=>{
  try{
    const user = await User.findById(req.user.id);
    if(user){
      const caitem = await Item.findById(req.params.id);
      const userCart = user.updateOne({$push: {cart: req.params.id}})
      res.status(200).json("item added to cart")
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

//delete from cart
router.delete("/deletefromcart/:id", fetchuser, async (req, res)=>{
  try{
    const user = await User.findById(req.user.id);
    if(user){
      const caitem = await Item.findById(req.params.id);
      const cart = user.updateOne({$pull: {cart: req.params.id}})
      res.status(200).json("Item deleted from cart")
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})



router.post("/postdata", (req, res)=>{
  data.dummydata.map((item)=>{
  Item.create({
        name: item.name,
        description: item.description,
        image: item.image
      })
  })
  res.json("done")

});

module.exports = router;
