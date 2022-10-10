import { createContext, useState } from "react";

export const UserContext = createContext()
const getLocalItems = ()=>{
    let list = localStorage.getItem('lists')
    if(list){
        return JSON.parse(localStorage.getItem('lists'))
    }
    else{
        return [];
    }
  }
export const UserProvider = (props) => {
    const [users, setUsers] = useState(getLocalItems())
    return (
        <UserContext.Provider value={[users, setUsers]}>
            {props.children}
        </UserContext.Provider>
    )
} 