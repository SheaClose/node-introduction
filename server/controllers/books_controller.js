const books = [{ id: 0, title: 'Horry Patter', author: 'JK Dawging' }];

module.exports = {
  read(req, res) {
    return res.json(books);
  },
  create(req, res) {
    const { title, author } = req.body;
    if ((title, author)) {
      const newBook = {
        title,
        author,
        id: books[books.length - 1].id + 1
      };
      books.push(newBook);
      return res.json(books);
    }
    return res.status(500).json(books);
  },
  update(req, res) {
    const { id } = req.params;
    const bookToUpdate = books.find(c => c.id == +id);
    Object.assign(bookToUpdate, req.body);
    return res.json(books);
  },
  remove(req, res) {
    const { id } = req.params;
    const index = books.reduce((a, c, i) => {
      return c.id == id ? i : a;
    }, null);
    if (index) {
      return res.json(books.splice(index, 1));
    }
    return res.status(500).json(books);
  }
};
