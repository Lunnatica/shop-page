import Image from 'next/image';
import { LikeButton } from '../LikeButton';
import { SearchResult } from '../SearchResultsLayout/SearchResultsLayout';
import {
    StyledDescription,
    StyledImgContainer,
    StyledResultCard,
    StyledResultSubdetails,
    StyledSoldOverlay,
    StyledSoldText,
} from './StyledResultCard';

const ResultCard: React.FC<SearchResult> = ({
    id,
    date, // TODO: remove stuff I do not use
    name,
    img,
    sold,
    price,
    brand,
    description,
    seller,
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
                <p>{name}</p>
                <StyledResultSubdetails>{brand}</StyledResultSubdetails>
                <StyledResultSubdetails>{description}</StyledResultSubdetails>
                <StyledResultSubdetails>£{price}</StyledResultSubdetails>
            </StyledDescription>
        </StyledResultCard>
    );
};

export { ResultCard };
