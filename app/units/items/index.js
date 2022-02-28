const Item = require('./item');
const { create, read, readOne, update, remove } = require('./items.controllers');
const { itemsRouter } = require('./items.routes');

module.exports = {
  Item,
  create,
  read,
  readOne,
  update,
  remove,
  itemsRouter
}