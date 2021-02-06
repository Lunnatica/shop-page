import { fireEvent, render, screen } from '@testing-library/react';
import { LikeButton } from '../LikeButton';
import { useLikesContext } from '../../../contexts/LikesContext';

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
        it('renders the default icon', () => {
            render(<LikeButton id="1" name="name1" />);
            expect(screen.getByTestId('default'));
        });

        it('should call the like function when clicked', () => {
            render(<LikeButton id="1" name="name1" />);
            fireEvent.click(screen.getByTestId('default'));
            expect(likeProductMock).toHaveBeenCalledTimes(1);
            expect(likeProductMock).toHaveBeenCalledWith('1', 'name1');
        });
    });

    describe('given a liked id is passed', () => {
        it('renders the liked icon', () => {
            render(<LikeButton id="2" name="name2" />);
            expect(screen.getByTestId('liked'));
        });

        it('should call the unlike function when clicked', () => {
            render(<LikeButton id="2" name="name2" />);
            fireEvent.click(screen.getByTestId('liked'));
            expect(unlikeProductMock).toHaveBeenCalledTimes(1);
            expect(unlikeProductMock).toHaveBeenCalledWith('2');
        });
    });
});
