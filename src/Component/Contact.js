import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarOn } from '@fortawesome/free-solid-svg-icons';
import { faUserGear } from '@fortawesome/free-solid-svg-icons';
import { faPlugCircleBolt } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlassDollar } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';




const Contact = () => {
  return (
    <div>
      <div className='contact'></div>

      <div className="flex justify-center ">
        <div className="container bg-neutral-50 py-6 m-4 text-black ">
          <div>
            <h1 className="font-serif text-4xl mb-6 text-center">
              BMW Useful Relationships
            </h1> 
          </div>
          <div className="flex flex-wrap text-center justify-center gap-6 mt-10">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center">
              <FontAwesomeIcon
                icon={faCarOn}
                style={{ fontSize: "50px", marginBottom: "12px" }}
              />
              <h3 class="text-xl font-semibold text-blue-600 mb-2 mt-2 "> Models and technologies</h3>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center">
              <FontAwesomeIcon
                icon={faUserGear}
                style={{ fontSize: "50px", marginBottom: "12px" }}
              />
              <h3 class="text-xl font-semibold text-blue-600 mb-2 mt-2 ">Purchases and services</h3>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center">
              <FontAwesomeIcon
                icon={faPlugCircleBolt}
                style={{ fontSize: "50px", marginBottom: "12px" }}
              />
              <h3 class="text-xl font-semibold text-blue-600 mb-2 mt-2 ">Electromobility </h3>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center">
              <FontAwesomeIcon
                icon={faGlobe}
                style={{ fontSize: "50px", marginBottom: "12px" }}
              />
              <h3 class="text-xl font-semibold text-blue-600 mb-2 mt-2 ">BMW ConnectedDrive </h3>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center">
              <FontAwesomeIcon
                icon={faMagnifyingGlassDollar}
                style={{ fontSize: "50px", marginBottom: "12px" }}
              />
              <h3 class="text-xl font-semibold text-blue-600 mb-2 mt-2 ">Financial services </h3>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
            <div>
              <h2 class="text-4xl font-bold mb-4">Let's Start a Conversation</h2>
              <p class="text-lg mb-6">
                Reach out to us for any information about our BMW cars. We're here to assist you with top-notch service.
              </p>
              <div class="space-y-4">
                <div class="flex items-center">
                  <div class="p-3 bg-white rounded-full">
                    <svg class="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26c.68.45 1.54.45 2.22 0L21 8M5 10v10a2 2 0 002 2h10a2 2 0 002-2V10" />
                    </svg>
                  </div>
                  <span class="ml-4">Email: support@bmwcars.com</span>
                </div>
                <div class="flex items-center">
                  <div class="p-3 bg-white rounded-full">
                    <svg class="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2h-6a2 2 0 01-2-2v-2m-3-4h.01M8 6h12M12 4v2m4 0V4m0 16v2m0 0a4 4 0 00-8 0v-2" />
                    </svg>
                  </div>
                  <span class="ml-4">Phone: +91 123456789</span>
                </div>
                <div class="flex items-center">
                  <div class="p-3 bg-white rounded-full">
                    <svg class="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-2a4 4 0 014-4h10a4 4 0 014 4v2M16 3a4 4 0 01-8 0M4 15h16" />
                    </svg>
                  </div>
                  <span class="ml-4">Location: 01 BMW Street, Surat City</span>
                </div>
              </div>
            </div>
            <div class="relative">
              <div className="contact-i relative z-10 rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-300" />
            </div>
          </div>
        </div>
      </div>

      <div class="bg-gray-100 py-12">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-black mb-8 text-center">Useful Links</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-white rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 class="text-xl font-semibold text-blue-600 mb-2">BMW Models</h3>
              <p class="text-gray-600 mb-4">Explore our range of luxurious BMW cars and their features.</p>
              <a href="#" class="text-blue-500 hover:underline">Learn More →</a>
            </div>
            <div class="bg-white rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 class="text-xl font-semibold text-blue-600 mb-2">Book a Test Drive</h3>
              <p class="text-gray-600 mb-4">Experience the thrill of driving a BMW with a test drive today.</p>
              <a href="#" class="text-blue-500 hover:underline">Schedule Now →</a>
            </div>
            <div class="bg-white  rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 class="text-xl font-semibold text-blue-600 mb-2">Service Centers</h3>
              <p class="text-gray-600 mb-4">Find a BMW service center near you for reliable car maintenance.</p>
              <a href="#" class="text-blue-500 hover:underline">Locate Center →</a>
            </div>
            <div class="bg-white rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 class="text-xl font-semibold text-blue-600 mb-2">BMW Financing</h3>
              <p class="text-gray-600 mb-4">Learn more about our flexible financing options for your dream car.</p>
              <a href="#" class="text-blue-500 hover:underline">View Options →</a>
            </div>
            <div class="bg-white rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 class="text-xl font-semibold text-blue-600 mb-2">Contact Support</h3>
              <p class="text-gray-600 mb-4">Get in touch with our team for assistance with any queries.</p>
              <a href="#" class="text-blue-500 hover:underline">Contact Us →</a>
            </div>
            <div class="bg-white rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 class="text-xl font-semibold text-blue-600 mb-2">BMW Accessories</h3>
              <p class="text-gray-600 mb-4">Browse through a variety of official BMW accessories.</p>
              <a href="#" class="text-blue-500 hover:underline">Shop Now →</a>
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </div>
  )
}

export default Contact
