import { useState } from 'react';
import { useLikesContext } from '../../contexts/LikesContext';
import { LikesOverlay } from '../LikesOverlay';
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
                aria-label={`Click to show all liked products. Currently liked: ${likesCount}`}
            >
                👍 {likesCount}
            </StyledLikesCounter>
            {showOverlay && <LikesOverlay />}
        </div>
    );
};

export { LikesCounter };
