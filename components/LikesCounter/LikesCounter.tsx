import { useState } from 'react';
import { useLikesContext } from '../../contexts/LikesContext';
import { StyledLikesCounter } from './StyledLikesCounter';

const LikesCounter = () => {
    const { likedProducts } = useLikesContext();
    const [showOverlay, setShowOverlay] = useState(false);
    const likesCount = Object.keys(likedProducts).length;

    const handleOnClick = () => {
        setShowOverlay(!showOverlay);
    };

    return (
        <div>
            <StyledLikesCounter
                onClick={handleOnClick}
                data-testid="likes-counter"
            >
                👍 {likesCount}
            </StyledLikesCounter>
            {showOverlay && <div data-testid="likes-overlay" />}
        </div>
    );
};

export { LikesCounter };
