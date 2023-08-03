import { GeneralAppActionType, GeneralAppContextType } from "../Types/generalAppTypes";

export function generalAppReducer(state: GeneralAppContextType, action: GeneralAppActionType){
    
    switch(action.type){
        case 'setNavBarShownTrue':
            return {
                ...state,
                navshown: true
            }
        case 'setNavBarShownFalse':
            return {
                ...state,
                navshown: false
            }
        default:
            return state
    }
}