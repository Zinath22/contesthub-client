import Banner from "../Banner/Banner";
import GrandPrize from "../GrandPrize/GrandPrize";
import PopularContest from "../PopularContest/PopularContest";


const Home = () => {
    return (
        <div>
            <Banner ></Banner>
            <PopularContest></PopularContest>
            <GrandPrize></GrandPrize>
        </div>
    );
};

export default Home;