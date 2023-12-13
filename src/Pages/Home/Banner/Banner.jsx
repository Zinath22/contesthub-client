// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';

// import { useState } from "react";
// import axios from 'axios';

import img1 from "../../../assets/istockphoto-1125684481-612x612.jpg"
import img2 from "../../../assets/download.png"
import img3 from "../../../assets/download (1).jpg"
import img4 from "../../../assets/istockphoto-1347499538-612x612.jpg"
// import { useState } from "react";

const Banner = () => {
  // const [allItem, setAllItem] = useState([]);
  // const [searchQuery, setSearchQuery] = useState("");
  //   const bgImg = {
  //       backgroundImage: "url(https://i.ibb.co/fDBpMTF/istockphoto-1125684481-612x612.jpg)",
  //       backgroundSize: "contain",
  //       backgroundPosition: "center",
  //     };
 
  //    const handleSearchChange = (e) => {
  //     setSearchQuery(e.target.value);
  // };

  
  // const filteredItems = allItem.filter((item) => {
  //     return item.tag.toLowerCase().includes(searchQuery.toLowerCase());
  // });

    return (
    

      <div>


      <div className="carousel max-w-screen-xl mx-auto">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full rounded-lg" />
          

          <div className="absolute  text-center items-center  flex justify-center h-full  rounded-lg w-full  ">
            <div className='text-white '>
              {/* <h2 className='text-6xl font-bold'>Life is uncertain. Eat delious food fast</h2> */}

              {/* <p className='text-center items-center text-4xl' data-aos="flip-left">There are many variations of food.please visit our resturent <br /> and Eat delious food fast.</p>
              {button} */}
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle mr-5">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>

            </div>
          </div>
         
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full rounded-lg" />

          <div className="absolute  text-center items-center  flex justify-center h-full  rounded-lg w-full  ">
            <div className='text-white '>


              {/* <p className='text-4xl text-center' data-aos="flip-left">There are many variations of food.please visit our resturent <br /> and Eat delious food fast.</p>
              {button} */}
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-5">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>

            </div>
          </div>
     
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full rounded-lg" />

          <div className="absolute  text-center items-center  flex justify-center h-full  rounded-lg w-full    ">
            <div className='text-white '>


              {/* <p className='text-4xl text-center' data-aos="flip-left">There are many variations of food.please visit our resturent <br /> and Eat delious food fast.</p>
              {button} */}

            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle mr-5">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full rounded-lg" />

          <div className="absolute  text-center items-center  flex justify-center h-full  rounded-lg w-full  ">
            <div className='text-white '>


              {/* <p className='text-4xl text-center' data-aos="flip-left">There are many variations of food.please visit our resturent <br /> and Eat delious food fast.</p>
              {button} */}

            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle mr-5">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>


//    <div>
//      <div style={bgImg} className="h-[400px] relative flex flex-col justify-center items-center " >
   
//    <div className="justify-center text-center relative z-20">
//    <input
//             className="ml-3 text-center mt-10 rounded-l-lg py-2"
//             type="text"
//             placeholder="Search Here...."
//             value={searchQuery}
//             onChange={handleSearchChange}
//           />


//           {
//             filteredItems.map((item) => (
//               <div key={item._id} >
//                 <button
//             className="bg-[#FF444A] text-white rounded-r-lg border-l-0 py-2 px-4"
           
//           >
//             Search
//           </button>
//               </div>
//             ))
//           }
     
//    </div>
//  </div>

//    </div>
    );
};

export default Banner;