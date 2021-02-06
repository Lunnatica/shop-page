import { fireEvent, render, screen } from '@testing-library/react';
import { SearchResultsHeader } from '../SearchResultsHeader';

describe('<SearchResultsHeader />', () => {
    const resultsNumber = 1;
    const toggleShowItems = jest.fn();

    it('should execute the toggleShowItems function when the button is clicked', () => {
        render(
            <SearchResultsHeader
                resultsNumber={resultsNumber}
                toggleShowItems={toggleShowItems}
                showSoldItems={true}
            />
        );
        fireEvent.click(screen.getByText('Hide sold items'));
        expect(toggleShowItems).toHaveBeenCalledTimes(1);
    });

    it('should display results number', () => {
        render(
            <SearchResultsHeader
                resultsNumber={resultsNumber}
                toggleShowItems={toggleShowItems}
                showSoldItems={true}
            />
        );
        expect(screen.getByText(`Showing ${resultsNumber} results`));
    });

    describe('when showSoldItems is true', () => {
        it('should render the correct button text', () => {
            render(
                <SearchResultsHeader
                    resultsNumber={resultsNumber}
                    toggleShowItems={toggleShowItems}
                    showSoldItems={true}
                />
            );
            expect(screen.getByText('Hide sold items'));
        });
    });

    describe('when showSoldItems is false', () => {
        it('should render the correct button text', () => {
            render(
                <SearchResultsHeader
                    resultsNumber={resultsNumber}
                    toggleShowItems={toggleShowItems}
                    showSoldItems={false}
                />
            );
            expect(screen.getByText('Show sold items'));
        });
    });
});
