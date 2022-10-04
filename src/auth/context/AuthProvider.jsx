import { useReducer } from 'react'
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import { types } from '../types/types';


// const initialState = {
//     logged: false,
// }

const init = () => {
  const user = JSON.parse( localStorage.getItem('user') ); // busco el user
  return {
    logged: !!user, // si es verdadero el user es verdad, si es false es false, esto para que arroje un boolean
    user,
  }
}

export const AuthProvider = ({ children }) => {

    const [ authState, dispatch ] = useReducer( authReducer, {}, init );

    const login = ( name = '' ) =>{
      const user = { id: 'ABC', name }
      const action = { type: types.login, payload: user }

      localStorage.setItem('user', JSON.stringify( user ));

      dispatch(action);
    }

    const logout = () => {
      localStorage.removeItem('user');
      const action = { type: types.logout };
      dispatch(action);
    }


  return (
    <AuthContext.Provider value={{
      ...authState,
      // methods
      login,
      logout
    }}>
        {children}
    </AuthContext.Provider>
  );
}
