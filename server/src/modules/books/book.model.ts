import { Schema, UpdateQuery, model } from 'mongoose';

export enum Genre {
    FICTION = 'FICTION',
    NON_FICTION = 'NON_FICTION',
    SCIENCE = 'SCIENCE',
    HISTORY = 'HISTORY',
    BIOGRAPHY = 'BIOGRAPHY',
    FANTASY = 'FANTASY',
}

const bookSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, 'Title is required!'],
        },
        author: {
            type: String,
            required: [true, 'Author is required!'],
        },
        genre: {
            type: String,
            required: [true, 'Genre is required!'],
            enum: {
                values: Object.values(Genre),
            },
        },
        isbn: {
            type: String,
            required: [true, 'ISBN is required!'],
            unique: true,
        },
        description: {
            type: String,
        },
        copies: {
            type: Number,
            required: [true, 'Copies is required!'],
            min: [0, 'Copies must be a positive number'],
        },
        available: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true }
);

// Automatically handle .save()
bookSchema.pre("save", function (next) {
    this.available = this.copies > 0;
    next();
});

// Automatically handle updateOne/findOneAndUpdate
bookSchema.pre(["updateOne", "findOneAndUpdate"], function (next) {
    const update = this.getUpdate() as UpdateQuery<any>;
    if (update?.copies !== undefined) {
        update.available = update.copies > 0;
        this.setUpdate(update);
    }
    next();
});



export const Book = model('Book', bookSchema);
