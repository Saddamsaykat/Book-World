import { useLoaderData, useParams } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { saveToReadBook, saveToWishList } from "../LocalStorage/LocalStorage";


const PageToRead = () => {
    const fetchLoad = useLoaderData()
    const { bookrouteId } = useParams()
    const singleData = fetchLoad.find(data => data.bookId == bookrouteId)
    const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = singleData
    return (
        <div className="">
            <div className="card container mx-auto lg:card-side bg-base-100 shadow-xl">
                <figure><img className="border-2 p-2 rounded-xl ml-4 h-96 w-80" src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-2xl">{bookName}</h2>
                    <p>By: {author}</p>
                    <hr />
                    <h2>{category}</h2>
                    <hr />
                    <p>Review: {review}</p>
                    <p className=" mt-6">Tag: <span className=" bg-slate-200 font-bold p-1 rounded-xl text-lime-600">#{tags[0]}</span> <span className=" bg-slate-200 font-bold p-1 rounded-xl text-lime-600">{tags[1]}</span> </p>
                    <hr />


                    <div className=" flex gap-10">

                        <div className="font-serif">
                            <h1>Number Of Pages:</h1>
                            <h1>Publisher:</h1>
                            <h1>Year of Publishing:</h1>
                            <h1>Rating:</h1>
                        </div>
                        <div className="font-serif">
                            <h1 className=" font-bold">{totalPages}</h1>
                            <h1 className=" font-bold">{publisher}</h1>
                            <h1 className=" font-bold">{yearOfPublishing}</h1>
                            <h1 className=" font-bold">{rating}</h1>
                        </div>

                    </div>
                    <hr />
                    <div className="card-actions justify-start">
                        <button onClick={() => saveToReadBook(singleData)} className="btn btn-success btn-outline mr-4 font-bold">Read</button>
                        <button onClick={() => saveToWishList(singleData)} className="btn btn-info font-bold text-white">Wishlist</button>
                    </div>
                </div>
            </div>
        </div >
    );
};
export default PageToRead;