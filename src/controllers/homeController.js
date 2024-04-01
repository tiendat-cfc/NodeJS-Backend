const getHomepage = (req, res) => {
    //proces data
    //call model
    res.send('Hello Dat!, Welcome to my website')
}

const getABC = (req, res) => {
    res.send('check ABC')
}

const getDat = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage,
    getABC, 
    getDat
}