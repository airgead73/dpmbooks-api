const { Router } = require('express');
const authorsRouter = Router();

// controller
const { read, readOne, create, update, remove } = require('./authors.controllers');

// routes
authorsRouter.route('/').get(read).post(create);
authorsRouter.route('/:id').get(readOne).put(update).delete(remove);

// export
module.exports = {
  authorsRouter
}