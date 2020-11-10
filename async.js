function getUserPreferences() {
    const preferences = new Promise((resolve, reject) => {
      resolve({
        theme: 'dusk',
      });
    });
    return preferences;
  }

  function getMusic(theme) {
    if (theme === 'dusk') {
      return Promise.resolve({
        album: 'music for airports',
      });
    }
    return Promise.resolve({
      album: 'kind of blue',
    });
  }
  function getArtist(album) {
    return Promise.resolve({
      artist: 'Brian Eno',
    });
  }

// START: call
async function getTheme() {
  const { theme } = await getUserPreferences();
  return theme;
}
// END: call

// START: theme
getTheme()
  .then(theme => {
    console.log(theme);
  });
// END: theme

// START:artist
async function getArtistByPreference() {
  const { theme } = await getUserPreferences();
  const { album } = await getMusic(theme);
  const { artist } = await getArtist(album);
  return artist;
}

getArtistByPreference()
  .then(artist => {
    console.log(artist);
  });
// END:artist