import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarRear, faCarTunnel, faHandHoldingMedical } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';

import bgMain from '../Component/img/homepage-specialoffers111.jpeg';
import bgMain1 from '../Component/img/bg2.jpg';
import bgMain3 from '../Component/img/bg4.jpg';
import cosySec from '../Component/img/cosySec.png';
import cosySec1 from '../Component/img/cosySec1.png';
import cosySec2 from '../Component/img/cosySec2.png';
import cosySec3 from '../Component/img/cosySec3.png';
import cosySec5 from '../Component/img/cosySec5.png';
import cosySec6 from '../Component/img/cosySec6.png';
import cosySec7 from '../Component/img/cosySec7.png';
import cosySec8 from '../Component/img/cosySec8.png';
import cosySec9 from '../Component/img/cosySec9.png';

const Home = () => {
  const carModels = [
    { img: cosySec, label: 'BMW X Series' },
    { img: cosySec2, label: 'BMW 3 Series' },
    { img: cosySec1, label: 'BMW M4' },
    { img: cosySec3, label: 'BMW Z4' },
    { img: cosySec5, label: 'BMW XM' },
    { img: cosySec6, label: 'BMW M8' },
    { img: cosySec7, label: 'BMW 5 Series' },
    { img: cosySec8, label: 'BMW 7 Series' },
    { img: cosySec9, label: 'BMW M5' },
  ];

  return (
    <div>
      <div
        className='min-h-[550px] bg-cover bg-center'
        style={{ backgroundImage: `url(${bgMain})` }}
      ></div>

      <div className='flex justify-center p-4 mb-1'>
        <div className='container bg-neutral-50 p-6 text-black'>
          <h1 className='font-serif text-4xl mb-6 text-center'>Find Your BMW</h1>
          <div className='flex flex-wrap text-center justify-evenly mt-10 gap-6'>
            <div className='w-full sm:w-1/2 lg:w-1/3'>
              <FontAwesomeIcon icon={faCarRear} style={{ fontSize: '50px', marginBottom: '12px' }} />
              <h2 className='text-2xl mb-5'>Find a new Car.</h2>
              <button className='border-2 border-black w-full sm:w-32 h-14 rounded font-semibold hover:bg-gray-200 transition duration-300 ease-in-out hover:scale-105'>Search Now</button>
            </div>
            <div className='w-full sm:w-1/2 lg:w-1/3'>
              <FontAwesomeIcon icon={faCarTunnel} style={{ fontSize: '50px', marginBottom: '12px' }} />
              <h2 className='text-2xl mb-5'>Book a test drive.</h2>
              <button className='border-2 border-black w-full sm:w-32 h-14 rounded font-semibold hover:bg-gray-200 transition duration-300 ease-in-out hover:scale-105'>Request a test Drive</button>
            </div>
            <div className='w-full sm:w-1/2 lg:w-1/3'>
              <FontAwesomeIcon icon={faHandHoldingMedical} style={{ fontSize: '50px', marginBottom: '12px' }} />
              <h2 className='text-2xl mb-5'>Build your own</h2>
              <button className='border-2 border-black w-full sm:w-32 h-14 rounded font-semibold hover:bg-gray-200 transition duration-300 ease-in-out hover:scale-105'>Configure & Price</button>
            </div>
          </div>
        </div>
      </div>

      <div
        className='min-h-[400px] bg-cover bg-center container mx-auto flex flex-col md:flex-row p-4'
        style={{ backgroundImage: `url(${bgMain1})` }}
      >
        <div className='text-white md:w-1/2'>
          <h1 className='text-3xl md:text-5xl pt-12 md:pt-24 pl-6 md:pl-12'>BMW iX xDrive50.</h1>
          <h2 className='text-xl md:text-2xl pt-2 md:pt-4 pl-6 md:pl-12'>Stay ahead of the curve.</h2>
          <button className='bg-transparent border-2 border-gray-50 text-gray-50 mt-5 mb-3 ml-6 md:ml-12 font-semibold py-3 px-12 rounded transition duration-300 ease-in-out hover:bg-black hover:scale-105'>Discover Now</button>
        </div>
      </div>

      <div className='container mx-auto px-4 p-6'>
        <h1 className='text-4xl font-bold font-serif text-center mb-6 text-gray-800'>BMW All Models</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {carModels.map((car, i) => (
            <div key={i} className='group relative rounded-lg overflow-hidden bg-gray-300'>
              <div className='m-4 h-[200px] bg-cover bg-center' style={{ backgroundImage: `url(${car.img})` }}></div>
              <div className='absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <h2 className='text-white text-xl font-semibold'>{car.label}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className='min-h-[400px] bg-cover bg-center container mx-auto flex flex-col md:flex-row p-4 mt-10'
        style={{ backgroundImage: `url(${bgMain3})` }}
      >
        <div className='text-white md:w-1/2'>
          <h1 className='text-3xl md:text-4xl pt-12 md:pt-40 pl-6 md:pl-12 font-serif'>The iX: The joy of electric driving.</h1>
          <h2 className='text-xl md:text-xl pt-2 md:pt-4 pl-6 md:pl-12 font-serif'>100% electric. 100% driving pleasure.<br />Experience an entirely new sensation of sheer driving pleasure.</h2>
          <button className='bg-transparent border-2 border-gray-50 text-gray-50 mt-5 mb-3 ml-6 md:ml-12 font-semibold py-3 px-12 rounded transition duration-300 ease-in-out hover:bg-black hover:scale-105 font-sans hover:font-serif'>Know More</button>
        </div>
      </div>

      <div className='bg-gray-100 py-10'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-10'>
            <h2 className='text-3xl font-bold text-gray-900'>BMW India Customer Interaction Centre</h2>
            <p className='text-gray-600 text-lg'>Get in touch with us for all your queries, feedback, and support.</p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='bg-white p-6 rounded-lg shadow-lg'>
              <h3 className='text-2xl font-semibold text-gray-800 mb-4'>Customer Support</h3>
              <p className='text-gray-600 mb-4'>Our expert team is ready to assist you with any issues or inquiries related to BMW products and services.</p>
              <a href='/' className='text-blue-600 hover:text-blue-800'>Call us : +91 123456789</a>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-lg'>
              <h3 className='text-2xl font-semibold text-gray-800 mb-4'>Frequently Asked Questions</h3>
              <p className='text-gray-600 mb-4'>Find answers to the most common questions about our products, services, and more.</p>
              <a href='/' className='text-blue-600 hover:text-blue-800'>Visit FAQs</a>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-lg'>
              <h3 className='text-2xl font-semibold text-gray-800 mb-4'>Contact Us</h3>
              <p className='text-gray-600 mb-4'>Get in touch with us for more personalized assistance or to schedule a service appointment.</p>
              <a href='./Contact' className='text-blue-600 hover:text-blue-800'>Contact Us</a>
            </div>
          </div>

          <div className='mt-10 text-center'>
            <h4 className='text-xl font-semibold text-gray-800 mb-4'>Visit Us</h4>
            <p className='text-gray-600'>BMW India Showroom and Service Centers are available across major cities. Find one near you.</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
