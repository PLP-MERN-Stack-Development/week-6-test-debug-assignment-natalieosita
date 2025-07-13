import { render, screen, fireEvent } from '@testing-library/react';
import BugItem from '../../components/BugItem';

const mockBug = { _id: '1', title: 'Crash', description: 'Null pointer', status: 'open' };

describe('BugItem', () => {
  it('renders bug data', () => {
    render(<BugItem bug={mockBug} onUpdate={() => {}} onDelete={() => {}} />);
    expect(screen.getByText(/crash/i)).toBeInTheDocument();
    expect(screen.getByText(/null pointer/i)).toBeInTheDocument();
  });

  it('handles status update', () => {
    const updateMock = jest.fn();
    render(<BugItem bug={mockBug} onUpdate={updateMock} onDelete={() => {}} />);
    fireEvent.change(screen.getByDisplayValue(/open/i), { target: { value: 'resolved' } });
    expect(updateMock).toHaveBeenCalledWith('1', 'resolved');
  });

  it('handles delete', () => {
    const deleteMock = jest.fn();
    render(<BugItem bug={mockBug} onUpdate={() => {}} onDelete={deleteMock} />);
    fireEvent.click(screen.getByText(/delete/i));
    expect(deleteMock).toHaveBeenCalledWith('1');
  });
});