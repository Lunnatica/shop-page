import styled from 'styled-components';

const StyledLikesOverlay = styled.div`
    border: 1px solid black;
    background: white;
    position: absolute;
    z-index: 9999;
    right: 0;
    border-radius: 0.25rem;
`;

const StyledProductRow = styled.div`
    display: flex;
    min-width: 17rem;
    justify-content: space-between;

    p {
        margin: 1rem;
    }
`;

const StyledUnlikeButton = styled.button`
    border: none;
    cursor: pointer;
    padding: 1rem;
    background-color: transparent;
    font-weight: bold;
    min-width: 3rem;

    :hover {
        background-color: gray;
    }
`;

export { StyledLikesOverlay, StyledProductRow, StyledUnlikeButton };
