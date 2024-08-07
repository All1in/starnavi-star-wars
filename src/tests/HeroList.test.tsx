import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import HeroList from '../components/HeroList';

describe('HeroList', () => {
  test('renders the list container', () => {
    render(
        <BrowserRouter>
          <HeroList />
        </BrowserRouter>
    );

    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  test('Check if list of heros is rendered', () => {
    render(<HeroList />);

    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});