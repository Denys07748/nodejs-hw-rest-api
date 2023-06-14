const express = require('express');

const ctrl = require('../../controllers/contacts');

const { validateBody } = require('../../middlevares');

const schemas = require('../../schemas/contacts');

const router = express.Router();

router.get('/', ctrl.getAll);

router.get('/:id', ctrl.getById);

router.post(
  '/',
  validateBody(schemas.addSchema, 'missing required name field'),
  ctrl.add
);

router.delete('/:id', ctrl.deleteById);

router.put(
  '/:id',
  validateBody(schemas.addSchema, 'missing fields'),
  ctrl.updateById
);

module.exports = router;
