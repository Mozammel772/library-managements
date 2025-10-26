import { Schema, model, Types } from 'mongoose';
import { Book } from '../books/book.model';

const borrowSchema = new Schema(
    {
        book: {
            type: Schema.Types.ObjectId,
            ref: 'Book',
            required: [true, 'Book ID is required!'],
        },
        quantity: {
            type: Number,
            required: [true, 'Quantity is required!'],
            min: [1, 'Quantity must be at least 1'],
        },
        dueDate: {
            type: Date,
            required: [true, 'Due date is required!'],
        },
    },
    {
        timestamps: true,
    }
);

borrowSchema.pre('save', async function (next) {
    const book = await Book.findById(this.book);
    if (!book) {
        return next(new Error('Book not found'));
    }

    if (book.copies < this.quantity) {
        return next(new Error('Not enough copies available'));
    }

    book.copies -= this.quantity;
    await book.save();
    next();
});


export const Borrow = model('Borrow', borrowSchema);
