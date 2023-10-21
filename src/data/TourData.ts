interface TourDate {
  venue: string;
  feat?: string;
  url?: string;
  date: Date;
}

const tourData: TourDate[] = [
  {
    venue: "The Burl",
    feat: "",
    url: "https://www.google.com/",
    date: new Date(2023, 10, 4),
  },
  {
    venue: "Fishtank",
    feat: "Jimmy the Drummer boi",
    url: "https://www.google.com/",
    date: new Date(2023, 10, 5),
  },
  {
    venue: "Your mom's house",
    feat: "",
    url: "https://www.google.com/",
    date: new Date(2023, 10, 6),
  },
  {
    venue: "The Burl",
    feat: "",
    url: "https://www.google.com/",
    date: new Date(2023, 10, 7),
  },
  {
    venue: "The Burl",
    feat: "",
    url: "https://www.google.com/",
    date: new Date(2023, 10, 8),
  },
];

export default tourData;
