import { useEffect, useState } from "react";
import { LocalStorage, getWishListData } from "../LocalStorage/LocalStorage";
import 'react-tabs/style/react-tabs.css';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import BooksView from "../BooksView/BooksView";
import { FaBook } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";

const ListedBooks = () => {
    // wishList call from local storage
    const [wishList, getWishList] = useState([]);
    useEffect(() => {
        const wishListData = getWishListData();
        getWishList(wishListData);
    }, []);

    // Book List call from local storage
    const [appliedData, setAppliedData] = useState([]);
    useEffect(() => {
        const storeBooksInLocalStorage = LocalStorage();
        setAppliedData(storeBooksInLocalStorage);
    }, []);

    // State for selected sorting option and short data one by one
    const [sortOption, setSortOption] = useState();


    const handleSortChange = (event) => {
        const selectedOption = event.target.value;
        setSortOption(selectedOption);


        let sortedData = [...appliedData];
        if (selectedOption === "rating") {
            sortedData.sort((a, b) => a.rating - b.rating);
        } else if (selectedOption === "pages") {
            sortedData.sort((a, b) => a.totalPages - b.totalPages);
        } else if (selectedOption === "year") {
            sortedData.sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
        }

        setAppliedData(sortedData);
    };

    return (
        <div>
            <div className="container mx-auto text-center bg-slate-300 p-5 text-2xl font-bold rounded-xl mt-9 mb-10">
                <h1>Books: {appliedData.length}</h1>
            </div>

            <div className="flex justify-center">
                <select name="Books" id="books" className="btn btn-success" onChange={handleSortChange}>
                    <option value=''>Sort By{sortOption}<span><MdOutlineKeyboardArrowDown /></span> </option>
                    <option value="rating">Rating</option>
                    <option value="pages">Number of pages</option>
                    <option value="year">Publisher Year</option>
                </select>
            </div>

            <div className="container mx-auto">
                <Tabs>

                    <TabList>
                        <Tab>
                            <div className=" flex items-center gap-1">
                                <div>
                                    <FaBook></FaBook>
                                </div>
                                <div>
                                    Read Books
                                </div>
                            </div>
                        </Tab>
                        <Tab>
                            <div className=" flex items-center gap-1">
                                <div>
                                    <CiViewList></CiViewList>
                                </div>
                                <div>
                                    Wishlist Books
                                </div>
                            </div>
                        </Tab>
                    </TabList>


                    <TabPanel>
                        <div>
                            {appliedData.map((item, index) => (
                                <BooksView key={index} bookItem={item} />
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        {wishList.map((item, index) => (
                            <BooksView key={index} bookItem={item} />
                        ))}
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ListedBooks;
