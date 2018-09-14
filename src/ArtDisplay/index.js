import React, { Component } from 'react';
import ArtDisplayView from './ArtDisplayView';
import './ArtDisplay.css';
import files from '../Gallery/files';
import spinner from './spinner.svg';

const Container = ({ children }) => (
  <div className="art-display">{children}</div>
);

/**
 * Return the image path based on selected entry and category
 * Entry is given by tabs and category is from user picking media (radiobuttons)
 * @param selectedImage     chosen image category to be selected
 * @param entry             the index of chosen image from the category
 * @returns {string}        the path to selected image
 */

const getImageLink = (selectedImage, entry) =>
  `images/${selectedImage}/${files.images[selectedImage][entry].name}`;

/**
 * Return the audio path based on selected entry and category
 * Entry is given by tabs and category is from user picking media (radiobuttons)
 * @param selectedAudio     chosen audio to be selected
 * @param entry             the index of chosen audio
 * @returns {string}        the path to selected audio
 */
const getAudioLink = (selectedAudio, entry) =>
  `audio/${selectedAudio}/${files.audio[selectedAudio][entry].name}`;

/**
 * Return the text path based on selected entry and category
 * Entry is given by tabs and category is from user picking media (radiobuttons)
 * @param selectedText      chosen text to be selected
 * @param entry             the index of chosen text
 * @returns {string}        the path to selected text
 */
const getTextLink = (selectedText, entry) =>
  `text/${selectedText}/${files.text[selectedText][entry].name}`;

class ArtDisplay extends Component {
  state = {
    // Whether or not new data is currently being loaded.
    loading: true,

    // Whether or not an error occured while loading data.
    error: false,

    // The currently visible image.
    image: null,

    // The currently visible text.
    text: null,

    // A map with paths to assets storing the data stored at the endpoint.
    cache: {},
  };

  /**
   *
   * @returns {Promise<void>}
   */
  load = async () => {
    // Reset errors and notify the user that data is currently loading.
    this.setState({
      loading: true,
      error: false,
    });

    try {
      // Using this helper allows us to run both fetch calls in parallel.
      // Note that this throws if any of the two promises fail.
      await Promise.all([this.loadImage(), this.loadText()]);
    } catch (error) {
      // Notify the user that an error happened.
      this.setState({
        error: true,
      });
    }

    // Remove the loading notification.
    this.setState({
      loading: false,
    });
  };

  /**
   *
   * @returns {Promise<void>}
   */
  loadImage = async () => {
    const path = getImageLink(this.props.selectedImage, this.props.entry);

    if (this.state.cache[path]) {
      this.setState({
        image: this.state.cache[path],
      });

      return;
    }

    const response = await fetch(path);

    const data = await response.text();

    this.setState(prevState => ({
      image: data,

      cache: {
        ...prevState.cache,
        [path]: data,
      },
    }));
  };

  /**
   *
   * @returns {Promise<void>}
   */
  loadText = async () => {
    const path = getTextLink(this.props.selectedText, this.props.entry);

    if (this.state.cache[path]) {
      this.setState({
        text: this.state.cache[path],
      });

      return;
    }

    const response = await fetch(path);

    const data = await response.json();

    this.setState(prevState => ({
      text: data,

      cache: {
        ...prevState.cache,
        [path]: data,
      },
    }));
  };

  /**
   *
   */
  componentDidMount() {
    this.load();
  }

  /**
   *
   * @param prevProps
   */
  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.load();
    }
  }

  render() {
    if (this.state.error) {
      return (
        <Container>
          An error occurred while loading the data for this exhibition.
        </Container>
      );
    }

    if (this.state.loading) {
      return (
        <Container>
          <img src={spinner} className="spinner" />
        </Container>
      );
    }

    const visibleFiles = {
      text: files.text[this.props.selectedText][this.props.entry],
      audio: files.audio[this.props.selectedAudio][this.props.entry],
      image: files.images[this.props.selectedImage][this.props.entry],
    };

    return (
      <Container>
        <ArtDisplayView
          image={this.state.image}
          text={this.state.text}
          files={visibleFiles}
          audio={getAudioLink(this.props.selectedAudio, this.props.entry)}
        />
      </Container>
    );
  }
}

export default ArtDisplay;
