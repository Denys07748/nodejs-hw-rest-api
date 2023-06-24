const express = require('express');

const ctrl = require('../../controllers/contacts');

const { validateBody, isValidId, authenticate } = require('../../middlevares');

const {
  contactSchemas: { schemas },
} = require('../../models');

const router = express.Router();

router.get('/', authenticate, ctrl.getAll);

router.get('/:id', authenticate, isValidId, ctrl.getById);

router.post(
  '/',
  authenticate,
  validateBody(schemas.addSchema, 'missing required field'),
  ctrl.add
);

router.delete('/:id', authenticate, isValidId, ctrl.deleteById);

router.put(
  '/:id',
  authenticate,
  isValidId,
  validateBody(schemas.addSchema, 'missing fields'),
  ctrl.updateById
);

router.patch(
  '/:id/favorite',
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema, 'missing field favorite'),
  ctrl.updateStatusContact
);

module.exports = router;
