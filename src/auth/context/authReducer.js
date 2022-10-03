import { types } from "../types/types";

export const authReducer = ( state = {}, action ) =>{
    // cuando mandamos esta acción deberíamos estar autenticados
    switch (action.type) {
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload
            };
        
        case types.logout:
            return {
                logged: false,
            };
    
        default:
            return state;
    }
}

