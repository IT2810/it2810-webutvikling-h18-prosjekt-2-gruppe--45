// Constants used to enforce consistent spelling - using strings
// can often result in errors being hard to debug due to misspellings
// or such, and this reduces that problem.
export const subCategories = {
  CHICKEN: 'chicken',
  PIGS: 'pigs',
  FLAMES: 'flames',
  WEATHER: 'weather',
  JOKES: 'jokes',
  SONGS: 'songs',
};

// Contains file types, their categories and the files in each category
// as well as credits information for these files which is shown at the
// bottom of the art display.
const files = {
  audio: {
    flames: [
      {
        name: 'fireplace.mp3',
        author: 'Partners In Rhyme',
        link: 'https://www.freesoundeffects.com/free-track/fireplace-426535/',
      },
      {
        name: 'feuer.mp3',
        author: 'Partners In Rhyme',
        link: 'https://www.freesoundeffects.com/free-track/feuer-426782/',
      },
      {
        name: 'fire1.mp3',
        author: 'Partners In Rhyme',
        link: 'https://www.freesoundeffects.com/free-track/fire-89306/',
      },
      {
        name: 'fire2.mp3',
        author: 'Partners In Rhyme',
        link: 'https://www.freesoundeffects.com/free-track/fire2-89307/',
      },
    ],

    pigs: [
      {
        name: 'double-snort.mp3',
        author: 'SoundBible',
        link: 'http://soundbible.com/suggest.php?q=pig&x=0&y=0',
      },
      {
        name: 'pig.mp3',
        author: 'SoundBible',
        link: 'http://soundbible.com/suggest.php?q=pig&x=0&y=0',
      },
      {
        name: 'oink.mp3',
        author: 'SoundBible',
        link: 'http://soundbible.com/suggest.php?q=pig&x=0&y=0',
      },
      {
        name: 'snorting-pig.mp3',
        author: 'SoundBible',
        link: 'http://soundbible.com/suggest.php?q=pig&x=0&y=0',
      },
    ],

    weather: [
      {
        name: 'hailstorm.mp3',
        author: 'Mike Keong',
        link: 'http://soundbible.com/1718-Hailstorm.html',
      },
      {
        name: 'rain.mp3',
        author: 'Mike Keong',
        link: 'http://soundbible.com/2011-Rain-Background.html',
      },
      {
        name: 'thunder.mp3',
        author: 'Mike Keong',
        link: 'http://soundbible.com/1907-Thunder.html',
      },
      {
        name: 'wind.mp3',
        author: 'Mike Keong',
        link: 'http://soundbible.com/2125-Wind-Blowing.html',
      },
    ],
  },

  images: {
    chicken: [
      {
        name: 'chicken1.svg',
        author: 'Wikimedia Commons',
        link: 'https://commons.wikimedia.org/wiki/File:Chicken_clipart.svg',
      },
      {
        name: 'chicken2.svg',
        author: 'ShareIcon',
        link:
          'https://www.shareicon.net/meat-food-supper-lunch-meal-dinner-730108',
      },
      {
        name: 'chicken3.svg',
        author: 'Flaticon',
        link: 'https://www.flaticon.com/free-icon/chicken_99067',
      },
      {
        name: 'chicken4.svg',
        author: 'Wikipedia',
        link: 'https://en.m.wikipedia.org/wiki/File:Chicken_silhouette_02.svg',
      },
    ],

    flames: [
      {
        name: 'flames1.svg',
        author: 'HANNAH',
        link: 'http://www.clker.com/clipart-blue-fire-1.html',
      },
      {
        name: 'flames2.svg',
        author: 'Dryicons',
        link: 'https://dryicons.com/icon/candle-icon-9334',
      },
      {
        name: 'flames3.svg',
        author: 'Icomoon',
        link: 'https://www.flaticon.com/free-icon/fire_24143',
      },
      {
        name: 'flames4.svg',
        author: 'Juhele',
        link: 'https://openclipart.org/detail/297748/forest-fire',
      },
    ],

    weather: [
      {
        name: 'weather1.svg',
        author: 'The Tango Desktop Project',
        link: 'http://tango.freedesktop.org/Tango_Desktop_Project',
      },
      {
        name: 'weather2.svg',
        author: 'Linuxerist and Millosh',
        link: 'https://commons.wikimedia.org/wiki/File:Weather-more-clouds.svg',
      },
      {
        name: 'weather3.svg',
        author: 'The Tango Desktop Project',
        link: 'http://tango.freedesktop.org/Tango_Desktop_Project',
      },
      {
        name: 'weather4.svg',
        author: 'The Tango Desktop Project',
        link: 'http://tango.freedesktop.org/Tango_Desktop_Project',
      },
    ],
  },

  text: {
    flames: [
      {
        name: 'burning1.json',
        author: 'Emily Dickinson',
        link: 'https://www.bartleby.com/113/1113.html',
      },
      {
        name: 'burning2.json',
        author: 'C. D. Wright',
        link:
          'https://www.poetryfoundation.org/poems/51055/flame-56d22e8d6c815',
      },
      {
        name: 'burning3.json',
        author: 'W. Shakespeare',
        link: 'http://www.shakespeares-sonnets.com/sonnet/45',
      },
      {
        name: 'burning4.json',
        author: 'W. Blake',
        link: 'https://www.poetryfoundation.org/poems/43687/the-tyger',
      },
    ],

    jokes: [
      {
        name: 'joke1.json',
        author: 'unknown',
        link: 'https://humoristen.no/',
      },
      {
        name: 'joke2.json',
        author: 'unknown',
        link: 'https://humoristen.no/',
      },
      {
        name: 'joke3.json',
        author: 'unknown',
        link: 'https://humoristen.no/',
      },
      {
        name: 'joke4.json',
        author: 'unknown',
        link: 'https://humoristen.no/',
      },
    ],

    songs: [
      {
        name: 'songs1.json',
        author: 'Morten Nome',
        link: 'https://www.youtube.com/watch?v=P3uUyZE2EG8',
      },
      {
        name: 'songs2.json',
        author: 'Morten Nome',
        link: 'https://www.youtube.com/watch?v=giTGACDPF3M',
      },
      {
        name: 'songs3.json',
        author: 'Morten Nome',
        link: 'https://www.youtube.com/watch?v=KP2uXHnH4bU',
      },
      {
        name: 'songs4.json',
        author: 'Morten Nome',
        link: 'https://www.youtube.com/watch?v=6iwMMNzNV7o',
      },
    ],
  },
};

export default files;
