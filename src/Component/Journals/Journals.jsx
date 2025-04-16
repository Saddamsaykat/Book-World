/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
const Journals = ({ props }) => {
    const { image, title, authors, journal, pages, publication_year, language } = props;
    return (


        <div className="card w-96 bg-base-100 shadow-xl">
            <img className='h-52 w-80 ml-6 rounded-xl' src={image} alt="Shoes" />
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>BY: {authors}</p>
                <hr />
                <h1>Journal : {journal}</h1>
                <hr />
                <div className='flex justify-around'>
                    <h1>{language}</h1>
                    <h1>page: {pages}</h1>
                </div>
                <hr />
                <div className='text-center'>
                    <h1>publication_year: {publication_year}</h1>
                </div>
            </div>
        </div>


    );
};
Journals.propTypes = {
    props: PropTypes.object
}
export default Journals;