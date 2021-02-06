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
`;

export { StyledLikeButton };
