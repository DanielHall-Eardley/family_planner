const getLanding = async (req, res, next) => {
  try {
    const data = {
      host: require('../global.js').host,
      section: 'landing'
    }

    res.render('./landing/index.ejs', data)
  } catch(error) {
    next(error)
  }
}

module.exports = getLanding