const router = require("express").Router();
const User = require("../models/User");
const fetchuser = require('../middleware/fetchuser');
const Item = require('../models/Item');
// const data = require('../dummyData.js');


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
    const caitem = await Item.findById(req.params.id);
    const userCart = await user.updateOne({$push: {cart: req.params.id}})
    res.status(200).json("item added to cart")

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

//delete from cart
router.delete("/deletefromcart/:id", fetchuser, async (req, res)=>{
  try{
    const user = await User.findById(req.user.id);
    const caitem = await Item.findById(req.params.id);
    const cart = await user.updateOne({$pull: {cart: req.params.id}})
    res.status(200).json("Item deleted from cart")

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})


//show cart items

router.get("/cartitems", fetchuser, async(req, res)=>{
  try{
    const user = await User.findById(req.user.id);
    const cartitemsid = await user.cart
    const records = await Item.find().where('_id').in(cartitemsid).exec();
    res.status(200).json(records)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

//add to wishlist
router.put("/addtowishlist/:id", fetchuser, async (req, res)=>{
  try{
    const user = await User.findById(req.user.id);
    const wishitem = await Item.findById(req.params.id);
    const wishlist = await user.updateOne({$push: {wishlist: req.params.id}})
    res.status(200).json("item added to cart")

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

//delete from wishlist
router.delete("/deletefromwishlist/:id", fetchuser, async (req, res)=>{
  try{
    const user = await User.findById(req.user.id);
    const wishitem = await Item.findById(req.params.id);
    const wishlist = await user.updateOne({$pull: {wishlist: req.params.id}})
    res.status(200).json("Item deleted from cart")

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})


//show wishlist items

router.get("/wishlistitems", fetchuser, async(req, res)=>{
  try{
    const user = await User.findById(req.user.id);
    const wishlistitemsid = await user.cart
    const records = await Item.find().where('_id').in(wishlistitemsid).exec();
    res.status(200).json(records)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})


//post dummy data to DB

// router.post("/postdata", (req, res)=>{
//   data.dummydata.map((item)=>{
//   Item.create({
//         name: item.name,
//         description: item.description,
//         image: item.image,
//         price: item.price,
//         review: item.review,
//         rating: item.rating
//       })
//   })
//   res.json("done")

// });

module.exports = router;
