const router = require('express').Router();
const { PrismaClient } = require('@prisma/client');
 
const prisma = new PrismaClient()

// Add book
router.post('/add-book', async (req, res, next) => {
  try {
    const book = await prisma.book.create({
      data: req.body
    })
    res.json(book)
  } catch (error) {
    next(error)
  }
});

// Get all books
router.get('/', async (req, res, next) => {
  try {
    const books = await prisma.book.findMany()
    res.json(books)
  } catch (error) {
    next(error)
  }
});
 
// Get book by id
router.get('/read-book/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const book = await prisma.book.findUnique({
      where: {
        id: Number(id)
      }
    })
    res.json(book)
  } catch (error) {
    next(error)
  }
});
 
// Update book
router.patch('/update-book/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const book = await prisma.book.update({
      where: {
        id: Number(id)
      },
      data: req.body
    })
    res.json(book)
  } catch (error) {
    next(error)
  }
});

// Delete book
router.delete('/delete-book/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const deletedBook = await prisma.book.delete({
      where: {
        id: Number(id),
      }
    })
    res.json(deletedBook)
  } catch (error) {
    next(error)
  }
});

module.exports = router;
