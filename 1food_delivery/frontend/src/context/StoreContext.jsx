// ----------------------------------------------previous code-------------------------------------
import axios from "axios";
import { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/frontend_assets/frontend_assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItem, setCartItems] = useState({});
  const url = "http://localhost:4000"
  const [token, setToken] = useState("");
  const [food_list, setFoodList] = useState([])


  const addToCart = async (itemId) => {
    if (!cartItem[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    if (token) {
      await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
    }

  };

  const removeFromCart = async(itemId) => {
    setCartItems((prev) => {
      if (prev[itemId] > 1) {
        return { ...prev, [itemId]: prev[itemId] - 1 };
      } else {
        const { [itemId]: _, ...rest } = prev;
        return rest; // 
      }
    });
    if (token) {
      await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = food_list.find((product) => product._id == item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItem[item];
        }
      }
    }
    return totalAmount;
  };


  const fetchFoodList = async () => {
    const response = await axios.get(url + "/api/food/list")
    setFoodList(response.data.data)
  }

  const loadCartData = async (token)=>{
    const response = await axios.post(url+"/api/cart/get",{},{headers:{token}})
    setCartItems(response.data.cartData)
  }


  // useEffect(() => {

  //   async function loadData() {
  //     await fetchFoodList();
  //     if (localStorage.getItem("token")) {
  //       setToken(localStorage.getItem("token"))
  //       await loadCartData(localStorage.getItem("token"))
  //     }
  //   }

  //   loadData();
  // })
  useEffect(() => {
  async function loadData() {
    await fetchFoodList();
    if (localStorage.getItem("token")) {
      const savedToken = localStorage.getItem("token");
      setToken(savedToken);
      await loadCartData(savedToken);
    }
  }

  loadData();
}, []); 



  const contextValue = {
    food_list,
    cartItem,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
    useEffect,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;


// -------------------------------------new Code-----------------------

// import axios from "axios";
// import { createContext, useEffect, useState } from "react";

// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//   const [cartItem, setCartItems] = useState({});
//   const url = "http://localhost:4000";
//   const [token, setToken] = useState(localStorage.getItem("token") || "");
//   const [food_list, setFoodList] = useState([]);

//   // Axios instance that always sends token
//   const api = axios.create({
//     baseURL: url,
//     headers: { token },
//   });

//   // Add to cart (backend + frontend state)
//   const addToCart = async (itemId) => {
//     try {
//       await api.post("/api/cart/add", { itemId });
//       setCartItems((prev) => ({
//         ...prev,
//         [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
//       }));
//     } catch (err) {
//       console.error("Add to cart error:", err);
//     }
//   }

//   // Remove from cart
//   const removeFromCart = async (itemId) => {
//     try {
//       await api.post("/api/cart/remove", { itemId });
//       setCartItems((prev) => {
//         if (prev[itemId] > 1) {
//           return { ...prev, [itemId]: prev[itemId] - 1 };
//         } else {
//           const { [itemId]: _, ...rest } = prev;
//           return rest;
//         }
//       });
//     } catch (err) {
//       console.error("Remove from cart error:", err);
//     }
//   };

//   // Get cart from backend
//   const getCart = async () => {
//     try {
//       const res = await api.post("/api/cart/get");
//       if (res.data.success) {
//         setCartItems(res.data.cartData);
//       }
//     } catch (err) {
//       console.error("Get cart error:", err);
//     }
//   };

//   // Fetch food list
//   const fetchFoodList = async () => {
//     const response = await axios.get(url + "/api/food/list");
//     setFoodList(response.data.data);
//   };

//   useEffect(() => {
//     fetchFoodList();
//     if (token) {
//       getCart();
//     }
//   }, [token]); // ✅ only re-run when token changes

//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartItem) {
//       if (cartItem[item] > 0) {
//         let itemInfo = food_list.find((product) => product._id === item);
//         if (itemInfo) {
//           totalAmount += itemInfo.price * cartItem[item];
//         }
//       }
//     }
//     return totalAmount;
//   };

//   const contextValue = {
//     food_list,
//     cartItem,
//     addToCart,
//     removeFromCart,
//     getTotalCartAmount,
//     url,
//     token,
//     setToken,
//   };

//   return (
//     <StoreContext.Provider value={contextValue}>
//       {props.children}
//     </StoreContext.Provider>
//   );
// };

// export default StoreContextProvider;
