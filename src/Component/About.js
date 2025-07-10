import React from 'react'
import Footer from './Footer';



const About = () => {
  return (
    <div>
      <div className="aboutt">
      </div>

      <div className="bg-gray-100 py-9 px-6 md:px-16 lg:px-32">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 md:text-4xl">Who We Are</h2>
          <p className="mt-4 text-gray-600 text-lg md:text-xl">
            At <span className="text-indigo-600 font-semibold">BMW</span>, we are passionate about redefining the way you travel.
            With years of experience, we bring innovation, style, and performance to every car we build.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="text-indigo-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.341A8 8 0 116.34 4.572a8 8 0 0113.088 10.769z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.477 13.978A4.002 4.002 0 0116.95 4.95m-.8 2.2a3.5 3.5 0 10-4.2 4.2" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800">Our Vision</h3>
            <p className="mt-2 text-gray-600">To drive the future of automotive excellence with sustainable and cutting-edge solutions.</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="text-indigo-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 11c0 4.418-1.79 8-4 8s-4-3.582-4-8 1.79-8 4-8 4 3.582 4 8zM20 11c0 4.418-1.79 8-4 8s-4-3.582-4-8 1.79-8 4-8 4 3.582 4 8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800">Our Mission</h3>
            <p className="mt-2 text-gray-600">Delivering reliable vehicles that combine luxury, safety, and efficiency for every journey.</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="text-indigo-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 17V7m6 10V7m-9 3h18" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800">Our Values</h3>
            <p className="mt-2 text-gray-600">Integrity, innovation, and customer satisfaction are at the heart of everything we do.</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Our Team</h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <div className='tmamber1 w-full h-48 object-cover'></div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800">John Doe</h3>
                <p className="text-gray-600">Chief Designer</p>
                <div className="mt-4 flex space-x-3">
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-600">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-pink-500 hover:text-pink-700">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <div className='tmamber2 w-full h-48 object-cover'></div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800">Sonia Jain</h3>
                <p className="text-gray-600">Financial Officer</p>
                <div className="mt-4 flex space-x-3">
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-600">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-pink-500 hover:text-pink-700">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <div className='tmamber3 w-full h-48 object-cover'></div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800">Angelique Strong Marks</h3>
                <p className="text-gray-600">Legal Officer</p>
                <div className="mt-4 flex space-x-3">
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-600">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-pink-500 hover:text-pink-700">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <div className='tmamber4 w-full h-48 object-cover'></div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800">Doug Miller</h3>
                <p className="text-gray-600">President and Commercial Officer</p>
                <div className="mt-4 flex space-x-3">
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-600">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-pink-500 hover:text-pink-700">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <div className='tmamber5 w-full h-48 object-cover'></div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800">Matthew Crawford</h3>
                <p className="text-gray-600">Marketing Head</p>
                <div className="mt-4 flex space-x-3">
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-600">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-pink-500 hover:text-pink-700">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <div className='tmamber6 w-full h-48 object-cover'></div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800">Greg Heidorn</h3>
                <p className="text-gray-600">Technology Officer</p>
                <div className="mt-4 flex space-x-3">
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-600">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-pink-500 hover:text-pink-700">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <div className='tmamber7 w-full h-48 object-cover'></div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800">Sarah Archibong</h3>
                <p className="text-gray-600">Communications Officer</p>
                <div className="mt-4 flex space-x-3">
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-600">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-pink-500 hover:text-pink-700">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className='About123'></div>
            </div>

            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                About Us
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                We are a team of passionate individuals committed to delivering
                excellence in the automotive industry. Our mission is to bring
                innovation and quality to our customers, ensuring a seamless and
                enjoyable experience.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                With years of experience and a dedicated team, we strive to
                redefine industry standards through creativity, sustainability,
                and exceptional service.
              </p>
              <a
                href="#"
                className="mt-6 inline-block px-6 py-3 border border-black text-black bg-transparent rounded-lg shadow hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              >
                Learn More
              </a>

            </div>
          </div>
        </div>
      </div>

    <Footer />
    </div>
  )
}

export default About
