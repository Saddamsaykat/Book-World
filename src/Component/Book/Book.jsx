import PropTypes from 'prop-types';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';
const Book = ({ parms }) => {
    const { author, bookName, category, rating, image, bookId } = parms;

    return (
        <div>

            <Link to={`/bookroute/${bookId}`}>

                <div className='container mx-auto' >
                    <div className="card card-compact bg-base-100 shadow-xl mt-4">
                        <div className='border-2 p-4 mx-auto rounded-xl'>
                            <figure><img src={image} /></figure>
                        </div>
                        <hr className='mt-4 ml-5 w-80' />
                        <div className="card-body">
                            <div className=' flex justify-around text-green-400 font-bold'>
                                <h3>Young Adult</h3>
                                <h3>Identity</h3>
                            </div>
                            <hr className=' border-dotted' />
                            <div className=' mb-3'>
                                <h1 className=' text-3xl font-bold mb-4'>{bookName}</h1>
                                <h1>By: {author}</h1>
                            </div>
                            <hr />
                            <div className=' flex justify-around mt-4'>
                                <h3>{category}</h3>
                                <div className=' flex items-center gap-1'>
                                    <h3>{rating}</h3>
                                    <div><CiStar></CiStar></div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </Link>
        </div>
    );
};
Book.propTypes = {
    parms: PropTypes.object
}

export default Book;