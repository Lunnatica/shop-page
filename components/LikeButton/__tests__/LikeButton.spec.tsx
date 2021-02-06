import { fireEvent, render, screen } from '@testing-library/react';
import { LikeButton } from '../LikeButton';
import { useLikesContext } from '../../../contexts/LikesContext';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../../../contexts/LikesContext');

describe('LikeButton', () => {
    const likeProductMock = jest.fn();
    const unlikeProductMock = jest.fn();

    beforeAll(() => {
        (useLikesContext as jest.Mock).mockImplementation(() => ({
            likedProducts: {
                '2': 'name2',
            },
            likeProduct: likeProductMock,
            unlikeProduct: unlikeProductMock,
        }));
    });

    afterEach(jest.clearAllMocks);

    describe('given a non-liked id is passed', () => {
        beforeEach(() => {
            const instance = <LikeButton id="1" name="name1" />;
            render(instance);
        });

        it('renders the default icon', () => {
            expect(screen.getByTestId('default'));
        });

        it('should call the like function when clicked', () => {
            fireEvent.click(screen.getByTestId('default'));
            expect(likeProductMock).toHaveBeenCalledTimes(1);
            expect(likeProductMock).toHaveBeenCalledWith('1', 'name1');
        });

        it('should have the correct aria-label', () => {
            expect(screen.getByTestId('default')).toHaveAttribute(
                'aria-label',
                'Like product'
            );
        });
    });

    describe('given a liked id is passed', () => {
        beforeEach(() => {
            const instance = <LikeButton id="2" name="name2" />;
            render(instance);
        });

        it('renders the liked icon', () => {
            expect(screen.getByTestId('liked'));
        });

        it('should call the unlike function when clicked', () => {
            fireEvent.click(screen.getByTestId('liked'));
            expect(unlikeProductMock).toHaveBeenCalledTimes(1);
            expect(unlikeProductMock).toHaveBeenCalledWith('2');
        });

        it('should have the correct aria-label', () => {
            expect(screen.getByTestId('liked')).toHaveAttribute(
                'aria-label',
                'Unlike product'
            );
        });
    });
});
