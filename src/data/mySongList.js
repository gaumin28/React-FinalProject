import songList from "./songList";
import moodPlaylist from "./moodPlaylist";
import newReleaseData from "./newReleaseSong";
import popularArtists from "./popularArtist";
import weekylyData from "./weeklyData";

const mySongList = [
  ...songList,
  ...moodPlaylist.flatMap((playlist) => playlist.songs),
  ...newReleaseData,
  ...popularArtists.flatMap((artist) => artist.songs),
  ...weekylyData,
];

export default mySongList;
