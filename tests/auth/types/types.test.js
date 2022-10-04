import { types } from "../../../src/auth"


describe('Testing types.js', () => { 
    
    test('should return types', () => { 
        
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        });

    });

});