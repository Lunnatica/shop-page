import { fireEvent, render, screen } from '@testing-library/react';
import { LikesOverlay } from '../LikesOverlay';
import { useLikesContext } from '../../../contexts/LikesContext';

jest.mock('../../../contexts/LikesContext');

describe('LikesOverlay', () => {
    const unlikeProductMock = jest.fn();

    beforeEach(() => {
        (useLikesContext as jest.Mock).mockImplementation(() => ({
            likedProducts: {
                '2': 'name2',
                '3': 'name3',
            },
            unlikeProduct: unlikeProductMock,
        }));
    });

    afterEach(jest.clearAllMocks);

    it('should display all the liked products', () => {
        render(<LikesOverlay />);
        expect(screen.getByText('name2'));
        expect(screen.getByText('name3'));
    });

    it('should display a message if no products have been liked', () => {
        (useLikesContext as jest.Mock).mockImplementation(() => ({
            likedProducts: {},
            unlikeProduct: unlikeProductMock,
        }));

        render(<LikesOverlay />);
        expect(screen.getByText('No products have been liked yet!'));
    });

    it('should unlike a product when the item in the list is clicked', () => {
        render(<LikesOverlay />);
        fireEvent.click(screen.getByTestId('unlike-button-2'));
        expect(unlikeProductMock).toHaveBeenCalledWith('2');
    });
});
