import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../src/auth"
import { AppRouter } from "../../src/router/AppRouter"





describe('testing <AppRouter />', () => { 
    
    test('should show login if it is not authenticated', () => { 
        
        const contextValue = {
            logged: false,
        };

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );
        expect( screen.getAllByText('Login').length ).toBe(2);
        
    });
    test('should show marvel if it is authenticated', () => { 
        
        const contextValue = {
            logged: true,
        };

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );
        expect( screen.getByText('HeroesApp') ).toBeTruthy(); // mientras esté autenticado puedo acceder a las rutas privadas como Marvel y si escribo /login en la barra de navegación, me devolverá a Marvel puesto que la unica manera de volver al loginPage es mediante el botón logout.
    });

});