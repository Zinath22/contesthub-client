// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';

import { useState } from "react";

// import img1 from "../../../assets/b.jpg"
// import img2 from "../../../assets/b4.jpg"
// import img3 from "../../../assets/bb.jpg"
// import { useState } from "react";

const Banner = () => {
  const [allItem, setAllItem] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
    const bgImg = {
        backgroundImage: "url(https://i.ibb.co/fDBpMTF/istockphoto-1125684481-612x612.jpg)",
        backgroundSize: "contain",
        backgroundPosition: "center",
      };
    // const [searchQuery, setSearchQuery] = useState(""); // Step 1: Add search query state

     // Step 2: Create a function to handle search input changes
    //  const handleSearchChange = (e) => {
    //     setSearchQuery(e.target.value);
    // };

    // Step 3: Filter the allItem array based on the search query
    // const filteredItems = allItem.filter((item) => {
    //     return item.food_name.toLowerCase().includes(searchQuery.toLowerCase());
    // });

     // Step 2: Create a function to handle search input changes
     const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
  };

  // Step 3: Filter the allItem array based on the search query
  const filteredItems = allItem.filter((item) => {
      return item.tag.toLowerCase().includes(searchQuery.toLowerCase());
  });

    return (
   

   <div>
     <div style={bgImg} className="h-[400px] relative flex flex-col justify-center items-center">
   
   <div className="justify-center text-center relative z-20">
   <input
            className="ml-3 text-center mt-10 rounded-l-lg py-2"
            type="text"
            placeholder="Search Here...."
            value={searchQuery}
            onChange={handleSearchChange}
          />


          {
            filteredItems.map((item) => (
              <div key={item._id} >
                <button
            className="bg-[#FF444A] text-white rounded-r-lg border-l-0 py-2 px-4"
           
          >
            Search
          </button>
              </div>
            ))
          }
     
   </div>
 </div>
 {/* {filteredItems.map((item) => (
                    <AllContest key={item._id} item={item}></AllContest>
                ))} */}
   </div>
    );
};

export default Banner;