import { useContext } from "react";
import PageCreator from "../../../components/pageCreator/pageCreator";
import Banner from "../Banner/Banner";
import GrandPrize from "../GrandPrize/GrandPrize";
import PopularContest from "../PopularContest/PopularContest";
import { AuthContext } from "../../../providers/AuthProvider";
import AllWinner from "../AllWinner/AllWinner";
// import RegDeadline from "../RegDeadline/RegDeadline";


const Home = () => {

    const { user } = useContext(AuthContext)
    console.log(user);
    return (
        <div>
            <Banner ></Banner>
            <PopularContest></PopularContest>
            
            <PageCreator></PageCreator>
            <AllWinner></AllWinner>
            {/* <RegDeadline></RegDeadline> */}
            <GrandPrize></GrandPrize>
        </div>
    );
};

export default Home;