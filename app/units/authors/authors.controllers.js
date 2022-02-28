const asyncHandler = require('express-async-handler');
const Author = require('./author');

/**
 * @desc Create author
 * @route POST - /api/authors
 * @access Private
 * */

 exports.create = asyncHandler(async (req, res) => {
  if(!req.body.fname || !req.body.lname) {
    res.status(400);
    throw new Error('please send required fields')
  }

  const author = await Author.create({
    fname: req.body.fname,
    lname: req.body.lname
  });
  
  res.status(200).json(author);

});

/**
 * @desc Get authors
 * @route GET - /api/authors
 * @access Private
 * */

exports.read = asyncHandler(async (req, res) => {
  const authors = await Author.find();
  res.status(200).json(authors);
});

/**
 * @desc Get single author
 * @route GET - /api/author/:id
 * @access Private
 * */

exports.readOne =  asyncHandler(async (req, res) => {
  const author = await Author.findById(req.params.id);

  if(!author) {
    const error = new Error('Author not found.');
    error.status = 400;
    return next(error);
  }

  res.status(200).json(author);
  
});

/**
 * @desc Update author
 * @route PUT - /api/authors/:id
 * @access Private
 * */

exports.update = asyncHandler(async (req, res, next) => {
  const author = await Author.findById(req.params.id);

  if(!author) {
    const error = new Error('Author not found.');
    error.status = 400
    return next(error)
  }

  const updatedAuthor = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true });

  res.status(200).json(updatedAuthor);
  
});

/**
 * @desc Delete author
 * @route GET - /api/authors/:id
 * @access Private
 * */

exports.remove = asyncHandler(async (req, res, next) => {
  const author = await Book.findById(req.params.id);

  if(!author) {
    const error = new Error('Author not found.');
    error.status = 400
    return next(error)
  }

  await author.remove();

  res.status(200).json({ id: req.params.id });
  
});
