import { authReducer, types } from "../../../src/auth";

describe('testing authReducer', () => { 
    
    const initialState = {
        logged: false
    };

    test('should return default state', () => { 
        const state = authReducer(initialState, {});
        expect( state ).toBe(initialState);
    });
    
    test('should call the login auth and set user', () => { 
        const action = {
            type: types.login,
            payload: {
                id: '1',
                name: 'Luis'
            }
        };
        const newState = authReducer(initialState, action);
        expect( newState.user ).toEqual( action.payload );
        expect( newState.logged ).toBeTruthy();
    });
    
    test('should remove the username and set logged false', () => { 
        const state = {
            logged: true,
            user: { id: '1', name: 'Luis' }
        };
        const action = {
            type: types.logout,
        };
        const newState = authReducer( state, action );
        expect( newState.user ).toBeFalsy();
        expect( newState.logged ).toBeFalsy();
    });

})