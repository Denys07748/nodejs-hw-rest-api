const { HttpError } = require('../helpers');

const validateBody = (schema, errorMessage) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      throw HttpError(400, errorMessage);
    }
    next();
  };
};

module.exports = validateBody;
