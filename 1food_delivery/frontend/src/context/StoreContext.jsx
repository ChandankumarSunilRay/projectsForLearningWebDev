import { createContext } from "react";
import { food_list } from "../assets/frontend_assets/frontend_assets";


export const StoreContext = createContext(null)

const StoreContextProvider = (props)=>{
    const constValue = {
        food_list
    }
    return(
        <StoreContext.Provider value={constValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;