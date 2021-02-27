import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App';

describe('App', () => {
  it('renders as expected', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders app name text', () => {
    render(<App />);
    const appName = screen.getByText('SurReal Estate');
    expect(appName).toBeInTheDocument();
  });
});
