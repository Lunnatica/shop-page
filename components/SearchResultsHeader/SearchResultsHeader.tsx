import {
    StyledSearchResultsHeader,
    StyledToggleButton,
} from './StyledSearchResultsHeader';

const SearchResultsHeader = ({
    resultsNumber,
    toggleShowItems,
    showSoldItems,
}) => (
    <StyledSearchResultsHeader>
        <p>Showing {resultsNumber} results</p>
        <StyledToggleButton onClick={toggleShowItems}>
            {showSoldItems ? 'Hide' : 'Show'} sold items
        </StyledToggleButton>
    </StyledSearchResultsHeader>
);

export { SearchResultsHeader };
