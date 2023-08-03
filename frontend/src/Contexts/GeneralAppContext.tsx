import { createContext, ReactNode, useReducer } from 'react'
import { generalAppReducer } from '../functions/generalAppReducer'
import { useGeneralAppContext } from '../functions/useGeneralAppContext'
import { GeneralAppContextType } from '../Types/generalAppTypes'

export const GeneralAppContext = createContext<GeneralAppContextType>({
    navshown: false,
    generalDispatch: ()=>{return}
})

export function GeneralAppProvider({children}: {children: ReactNode}){
    
    const value = useGeneralAppContext()
    
    const [generalState, generalDispatch] = useReducer(generalAppReducer, value)
   
    return (
        <GeneralAppContext.Provider value={{...generalState, generalDispatch}}>
            {children}
        </GeneralAppContext.Provider>
    )
}