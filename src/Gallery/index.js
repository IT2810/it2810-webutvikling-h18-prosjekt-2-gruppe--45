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
    image: 'chickens',
    audio: 'pigs',
    text: 'flames',
    entry: 0,
  };

  handleImageChange = event => {
    this.setState({
      image: event.currentTarget.value,
      entry: 0,
    });
  };

  handleAudioChange = event => {
    this.setState({
      audio: event.currentTarget.value,
      entry: 0,
    });
  };

  handleTextChange = event => {
    this.setState({
      text: event.currentTarget.value,
      entry: 0,
    });
  };

  handleArtChange = key => {
    this.setState({
      entry: key,
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

        <ArtPicker
          onChange={this.handleArtChange}
          selectedImage={this.state.image}
          selectedAudio={this.state.audio}
          selectedText={this.state.text}
        />

        <ArtDisplay
          entry={this.state.entry}
          selectedImage={this.state.image}
          selectedAudio={this.state.audio}
          selectedText={this.state.text}
        />
      </div>
    );
  }
}

export default Gallery;
