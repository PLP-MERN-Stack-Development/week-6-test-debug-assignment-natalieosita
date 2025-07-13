import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../../App';
import * as bugService from '../../api/bugService';

jest.mock('../../api/bugService');

describe('Bug Tracker Flow', () => {
  const mockBug = { _id: '1', title: 'Sample Bug', description: 'Test issue', status: 'open' };

  beforeEach(() => {
    bugService.fetchBugs.mockResolvedValue([]);
    bugService.createBug.mockResolvedValue(mockBug);
    bugService.updateBugStatus.mockResolvedValue({ ...mockBug, status: 'resolved' });
    bugService.deleteBug.mockResolvedValue({ success: true });
  });

  it('creates, displays, updates and deletes a bug', async () => {
    render(<App />);

    // Fill and submit the bug form
    fireEvent.change(screen.getByPlaceholderText(/bug title/i), { target: { value: 'Sample Bug' } });
    fireEvent.change(screen.getByPlaceholderText(/bug description/i), { target: { value: 'Test issue' } });
    fireEvent.click(screen.getByText(/report bug/i));

    // Wait for bug to appear in list
    await waitFor(() => expect(screen.getByText(/sample bug/i)).toBeInTheDocument());

    // Update status
    fireEvent.change(screen.getByDisplayValue(/open/i), { target: { value: 'resolved' } });
    await waitFor(() => expect(bugService.updateBugStatus).toHaveBeenCalledWith('1', 'resolved'));

    // Delete bug
    fireEvent.click(screen.getByText(/delete/i));
    await waitFor(() => expect(bugService.deleteBug).toHaveBeenCalledWith('1'));
  });
});