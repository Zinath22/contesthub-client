import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PopularCard from "./PopularCard";


const PopularContest = () => {
    const [contest, setContest] = useState([]);
    useEffect( () => {
        fetch('https://contesthub-server.vercel.app/contest')
        .then(res => res.json())
        .then(data => {
            const popularContest = data.filter(item => item.category === 'popular')
             setContest(popularContest)})
    }, [])

    return (
        <div className="">
            <SectionTitle heading={'Popular Contest'}></SectionTitle>
            <div className="my-7 grid grid-cols-2 md:grid-cols-1 lg:grid-cols-3">
                {
                    contest.map(item => <PopularCard 
                        key={item._id}
                        item={item}
                        ></PopularCard>)
                }
            </div>
        </div>
    );
};

export default PopularContest;