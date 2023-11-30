import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hook/useAxiosPublic/useAxiosPublic";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const PageCreator = () => {
    const [user, setUser] = useState([]);
    const axiosPublic = useAxiosPublic();
    

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axiosPublic.get(`/users`);
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUser();
    }, []);

    const bestCreator = Array.isArray(user) ? user.filter((item) => item.bestCreator === true) : [];

    return (
        <div className="my-10">
            <SectionTitle heading={'Best Creator'}></SectionTitle>
            <>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {bestCreator.map(item => (
                        <SwiperSlide key={item._id}>
                            <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl mx-auto w-96">
                                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
                                    {/* Replace 'your_image_url' with the actual image source */}
                                    <img src={item.photo|| 'your_image_url'} alt="profile-picture" className="w-full h-full object-cover" />
                                </div>
                                <div className="p-6 text-center">
                                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                        {item.name}
                                    </h4>
                                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                        d{item.description}
                                    </h4>
                                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
                                        {item.bestCreator === true && 'Best Creator'}
                                    </p>
                                </div>
                                <div className="flex justify-center p-6 pt-2 gap-7">
                                    <a href={item.facebookLink || '#facebook'} className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400">
                                        <i className="fab fa-facebook" aria-hidden="true"></i>
                                    </a>
                                    <a href={item.twitterLink || '#twitter'} className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-light-blue-600 to-light-blue-400">
                                        <i className="fab fa-twitter" aria-hidden="true"></i>
                                    </a>
                                    <a href={item.instagramLink || '#instagram'} className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-purple-600 to-purple-400">
                                        <i className="fab fa-instagram" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </>
        </div>
    );
};

export default PageCreator;
