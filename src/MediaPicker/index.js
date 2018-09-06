import React from 'react';
import './MediaPicker.css';

/**
 * Class for handling users mediapicks.
 */
class MediaPicker extends React.Component {

  constructor(props) {
    super(props);

    /**
     * States for the three formats of categories
     * @type {{image: string, audio: string, text: string}}
     */
    this.state = {
      image: "chicken",
      audio: "pigs",
      text: "flames"
    };
  }

  /**
   * Eventlisteners for the radiobuttons
   * @param e   the pressed radiobutton
   */
  onImageChanged = (e) => {
    this.setState({
      image: (e.currentTarget.value)
    });
  };

  onAudioChanged = (e) => {
    this.setState({
      audio: e.currentTarget.value
    });
  };

  onTextChanged = (e) => {
    this.setState({
      text: e.currentTarget.value
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
                    <input name={"image"} type={"radio"} value={"chicken"}
                           checked={this.state.image === "chicken"}
                           onChange={this.onImageChanged}
                    />
                    Chickens
                  </label>
                </li>
                <li>
                  <label>
                    <input name={"image"} type={"radio"} value={"flames"}
                           checked={this.state.image === "flames"}
                           onChange={this.onImageChanged}
                    />
                    Flames
                  </label>
                </li>
                <li>
                  <label>
                    <input name={"image"} type={"radio"} value={"weather"}
                           checked={this.state.image === "weather"}
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
                    <input name={"audio"} type={"radio"} value={"pigs"}
                           checked={this.state.audio === "pigs"}
                           onChange={this.onAudioChanged}
                    />
                    Griser
                  </label>
                </li>
                <li>
                  <label>
                    <input name={"audio"} type={"radio"} value={"flames"}
                           checked={this.state.audio === "flames"}
                           onChange={this.onAudioChanged}
                    />
                    Flammer
                  </label>
                </li>
                <li>
                  <label>
                    <input name={"audio"} type={"radio"} value={"weather"}
                           checked={this.state.audio === "weather"}
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
                    <input name={"text"} type={"radio"} value={"flames"}
                           checked={this.state.text === "flames"}
                           onChange={this.onTextChanged}
                    />
                    Brennende dikt
                  </label>
                </li>
                <li>
                  <label>
                    <input name={"text"} type={"radio"} value={"jokes"}
                           checked={this.state.text === "jokes"}
                           onChange={this.onTextChanged}
                    />
                    Vitser
                  </label>
                </li>
                <li>
                  <label>
                    <input name={"text"} type={"radio"} value={"songs"}
                           checked={this.state.text === "songs"}
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