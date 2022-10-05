import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../src/auth/context/AuthContext';
import { Navbar } from '../../../src/ui';

const mockedUseNavigate = jest.fn();

// puedo hacer mocks de librerías completas
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // que exporte todo lo que usa la librería
    useNavigate: () => mockedUseNavigate // solo sobrescribimos el useNavigate o lo que nos interese
}) );

describe('Testing <Navbar />', () => { 
    
    const contextValue = {
        logged: true,
        user: {
            id: '1',
            name: 'Invitado'
        },
        logout: jest.fn()
    };
    beforeEach( ()=> jest.clearAllMocks() );

    test('should show userName', () => {
        
        render(
            <MemoryRouter>
                <AuthContext.Provider value={contextValue}>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        );
        expect( screen.getByText(contextValue.user.name) ).toBeTruthy();
    });

    test('should call logout and navigate when the button is clicked', () => { 
        
        render(
            <MemoryRouter>
                <AuthContext.Provider value={contextValue}>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        );
        
        const logoutBtn = screen.getByRole('button', {name: 'Logout'});
        fireEvent.click( logoutBtn );
        expect( contextValue.logout ).toHaveBeenCalled();
        expect( mockedUseNavigate ).toHaveBeenCalledWith( '/login', { replace: true } );
        
    });

});