import React from 'react';
import Tab from './Tab';
import files from '../Gallery/files';
import './ArtPicker.css';

const ArtPicker = ({
  selectedImage,
  selectedAudio,
  selectedText,
  entry,
  onChange,
}) => {
  // Ensure there are enough entries able for each media type.
  const available = Math.min(
    files.images[selectedImage].length,
    files.audio[selectedAudio].length,
    files.text[selectedText].length,
  );

  // Create simple titles for each exhibition.
  const titles = [];

  for (let i = 0; i < available; i += 1) {
    titles.push({
      name: `Bilde ${i + 1}`,
      key: i,
    });
  }

  return (
    <div className="art-picker">
      {titles.map(({ name, key }) => (
        <Tab
          name={name}
          key={key}
          onClick={() => onChange(key)}
          className={entry === key && 'selected'}
        />
      ))}
    </div>
  );
};

export default ArtPicker;
