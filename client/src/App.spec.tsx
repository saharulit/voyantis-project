import { render, screen } from '@testing-library/react';
import { App } from './App';

// Example test that ensures the page loads successfully
describe('App Component', () => {
  it('should load the page successfully', () => {
    render(<App />); // Render the component

    // Check if the page title is displayed correctly
    const titleElement = screen.getByText(/Message Queue System/i);
    expect(titleElement).toBeInTheDocument(); // Ensure the title is in the document
  });

  // Note: Additional tests are required, such as:
  // - Checking if the queue is displayed
  // - Verifying the "Go" button is disabled when there are no messages
  // - Ensuring the API response is correctly updated
});
