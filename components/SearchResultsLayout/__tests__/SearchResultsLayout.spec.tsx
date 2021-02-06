import { fireEvent, render, screen } from '@testing-library/react';
import { SearchResultsLayout } from '../SearchResultsLayout';

describe('<SearchResultsLayout />', () => {
    const results = [
        {
            id: '1',
            name: 'Angelita Simonis',
            img: 'img',
            sold: false,
            price: '971.00',
            brand: 'Refined Plastic Chair',
            description: 'drive',
        },
        {
            id: '2',
            name: 'Myrtle Beatty',
            img: 'img',
            sold: true,
            price: '397.00',
            brand: 'Gorgeous Metal Table',
            description: 'Auto Loan Account',
        },
        {
            id: '3',
            name: 'Trenton Jerde',
            img: 'img',
            sold: true,
            price: '374.00',
            brand: 'Sleek Concrete Tuna',
            description: 'Table Synergistic Glen',
        },
    ];
    const toggleShowItems = jest.fn();

    it('should show an error message if there is an error', () => {
        render(<SearchResultsLayout errorCode={404} results={results} />);
        expect(
            screen.getByText(
                /There was a problem when retrieving your search results. Please try again later./
            )
        );
    });

    it('should show a no results message when results is an empty array', () => {
        render(<SearchResultsLayout results={[]} />);
        expect(
            screen.getByText(`Sorry, there are no results for your search.`)
        );
    });

    it('should show a no results message when results is undefined', () => {
        render(<SearchResultsLayout results={undefined} />);
        expect(
            screen.getByText(`Sorry, there are no results for your search.`)
        );
    });

    it('should show all the results by default', () => {
        render(<SearchResultsLayout results={results} />);
        expect(screen.getAllByRole('article').length).toBe(3);
    });

    it('should hide the sold results when toggled once', () => {
        render(<SearchResultsLayout results={results} />);
        fireEvent.click(screen.getByText('Hide sold items'));
        expect(screen.getAllByRole('article').length).toBe(1);
    });

    it('should show the all the results when toggled twice', () => {
        render(<SearchResultsLayout results={results} />);
        fireEvent.click(screen.getByText('Hide sold items'));
        fireEvent.click(screen.getByText('Show sold items'));
        expect(screen.getAllByRole('article').length).toBe(3);
    });
});
