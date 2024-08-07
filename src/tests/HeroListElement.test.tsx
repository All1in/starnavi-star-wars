import { render, screen } from '@testing-library/react';
import HeroListElement from '../components/HeroListElement';

// Mock styles
jest.mock('../../styles/HeroUnit.module.scss', () => ({
    hero: 'hero',
    hero__name: 'hero__name',
}));

describe('HeroListElement', () => {
    const heroName = 'Test Hero';

    test('renders the hero name', () => {
        render(<HeroListElement name={heroName} />);

        // Check if the hero name is rendered
        expect(screen.getByText(heroName)).toBeInTheDocument();
    });

    test('applies correct styles', () => {
        render(<HeroListElement name={heroName} />);

        // Check if the component has the correct class for the list item
        const listItem = screen.getByRole('listitem');
        expect(listItem).toHaveClass('hero');

        // Check if the h3 element has the correct class
        const heading = screen.getByRole('heading', { level: 3 });
        expect(heading).toHaveClass('hero__name');
    });
});
