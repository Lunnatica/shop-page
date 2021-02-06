import styled from 'styled-components';

interface StyledLikeButtonProps {
    hasBeenLiked: boolean;
}

const StyledLikeButton = styled.button<StyledLikeButtonProps>`
    background-color: ${({ hasBeenLiked }) => (hasBeenLiked ? 'red' : 'white')};
`;

export { StyledLikeButton };
