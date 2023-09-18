const handelSaveError = (error, data, next) => {
  const { name, code } = error;
  error.status = name === 'MongoServerError' && code === 11000 ? 409 : 400;
  next();
};

const runValidators = function (next) {
  this.options.runValidators = true;
  next();
};
export default { handelSaveError, runValidators };
