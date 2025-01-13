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

// function getAnimeThemes() {
//   const { animeThemes } = fetch(
//     `${baseUrl}/animetheme?include=anime,anime.images`
//   ).then(checkResponse);

//   return animeThemes;
// }

export { getAnimeThemes };
