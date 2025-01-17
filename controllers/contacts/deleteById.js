const {
  contactSchemas: { Contact },
} = require('../../models');

const { HttpError } = require('../../helpers');

const deleteById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndRemove(id);
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json({ message: 'contact deleted' });
};

module.exports = deleteById;
