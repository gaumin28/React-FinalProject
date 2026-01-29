import eminemSongs from "./eminemSongs";
import newReleaseData from "./newReleaseSong";
import songList from "./songList";
import moodPlaylist from "./moodPlaylist";
import popularArtists from "./popularArtist";
import weeklyData from "./weeklyData";
import genreSongs from "./genreSongs";
import newAlbum from "./newAlbum";

export const allSongs = [
  ...songList,
  ...moodPlaylist.flatMap((playlist) => playlist.songs),
  ...newReleaseData,
  ...popularArtists.flatMap((artist) => artist.songs),
  ...weeklyData,
  ...eminemSongs,
  ...genreSongs.flatMap((genre) => genre.songs),
  ...newAlbum.flatMap((album) => album.songs),
];

export const getSongById = (id) => {
  return allSongs.find((song) => song.id === id);
};

export const getSongsByIds = (ids) => {
  return ids.map((id) => getSongById(id)).filter((song) => song !== undefined);
};

export const isSongExists = (id) => {
  return allSongs.some((song) => song.id === id);
};

export default allSongs;
