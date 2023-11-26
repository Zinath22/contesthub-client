
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// import { motion } from "framer-motion";
// import { AiOutlineArrowRight } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Jobs = () => {
  const [contests, setContests] = useState([]);
  const [business, setBusiness] = useState([]);
  const [medical, setMedical] = useState([]);
  const [artical, setArtical] = useState([]);
  const [gaming, setGaming] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/contest');
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          const businessData = data.filter(contest => contest.tag === "business");
          const medicalData = data.filter(contest => contest.tag === "medical");
          const articalData = data.filter(contest => contest.tag === "artical");
          const gamingData = data.filter(contest => contest.tag === "gaming");

          setContests(data);
          setBusiness(businessData);
          setMedical(medicalData);
          setArtical(articalData);
          setGaming(gamingData)
          console.log("gaming", gaming);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className='lg:p-28'>
      <Tabs>
        <TabList>
          <Tab>Business</Tab>
          <Tab>Medical</Tab>
          <Tab>Artical</Tab>
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
                    {/* <div className='border p-6 space-y-2 rounded bg-cyan-100 h-60 flex flex-col'>
                      <h2>Contest Name: <span className='font-semibold'>{contest.contest_name}</span></h2>
                      <h2>Praticipants Count{contest.participants_count}</h2>
                      
                      <h2 className='flex-grow'>Description: {contest.description}</h2>
                      <Link to={`/job-details/${contest._id}`}>
                        <button className='btn btn-accent text-white w-full '>Details</button>
                      </Link>
                    </div> */}

                    <div>

                      <div className="card card-compact  my-5 bg-base-100 shadow-xl">
                        <figure><img className="w-full h-[180px]" src={contest.img} alt="" /></figure>
                        <div className="card-body">
                          <h2 className="card-title text-teal-600">{contest.contest_name}</h2>
                          <h2 className="card-title text-teal-600">{contest.participants_count}</h2>
                          {/* <p className="text-teal-600">{description}</p> */}
                          {
                            contest.description.length > 10 ?
                              <p className="text-teal-500">{contest.description.slice(0, 10)}
                                <Link to={`/item/${contest._id}`}
                                  className="text-red-500 font-bold">See more</Link>
                              </p> :
                              <p>{contest.description}</p>
                          }
                          <div className="card-actions">
                            <Link to={`/contestDetails/${contest._id}`}> <button className="btn text-black bg-teal-600">Details</button></Link>
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
                  <div className="card card-compact  my-5 bg-base-100 shadow-xl">
                    <figure><img className="w-full h-[180px]" src={contest.img} alt="" /></figure>
                    <div className="card-body">
                      <h2 className="card-title text-teal-600">{contest.contest_name}</h2>
                      <h2 className="card-title text-teal-600">{contest.participants_count}</h2>
                      {/* <p className="text-teal-600">{description}</p> */}
                      {
                        contest.description.length > 10 ?
                          <p className="text-teal-500">{contest.description.slice(0, 10)}
                            <Link to={`/item/${contest._id}`}
                              className="text-red-500 font-bold">See more</Link>
                          </p> :
                          <p>{contest.description}</p>
                      }
                      <div className="card-actions">
                        <Link to={`/contestDetails/${contest._id}`}> <button className="btn text-black bg-teal-600">Details</button></Link>
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
                  <div className="card card-compact  my-5 bg-base-100 shadow-xl">
                    <figure><img className="w-full h-[180px]" src={contest.img} alt="" /></figure>
                    <div className="card-body">
                      <h2 className="card-title text-teal-600">{contest.contest_name}</h2>
                      <h2 className="card-title text-teal-600">{contest.participants_count}</h2>
                      {/* <p className="text-teal-600">{description}</p> */}
                      {
                        contest.description.length > 10 ?
                          <p className="text-teal-500">{contest.description.slice(0, 10)}
                            <Link to={`/item/${contest._id}`}
                              className="text-red-500 font-bold">See more</Link>
                          </p> :
                          <p>{contest.description}</p>
                      }
                      <div className="card-actions">
                        <Link to={`/contestDetails/${contest._id}`}> <button className="btn text-black bg-teal-600">Details</button></Link>
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
                  <div className="card card-compact  my-5 bg-base-100 shadow-xl">
                    <figure><img className="w-full h-[180px]" src={contest.img} alt="" /></figure>
                    <div className="card-body">
                      <h2 className="card-title text-teal-600">{contest.contest_name}</h2>
                      <h2 className="card-title text-teal-600">{contest.participants_count}</h2>
                      {/* <p className="text-teal-600">{description}</p> */}
                      {
                        contest.description.length > 10 ?
                          <p className="text-teal-500">{contest.description.slice(0, 10)}
                            <Link to={`/item/${contest._id}`}
                              className="text-red-500 font-bold">See more</Link>
                          </p> :
                          <p>{contest.description}</p>
                      }
                      <div className="card-actions">
                        <Link to={`/contestDetails/${contest._id}`}> <button className="btn text-black bg-teal-600">Details</button></Link>
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
  );
};

export default Jobs;
