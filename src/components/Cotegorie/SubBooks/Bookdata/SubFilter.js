import { englishBooks } from "./englishBooks";
import { ScienceBooks } from "./ScienceBooks";

export const SubFilter = [
  {
    path: "/Cotegorie/English",
    subject: "English",
    books: englishBooks,
  },
  {
    path: "/Cotegorie/Mathematics",
    subject: "Mathematics",
    books: null,
  },
  {
    path: "/Cotegorie/History",
    subject: "History",
    books: null,
  },
  {
    path: "/Cotegorie/Hindi",
    subject: "Hindi",
    books: null,
  },
  {
    path: "/Cotegorie/Geography",
    subject: "Geography",
    books: null,
  },
  {
    path: "/Cotegorie/Science",
    subject: "Science",
    books: ScienceBooks,
  },
];
