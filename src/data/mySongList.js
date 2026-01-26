// Import all song data sources
import songList from "./songList";
import moodPlaylist from "./moodPlaylist";
import newReleaseData from "./newReleaseSong";
import popularArtists from "./popularArtist";
import weekylyData from "./weeklyData";
import eminemSongs from "./eminemSongs";
import genreSongs from "./genreSongs";

const mySongList = [
  ...songList,
  ...moodPlaylist.flatMap((playlist) => playlist.songs),
  ...newReleaseData,
  ...popularArtists.flatMap((artist) => artist.songs),
  ...weekylyData,
  ...eminemSongs,
  ...genreSongs.flatMap((genre) => genre.songs),
];

export default mySongList;
