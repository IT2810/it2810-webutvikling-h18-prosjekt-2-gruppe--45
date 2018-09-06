import React, { Component, Children } from 'react';
import MediaPicker from '../MediaPicker';
import ArtPicker from '../ArtPicker';
import ArtDisplay from '../ArtDisplay';
import './Gallery.css';

class Gallery extends Component {
  /**
   * States for the three formats of categories.
   * @type {{image: string, audio: string, text: string}}
   */
  state = {
    image: 'chickens',
    audio: 'pigs',
    text: 'flames',
    entry: 0,
  };

  handleImageChange = event => {
    this.setState({
      image: event.currentTarget.value,
    });
  };

  handleAudioChange = event => {
    this.setState({
      audio: event.currentTarget.value,
    });
  };

  handleTextChange = event => {
    this.setState({
      text: event.currentTarget.value,
    });
  };

  handleArtChange = key => {
    this.setState({
      entry: key,
    });
  };

  render() {
    const DataWrapper = ({ children }) =>
      Children.map(children, child =>
        React.cloneElement(child, {
          selectedImage: this.state.image,
          selectedAudio: this.state.audio,
          selectedText: this.state.text,
        }),
      );

    return (
      <div className="gallery">
        <DataWrapper>
          <MediaPicker
            onImageChange={this.handleImageChange}
            onAudioChange={this.handleAudioChange}
            onTextChange={this.handleTextChange}
          />

          <ArtPicker onChange={this.handleArtChange} />

          <ArtDisplay entry={this.state.entry} />
        </DataWrapper>
      </div>
    );
  }
}

export default Gallery;
