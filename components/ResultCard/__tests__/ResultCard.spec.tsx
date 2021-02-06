import { render, screen } from '@testing-library/react';
import { ResultCard } from '../ResultCard';

describe('<ResultCard />', () => {
    const result = {
        id: '1',
        name: 'name',
        img: 'img',
        sold: false,
        price: '123.0',
        brand: 'brand',
        description: 'description',
    };

    const resultSold = { ...result, sold: true };

    it('should render not render SOLD when passed non-sold result', () => {
        render(<ResultCard {...result} />);
        expect(screen.getByText(result.name));
        expect(screen.queryByText('SOLD')).toBeNull();
    });

    it('should render SOLD when passed a sold result', () => {
        render(<ResultCard {...resultSold} />);
        expect(screen.getByText(result.name));
        expect(screen.getByText('SOLD'));
    });
});
