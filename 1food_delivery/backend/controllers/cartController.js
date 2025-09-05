import userModel from "../models/userModel.js"

// add items  to users cart
const addToCart = async (req, res) => {
  try {
    const userData = await userModel.findById(req.userId);
    if (!userData) {
      return res.json({ success: false, message: "User not found" });
    }

    const cartData = userData.cartData;
    const itemId = req.body.itemId;

    cartData[itemId] = (cartData[itemId] || 0) + 1;

    await userModel.findByIdAndUpdate(req.userId, { cartData });
    res.json({ success: true, message: "Added To Cart" });
  } catch (error) {
    console.error("addToCart error:", error.message);
    res.json({ success: false, message: "add to cart error" });
  }
};



// remove items from user cart
const removeFromCart = async (req, res) => {
  try {
    const userData = await userModel.findById(req.userId);
    if (!userData) {
      return res.json({ success: false, message: "User not found" });
    }

    const cartData = userData.cartData;
    const itemId = req.body.itemId;

    if (cartData[itemId] > 0) {
      cartData[itemId] -= 1;
    }

    await userModel.findByIdAndUpdate(req.userId, { cartData });
    res.json({ success: true, message: "Removed from cart" });
  } catch (error) {
    console.error("removeFromCart error:", error.message);
    res.json({ success: false, message: "remove cart error" });
  }
};



// fetch user cart data
const getCart = async (req, res) => {
    try {
        const userData = await userModel.findById(req.userId); // use req.userId
        if (!userData) {
            return res.json({ success: false, message: "User not found" });
        }

        const cartData = userData.cartData; // no await needed
        res.json({ success: true, cartData });
    } catch (error) {
        console.error("getCart error:", error.message);
        res.json({ success: false, message: "get Cart error" });
    }
};


export { addToCart, removeFromCart, getCart }