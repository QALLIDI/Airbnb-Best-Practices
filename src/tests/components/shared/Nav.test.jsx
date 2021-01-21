import { render, screen } from '@testing-library/react';
import { Nav } from '../../../components';

test('renders Nav component', () => {
    render(<Nav />);
    const linkElement = screen.getByText(/Nav page/i);
    expect(linkElement).toBeInTheDocument();
})