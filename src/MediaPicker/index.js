import React from 'react';
import './MediaPicker.css';
import { subCategories } from '../Gallery/files';

/**
 * Class for handling users picking media category.
 */
const MediaPicker = ({
  onImageChange,
  onAudioChange,
  onTextChange,
  selectedImage,
  selectedAudio,
  selectedText,
}) => (
  <div className="media-picker">
    <form>
      <div className="media-picker-categories">
        <div className="media-category">
          <h2>Bilder</h2>
          <div>
            <ul>
              <li>
                <label>
                  <input
                    name={'image'}
                    type={'radio'}
                    value={subCategories.CHICKEN}
                    checked={selectedImage === subCategories.CHICKEN}
                    onChange={onImageChange}
                  />
                  Kylling
                </label>
              </li>
              <li>
                <label>
                  <input
                    name={'image'}
                    type={'radio'}
                    value={subCategories.FLAMES}
                    checked={selectedImage === subCategories.FLAMES}
                    onChange={onImageChange}
                  />
                  Flammer
                </label>
              </li>
              <li>
                <label>
                  <input
                    name={'image'}
                    type={'radio'}
                    value={subCategories.WEATHER}
                    checked={selectedImage === subCategories.WEATHER}
                    onChange={onImageChange}
                  />
                  Vær
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div className="media-category">
          <h2>Lyder</h2>
          <div>
            <ul>
              <li>
                <label>
                  <input
                    name={'audio'}
                    type={'radio'}
                    value={subCategories.PIGS}
                    checked={selectedAudio === subCategories.PIGS}
                    onChange={onAudioChange}
                  />
                  Griser
                </label>
              </li>
              <li>
                <label>
                  <input
                    name={'audio'}
                    type={'radio'}
                    value={subCategories.FLAMES}
                    checked={selectedAudio === subCategories.FLAMES}
                    onChange={onAudioChange}
                  />
                  Flammer
                </label>
              </li>
              <li>
                <label>
                  <input
                    name={'audio'}
                    type={'radio'}
                    value={subCategories.WEATHER}
                    checked={selectedAudio === subCategories.WEATHER}
                    onChange={onAudioChange}
                  />
                  Vær
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div className="media-category">
          <h2>Tekst</h2>
          <div>
            <ul>
              <li>
                <label>
                  <input
                    name={'text'}
                    type={'radio'}
                    value={subCategories.FLAMES}
                    checked={selectedText === subCategories.FLAMES}
                    onChange={onTextChange}
                  />
                  Dikt
                </label>
              </li>
              <li>
                <label>
                  <input
                    name={'text'}
                    type={'radio'}
                    value={subCategories.JOKES}
                    checked={selectedText === subCategories.JOKES}
                    onChange={onTextChange}
                  />
                  Vitser
                </label>
              </li>
              <li>
                <label>
                  <input
                    name={'text'}
                    type={'radio'}
                    value={subCategories.SONGS}
                    checked={selectedText === subCategories.SONGS}
                    onChange={onTextChange}
                  />
                  Sanger
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </form>
  </div>
);

export default MediaPicker;
