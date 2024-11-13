import Image500 from "../assets/500.png";
import Image240 from "../assets/240.png";
import Image104 from "../assets/104.png";
import Image84 from "../assets/84.png";
import Image82 from "../assets/82.png";
import Image78 from "../assets/78.png";
import Image69 from "../assets/69.png";
import Image68 from "../assets/68.png";
import Image47 from "../assets/47.png";
import Image33 from "../assets/33.png";
import Image22 from "../assets/22.png";
import Image20 from "../assets/20.png";
import Image11 from "../assets/11.png";
import Image0 from "../assets/0.png";

export default interface damageData {
  image: string;
  word: string;
  weapon: string;
  hitLocation: string;
  wentThrough: string[];
}

export const damageDataCollection: damageData[] = [
  {
    image: Image78,
    word: "078",
    weapon: "AWP",
    hitLocation: "Shoulder",
    wentThrough: ["Dust 2 double door"],
  },
  {
    image: Image104,
    word: "104",
    weapon: "AK-47",
    hitLocation: "Head",
    wentThrough: ["Dust 2 mid pole"],
  },
  {
    image: Image82,
    word: "082",
    weapon: "AWP",
    hitLocation: "Leg",
    wentThrough: ["Nothing"],
  },
  {
    image: Image84,
    word: "84",
    weapon: "SSG 08",
    hitLocation: "Side belly",
    wentThrough: ["Mirage apartment window"],
  },
  {
    image: Image33,
    word: "033",
    weapon: "Dual Berettas",
    hitLocation: "Shoulder",
    wentThrough: ["Nothing"],
  },
  {
    image: Image11,
    word: "011",
    weapon: "AK-47",
    hitLocation: "Head",
    wentThrough: ["Dust 2 B Door", "Door Handle"],
  },
  {
    image: Image20,
    word: "020",
    weapon: "AUG",
    hitLocation: "Leg",
    wentThrough: ["Nothing"],
  },
  {
    image: Image500,
    word: "500",
    weapon: "Zeus x27",
    hitLocation: "Everywhere",
    wentThrough: ["Nothing"],
  },
  {
    image: Image240,
    word: "240",
    weapon: "AWP",
    hitLocation: "Head",
    wentThrough: ["Dust 2 Long Door", "Another Door"],
  },
  {
    image: Image69,
    word: "069",
    weapon: "MP9",
    hitLocation: "Head",
    wentThrough: ["Mirage Kitchen Window", "Wood"],
  },
  {
    image: Image47,
    word: "047",
    weapon: "Frag Grenade",
    hitLocation: "Everywhere",
    wentThrough: ["Nothing"],
  },
  {
    image: Image0,
    word: "000",
    weapon: "AWP",
    hitLocation: "",
    wentThrough: ["Dust 2 Ramp Sandbag"],
  },
  {
    image: Image22,
    word: "022",
    weapon: "MP9",
    hitLocation: "Back",
    wentThrough: ["Nothing"],
  },
  {
    image: Image68,
    word: "068",
    weapon: "XM1014",
    hitLocation: "Belly",
    wentThrough: ["Mirage Palace Pillars (2 Bullets)"],
  },
];
