import React from 'react';
import MediaPicker from '../MediaPicker';
import ArtPicker from '../ArtPicker';
import ArtDisplay from '../ArtDisplay';
import './Gallery.css';

const Gallery = () => (
  <div className="gallery">
    <MediaPicker />
    <ArtPicker />
    <ArtDisplay />
  </div>
);

export default Gallery;