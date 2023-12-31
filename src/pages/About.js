import React from 'react';
import Header from '../components/Header3';
import myimg from '../img/items/about.avif';
import myimg2 from '../img/items/about1.avif';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSearch, faUser,faCartShopping } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <>
      <Header />
      <div className="fixed  top-4 left-48  lg:w-1/3 md:w-1/4 sm:w-1/4 z-20  my-2">
                <input
                  type="text"
                  className="rounded-l-full lg:h-12 md:h-10 sm:h-10 py-2 px-4 sm:pr-12 w-full relative right-10 text-white bg-white focus:outline-none focus:border-green-500 border-2 border-green-700 leading-tight shadow-lg mb-2 sm:mb-0"
                  placeholder="Search Products"
                />
                <button
                  type="submit"
                  className="bg-gray-100  text-black font-bold lg:h-12 md:h-10 sm:h-8 py-2 px-4 rounded-r-full absolute right-0 top-0"
                 
                >
                  <div className='whitespace-nowrap px-2'><FontAwesomeIcon
  icon={faSearch}
  style={{ marginLeft: '0.5rem' }}
/></div>
                </button>
              </div>
      <div className="container mx-auto px-4 py-8">
     
        <h1 className="text-3xl font-bold mb-6 text-gray-800">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src={myimg} alt="About Us" className="rounded-lg" />
          </div>
          <div className=' border-bottom rounded-md shadow-lg p-3 h-fit relative top-10'>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Story</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-gray-600 mt-4">
              If you have any questions or feedback, please feel free to contact us. We would love to hear from you.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className=' border-top rounded-md shadow-lg p-3 h-fit'>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h2>
            <p className="text-gray-600 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-gray-600 mt-4">
              If you have any questions or feedback, please feel free to contact us. We would love to hear from you.
            </p>
            <button className='bg-green-600 text-white hover:bg-green-700 p-2 rounded-md my-2'>Contact us</button>
          </div>
          <div className='relative bottom-32'>
            <img src={myimg2} alt="About Us" className="rounded-lg" />
          </div>
        </div>
      </div>
    
    </>
  );
};

export default About;