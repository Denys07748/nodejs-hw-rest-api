const express = require('express');

const ctrl = require('../../controllers/contacts');

const { validateBody, isValidId } = require('../../middlevares');

const {
  contactSchemas: { schemas },
} = require('../../models');

const router = express.Router();

router.get('/', ctrl.getAll);

router.get('/:id', isValidId, ctrl.getById);

router.post(
  '/',
  validateBody(schemas.addSchema, 'missing required field'),
  ctrl.add
);

router.delete('/:id', isValidId, ctrl.deleteById);

router.put(
  '/:id',
  isValidId,
  validateBody(schemas.addSchema, 'missing fields'),
  ctrl.updateById
);

router.patch(
  '/:id/favorite',
  isValidId,
  validateBody(schemas.updateFavoriteSchema, 'missing field favorite'),
  ctrl.updateStatusContact
);

module.exports = router;
