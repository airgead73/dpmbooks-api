const { Router } = require('express');
const itemsRouter = Router();

// controller
const { read, readOne, create, update, remove } = require('./items.controllers');

// routes
itemsRouter.route('/').get(read).post(create);
itemsRouter.route('/:id').get(readOne).put(update).delete(remove);

// export
module.exports = {
  itemsRouter
}