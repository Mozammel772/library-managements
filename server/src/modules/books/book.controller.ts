import { Request, Response } from 'express';
import { Book } from './book.model';

export const createBook = async (req: Request, res: Response) => {
    try {
        const book = await Book.create(req.body);
        res.status(201).json({
            success: true,
            message: 'Book created successfully',
            data: book,
        });
    } catch (error) {
        res.status(422).json({
            success: false,
            message: 'Validation failed',
            error,
        });
    }
};

export const getBooks = async (req: Request, res: Response) => {
    try {
        const { filter, sortBy = 'createdAt', sort = 'asc' } = req.query;
        const query: any = {};

        if (filter) query.genre = filter;

        const books = await Book.find(query)
            .sort({ [sortBy as string]: sort === 'desc' ? -1 : 1 })

        res.json({
            success: true,
            message: 'Books retrieved successfully',
            data: books,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching books', error });
    }
};

export const getBookById = async (req: Request, res: Response) => {
    try {
        const book = await Book.findById(req.params.bookId);
        res.json({
            success: true,
            message: 'Book retrieved successfully',
            data: book,
        });
    } catch (error) {
        res.status(404).json({ success: false, message: 'Book not found', error });
    }
};

export const updateBook = async (req: Request, res: Response) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.bookId, req.body, {
            new: true,
            runValidators: true,
        });
        res.json({
            success: true,
            message: 'Book updated successfully',
            data: book,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: 'Update failed', error });
    }
};

export const deleteBook = async (req: Request, res: Response) => {
    try {
        await Book.findByIdAndDelete(req.params.bookId);
        res.json({
            success: true,
            message: 'Book deleted successfully',
            data: null,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: 'Delete failed', error });
    }
};
