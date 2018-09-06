import React from 'react';
import './MediaPicker.css';

/**
 * Class for handling users mediapicks.
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
      <div>
        <h2>Bilder</h2>

        <div>
          <ul>
            <li>
              <label>
                <input
                  name="image"
                  type="radio"
                  value="chickens"
                  checked={selectedImage === 'chickens'}
                  onChange={onImageChange}
                />
                Kyllinger
              </label>
            </li>

            <li>
              <label>
                <input
                  name="image"
                  type="radio"
                  value="flames"
                  checked={selectedImage === 'flames'}
                  onChange={onImageChange}
                />
                Flammer
              </label>
            </li>

            <li>
              <label>
                <input
                  name="image"
                  type="radio"
                  value="weather"
                  checked={selectedImage === 'weather'}
                  onChange={onImageChange}
                />
                Weather
              </label>
            </li>
          </ul>
        </div>

        <h2>Lyder</h2>

        <div>
          <ul>
            <li>
              <label>
                <input
                  name="audio"
                  type="radio"
                  value="pigs"
                  checked={selectedAudio === 'pigs'}
                  onChange={onAudioChange}
                />
                Griser
              </label>
            </li>
            <li>
              <label>
                <input
                  name="audio"
                  type="radio"
                  value="fire"
                  checked={selectedAudio === 'fire'}
                  onChange={onAudioChange}
                />
                Flammer
              </label>
            </li>
            <li>
              <label>
                <input
                  name="audio"
                  type="radio"
                  value="weather"
                  checked={selectedAudio === 'weather'}
                  onChange={onAudioChange}
                />
                Vær
              </label>
            </li>
          </ul>
        </div>

        <h2>Tekst</h2>

        <div>
          <ul>
            <li>
              <label>
                <input
                  name="text"
                  type="radio"
                  value="flames"
                  checked={selectedText === 'flames'}
                  onChange={onTextChange}
                />
                Brennende dikt
              </label>
            </li>
            <li>
              <label>
                <input
                  name="text"
                  type="radio"
                  value="jokes"
                  checked={selectedText === 'jokes'}
                  onChange={onTextChange}
                />
                Vitser
              </label>
            </li>
            <li>
              <label>
                <input
                  name="text"
                  type="radio"
                  value="songs"
                  checked={selectedText === 'songs'}
                  onChange={onTextChange}
                />
                Sanger
              </label>
            </li>
          </ul>
        </div>
      </div>
    </form>
  </div>
);

export default MediaPicker;
