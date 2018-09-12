export const subCategories = {
  CHICKEN: 'chicken',
  PIGS: 'pigs',
  FLAMES: 'flames',
  WEATHER: 'weather',
  JOKES: 'jokes',
  SONGS: 'songs',
};

const files = {
  audio: {
    fire: ['fireplace.mp3', 'feuer.mp3', 'fire1.mp3', 'fire2.mp3'],
    pigs: ['double-snort.mp3', 'pig.mp3', 'oink.mp3', 'snorting-pig.mp3'],
    weather: ['hailstorm.mp3', 'rain.mp3', 'thunder.mp3', 'wind.mp3'],
  },

  images: {
    chicken: ['chicken1.svg', 'chicken2.svg', 'chicken3.svg', 'chicken4.svg'],
    flames: ['flames1.svg', 'flames2.svg', 'flames3.svg', 'flames4.svg'],
    weather: ['weather1.svg', 'weather2.svg', 'weather3.svg', 'weather4.svg'],
  },

  text: null, // TODO: Needs to use JSON files
};

export default files;
