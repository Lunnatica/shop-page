import Error from 'next/error';
import { useState } from 'react';
import { ResultCard } from '../ResultCard';
import { SearchResultsHeader } from '../SearchResultsHeader';
import {
    StyledSearchResults,
    StyledSearchResultsLayout,
} from './StyledSearchResultsLayout';

interface SearchResult {
    id: string;
    date: string;
    name: string;
    img: string;
    sold: boolean;
    price: string;
    brand: string;
    description: string;
    seller: string;
}

interface SearchResultsLayoutProps {
    errorCode?: number;
    results?: SearchResult[];
}

const SearchResultsLayout: React.FC<SearchResultsLayoutProps> = ({
    errorCode,
    results = [],
}) => {
    const [showSoldItems, setShowSoldItems] = useState(true);
    const resultsNumber = showSoldItems
        ? results.length
        : results.filter(({ sold }) => sold !== true).length;

    const toggleShowItems = () => {
        setShowSoldItems(!showSoldItems);
    };

    if (errorCode) {
        return (
            <Error
                title="There was a problem when retrieving your search results. Please try again later."
                statusCode={errorCode}
            />
        );
    } else
        return results && results.length > 0 ? (
            <StyledSearchResultsLayout>
                <SearchResultsHeader
                    resultsNumber={resultsNumber}
                    toggleShowItems={toggleShowItems}
                    showSoldItems={showSoldItems}
                />
                <StyledSearchResults>
                    {results.map(
                        ({
                            id,
                            date,
                            name,
                            img,
                            sold,
                            price,
                            brand,
                            description,
                            seller,
                        }) => {
                            const shouldShowItem =
                                !sold || (sold && showSoldItems);

                            return (
                                shouldShowItem && (
                                    <ResultCard
                                        key={id}
                                        {...{
                                            id,
                                            date,
                                            name,
                                            img,
                                            sold,
                                            price,
                                            brand,
                                            description,
                                            seller,
                                        }}
                                    />
                                )
                            );
                        }
                    )}
                </StyledSearchResults>
            </StyledSearchResultsLayout>
        ) : (
            <p>Sorry, there are no results for your search.</p>
        );
};

export { SearchResultsLayout };
export type { SearchResult };
