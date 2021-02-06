import styled from 'styled-components';

interface StyledLikeButtonProps {
    hasBeenLiked: boolean;
}

const StyledLikeButton = styled.button<StyledLikeButtonProps>`
    background-color: ${({ hasBeenLiked }) => (hasBeenLiked ? 'red' : 'white')};
    position: absolute;
    right: 2%;
    top: 2%;
    z-index: 1;
    min-width: 3rem;
    min-height: 3rem;
    font-size: larger;
`;

export { StyledLikeButton };
