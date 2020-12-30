const catchError = (controllerFn) => (req, res, next) => {
  try {
    controllerFn(req, res, next)
  } catch (error) {
    next(error)
  }
}

module.exports = catchError