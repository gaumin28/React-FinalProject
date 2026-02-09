import RapTrack from "../image/RapTrack.png";
import PopTrack from "../image/PopTrack.png";
import RockTrack from "../image/RockTrack.png";
import ClassicTrack from "../image/ClassicTrack.png";

import LoseYourself from "../image/Lose_Yourself.jpg";
import RapGod from "../image/RapGod.png";
import Stan from "../image/Stan.jpg";
import Mockingbird from "../image/Mockingbird.jpg";
import NotAfraid from "../image/NotAfraid.jpg";
import TheRealSlimShady from "../image/TheRealSlimShady.jpg";
import Revival from "../image/Revival.png";
import Encore from "../image/Encore.jpg";
import TheEminemShow from "../image/TheEminemShow.jpg";
import Relapse from "../image/Relapse.jpg";

import BlankSpace from "../image/BlankSpace.png";
import LoveStory from "../image/Love_Story.png";
import ShakeItOff from "../image/ShakeItOff.jpg";
import Style from "../image/Style.png";
import Lover from "../image/Lover.png";
import Midnights from "../image/Midnights.png";
import Attention from "../image/Attention.png";
import SomeTypeOfLove from "../image/SomeTypeofLove.jpg";
import Baby from "../image/Baby.jpg";
import OceanEyes from "../image/Ocean_Eyes.png";

import WhateverItTakes from "../image/WhateverItTakes.png";
import TheNeighbourhood from "../image/TheNeighbourhood.png";
import Empire from "../image/Empire.jpg";
import Energy from "../image/Energy.jpg";
import EndOfBeginning from "../image/EndOfBeginning.jpg";
import Romantic from "../image/Romantic.jpg";
import Mutt from "../image/Mutt.jpg";
import Opalite from "../image/Opalite.jpg";
import RoseApt from "../image/rose-apt.jpg";
import TheOttoTunes from "../image/TheOttoTunes.png";

import LetItBe from "../image/LetItBe.jpg";
import HowDeepIsYourLove from "../image/HowDeepIsYourLove.jpg";
import SomeoneLikeYou from "../image/Someone_Like_You.png";
import Skyfall from "../image/Skyfall.png";
import RollingInTheDeep from "../image/Rolling_in_the_Deep.png";
import TurningTables from "../image/TurningTables.jpg";
import WhenWeWereYoung from "../image/WhenWeWereYoung.jpg";
import SetFireToTheRain from "../image/Set_Fire_to_the_Rain.png";
import LiveRoyalAlbertHall from "../image/LiveattheRoyalAlbertHall.jpg";
import OneAndOnly from "../image/OneandOnly.jpg";

const genreSongs = [
  {
    id: 1,
    name: "Rap",
    image: RapTrack,
    songs: [
      {
        id: 10100,
        name: "Lose Yourself",
        image: LoseYourself,
        audio: "/audio/LoseYourself.mp3",
        duration: "3:52",
        artist: "Eminem",
      },
      {
        id: 10200,
        name: "Rap God",
        image: RapGod,
        audio: "/audio/RapGod.mp3",
        duration: "6:03",
        artist: "Eminem",
      },
      {
        id: 10300,
        name: "Stan",
        image: Stan,
        audio: "/audio/Stan.mp3",
        duration: "4:32",
        artist: "Eminem",
      },
      {
        id: 10400,
        name: "Mockingbird",
        image: Mockingbird,
        audio: "/audio/Mockingbird.mp3",
        duration: "4:10",
        artist: "Eminem",
      },
      {
        id: 1050000,
        name: "Not Afraid",
        image: NotAfraid,
        audio: "/audio/NotAfraid.mp3",
        duration: "4:08",
        artist: "Eminem",
      },
      {
        id: 10600,
        name: "The Real Slim Shady",
        image: TheRealSlimShady,
        audio: "/audio/TheRealSlimShady.mp3",
        duration: "4:29",
        artist: "Eminem",
      },
      {
        id: 10700,
        name: "Revival",
        image: Revival,
        audio: "/audio/Revival.mp3",
        duration: "4:02",
        artist: "Eminem",
      },
      {
        id: 10800,
        name: "Encore",
        image: Encore,
        audio: "/audio/Encore.mp3",
        duration: "3:49",
        artist: "Eminem",
      },
      {
        id: 10900,
        name: "The Eminem Show",
        image: TheEminemShow,
        audio: "/audio/TheEminemShow.mp3",
        duration: "3:57",
        artist: "Eminem",
      },
      {
        id: 11000,
        name: "Relapse",
        image: Relapse,
        audio: "/audio/Relapse.mp3",
        duration: "4:05",
        artist: "Eminem",
      },
    ],
  },
  {
    id: 2,
    name: "Pop",
    image: PopTrack,
    songs: [
      {
        id: 20100,
        name: "Blank Space",
        image: BlankSpace,
        audio: "/audio/BlankSpace.mp3",
        duration: "3:51",
        artist: "Taylor Swift",
      },
      {
        id: 20200,
        name: "Love Story",
        image: LoveStory,
        audio: "/audio/LoveStory.mp3",
        duration: "3:55",
        artist: "Taylor Swift",
      },
      {
        id: 20300,
        name: "Shake It Off",
        image: ShakeItOff,
        audio: "/audio/ShakeItOff.mp3",
        duration: "3:39",
        artist: "Taylor Swift",
      },
      {
        id: 20400,
        name: "Style",
        image: Style,
        audio: "/audio/Style.mp3",
        duration: "3:51",
        artist: "Taylor Swift",
      },
      {
        id: 20500,
        name: "Lover",
        image: Lover,
        audio: "/audio/Lover.mp3",
        duration: "3:41",
        artist: "Taylor Swift",
      },
      {
        id: 20600,
        name: "Midnights",
        image: Midnights,
        audio: "/audio/Midnights.mp3",
        duration: "3:33",
        artist: "Taylor Swift",
      },
      {
        id: 20700,
        name: "Attention",
        image: Attention,
        audio: "/audio/Attention.mp3",
        duration: "3:28",
        artist: "Charlie Puth",
      },
      {
        id: 20800,
        name: "Some Type Of Love",
        image: SomeTypeOfLove,
        audio: "/audio/SomeTypeOfLove.mp3",
        duration: "2:58",
        artist: "Charlie Puth",
      },
      {
        id: 20900,
        name: "Baby",
        image: Baby,
        audio: "/audio/Baby.mp3",
        duration: "3:34",
        artist: "Justin Bieber",
      },
      {
        id: 21000,
        name: "Ocean Eyes",
        image: OceanEyes,
        audio: "/audio/OceanEyes.mp3",
        duration: "3:20",
        artist: "Billie Eilish",
      },
    ],
  },
  {
    id: 3,
    name: "Rock",
    image: RockTrack,
    songs: [
      {
        id: 30100,
        name: "Whatever It Takes",
        image: WhateverItTakes,
        audio: "/audio/WhateverItTakes.mp3",
        duration: "3:40",
        artist: "Imagine Dragons",
      },
      {
        id: 30200,
        name: "The Neighbourhood",
        image: TheNeighbourhood,
        audio: "/audio/TheNeighbourhood.mp3",
        duration: "3:28",
        artist: "The Neighbourhood",
      },
      {
        id: 30300,
        name: "Empire",
        image: Empire,
        audio: "/audio/Empire.mp3",
        duration: "3:57",
        artist: "Of Monsters and Men",
      },
      {
        id: 30400,
        name: "Energy",
        image: Energy,
        audio: "/audio/Energy.mp3",
        duration: "3:31",
        artist: "Drake",
      },
      {
        id: 30500,
        name: "End Of Beginning",
        image: EndOfBeginning,
        audio: "/audio/EndOfBeginning.mp3",
        duration: "3:50",
        artist: "Djo",
      },
      {
        id: 30600,
        name: "Romantic",
        image: Romantic,
        audio: "/audio/Romantic.mp3",
        duration: "3:29",
        artist: "Halsey",
      },
      {
        id: 30700,
        name: "Mutt",
        image: Mutt,
        audio: "/audio/Mutt.mp3",
        duration: "3:12",
        artist: "Leon Thomas",
      },
      {
        id: 30800,
        name: "Opalite",
        image: Opalite,
        audio: "/audio/Opalite.mp3",
        duration: "3:44",
        artist: "Taylor Swift",
      },
      {
        id: 30900,
        name: "Apt.",
        image: RoseApt,
        audio: "/audio/Apt.mp3",
        duration: "3:21",
        artist: "Rose",
      },
      {
        id: 31000,
        name: "The Otto Tunes",
        image: TheOttoTunes,
        audio: "/audio/TheOttoTunes.mp3",
        duration: "3:33",
        artist: "Bruno Major",
        // none
      },
    ],
  },
  {
    id: 4,
    name: "Classic",
    image: ClassicTrack,
    songs: [
      {
        id: 40100,
        name: "Let It Be",
        image: LetItBe,
        audio: "/audio/LetItBe.mp3",
        duration: "4:03",
        artist: "The Beatles",
      },
      {
        id: 40200,
        name: "How Deep Is Your Love",
        image: HowDeepIsYourLove,
        audio: "/audio/HowDeepIsYourLove.mp3",
        duration: "4:04",
        artist: "Bee Gees",
      },
      {
        id: 40300,
        name: "Someone Like You",
        image: SomeoneLikeYou,
        audio: "/audio/SomeoneLikeYou.mp3",
        duration: "4:45",
        artist: "Adele",
      },
      {
        id: 40400,
        name: "Skyfall",
        image: Skyfall,
        audio: "/audio/Skyfall.mp3",
        duration: "4:46",
        artist: "Adele",
      },
      {
        id: 40500,
        name: "Rolling In The Deep",
        image: RollingInTheDeep,
        audio: "/audio/RollingInTheDeep.mp3",
        duration: "3:49",
        artist: "Adele",
      },
      {
        id: 40600,
        name: "Turning Tables",
        image: TurningTables,
        audio: "/audio/TurningTables.mp3",
        duration: "4:06",
        artist: "Adele",
      },
      {
        id: 40700,
        name: "When We Were Young",
        image: WhenWeWereYoung,
        audio: "/audio/WhenWeWereYoung.mp3",
        duration: "4:50",
        artist: "Adele",
      },
      {
        id: 40800,
        name: "Set Fire To The Rain",
        image: SetFireToTheRain,
        audio: "/audio/SetFireToTheRain.mp3",
        duration: "4:01",
        artist: "Adele",
      },
      {
        id: 40900,
        name: "Live at the Royal Albert Hall",
        image: LiveRoyalAlbertHall,
        audio: "/audio/SomeoneLikeYou.mp3",
        duration: "5:10",
        artist: "Adele",
        // someone like you
      },
      {
        id: 41000,
        name: "One And Only",
        image: OneAndOnly,
        audio: "/audio/OneAndOnly.mp3",
        duration: "5:00",
        artist: "Adele",
      },
    ],
  },
];

export default genreSongs;
