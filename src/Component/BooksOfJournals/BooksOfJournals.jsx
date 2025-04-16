import { useEffect, useState } from "react";
import Journals from "../Journals/Journals";

const BooksOfJournals = () => {
    const [journal, getJournal] = useState([]);

    useEffect(() => {
        const JsonOfJournal = async () => {
            const res = await fetch('/journal.json');
            const dataPass = await res.json()

            getJournal(dataPass);
        }
        JsonOfJournal()
    }, []);
    return (
        <div>
            <div className="mt-5 mb-14 text-center w-full flex justify-center ">
                <h1 className=" bg-pink-400 font-bold w-[500px] text-white text-6xl p-9 rounded-xl ">World Top Ranks Journal Books</h1>
            </div>

            <div className="container mx-auto gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    journal?.map(journals => (<Journals key={journals.key} props={journals}></Journals>))
                }
            </div>
        </div>
    );
};

export default BooksOfJournals;