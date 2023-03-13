import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PhotosPage from './PhotosPage';

describe('<PhotosPage />', () => {
  test('it should mount', () => {
    render(<PhotosPage />);
    
    const photosPage = screen.getByTestId('PhotosPage');

    expect(photosPage).toBeInTheDocument();
  });
});