import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PhotoCard from './PhotoCard';

describe('<PhotoCard />', () => {
  test('it should mount', () => {
    render(<PhotoCard />);
    
    const photoCard = screen.getByTestId('PhotoCard');

    expect(photoCard).toBeInTheDocument();
  });
});