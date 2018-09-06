import React, { Component } from 'react';
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
    image: 'chicken',
    audio: 'pigs',
    text: 'flames',
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

  render() {
    return (
      <div className="gallery">
        <MediaPicker
          onImageChange={this.handleImageChange}
          onAudioChange={this.handleAudioChange}
          onTextChange={this.handleTextChange}
          selectedImage={this.state.image}
          selectedAudio={this.state.audio}
          selectedText={this.state.text}
        />

        <ArtPicker />

        <ArtDisplay />
      </div>
    );
  }
}

export default Gallery;
