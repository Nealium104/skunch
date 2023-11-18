interface Albums {
  name: string;
  year: string;
  tracklist: string[];
  img: string;
  width: number;
  height: number;
}

const Albums: Albums[] = [
  {
    name: "The Fall of Skunch",
    year: "2023",
    tracklist: [
      "Comfortable Silence",
      "Castle",
      "Left Out Of Love",
      "Nick's House",
    ],
    img: "https://res.cloudinary.com/dwbwyzsyp/image/upload/v1697907594/daric_vwb3os.jpg",
    width: 1358,
    height: 1698,
  },
  {
    name: "The Summer of Skunch",
    year: "2023",
    tracklist: [
      "Can't Skate",
      "Turning Yr Back",
      "See the Sun",
      "Nick's House",
      "Can't Skate (Reprise)",
      "Five Summers, Pt. 1",
    ],
    img: "https://res.cloudinary.com/dwbwyzsyp/image/upload/v1697907594/alex_nwcdpd.jpg",
    width: 1440,
    height: 1800,
  },
  {
    name: "Skunch",
    year: "2019",
    tracklist: [
      "Not Worth Paying",
      "Peninsula Blues",
      "Old East Erie",
      "Enough",
      "Comfortable Silence",
      "Meet You There",
      "Desire Lines",
    ],
    img: "string",
    width: 2018,
    height: 203929,
  },
];

export default Albums;
