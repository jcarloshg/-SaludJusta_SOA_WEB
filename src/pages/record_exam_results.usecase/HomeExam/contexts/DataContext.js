import React, { createContext, useState } from 'react'
import User from '../../../../models/User.entitie';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [data, setData] = useState(new User({}))

    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    )
}
