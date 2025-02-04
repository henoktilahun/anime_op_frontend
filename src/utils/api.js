export const baseUrl = "https://api.animethemes.moe";

export function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

//get anime thems (openings and endings)
function getAnimeThemes(page) {
  return fetch(
    `${baseUrl}/animetheme?include=anime,anime.images,song,song.artists,animethemeentries.videos&page[number]=${page}`
  ).then(checkResponse);
}

//https://api.animethemes.moe/animetheme/18?include=anime,anime.images,song

function getAnimeThemesById(id) {
  return fetch(
    `${baseUrl}/animetheme/${id}?include=anime,anime.images,song,song.artists,animethemeentries.videos`
  ).then(checkResponse);
}

// function getAnimeThemesByAnimeName(animeName) {
//   return fetch(`${baseUrl}/anime?q=${animeName}&include=animethemes.song`).then(
//     checkResponse
//   );
// }

function getAnimeThemesByAnimeName(animeName, page) {
  return fetch(
    `${baseUrl}/animetheme?q=${animeName}&include=anime,anime.images,song,song.artists,animethemeentries.videos&page[number]=${page}`
  ).then(checkResponse);
}

function getAnimeThemesSong(animeId) {
  return fetch;
}

export { getAnimeThemes, getAnimeThemesById, getAnimeThemesByAnimeName };
