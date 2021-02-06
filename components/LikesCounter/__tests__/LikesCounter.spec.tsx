import { fireEvent, render, screen } from '@testing-library/react';
import { LikesCounter } from '../LikesCounter';
import { useLikesContext } from '../../../contexts/LikesContext';

jest.mock('../../../contexts/LikesContext');

describe('LikesCounter', () => {
    beforeEach(() => {
        (useLikesContext as jest.Mock).mockImplementation(() => ({
            likedProducts: {
                '2': 'name2',
            },
        }));
    });

    afterEach(jest.clearAllMocks);

    it('should display total amount of products liked', () => {
        render(<LikesCounter />);
        expect(screen.getByText('👍 1'));
    });

    it('should show the LikedProductsOverlay when clicked', () => {
        render(<LikesCounter />);
        fireEvent.click(screen.getByTestId('likes-counter'));
        expect(screen.getByTestId('likes-overlay'));
    });

    it('should hide the LikedProductsOverlay when clicked twice', () => {
        render(<LikesCounter />);
        fireEvent.click(screen.getByTestId('likes-counter'));
        fireEvent.click(screen.getByTestId('likes-counter'));
        expect(screen.queryByTestId('likes-overlay')).toBeNull();
    });
});
