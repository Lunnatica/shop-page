import { useLikesContext } from '../../contexts/LikesContext';
import {
    StyledLikesOverlay,
    StyledProductRow,
    StyledUnlikeButton,
} from './StyledLikesOverlay';

const LikesOverlay = () => {
    const { likedProducts, unlikeProduct } = useLikesContext();
    const likedProductsMap = Object.entries(likedProducts);

    return (
        <StyledLikesOverlay data-testid="likes-overlay">
            {likedProductsMap.length ? (
                likedProductsMap.map(([id, name]) => (
                    <StyledProductRow key={id}>
                        <p>{name}</p>
                        <StyledUnlikeButton
                            data-testid={`unlike-button-${id}`}
                            aria-label={`Unlike product: ${name}`}
                            onClick={() => unlikeProduct(id)}
                        >
                            X
                        </StyledUnlikeButton>
                    </StyledProductRow>
                ))
            ) : (
                <StyledProductRow>
                    <p>No products have been liked yet!</p>
                </StyledProductRow>
            )}
        </StyledLikesOverlay>
    );
};

export { LikesOverlay };
