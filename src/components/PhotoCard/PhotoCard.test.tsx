import React from 'react';
import { render, screen } from '@testing-library/react';
//import '@testing-library/jest-dom/extend-expect';
import PhotoCard from './PhotoCard';
import Photo from '../../models/Photo';



describe('<PhotoCard />', () => {

  const dummyPhoto:Photo = {
    title:"photo-title",
    description: "photo description",
    location: "photo location",
  }

  test('it should mount', () => {
    render(<PhotoCard photoModel={dummyPhoto}/>);
    
    const photoCard = screen.getByTestId('PhotoCard');

    expect(photoCard).toBeInTheDocument();
  });
});