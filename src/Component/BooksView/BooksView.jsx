import PropTypes from 'prop-types';

import { CiLocationOn } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineRestorePage } from "react-icons/md";
import { Link } from 'react-router-dom';
const BooksView = ({ bookItem }) => {

    const { bookId, image, bookName, author, category, tags, totalPages, publisher, yearOfPublishing, rating } = bookItem;
    console.log(bookItem)



    return (

        <div className="font-sans card lg:card-side bg-base-100 shadow-xl mb-5 max-w-[1000px] mx-auto">
            <figure><img src={image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{bookName}</h2>
                <p>By: {author}</p>
                <hr />
                {/* year and tags parent div */}

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {/* tags parent div */}
                    <div className=' flex gap-2'>
                        <div>
                            <h1>Tag:</h1>
                        </div>
                        <div className='flex gap-2'>
                            <h2>{tags[0]}</h2>
                            <h2>{tags[1]}</h2>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <CiLocationOn></CiLocationOn>
                        <h1>  Year of Publishing: {yearOfPublishing}</h1>
                    </div>
                </div>

                {/* Publisher and pages */}

                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className='flex items-center gap-2'>
                        <div>
                            <IoPeopleOutline></IoPeopleOutline>
                        </div>
                        <div className='flex gap-2 font-mono'>
                            <h1>Publisher:</h1>
                            <h1>{publisher}</h1>
                        </div>

                    </div>
                    <div>

                        <div className='flex items-center gap-2'>
                            <div>
                                <MdOutlineRestorePage></MdOutlineRestorePage>
                            </div>
                            <div className=' flex gap-2 font-mono'>
                                <h1>Total Pages:</h1>
                                <h1>{totalPages}</h1>
                            </div>

                        </div>
                    </div>
                </div>
                <hr />
                {/* Catagory rating and details */}
                <div className='mt-4 grid grid-cols-1 md:grid-cols-3'>
                    <div className=' mb-3 flex gap-3 bg-blue-200 max-w-36  p-2 rounded-xl'>
                        <h1>Category:</h1>
                        <h1>{category}</h1>
                    </div>
                    <div className='mb-3 flex gap-3 max-w-28 bg-blue-200  p-2 rounded-xl'>
                        <h1>Rating:</h1>
                        <h1>{rating}</h1>
                    </div>

                    <div>
                        <Link to={`/bookroute/${bookId}`}>
                            <button className="btn btn-success rounded-full font-bold">View Details</button>
                        </Link>
                    </div>

                </div>




            </div>
        </div>





    );
};

BooksView.propTypes = {
    bookItem: PropTypes.object.isRequired
}
export default BooksView;