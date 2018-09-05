import React from 'react';
import MediaPicker from '../MediaPicker';
import ArtPicker from '../ArtPicker';
import ArtDisplay from '../ArtDisplay';
import './Gallery.css';

const Gallery = () => (
  <div className="gallery">
    <ArtPicker />
    <ArtDisplay />
    <MediaPicker />
  </div>
);

export default Gallery;