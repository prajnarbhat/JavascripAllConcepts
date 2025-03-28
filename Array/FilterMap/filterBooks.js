//Find Books Published After 2015 and Get Their Titles
// Filter books published after 2015 and get their titles.


const books = [
    { title: "Book A", year: 2010 },
    { title: "Book B", year: 2018 },
    { title: "Book C", year: 2022 }
];

const publishedbook = books.filter(book => book.year > 2015).map(
    item => (item.title)
);

console.log(publishedbook)
