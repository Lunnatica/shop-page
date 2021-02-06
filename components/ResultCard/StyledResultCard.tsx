import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';

const StyledResultCard = styled.article<StyledResultCardProps>`
    background-color: lightgrey;
    flex-basis: 80%;
    padding: 1rem;

    @media ${breakpoints.tablet} {
        flex-basis: 25%;
    }

    @media ${breakpoints.desktop} {
        flex-basis: 20%;
    }
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
    @media ${breakpoints.tablet} {
        height: 8rem;
    }
`;

const StyledResultSubdetails = styled.p`
    font-size: small;
    margin: 0.5rem 0;

    @media ${breakpoints.tablet} {
        height: 2rem;
        text-overflow: ellipsis;
        word-wrap: break-word;
        overflow: hidden;

        /* The code below, which adds ellipsis, only works in Chrome */
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
`;

const StyledResultTitle = styled(StyledResultSubdetails)`
    font-weight: bold;

    @media ${breakpoints.tablet} {
        font-size: medium;
        height: auto;
    }
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
    StyledResultTitle,
};
