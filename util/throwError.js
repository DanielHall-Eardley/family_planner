const throwError = (error, status) => {
  const newError = new Error(error);
  newError.status = status
  throw newError
}

module.exports = throwError