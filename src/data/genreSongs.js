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
        id: 101,
        name: "Lose Yourself",
        image: LoseYourself,
        duration: "3:52",
        artist: "Eminem",
      },
      {
        id: 102,
        name: "Rap God",
        image: RapGod,
        duration: "6:03",
        artist: "Eminem",
      },
      {
        id: 103,
        name: "Stan",
        image: Stan,
        duration: "4:32",
        artist: "Eminem",
      },
      {
        id: 104,
        name: "Mockingbird",
        image: Mockingbird,
        duration: "4:10",
        artist: "Eminem",
      },
      {
        id: 105,
        name: "Not Afraid",
        image: NotAfraid,
        duration: "4:08",
        artist: "Eminem",
      },
      {
        id: 106,
        name: "The Real Slim Shady",
        image: TheRealSlimShady,
        duration: "4:29",
        artist: "Eminem",
      },
      {
        id: 107,
        name: "Revival",
        image: Revival,
        duration: "4:02",
        artist: "Eminem",
      },
      {
        id: 108,
        name: "Encore",
        image: Encore,
        duration: "3:49",
        artist: "Eminem",
      },
      {
        id: 109,
        name: "The Eminem Show",
        image: TheEminemShow,
        duration: "3:57",
        artist: "Eminem",
      },
      {
        id: 110,
        name: "Relapse",
        image: Relapse,
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
        id: 201,
        name: "Blank Space",
        image: BlankSpace,
        duration: "3:51",
        artist: "Taylor Swift",
      },
      {
        id: 202,
        name: "Love Story",
        image: LoveStory,
        duration: "3:55",
        artist: "Taylor Swift",
      },
      {
        id: 203,
        name: "Shake It Off",
        image: ShakeItOff,
        duration: "3:39",
        artist: "Taylor Swift",
      },
      {
        id: 204,
        name: "Style",
        image: Style,
        duration: "3:51",
        artist: "Taylor Swift",
      },
      {
        id: 205,
        name: "Lover",
        image: Lover,
        duration: "3:41",
        artist: "Taylor Swift",
      },
      {
        id: 206,
        name: "Midnights",
        image: Midnights,
        duration: "3:33",
        artist: "Taylor Swift",
      },
      {
        id: 207,
        name: "Attention",
        image: Attention,
        duration: "3:28",
        artist: "Charlie Puth",
      },
      {
        id: 208,
        name: "Some Type Of Love",
        image: SomeTypeOfLove,
        duration: "2:58",
        artist: "Charlie Puth",
      },
      {
        id: 209,
        name: "Baby",
        image: Baby,
        duration: "3:34",
        artist: "Justin Bieber",
      },
      {
        id: 210,
        name: "Ocean Eyes",
        image: OceanEyes,
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
        id: 301,
        name: "Whatever It Takes",
        image: WhateverItTakes,
        duration: "3:40",
        artist: "Imagine Dragons",
      },
      {
        id: 302,
        name: "The Neighbourhood",
        image: TheNeighbourhood,
        duration: "3:28",
        artist: "The Neighbourhood",
      },
      {
        id: 303,
        name: "Empire",
        image: Empire,
        duration: "3:57",
        artist: "Of Monsters and Men",
      },
      {
        id: 304,
        name: "Energy",
        image: Energy,
        duration: "3:31",
        artist: "Drake",
      },
      {
        id: 305,
        name: "End Of Beginning",
        image: EndOfBeginning,
        duration: "3:50",
        artist: "Djo",
      },
      {
        id: 306,
        name: "Romantic",
        image: Romantic,
        duration: "3:29",
        artist: "Halsey",
      },
      {
        id: 307,
        name: "Mutt",
        image: Mutt,
        duration: "3:12",
        artist: "blink-182",
      },
      {
        id: 308,
        name: "Opalite",
        image: Opalite,
        duration: "3:44",
        artist: "Novo Amor",
      },
      {
        id: 309,
        name: "Rose Apartment",
        image: RoseApt,
        duration: "3:21",
        artist: "Dayglow",
      },
      {
        id: 310,
        name: "The Otto Tunes",
        image: TheOttoTunes,
        duration: "3:33",
        artist: "Bruno Major",
      },
    ],
  },
  {
    id: 4,
    name: "Classic",
    image: ClassicTrack,
    songs: [
      {
        id: 401,
        name: "Let It Be",
        image: LetItBe,
        duration: "4:03",
        artist: "The Beatles",
      },
      {
        id: 402,
        name: "How Deep Is Your Love",
        image: HowDeepIsYourLove,
        duration: "4:04",
        artist: "Bee Gees",
      },
      {
        id: 403,
        name: "Someone Like You",
        image: SomeoneLikeYou,
        duration: "4:45",
        artist: "Adele",
      },
      {
        id: 404,
        name: "Skyfall",
        image: Skyfall,
        duration: "4:46",
        artist: "Adele",
      },
      {
        id: 405,
        name: "Rolling In The Deep",
        image: RollingInTheDeep,
        duration: "3:49",
        artist: "Adele",
      },
      {
        id: 406,
        name: "Turning Tables",
        image: TurningTables,
        duration: "4:06",
        artist: "Adele",
      },
      {
        id: 407,
        name: "When We Were Young",
        image: WhenWeWereYoung,
        duration: "4:50",
        artist: "Adele",
      },
      {
        id: 408,
        name: "Set Fire To The Rain",
        image: SetFireToTheRain,
        duration: "4:01",
        artist: "Adele",
      },
      {
        id: 409,
        name: "Live at the Royal Albert Hall",
        image: LiveRoyalAlbertHall,
        duration: "5:10",
        artist: "Adele",
      },
      {
        id: 410,
        name: "One And Only",
        image: OneAndOnly,
        duration: "5:00",
        artist: "Adele",
      },
    ],
  },
];

export default genreSongs;
