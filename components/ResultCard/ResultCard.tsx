import Image from 'next/image';
import { LikeButton } from '../LikeButton';
import { SearchResult } from '../SearchResultsLayout/SearchResultsLayout';
import {
    StyledDescription,
    StyledImgContainer,
    StyledResultCard,
    StyledResultTitle,
    StyledResultSubdetails,
    StyledSoldOverlay,
    StyledSoldText,
} from './StyledResultCard';

const ResultCard: React.FC<SearchResult> = ({
    id,
    name,
    img,
    sold,
    price,
    brand,
    description,
}) => {
    return (
        <StyledResultCard sold={sold}>
            <StyledImgContainer>
                <LikeButton id={id} name={name} />
                <Image src={img} alt={description} width={500} height={500} />
                {sold && (
                    <>
                        <StyledSoldOverlay />
                        <StyledSoldText>SOLD</StyledSoldText>
                    </>
                )}
            </StyledImgContainer>
            <StyledDescription>
                <StyledResultTitle>{name}</StyledResultTitle>
                <StyledResultSubdetails>{brand}</StyledResultSubdetails>
                <StyledResultSubdetails>{description}</StyledResultSubdetails>
                <StyledResultSubdetails>£{price}</StyledResultSubdetails>
            </StyledDescription>
        </StyledResultCard>
    );
};

export { ResultCard };
