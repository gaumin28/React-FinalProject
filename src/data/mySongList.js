// Import all song data sources
import songList from "./songList";
import moodPlaylist from "./moodPlaylist";
import newReleaseData from "./newReleaseSong";
import popularArtists from "./popularArtist";
import weeklyData from "./weeklyData";
import eminemSongs from "./eminemSongs";
import genreSongs from "./genreSongs";
import newAlbum from "./newAlbum";

const mySongList = [
  ...songList,
  ...moodPlaylist.flatMap((playlist) => playlist.songs),
  ...newReleaseData,
  ...popularArtists.flatMap((artist) => artist.songs),
  ...weeklyData,
  ...eminemSongs,
  ...genreSongs.flatMap((genre) => genre.songs),
  ...newAlbum.flatMap((album) => album.songs),
];

export default mySongList;
