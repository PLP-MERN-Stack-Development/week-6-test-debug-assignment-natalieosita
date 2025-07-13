import { render, screen } from '@testing-library/react';
import BugList from '../../components/BugList';
import * as bugService from '../../api/bugService';

jest.mock('../../api/bugService');

const mockBugs = [
  { _id: '1', title: 'Bug A', description: 'Issue A', status: 'open' }
];

describe('BugList', () => {
  it('renders bugs fetched from API', async () => {
    bugService.fetchBugs.mockResolvedValue(mockBugs);
    render(<BugList />);
    expect(await screen.findByText(/bug a/i)).toBeInTheDocument();
  });

  it('shows loading initially', async () => {
    bugService.fetchBugs.mockResolvedValue([]);
    render(<BugList />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('handles empty state', async () => {
    bugService.fetchBugs.mockResolvedValue([]);
    render(<BugList />);
    expect(await screen.findByText(/no bugs found/i)).toBeInTheDocument();
  });
});