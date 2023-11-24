import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from 'react-icons/ai';
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

          const businessData = data.filter(contest => contest.category === "business");
          const medicalData = data.filter(contest => contest.category === "medical");
          const articalData = data.filter(contest => contest.category === "artical");
          const gamingData = data.filter(contest => contest.category === "gaming");

          setContests(data);
          setBusiness(businessData);
          setMedical(medicalData);
          setArtical(articalData);
          setGaming(gamingData)
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

        <div className='w-[90%] p-4 mx-auto min-h-screen'>
          <TabPanel>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {business.map(contest => (
                <motion.div
                  key={contest._id}
                  className="container"
                  whileHover={{ scale: 1.2  }}
                >
                  <div className='border p-6 space-y-2 rounded bg-cyan-100 h-60 flex flex-col'>
                    <h2>Job Title: <span className='font-semibold'>{contest.jobTitle}</span></h2>
                    <h2>Deadline: {contest.deadline}</h2>
                    <h2>Price range: ${contest.maxPrice} - ${contest.minPrice}</h2>
                    <h2 className='flex-grow'>Description: {contest.description}</h2>
                    <Link to={`/job-details/${contest._id}`}>
                      <button className='btn btn-accent text-white w-full '>Bid Now</button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {medical.map(contest => (
                <motion.div
                  key={contest._id}
                  className="container"
                  whileHover={{ scale: 1.2}}
                >
                  <div className='border p-6 space-y-2 rounded bg-cyan-100 h-60 flex flex-col'>
                    <h2>Job Title: <span className='font-semibold'>{contest.jobTitle}</span></h2>
                    <h2>Deadline: {contest.deadline}</h2>
                    <h2>Price range: ${contest.maxPrice} - ${contest.minPrice}</h2>
                    <h2 className='flex-grow'>Description: {contest.description}</h2>
                    <Link to={`/job-details/${contest._id}`}>
                      <button className='btn btn-accent text-white w-full '>Bid Now</button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {artical.map(contest => (
                <motion.div
                  key={contest._id}
                  className="container"
                  whileHover={{ scale: 1.2}}
                >
                  <div className='border p-6 space-y-2 rounded bg-cyan-100 h-60 flex flex-col'>
                    <h2>Job Title: <span className='font-semibold'>{contest.jobTitle}</span></h2>
                    <h2>Deadline: {contest.deadline}</h2>
                    <h2>Price range: ${contest.maxPrice} - ${contest.minPrice}</h2>
                    <h2 className='flex-grow'>Description: {contest.description}</h2>
                    <Link to={`/job-details/${contest._id}`}>
                      <button className='btn btn-accent text-white w-full '>Bid Now</button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {gaming.map(contest => (
                <motion.div
                  key={contest._id}
                  className="container"
                  whileHover={{ scale: 1.2}}
                >
                  <div className='border p-6 space-y-2 rounded bg-cyan-100 h-60 flex flex-col'>
                    <h2>Job Title: <span className='font-semibold'>{contest.jobTitle}</span></h2>
                    <h2>Deadline: {contest.deadline}</h2>
                    <h2>Price range: ${contest.maxPrice} - ${contest.minPrice}</h2>
                    <h2 className='flex-grow'>Description: {contest.description}</h2>
                    <Link to={`/job-details/${contest._id}`}>
                      <button className='btn btn-accent text-white w-full '>Bid Now</button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabPanel>

        </div>
      </Tabs>

      <div className='flex justify-end mb-10 '>
      <Link to={"/all-jobs"}>
      <div className='flex justify-between items-center gap-2 cursor-pointer text-cyan-600 p-2 hover:outline rounded-lg   hover:outline-1'>
          <span className='btn-link text-cyan-600 '>ALL JOBS</span><AiOutlineArrowRight/>
        </div>
      </Link>
      </div>
  
        <img  className='min-h-screen max-w-6 rounded-lg' src="https://i.ibb.co/31N0KWJ/ESL-Conversational-and-Vocabulary-Building-Educational-Presentation-in-Blue-and-Orange-Realistic-Sty.png" alt="" />
   
    </div>
  );
};

export default Jobs;
