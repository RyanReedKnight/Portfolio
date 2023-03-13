import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';

describe('<Header />', () => {

  // Define default props to use for Header.
  const clickAbout = () => console.log('About clicked');
  const clickPhotos = () => console.log('Photos clicked');

  test('it should mount', () => {
    render(<Header 
      clickAboutHandler={clickAbout}
      clickPhotosHandler={clickPhotos}
      />);
    
    const header = screen.getByTestId('Header');

    expect(header).toBeInTheDocument();
  });
});