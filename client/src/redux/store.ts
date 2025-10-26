import { configureStore } from "@reduxjs/toolkit";
import { booksApi } from "./features/books/api.books";
import { borrowApi } from "./features/borrow/api.borrow";

export const store = configureStore({
    reducer: {
        [booksApi.reducerPath]: booksApi.reducer,
        [borrowApi.reducerPath]: borrowApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(booksApi.middleware, borrowApi.middleware),
})

// Infer the 'RootState' and 'AppDispatch' types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;