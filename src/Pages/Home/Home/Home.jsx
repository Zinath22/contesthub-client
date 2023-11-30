import { useContext } from "react";
import PageCreator from "../../../components/pageCreator/pageCreator";
import Banner from "../Banner/Banner";
import GrandPrize from "../GrandPrize/GrandPrize";
import PopularContest from "../PopularContest/PopularContest";
import { AuthContext } from "../../../providers/AuthProvider";


const Home = () => {

    const { user } = useContext(AuthContext)
    console.log(user);
    return (
        <div>
            <Banner ></Banner>
            <PopularContest></PopularContest>
            <GrandPrize></GrandPrize>
            <PageCreator></PageCreator>
        </div>
    );
};

export default Home;