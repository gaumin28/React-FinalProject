import eminemSongs from "./eminemSongs";
import newReleaseData from "./newReleaseSong";
import songList from "./songList";

// Combine all songs and assign sequential unique IDs
const combinedSongs = [...eminemSongs, ...newReleaseData, ...songList];
export const allSongs = combinedSongs.map((song, index) => ({
  ...song,
  uniqueId: index + 1, // Simple sequential ID: 1, 2, 3, ...
}));

// Function to get a song by unique ID
export const getSongById = (uniqueId) => {
  return allSongs.find((song) => song.uniqueId === uniqueId);
};

// Function to get multiple songs by IDs (for favorite songs)
export const getSongsByIds = (ids) => {
  return ids.map((id) => getSongById(id)).filter((song) => song !== undefined);
};

// Function to check if a song exists
export const isSongExists = (uniqueId) => {
  return allSongs.some((song) => song.uniqueId === uniqueId);
};

export default allSongs;
