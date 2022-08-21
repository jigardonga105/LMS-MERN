const Books = require('../../models/book');

function homeController() {
    return {
        async allBooks(req, res) {
            let books = await Books.find();
            console.log(books);
            return res.json(books);
        },
        async addBook(req, res) {
            console.log("Adding new book request come");

            const { title, author, desc } = req.body;
            // console.log(title, author, desc);

            const book = new Books({
                title,
                author,
                desc
            })

            book.save()
            .then(book => {
                // console.log(book);
                return res.json(book);
            })
            .catch(err => {
                // console.log(err);
                return res.send("Server error: " + err);
            })
        }
    }
}

module.exports = homeController