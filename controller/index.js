const homePageController = async (req, res, next) => {
    try {
        res.render('home', {
            layout: false
        })
    } catch (error) {
        next(error)
    }
}

const mainPageController = async (req, res, next) => {
    try {
        res.render('main')
    } catch (error) {
        next(error)
    }
}

module.exports = {
    homePageController,
    mainPageController
}
