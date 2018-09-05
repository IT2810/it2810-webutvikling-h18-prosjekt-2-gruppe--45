import React from 'react';
import MediaPicker from './MediaPicker';
import ArtPicker from './ArtPicker';
import ArtDisplay from './ArtDisplay';

const Gallery = () => (
  <div>
    <ArtPicker />
    <ArtDisplay />
    <MediaPicker />
  </div>
);

export default Gallery;