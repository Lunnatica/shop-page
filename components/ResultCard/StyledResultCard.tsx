import styled from 'styled-components';

const StyledResultCard = styled.article<StyledResultCardProps>`
    background-color: lightgrey;
    flex-basis: 20%;
    padding: 1rem;
`;

const StyledImgContainer = styled.div`
    position: relative;

    > div {
        vertical-align: middle;
    }

    img {
        object-fit: cover;
    }
`;

const StyledDescription = styled.div`
    height: 8rem;
`;

const StyledResultSubdetails = styled.p`
    font-size: small;
    height: 2rem;
    margin: 0.5rem 0;
    text-overflow: ellipsis;
    word-wrap: break-word;
    overflow: hidden;

    /* The code below, which adds ellipsis, only works in Chrome */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

interface StyledResultCardProps {
    sold: boolean;
}

const StyledSoldOverlay = styled.div`
    width: 100%;
    height: 100%;
    background-color: grey;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.8;
`;

const StyledSoldText = styled.p`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
`;

export {
    StyledResultCard,
    StyledDescription,
    StyledResultSubdetails,
    StyledSoldText,
    StyledSoldOverlay,
    StyledImgContainer,
};
