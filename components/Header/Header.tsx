import { LikesCounter } from '../LikesCounter';
import { StyledHeader } from './StyledHeader';

const Header = () => (
    <StyledHeader>
        <h1>The test shop</h1>
        <LikesCounter />
    </StyledHeader>
);

export { Header };
