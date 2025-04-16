import { useNavigate } from "react-router-dom";

const Banner = () => {
    const navigate = useNavigate()

    const handleSHow = () => {
        navigate(`/bookList`)
    }
    return (
        <div className="mt-32 container mx-auto">
            <div className="card mt-6 lg:card-side bg-base-100 shadow-xl">
                <div className=" container mx-auto max-w-[800px]">
                    <h2 className="card-title text-6xl text-center md:text-left lg:text-left  ">Books to freshen up your bookshelf</h2>
                    <div className="card-actions flex justify-center md:justify-start lg:justify-start ">
                        <button className="btn btn-success btn-outline mt-7" onClick={handleSHow}>View The List</button>
                    </div>
                </div>
                <div className=" p-6">
                    <figure><img className=" w-80" src="https://i.ibb.co/CKSLC2s/Banner-Img.png" /></figure>
                </div>


            </div>
        </div>

    );
};

export default Banner;