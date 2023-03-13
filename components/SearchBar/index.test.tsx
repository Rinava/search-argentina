import { render, screen } from '@testing-library/react';

import SearchBar from './index';

describe('SearchBar', () => {
  it('renders SearchBar component', () => {
    render(<SearchBar onSubmit={() => {}} />);

    expect(screen.getByText('>')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('e.g. Buenos Aires')
    ).toBeInTheDocument();
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  it('renders SearchBar component with className', () => {
    render(<SearchBar onSubmit={() => {}} className='test-class' />);
    const element = screen.getByRole('form');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass(
      'bg-light h-12 md:h-16 border-secondary border-2 md:border-4 flex items-center justify-between test-class'
    );
  });
});
