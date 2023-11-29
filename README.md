# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


const axiosPublic = useAxiosPublic()
  const { id } = useParams();
  
  console.log('123', id);
  useEffect(() => {
    const fetchSurveys = async () => {
      try {
        const response = await axiosPublic.get(`/contest/${id}`);
        // Assuming the survey data is an array, update the state with the fetched data
        console.log(12345, response);
        setContestbilling(response.data)
      } catch (error) {
        // Handle error if the request fails
        console.error('Error fetching surveys:', error);
      }
    };

    fetchSurveys(); // Fetch surveys when the component mounts
  }, []);

  console.log('billling',contestbilling);
  const fee = contestbilling?.fee || 0 ;
  const price = fee


  contest_name: contest.map(item => item.contest_name),
          contest_creatorName: contest.map(item => item.contest_creatorName),
          created_by: contest.map(item => item.email),