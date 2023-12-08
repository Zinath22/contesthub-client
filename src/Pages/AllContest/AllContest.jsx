
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// import { motion } from "framer-motion";
// import { AiOutlineArrowRight } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UseAxiosSecure from '../../Hook/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
// import { Helmet } from 'react-helmet-async';
const Jobs = () => {
  // const [contests, setContests] = useState([]);
  // const [business, setBusiness] = useState([]);
  // const [medical, setMedical] = useState([]);
  // const [artical, setArtical] = useState([]);
  // const [gaming, setGaming] = useState([]);
  const axiosSecure = UseAxiosSecure();
  const { data: contest = [], } = useQuery({
    queryKey: ['manageContest'],
    queryFn: async () => {
      const res = await axiosSecure.get('/contest');
      return res.data
    }

  });
  console.log(contest);
  const acceptedContest = contest.filter(item => item.status === "accepted")
  console.log('áccept', acceptedContest);

  const business = acceptedContest.filter(contest => contest.tag === "business");
  const medical = acceptedContest.filter(contest => contest.tag === "medical");
  const artical = acceptedContest.filter(contest => contest.tag === "artical");
  const gaming = acceptedContest.filter(contest => contest.tag === "gaming");
  // const contest = useLoaderData();
  //   console.log('cc',contest);
  // const itemPerPage = 10;
  // const numberOfPages = Math.ceil(contest/ itemPerPage);
  //  const pages = []
  //   for(let i = 0; i < numberOfPages; i++){
  //     pages.push(i)
  //   }
  //   console.log('pp', pages);

  // const pages = [...Array(numberOfPages).keys()];

  const [showFullDescription, setShowFullDescription] = useState(false);
  const handleToggle = () => {
    setShowFullDescription(!showFullDescription);
  };
  // console.log(contests);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://contesthub-server.vercel.app/contest');
  //       if (response.ok) {
  //         const data = await response.json();
  //         console.log(data);
  //         const businessData = data.filter(contest => contest.tag === "business");
  //         const medicalData = data.filter(contest => contest.tag === "medical");
  //         const articalData = data.filter(contest => contest.tag === "artical");
  //         const gamingData = data.filter(contest => contest.tag === "gaming");

  //         setContests(data);
  //         setBusiness(businessData);
  //         setMedical(medicalData);
  //         setArtical(articalData);
  //         setGaming(gamingData)

  //       } else {
  //         console.error('Failed to fetch data');
  //       }
  //     } catch (error) {
  //       console.error('Error:', error);
  //     }
  //   };

  //   fetchData();
  // }, [gaming, artical, business, medical]);


  return (
    <div>
      {/* <Helmet><title>Contest | AllContest</title></Helmet> */}
      <div className='lg:p-28'>
        <Tabs>
          <TabList>
            <Tab>Business</Tab>
            <Tab>Medical</Tab>
            <Tab>Article</Tab>
            <Tab>Gaming</Tab>
          </TabList>

          <div className=''>
            <TabPanel>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                  business.map(contest => (
                    <div
                      key={contest._id}
                      className="container"
                    //   whileHover={{ scale: 1.2  }}
                    >


                      <div>

                        <div className="card card-compact  my-5 bg-sky-200 shadow-xl">
                          <figure><img className="w-full h-[180px]" src={contest.img} alt="" /></figure>
                          <div className="card-body">
                            <h2 className="card-title text-teal-600">Contest Name{contest.contest_name}</h2>
                            <h2 className="card-title text-teal-600">Participants:{contest.participants_count}</h2>
                            {/* <p className="text-teal-600">{description}</p> */}
                            <p>
                              {showFullDescription ? (
                                <span className="">
                                  {contest.description}
                                  <button className="ml-4 text-green-600 text-sm underline" onClick={handleToggle}>See less</button>
                                </span>
                              ) : (
                                <span>
                                  {contest.description.slice(0, 60)}
                                  {contest.description.length > 60 && <button className="ml-2 text-green-600 text-sm underline" onClick={handleToggle}>See more</button>}
                                </span>
                              )}
                            </p>
                            <div className="card-actions">
                              <Link to={`/contestDetails/${contest._id}`}> <button className="btn text-white bg-teal-600  btn-outline border-0 border-b-4 mt-4">Details</button></Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {medical.map(contest => (
                  <div
                    key={contest._id}
                    className="container"
                  //   whileHover={{ scale: 1.2}}
                  >
                    <div className="card card-compact  my-5  bg-sky-200 shadow-xl">
                      <figure><img className="w-full h-[180px]" src={contest.img} alt="" /></figure>
                      <div className="card-body">
                        <h2 className="card-title text-teal-600">{contest.contest_name}</h2>
                        <h2 className="card-title text-teal-600">{contest.participants_count}</h2>
                        {/* <p className="text-teal-600">{description}</p> */}
                        <p>
                          {showFullDescription ? (
                            <span className="">
                              {contest.description}
                              <button className="ml-4 text-green-600 text-sm underline" onClick={handleToggle}>See less</button>
                            </span>
                          ) : (
                            <span>
                              {contest.description.slice(0, 60)}
                              {contest.description.length > 60 && <button className="ml-2 text-green-600 text-sm underline" onClick={handleToggle}>See more</button>}
                            </span>
                          )}
                        </p>
                        <div className="card-actions">
                          <Link to={`/contestDetails/${contest._id}`}> <button className="btn text-white bg-teal-600  btn-outline border-0 border-b-4 mt-4">Details</button></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {artical.map(contest => (
                  <div
                    key={contest._id}
                    className="container"
                  //   whileHover={{ scale: 1.2}}
                  >
                    <div className="card card-compact  my-5  bg-sky-200 shadow-xl">
                      <figure><img className="w-full h-[180px]" src={contest.img} alt="" /></figure>
                      <div className="card-body">
                        <h2 className="card-title text-teal-600">{contest.contest_name}</h2>
                        <h2 className="card-title text-teal-600">{contest.participants_count}</h2>
                        {/* <p className="text-teal-600">{description}</p> */}

                        <p>
                          {showFullDescription ? (
                            <span className="">
                              {contest.description}
                              <button className="ml-4 text-green-600 text-sm underline" onClick={handleToggle}>See less</button>
                            </span>
                          ) : (
                            <span>
                              {contest.description.slice(0, 60)}
                              {contest.description.length > 60 && <button className="ml-2 text-green-600 text-sm underline" onClick={handleToggle}>See more</button>}
                            </span>
                          )}
                        </p>

                        <div className="card-actions">
                          <Link to={`/contestDetails/${contest._id}`}> <button className="btn text-white bg-teal-600  btn-outline border-0 border-b-4 mt-4">Details</button></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {gaming.map(contest => (
                  <div
                    key={contest._id}
                    className="container"
                  //   whileHover={{ scale: 1.2}}
                  >
                    <div className="card card-compact  my-5  bg-sky-200 shadow-xl">
                      <figure><img className="w-full h-[180px]" src={contest.img} alt="" /></figure>
                      <div className="card-body">
                        <h2 className="card-title text-teal-600">{contest.contest_name}</h2>
                        <h2 className="card-title text-teal-600">{contest.participants_count}</h2>
                        {/* <p className="text-teal-600">{description}</p> */}
                        <p>
                          {showFullDescription ? (
                            <span className="">
                              {contest.description}
                              <button className="ml-4 text-green-600 text-sm underline" onClick={handleToggle}>See less</button>
                            </span>
                          ) : (
                            <span>
                              {contest.description.slice(0, 60)}
                              {contest.description.length > 60 && <button className="ml-2 text-green-600 text-sm underline" onClick={handleToggle}>See more</button>}
                            </span>
                          )}
                        </p>
                        <div className="card-actions">
                          <Link to={`/contestDetails/${contest._id}`}> <button className="btn text-white bg-teal-600  btn-outline border-0 border-b-4 mt-4">Details</button></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>

          </div>
        </Tabs>




      </div>
      {/* <div className='pagination'>Pagination</div> */}
    </div>
  );
};

export default Jobs;
