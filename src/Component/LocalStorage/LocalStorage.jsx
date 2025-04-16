import { toast } from 'react-toastify';


const LocalStorage = () => {
    const storeBookLocal = localStorage.getItem('addBook')
    if (storeBookLocal) {
        return JSON.parse(storeBookLocal)
    }
    return []
};
// wish List
const getWishListData = () => {
    const storeBookLocal = localStorage.getItem('wishList')
    if (storeBookLocal) {
        return JSON.parse(storeBookLocal);
    }
    return []
};
// Book List
const saveToReadBook = (booksOption) => {
    const storeBookLocals = LocalStorage();
    const isBookExist = storeBookLocals.find((item) => item?.bookId && item.bookId == booksOption.bookId)
    if (!isBookExist) {
        storeBookLocals.push(booksOption);
        localStorage.setItem("addBook", JSON.stringify(storeBookLocals));
        toast.success("Book Listed Success Fully");
    }
    else {
        toast.warn("Already Listed Book List");
    }
};
// wish List
const saveToWishList = (booksOption) => {
    const storeBookLocals = getWishListData();

    //transfer
    const storeReadBooks = LocalStorage();
    const isBookExistInRead = storeReadBooks.find((item) => item?.bookId && item.bookId === booksOption.bookId);
    if (isBookExistInRead) {
        toast.error("Cannot add to Wishlist.");
        return;
    }

    const isBookExist = storeBookLocals.find((item) => item?.bookId && item.bookId == booksOption.bookId)

    if (!isBookExist) {
        storeBookLocals.push(booksOption);
        localStorage.setItem("wishList", JSON.stringify(storeBookLocals));
        toast.success('Book Is Listed WishList SuccesFully');
    }
    else {
        toast.warn("Already Listed");
    }
};

export { LocalStorage, saveToReadBook, getWishListData, saveToWishList }
