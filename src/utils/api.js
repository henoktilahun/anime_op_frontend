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

//get anime themes by id
function getAnimeThemesById(id) {
  return fetch(
    `${baseUrl}/animetheme/${id}?include=anime,anime.images,song,song.artists,animethemeentries.videos`
  ).then(checkResponse);
}

//get anime themese by anime name, for search
function getAnimeThemesByAnimeName(animeName, page) {
  return fetch(
    `${baseUrl}/animetheme?q=${animeName}&include=anime,anime.images,song,song.artists,animethemeentries.videos&page[number]=${page}`
  ).then(checkResponse);
}

//get anime themes by video id, for video
function getAnimeThemesSongByVideoId(videoId) {
  return fetch(
    `${baseUrl}/video?include=animethemeentries.animetheme&filter[id]=${videoId}`
  ).then(checkResponse);
}

//get aniem themes by song file name, for media player
function getAnimeThemesSongByFileName(fileName) {
  return fetch(
    `${baseUrl}/video?include=audio&filter[filename]=${fileName}`
  ).then(checkResponse);
}

export {
  getAnimeThemes,
  getAnimeThemesById,
  getAnimeThemesByAnimeName,
  getAnimeThemesSongByVideoId,
  getAnimeThemesSongByFileName,
};
