/**
 * Song Utils
 * Central collection of all songs from various data sources
 * Provides utility functions to search and retrieve songs by ID
 */

// Import all song data sources
import eminemSongs from "./eminemSongs";
import newReleaseData from "./newReleaseSong";
import songList from "./songList";
import moodPlaylist from "./moodPlaylist";
import popularArtists from "./popularArtist";
import weeklyData from "./weeklyData";
import genreSongs from "./genreSongs";

/**
 * Combined array of ALL songs from all data sources
 * Uses original song IDs (no uniqueId needed - each song has its own id)
 * Used for favorites lookup and song searching
 */
export const allSongs = [
  ...songList,
  ...moodPlaylist.flatMap((playlist) => playlist.songs),
  ...newReleaseData,
  ...popularArtists.flatMap((artist) => artist.songs),
  ...weeklyData,
  ...eminemSongs,
  ...genreSongs.flatMap((genre) => genre.songs),
];

/**
 * Get a single song by its original ID
 * @param {number} id - The song's unique identifier
 * @returns {Object|undefined} Song object if found, undefined otherwise
 */
export const getSongById = (id) => {
  return allSongs.find((song) => song.id === id);
};

/**
 * Get multiple songs by their IDs
 * Useful for retrieving favorite songs from localStorage
 * @param {Array<number>} ids - Array of song IDs to retrieve
 * @returns {Array<Object>} Array of song objects (undefined values filtered out)
 */
export const getSongsByIds = (ids) => {
  return ids.map((id) => getSongById(id)).filter((song) => song !== undefined);
};

/**
 * Check if a song exists in the collection
 * @param {number} id - The song ID to check
 * @returns {boolean} True if song exists, false otherwise
 */
export const isSongExists = (id) => {
  return allSongs.some((song) => song.id === id);
};

export default allSongs;
