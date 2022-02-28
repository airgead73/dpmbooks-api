const Author = require('./author');
const { create, read, readOne, update, remove } = require('./authors.controllers');
const { authorsRouter } = require('./authors.routes');

module.exports = {
  Author,
  create,
  read,
  readOne,
  update,
  remove,
  authorsRouter
}