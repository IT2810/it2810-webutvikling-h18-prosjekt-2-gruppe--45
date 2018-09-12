import React from 'react';
import './MediaPicker.css';

const CHICKEN_STRING = 'chicken';
const PIGS_STRING = 'pigs';
const FLAMES_STRING = 'flames';
const WEATHER_STRING = 'weather';
const JOKES_STRING = 'jokes';
const SONGS_STRING = 'songs';

/**
 * Class for handling users picking media category.
 */
class MediaPicker extends React.Component {
  constructor(props) {
    super(props);

    /**
     * Creates an array 'randomIndexes' that contains three random indexes
     * between 0 and 2
     */
    let randomIndexes = [];

    for (let i = 0; i < 3; i++) {
      randomIndexes.push(Math.floor(Math.random() * 3));
    }

    /**
     * Lists of strings for available images, audios and texts
     */
    const IMAGES = [CHICKEN_STRING, FLAMES_STRING, WEATHER_STRING];
    const AUDIOS = [PIGS_STRING, FLAMES_STRING, WEATHER_STRING];
    const TEXTS = [FLAMES_STRING, JOKES_STRING, SONGS_STRING];

    /**
     * Sets the chosen category based on the random indexes
     * States for the three formats of categories
     * @type {{image: string, audio: string, text: string}}
     */
    this.state = {
      image: IMAGES[randomIndexes[0]],
      audio: AUDIOS[randomIndexes[1]],
      text: TEXTS[randomIndexes[2]],
    };
  }

  /**
   * Eventlisteners for the radiobuttons
   * @param e   the pressed radiobutton
   */
  onImageChanged = e => {
    this.setState({
      image: e.currentTarget.value,
    });
  };

  onAudioChanged = e => {
    this.setState({
      audio: e.currentTarget.value,
    });
  };

  onTextChanged = e => {
    this.setState({
      text: e.currentTarget.value,
    });
  };

  render() {
    return (
      <div className="media-picker">
        <form>
          <div>
            <h2>Bilder</h2>
            <div>
              <ul>
                <li>
                  <label>
                    <input
                      name={'image'}
                      type={'radio'}
                      value={CHICKEN_STRING}
                      checked={this.state.image === CHICKEN_STRING}
                      onChange={this.onImageChanged}
                    />
                    Chickens
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      name={'image'}
                      type={'radio'}
                      value={FLAMES_STRING}
                      checked={this.state.image === FLAMES_STRING}
                      onChange={this.onImageChanged}
                    />
                    Flames
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      name={'image'}
                      type={'radio'}
                      value={WEATHER_STRING}
                      checked={this.state.image === WEATHER_STRING}
                      onChange={this.onImageChanged}
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
                      name={'audio'}
                      type={'radio'}
                      value={PIGS_STRING}
                      checked={this.state.audio === PIGS_STRING}
                      onChange={this.onAudioChanged}
                    />
                    Griser
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      name={'audio'}
                      type={'radio'}
                      value={FLAMES_STRING}
                      checked={this.state.audio === FLAMES_STRING}
                      onChange={this.onAudioChanged}
                    />
                    Flammer
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      name={'audio'}
                      type={'radio'}
                      value={WEATHER_STRING}
                      checked={this.state.audio === WEATHER_STRING}
                      onChange={this.onAudioChanged}
                    />
                    Weather
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
                      name={'text'}
                      type={'radio'}
                      value={FLAMES_STRING}
                      checked={this.state.text === FLAMES_STRING}
                      onChange={this.onTextChanged}
                    />
                    Brennende dikt
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      name={'text'}
                      type={'radio'}
                      value={JOKES_STRING}
                      checked={this.state.text === JOKES_STRING}
                      onChange={this.onTextChanged}
                    />
                    Vitser
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      name={'text'}
                      type={'radio'}
                      value={SONGS_STRING}
                      checked={this.state.text === SONGS_STRING}
                      onChange={this.onTextChanged}
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
  }
}

export default MediaPicker;
