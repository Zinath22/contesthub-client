// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';

// import { useState } from "react";
// import axios from 'axios';




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


      <div className="carousel rounded-none max-w-screen-xl mx-auto">
        <div id="slide1" className="carousel-item rounded-none relative w-full">
          <img src="https://images.unsplash.com/photo-1633545499432-285bae66cbf8?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fbclid=IwAR0E-oShhpUGIpcr-5q6FioROMOuLeg4sJMFkNHEJvcQzx9qW-CGxu1K9Kk" className="w-full " />
          

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
          <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fbclid=IwAR2pNUAwgF7Fh9t8RHiF2xpRUwGC24uWi5Kq4nWWQfCqdM1hcUtd1o4lg-w" className="w-full " />

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
          <img src="https://images.unsplash.com/photo-1636489875239-10ada41d8e33?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fbclid=IwAR0E-oShhpUGIpcr-5q6FioROMOuLeg4sJMFkNHEJvcQzx9qW-CGxu1K9Kk" className="w-full " />

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
          <img src="https://images.unsplash.com/photo-1598550487031-0898b4852123?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fbclid=IwAR2e_0o_tc6be6z1BFT_wVaUIpJwKEK5Kv_JfUjfyyxMTpikqDI23KRW5GE" className="w-full " />

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