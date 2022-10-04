import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../src/auth";
import { PublicRoute } from "../../src/router/PublicRoute"



describe('Testing <PublicRoute />', () => { 
    
    test('should show the children if it is not authenticated ', () => { 
        
        const contextValue = {
            logged: false
        }
        render( 
            <AuthContext.Provider value={ contextValue }>
                <PublicRoute>
                    <h1>Public Route</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );
        
        expect( screen.getByText('Public Route') ).toBeTruthy();

    });

});
