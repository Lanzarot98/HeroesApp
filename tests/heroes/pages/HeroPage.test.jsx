import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { HeroPage } from "../../../src/heroes/pages";

const mockedUseNavigate = jest.fn();
 
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));

describe('Testing <HeroPage />', () => { 
    
    beforeEach( () => jest.clearAllMocks() );

    test('should show the Hero', () => { 
        render(  
            <MemoryRouter initialEntries={['/hero/dc-batman']}>
                <Routes>
                    <Route path='hero/:id' element={<HeroPage />} />
                </Routes>
            </MemoryRouter>
        );
        expect( screen.getByText('Batman') ).toBeTruthy();
    });

    test('should show no Hero found when id is wrong', () => { 

        render(  
            <MemoryRouter initialEntries={['/hero/dc-batman123']}>
                <Routes>
                    <Route path='hero/:id' element={<HeroPage />} />
                </Routes>
            </MemoryRouter>
        );
        expect( screen.getByText('🦸‍♀️ 404 - Hero not found 🦸‍♂️') ).toBeTruthy();
    });

    test('should navigate when the button back is clicked', () => { 
        render(  
            <MemoryRouter initialEntries={['/hero/dc-batman']}>
                <Routes>
                    <Route path='hero/:id' element={<HeroPage />} />
                </Routes>
            </MemoryRouter>
        );
        const buttonBack = screen.getByRole('button', {name: 'Back'});
        fireEvent.click(buttonBack);
        expect( mockedUseNavigate ).toHaveBeenCalledWith(-1); // es el argumento que se manda al navigate(-1) para retroceder en 1 la navegación


    });

});