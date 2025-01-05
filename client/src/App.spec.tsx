// App.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import { App } from './App';
import { Mock } from 'vitest';

global.fetch = vi.fn();

describe('App Component', () => {
  beforeEach(() => {
    vi.clearAllMocks(); // Clear previous mock data
  });

  test('renders loading state', () => {
    render(<App />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument(); // Check for loading text
  });

  test('renders friends list after successful fetch', async () => {
    // Mock the fetch response
    const mockFriends = [
      { name: 'John Doe', caricature: 'Friend caricature 1', quote: 'Hello!' },
      {
        name: 'Jane Doe',
        caricature: 'Friend caricature 2',
        quote: 'Good day!',
      },
    ];
    (fetch as Mock).mockResolvedValueOnce({
      ok: true,
      json: vi.fn().mockResolvedValueOnce(mockFriends),
    });

    render(<App />);

    // Wait for the component to finish loading and rendering
    await waitFor(() =>
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument()
    );

    // Check if friends are rendered
    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/Jane Doe/i)).toBeInTheDocument();
  });

  test('renders error message on fetch failure', async () => {
    // Mock the fetch response for an error
    (fetch as Mock).mockResolvedValueOnce({
      ok: false,
    });

    render(<App />);

    // Wait for loading to finish
    await waitFor(() =>
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument()
    );

    // Check for error message
    expect(screen.getByText(/Failed to fetch friends/i)).toBeInTheDocument();
  });
});
