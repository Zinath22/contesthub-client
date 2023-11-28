
import image from "../../assets/pngtree-gold-trophy-with-laurel-wreath-1st-number-prize-png-image_6611600.jpg";
import SectionTitle from "../SectionTitle/SectionTitle";



const Upcoming = () => {
    return (
        <div className="my-5">
            <div className="justify-center items-center text-center flex">
                <img className="h-[300px] w-[300px]" src={image} alt="" />
            </div>
          <SectionTitle heading={'Upcoming Contest'}></SectionTitle>
          <h2 className="text-center justify-center items-center flex ">All upcoming contests and dates are tentative and subject to change</h2>
          <h3>Sorry, there are no upcoming contests!</h3>
        </div>
    );
};

export default Upcoming;