import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PopularCard from "./PopularCard";


const PopularContest = () => {
    const [contest, setContest] = useState([]);
    useEffect( () => {
        fetch('contest.json')
        .then(res => res.json())
        .then(data => {
            const popularContest = data.filter(item => item.category === 'popular')
             setContest(popularContest)})
    }, [])

    return (
        <div className="w-[80%] mx-auto">
            <SectionTitle heading={'Popular Contest'}></SectionTitle>
            <div className="my-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    contest.map(item => <PopularCard 
                        key={item._id}
                        item={item}
                        ></PopularCard>
                        )
                }
            </div>
        </div>
    );
};

export default PopularContest;