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
    flames: ['fireplace.mp3', 'feuer.mp3', 'fire1.mp3', 'fire2.mp3'],
    pigs: ['double-snort.mp3', 'pig.mp3', 'oink.mp3', 'snorting-pig.mp3'],
    weather: ['hailstorm.mp3', 'rain.mp3', 'thunder.mp3', 'wind.mp3'],
  },

  images: {
    chicken: ['chicken1.svg', 'chicken2.svg', 'chicken3.svg', 'chicken4.svg'],
    flames: ['flames1.svg', 'flames2.svg', 'flames3.svg', 'flames4.svg'],
    weather: ['weather1.svg', 'weather2.svg', 'weather3.svg', 'weather4.svg'],
  },

  text: {
    flames: [
      'burning1.json',
      'burning2.json',
      'burning3.json',
      'burning4.json',
    ],
    jokes: ['joke1.json', 'joke2.json', 'joke3.json', 'joke4.json'],
    songs: ['songs1.json', 'songs2.json', 'songs3.json', 'songs4.json'],
  },
};

export default files;