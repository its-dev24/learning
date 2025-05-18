const data = [
  {
    id: 1,
    title: "A Game of Thrones",
    author: "George R. R. Martin",
    genres: ["fantasy", "adventure", "political intrigue", "epic"],
    hasMovieAdaptation: false,
    pages: 694,
    translation: {
      spanish: "Juego de Tronos",
      chinese: "权力的游戏",
      french: "Le Trône de Fer",
    },
    reviews: {
      goodreads: {
        rating: 4.45,
        ratingCount: 2060500,
        reviewCount: 70000,
      },
      libraryThing: {
        rating: 4.29,
        ratingCount: 29000,
        reviewsCount: 1200,
      },
    },
  },
  {
    id: 2,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 1310,
    translation: {
      spanish: "El Hobbit",
      chinese: "霍比特人",
      french: "Bilbo le Hobbit",
    },
    reviews: {
      goodreads: {
        rating: 4.27,
        ratingCount: 3200000,
        reviewCount: 80000,
      },
      libraryThing: {
        rating: 4.25,
        ratingCount: 150000,
        reviewsCount: 5000,
      },
    },
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genres: ["classic", "historical", "drama"],
    hasMovieAdaptation: true,
    pages: 281,
    translation: {
      spanish: "Matar a un ruiseñor",
      chinese: "杀死一只知更鸟",
      french: "Ne tirez pas sur l'oiseau moqueur",
    },
    reviews: {
      goodreads: {
        rating: 4.28,
        ratingCount: 4500000,
        reviewCount: 100000,
      },
      libraryThing: {
        rating: 4.3,
        ratingCount: 200000,
        reviewsCount: 8000,
      },
    },
  },
  {
    id: 4,
    title: "1984",
    author: "George Orwell",
    genres: ["dystopian", "science fiction", "political fiction"],
    hasMovieAdaptation: true,
    pages: 328,
    translation: {
      spanish: "1984",
      chinese: "一九八四",
      french: "1984",
    },
    reviews: {
      goodreads: {
        rating: 4.18,
        ratingCount: 3500000,
        reviewCount: 75000,
      },
      libraryThing: {
        rating: 4.15,
        ratingCount: 180000,
        reviewsCount: 7000,
      },
    },
  },
  {
    id: 5,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genres: ["romance", "classic", "drama"],
    hasMovieAdaptation: true,
    pages: 279,
    translation: {
      spanish: "Orgullo y Prejuicio",
      chinese: "傲慢与偏见",
      french: "Orgueil et Préjugés",
    },
    reviews: {
      goodreads: {
        rating: 4.26,
        ratingCount: 3000000,
        reviewCount: 75000,
      },
      libraryThing: {
        rating: 4.2,
        ratingCount: 170000,
        reviewsCount: 6000,
      },
    },
  },
];

const getBooks = () => data;

const getBook = (id) => data.find((d) => d.id == id);

//Destucturing

const book = getBook(2);
const book2 = getBook(1);

// const title = book.title;
// const author = book.author;

const { title, author, pages, genres, hasMovieAdaptation } = book2;

console.log(title);
console.log(author);
console.log(genres);
console.log(hasMovieAdaptation);

const [primaryGenre, secondaryGenre, ...otherGenere] = genres;

console.log(primaryGenre);
console.log(secondaryGenre);
console.log(otherGenere);

const newGenres = [...genres, "epic fantasy"];
console.log(newGenres);

//objects
const updatedBook = {
  ...book,
  moviePublicationDate: "2001-12-19",
  pages: 2222,
};

console.log(updatedBook);

const summary = `${title} is a ${pages} page long book was written by ${author} in genre ${genres}. The book has ${
  hasMovieAdaptation ? "" : "no"
} Movie Adaptation`;
console.log(summary);

const res = pages > 1000 ? "over a thousand" : "less than 1000";

console.log(res);

const today = "2025-04-01";

// const getYear = (str) => str.split("-")[0];

const getYear = function (str) {
  return str.split("-")[0];
};
console.log(getYear(today));
