import { CiLocationOn } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineRestorePage } from "react-icons/md";
import PropTypes from 'prop-types';
const WishList = ({ wishPrams }) => {
    const { image, bookName, author, category, tags, totalPages, publisher, yearOfPublishing, rating } = wishPrams
    return (
        <div className=" mt-5 mb-5">
            <div className=" container mx-auto">
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src={image} alt={bookName} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{bookName}</h2>
                        <p>By: {author}</p>
                        <div>
                            <div>
                                <h2 className=" mt-4 mb-8">Tag: <span className=" ml-5 bg-slate-200 p-2 rounded-xl text-green-400 font-bold">{tags[0]}</span>   <span className=" ml-5 bg-slate-200 p-2 rounded-xl text-green-400 font-bold">{tags[1]}</span></h2>
                            </div>
                            <div>
                                <h1> <CiLocationOn></CiLocationOn> <span>{yearOfPublishing}</span></h1>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h1><IoPeopleOutline></IoPeopleOutline> <span></span>Publisher: {publisher}</h1>
                            </div>
                            <div>
                                <h1> <span><MdOutlineRestorePage></MdOutlineRestorePage></span> Page: <span>{totalPages}</span> </h1>
                            </div>
                        </div>
                        <div>
                            <h1>Catagory: {category}</h1>
                            <h1>Rating: {rating}</h1>

                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

WishList.propTypes = {
    wishPrams: PropTypes.object
}

export default WishList;