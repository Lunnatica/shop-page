import { useLikesContext } from '../../contexts/LikesContext';
import { StyledLikeButton } from './StyledLikeButton';

const LikeButton = ({ id, name }) => {
    const { likedProducts, likeProduct, unlikeProduct } = useLikesContext();
    const hasBeenLiked = likedProducts[id];
    const onClickHandler = hasBeenLiked
        ? () => unlikeProduct(id)
        : () => likeProduct(id, name);

    return (
        <StyledLikeButton
            onClick={onClickHandler}
            data-testid={hasBeenLiked ? 'liked' : 'default'}
        >
            👍
        </StyledLikeButton>
    );
};

export { LikeButton };
