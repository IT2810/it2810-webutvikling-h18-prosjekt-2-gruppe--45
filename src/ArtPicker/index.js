import React from 'react';
import Tab from './Tab';
import './ArtPicker.css';

const ArtPicker = () => (
  <div className='art-picker'>
    <Tab name="Kunstverk 1" />
    <Tab name="Kunstverk 2" />
    <Tab name="Kunstverk 3" />
  </div>
);

export default ArtPicker;