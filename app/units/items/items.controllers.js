const asyncHandler = require('express-async-handler');
const Item = require('./item');

/**
 * @desc Create item
 * @route POST - /api/items
 * @access Private
 * */

 exports.create = asyncHandler(async (req, res) => {
  if(!req.body.fname || !req.body.lname) {
    res.status(400);
    throw new Error('please send required fields')
  }

  const item = await Item.create({
    fname: req.body.fname,
    lname: req.body.lname
  });
  
  res.status(200).json(item);

});

/**
 * @desc Get items
 * @route GET - /api/items
 * @access Private
 * */

exports.read = asyncHandler(async (req, res) => {
  const items = await Item.find();
  res.status(200).json(items);
});

/**
 * @desc Get single item
 * @route GET - /api/item/:id
 * @access Private
 * */

exports.readOne =  asyncHandler(async (req, res) => {
  const item = await Item.findById(req.params.id);

  if(!item) {
    const error = new Error('Item not found.');
    error.status = 400;
    return next(error);
  }

  res.status(200).json(item);
  
});

/**
 * @desc Update item
 * @route PUT - /api/items/:id
 * @access Private
 * */

exports.update = asyncHandler(async (req, res, next) => {
  const item = await Item.findById(req.params.id);

  if(!item) {
    const error = new Error('Item not found.');
    error.status = 400
    return next(error)
  }

  const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });

  res.status(200).json(updatedItem);
  
});

/**
 * @desc Delete item
 * @route GET - /api/items/:id
 * @access Private
 * */

exports.remove = asyncHandler(async (req, res, next) => {
  const item = await Item.findById(req.params.id);

  if(!item) {
    const error = new Error('Item not found.');
    error.status = 400
    return next(error)
  }

  await item.remove();

  res.status(200).json({ id: req.params.id });
  
});
