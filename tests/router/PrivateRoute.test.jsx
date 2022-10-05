import { render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { PrivateRoute } from "../../src/router/PrivateRoute";



describe('Testing <PrivateRoute />', () => { 
    
    test('should show the children if it is authenticated and localStorage has been called', () => { 
        Storage.prototype.setItem = jest.fn();
        
        const contextValue = {
            logged: true,
            user: {
                id: '1',
                name: 'Luis'
            }
        }
        render( 
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <PrivateRoute>
                        <h1>Private Route</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );
    
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/search?q=batman');
        expect( screen.getByText('Private Route') ).toBeTruthy();

    });

    test('should navigate if it is not authenticated', () => { 
        
        const contextValue = {
            logged: false,
        };

        render( 
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/marvel']}>
                    <Routes>
                        <Route path="marvel" element={
                            <PrivateRoute>
                                <h1>Private Route</h1>
                            </PrivateRoute>
                        } />
                        <Route path='login' element={ <h1>Login Page</h1> } />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect( screen.getByText('Login Page') ).toBeTruthy();
       
    });

    test('should localStorage', () => { 
        

    })

});
