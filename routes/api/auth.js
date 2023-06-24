const express = require('express');

const ctrl = require('../../controllers/auth');

const { validateBody } = require('../../middlevares');

const {
  userSchemas: { schemas },
} = require('../../models');

const router = express.Router();

router.post('/register', validateBody(schemas.registerSchema), ctrl.register);

router.post('/login', validateBody(schemas.loginSchema), ctrl.login);

module.exports = router;
