import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../src/heroes/pages/SearchPage";

const mockedUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}) );

describe('Testing <SearchPage />', () => { 
    
    beforeEach( () => jest.clearAllMocks() );

    test('should show correct values by default', () => { 
        
        const { container } = render(

            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>

        );
        expect( container ).toMatchSnapshot();

    });
    test('should show Batman and the value input with queryString', () => { 
        
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        );
        const input = screen.getByRole('textbox');
        expect( input.value ).toBe('batman');

        const img = screen.getByRole('img');
        expect( img.src ).toContain('/assets/heroes/dc-batman.jpg');
        const noHeroDiv = screen.getByLabelText('noHero');
        expect( noHeroDiv.style.display ).toBe('none');
        // screen.debug();
    });

    test('should show the error if hero(batman123) not found', () => { 
        
        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage />
            </MemoryRouter>
        );
        const noHeroDiv = screen.getByLabelText('noHero');
        expect( noHeroDiv.style.display ).not.toBe('none');
    });

    test('should call the navigate to the new screen', () => { 
        const query = 'batman123';
        render(
            <MemoryRouter initialEntries={[`/search`]}>
                <SearchPage />
            </MemoryRouter>
        );
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: {name: 'searchText', value: query} });
        
        const form = screen.getByRole('form'); // debe tener aria label el form
        fireEvent.submit( form );
        expect( mockedUseNavigate ).toHaveBeenCalledWith(`?q=${ query }`);
    });

});