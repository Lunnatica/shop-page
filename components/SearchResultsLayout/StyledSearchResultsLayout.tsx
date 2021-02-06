import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';

const StyledSearchResultsLayout = styled.main`
    display: flex;
    background-color: lightgrey;
    padding: 1rem;

    @media ${breakpoints.tablet} {
        padding: 1rem 1rem;
    }

    @media ${breakpoints.desktop} {
        padding: 5rem 6rem;
    }
`;

const StyledSearchResults = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

export { StyledSearchResultsLayout, StyledSearchResults };
