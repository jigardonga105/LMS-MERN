const homeController = require('../app/http/controllers/homeController')

function initRoutes(app) {
    app.get('/api/allBooks', homeController().allBooks)
    app.post('/api/addBook', homeController().addBook)
}

module.exports = initRoutes