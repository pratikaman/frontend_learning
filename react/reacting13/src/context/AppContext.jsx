import React from 'react'
import { createContext, useState } from 'react';



export const UserContext = createContext();

function AppContext(props) {

    
    const [user, setUser] = useState([
        {userName: "pratik", city: "pune"},
        {userName: "rahul", city: "delhi"},
        {userName: "raj", city: "mumbai"},
    ]);




  return <UserContext.Provider value={{user, setUser}}>{props.children}</UserContext.Provider>;
}

export default AppContext