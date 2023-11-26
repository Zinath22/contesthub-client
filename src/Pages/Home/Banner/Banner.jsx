// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';

// import img1 from "../../../assets/b.jpg"
// import img2 from "../../../assets/b4.jpg"
// import img3 from "../../../assets/bb.jpg"
// import { useState } from "react";

const Banner = ({ input, inputValue, searchName }) => {

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

    return (
    //   <div>
         
    //       <Carousel >
          
    //       <div>
    //           <img className="" src={img1} />
            
           
            
    //       </div>
    //       <div>
    //           <img className="" src={img2} />
             
    //       </div>
    //       <div>
    //           <img className="" src={img3} />
              
    //       </div>
          
    //   </Carousel>
    //   </div>

    <div style={bgImg} className="h-[400px] relative flex flex-col justify-center items-center">
    {/* <div className="absolute inset-0 bg-opacity-90 bg-gray-100 z-10">

    </div> */}
    {/* <h1 className="text-5xl font-semibold text-center items-center justify-center pt-20 relative z-20">
      I Grow By Helping People In Need
    </h1> */}
    <div className="justify-center text-center relative z-20">
      <input
        className="ml-3 text-center mt-10 rounded-l-lg py-2"
        type="text"
        placeholder="Search Here...."
        value={input}
        onChange={inputValue}
      />
      <button
        className="bg-[#FF444A] text-white rounded-r-lg border-l-0 py-2 px-4"
        onClick={searchName}
      >
        Search
      </button>
    </div>
  </div>
    );
};

export default Banner;