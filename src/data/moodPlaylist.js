import SadSongs from "../image/Sad-song.png";
import ChillVibes from "../image/ChillVibes.jpg";
import HappyBeats from "../image/HappyBeats.jpg";
import Romantic from "../image/Romantic.jpg";
import Energy from "../image/Energy.jpg";
import Focus from "../image/Focus.jpg";

const moodPlaylist = [
  {
    id: 1,
    name: "Chill Vibes",
    description: "Relaxing music to unwind",
    image: ChillVibes,
  },
  {
    id: 2,
    name: "Happy Beats",
    description: "Uplifting songs to boost your mood",
    image: HappyBeats,
  },
  {
    id: 3,
    name: "Sad Songs",
    description: "Emotional tracks for reflective moments",
    image: SadSongs,
  },
  {
    id: 4,
    name: "Workout Energy",
    description: "High-energy tracks to pump you up",
    image: Energy,
  },
  {
    id: 5,
    name: "Romantic Night",
    description: "Smooth love songs for special moments",
    image: Romantic,
  },
  {
    id: 6,
    name: "Focus & Study",
    description: "Instrumental music to help you concentrate",
    image: Focus,
  },
];
export default moodPlaylist;
