const books = [
  {
    id: 0,
    title: "The Alchemist",
    year: 1993,
    genre: "Fantasy Fiction",
    author: "Paulo Coelho",
    poster:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg",
  },

  {
    id: 1,
    title: "The Four Agreements",
    year: 1997,
    genre: "Personal Development",
    author: "Don Miguel Ruiz",
    poster:
      "https://assets.chegg.com/rqm/image/upload/f_auto,q_auto,t_imgWidth288/covers/9781878424310.jpg",
  },
  {
    id: 2,
    title: "The 48 Laws of Power",
    year: 2000,
    genre: "Personal Development",
    author: 'Robert Greene',
    poster:
      "https://assets.chegg.com/rqm/image/upload/f_auto,q_auto,t_imgWidth288/covers/9780140280197.jpg",
  },
  {
    id: 3,
    title: "Rich Dad Poor Dad",
    year: 1997,
    genre: "Non Fiction",
    author: 'Robert Kiyosaki',
    poster:
      "https://incisivebooktakeaways.com/wp-content/uploads/2020/06/Rich-dad-poor-day-Robert-Kiyosaki-summary.png",
  },
  {
    id: 4,
    title: "Junie B. Jones",
    year: 1992,
    genre: "Fiction",
    author: "Barbara Park",
    poster:
      "https://media1.popsugar-assets.com/files/thumbor/7VZTMqUw2ibV_zpsUY7m-dTvdlQ/fit-in/1200x630/filters:format_auto-!!-:strip_icc-!!-:fill-!white!-/2014/05/12/171/n/24155406/d70f303049682357_junie-b-jones/i/Junie-B-Jones-Stupid-Smelly-Bus.jpg",
  },
  {
    id: 5,
    title: "Miss Nelson Is Missing",
    year: 1977,
    genre: "Fiction",
    author: "Harry Allard",
    poster:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546976385i/147732.jpg",
  },
  {
    id: 6,
    title: "Old Man On The Sea",
    year: 1952,
    genre: "Fiction",
    author: "Ernest Hemingway",
    poster:
      "https://www.booksoftitans.com/wp-content/uploads/2017/01/the-old-man-and-the-sea.jpg",
  },
  {
    id: 7,
    title: "BEST OF POE",
    year: 2008,
    genre: "Fiction",
    author: "Edgar Allen Poe",
    poster:
      "https://m.media-amazon.com/images/I/71JUYK95l3L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 8,
    title: "Seabiscuit",
    year: 2002,
    genre: "Non-Fiction",
    author: "Laura Hillenbrand",
    poster:
      "https://img.thriftbooks.com/api/images/m/d2e240034ab88281e5668b76923139b5029b435f.jpg",
  },
  {
    id: 9,
    title: "A Bad Case of Stripes",
    year: 2004,
    genre: "Fiction",
    author: "David Shannon",
    poster:
      "https://3.bp.blogspot.com/-uX3n3xIWi-c/WFTwZ2wQoMI/AAAAAAAAB6I/uKY8HJH3QcsqGn13HwQ6HHK-7vCoW6dwACLcB/s1600/A-Bad-Case-of-Stripes.jpg",
  },
  {
    id: 10,
    title: "How To Kill A MockingBird",
    year: 1960,
    genre: "Fiction",
    author: "Harper Lee",
    poster:
      "https://www.dramaticpublishing.com/media/catalog/product/cache/1/image/300x436/9df78eab33525d08d6e5fb8d27136e95/t/o/to_kill_a_mockingbird_cover-t34.jpg",
  },
  {
    id: 11,
    title: "The Hunger Games",
    year: 2008,
    genre: "Thriller",
    author: "Suzanne Collins",
    poster:
      "https://target.scene7.com/is/image/Target/GUEST_af874264-b6ec-4696-8d80-1966a31d6c4f?wid=488&hei=488&fmt=pjpeg",
  },
  {
    id: 12,
    title: "I Am Number 8",
    year: 2017,
    genre: "Autobiography",
    author: "John W. Gray III",
    poster:
      "https://m.media-amazon.com/images/I/71Jk4+-vj8L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 13,
    title: "The Secret",
    year: 2006,
    genre: "Self Help",
    author: "Rhonda Byrne",
    poster:
      "https://cdn11.bigcommerce.com/s-igquupw3/images/stencil/500x500/products/1418331/34105731/9781582701707__01383.1680884743.jpg?c=2",
  },
  {
    id: 14,
    title: "The Story Of The Three Little Pigs",
    year: 1996,
    genre: "Fairy tale",
    author: "Jon Scieszka",
    poster: "https://pictures.abebooks.com/isbn/9780590454957-us.jpg",
  },
  {
    id: 15,
    title: "The Rainbow Fish",
    year: 1992,
    genre: "Fiction",
    author: "Marcus Pfister",
    poster:
      "https://librariannikki.files.wordpress.com/2015/04/rainbowfish.jpg",
  },
  {
    id: 16,
    title: "There Was An Old Lady Who Swallowed A Fly",
    year: 1997,
    genre: "Childrens",
    author: "Simms Taback",
    poster:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1172674507i/205330.jpg",
  },
  {
    id: 17,
    title: "In a Dark, Dark Room and Other Scary Stories",
    year: 1985,
    genre: "Fairy tale",
    author: "ALVIN SCHWARTZ",
    poster:
      "https://m.media-amazon.com/images/I/A1nTRQ271hL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 18,
    title: "When Breath Becomes Air",
    year: 2016,
    genre: "Biography",
    author: "Paul Kalanithi",
    poster:
      "https://img1.od-cdn.com/ImageType-100/0111-1/%7B3BF555E1-8C58-4685-8224-9C4BCD1270D0%7DImg100.jpg",
  },
  {
    id: 19,
    title: "How to Talk to Anyone: 92 Little Tricks",
    year: 1999,
    genre: "Self help",
    author: "Leil Lowndes",
    poster:
      "https://images.squarespace-cdn.com/content/v1/5f0d8a56cc539e10374feb99/972c5da7-a186-47d3-a722-b2dccdbc0c93/47_20210913_103520_0046-2.png",
  },
  {
    id: 20,
    title: "Concise Art of Seduction",
    year: 2001,
    genre: "Self Help",
    author: "Robert Greene",
    poster: "https://m.media-amazon.com/images/I/31mxz5A8bTL._SL350_.jpg",
  },
  {
    id: 21,
    title: "The Essential Law of Attraction Collection",
    year: 2015,
    genre: "Self Help",
    author: "Jerry Hicks, Esther Hicks",
    poster:
      "https://media.hayhouse.com/media/catalog/product/cache/745d7176530fbff1db13685a40017fcc/9/7/9781401950040_500h_1_1.jpg",
  },
  {
    id: 22,
    title: "The Intelligent Investor",
    year: 1949,
    genre: "Investing",
    author: "Benjamin Graham",
    poster:
      "https://img.thriftbooks.com/api/images/i/m/E588A8BBB7412CD61CA962CDEE3B4AB846089C0D.jpg",
  },
  {
    id: 23,
    title: "IT'S ALL IN YOUR HEAD",
    year: 2019,
    genre: "Biography",
    author: "Russ",
    poster:
      "https://cdn11.bigcommerce.com/s-igquupw3/images/stencil/500x500/products/1083279/34067361/9780062962430__36100.1680812285.jpg?c=2",
  },
  {
    id: 24,
    title: "The Power of Now",
    year: 1997,
    genre: "Self Help",
    author: "Eckhart Tolle",
    poster:
      "https://myjestik.blog/wp-content/uploads/2022/08/the-power-of-now-1.jpeg",
  },
  {
    id: 25,
    title: "Oh, Baby, the Places You'll Go!",
    year: 2015,
    genre: "Fiction",
    author: "Tish Rabe",
    poster:
      "http://prodimage.images-bn.com/pimages/9780553520583_p0_v2_s1200x630.jpg",
  },
  {
    id: 26,
    title: "Cat In The Hat",
    year: 1957,
    genre: "Fiction",
    author: "Dr. Seuss",
    poster:
      "https://www.sonlight.com/media/catalog/product/S/-/S-1R06.jpg?quality=80&fit=bounds&height=265&width=265&canvas=265:265",
  },
];

export default books;
