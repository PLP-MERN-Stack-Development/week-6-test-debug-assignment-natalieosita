import { render, screen, fireEvent } from '@testing-library/react';
import BugForm from '../../components/BugForm';

describe('BugForm', () => {
  it('renders input fields', () => {
    render(<BugForm onSubmit={() => {}} />);
    expect(screen.getByPlaceholderText(/bug title/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/bug description/i)).toBeInTheDocument();
  });

  it('submits with valid data', () => {
    const mockSubmit = jest.fn();
    render(<BugForm onSubmit={mockSubmit} />);
    fireEvent.change(screen.getByPlaceholderText(/bug title/i), { target: { value: 'Login Issue' } });
    fireEvent.change(screen.getByPlaceholderText(/bug description/i), { target: { value: 'Page crashes' } });
    fireEvent.click(screen.getByText(/report bug/i));
    expect(mockSubmit).toHaveBeenCalledWith({ title: 'Login Issue', description: 'Page crashes' });
  });
});