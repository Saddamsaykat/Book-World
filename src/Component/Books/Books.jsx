import { useEffect, useState } from "react";
import Book from "../Book/Book";
const Books = () => {
    const [bookData, setBookData] = useState([])
    useEffect(() => {
        const assetOfBooks = async () => {
            const res = await fetch('/books.json');
            const data = await res.json();

            setBookData(data);
        }

        assetOfBooks()
    }, []);
    return (
        <div>

            <div className="text-center mt-24 mb-10 text-4xl font-bold">
                <h1>Books</h1>
            </div>
            <div className="w-[90%] gap-8 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:container">

                {
                    bookData.map(book => (<Book key={book.bookId} parms={book}></Book>))
                }
            </div>
        </div>
    );
};

export default Books;