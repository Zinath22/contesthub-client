import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import img1 from "../../../assets/b.jpg"
import img2 from "../../../assets/b4.jpg"
import img3 from "../../../assets/bb.jpg"
// import { useState } from "react";

const Banner = () => {
    // const [searchQuery, setSearchQuery] = useState(""); // Step 1: Add search query state

     // Step 2: Create a function to handle search input changes
    //  const handleSearchChange = (e) => {
    //     setSearchQuery(e.target.value);
    // };

    // Step 3: Filter the allItem array based on the search query
    // const filteredItems = allItem.filter((item) => {
    //     return item.food_name.toLowerCase().includes(searchQuery.toLowerCase());
    // });

    return (
      <div>
         {/* <div className="md:p-20 ml-14 w-1/2 ">
              <input
                className="input input-secondary mt-20 w-full p-2"
                    type="text"
                    placeholder="Search by food name"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
              </div> */}
          <Carousel >
          
          <div>
              <img className="" src={img1} />
            
           
            
          </div>
          <div>
              <img className="" src={img2} />
             
          </div>
          <div>
              <img className="" src={img3} />
              
          </div>
          
      </Carousel>
      </div>
    );
};

export default Banner;