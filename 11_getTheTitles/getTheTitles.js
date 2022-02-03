const getTheTitles = function(books) {

    // only want title portion of the sub-array

    const titles = books.map(book => book.title);
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
