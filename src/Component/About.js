import React from 'react';
import Footer from './Footer';

import About2 from '../Component/img/About1.jpg';
import Team1 from '../Component/img/team1.jpg';
import Team2 from '../Component/img/team2.jpg';
import Team3 from '../Component/img/team3.jpg';
import Team4 from '../Component/img/team4.jpg';
import Team5 from '../Component/img/team5.jpg';
import Team6 from '../Component/img/team6.jpg';
import Team7 from '../Component/img/team7.jpg';
import AboutUs1 from '../Component/img/aboutus1.jpg';

const About = () => {
  return (
    <div>
      {/* Header Section with Background */}
      <div
        className="min-h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${About2})` }}
      ></div>

      {/* Who We Are Section */}
      <div className="bg-gray-100 py-9 px-6 md:px-16 lg:px-32">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 md:text-4xl">Who We Are</h2>
          <p className="mt-4 text-gray-600 text-lg md:text-xl">
            At <span className="text-indigo-600 font-semibold">BMW</span>, we are passionate about redefining the way you travel.
            With years of experience, we bring innovation, style, and performance to every car we build.
          </p>
        </div>

        {/* Vision / Mission / Values Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* ... SVG Cards kept same ... */}
        </div>
      </div>

      {/* Our Team Section */}
      <div className="bg-gray-100 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Our Team</h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "John Doe", title: "Chief Designer", image: Team1 },
              { name: "Sonia Jain", title: "Financial Officer", image: Team2 },
              { name: "Angelique Strong Marks", title: "Legal Officer", image: Team3 },
              { name: "Doug Miller", title: "President and Commercial Officer", image: Team4 },
              { name: "Matthew Crawford", title: "Marketing Head", image: Team5 },
              { name: "Greg Heidorn", title: "Technology Officer", image: Team6 },
              { name: "Sarah Archibong", title: "Communications Officer", image: Team7 }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <div
                  className="w-full h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${member.image})` }}
                ></div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-gray-600">{member.title}</p>
                  <div className="mt-4 flex space-x-3">
                    <a href="#" className="text-blue-500 hover:text-blue-700"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="text-blue-400 hover:text-blue-600"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="text-pink-500 hover:text-pink-700"><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-96">
              <div
                className="w-full h-full bg-cover bg-center rounded-lg"
                style={{ backgroundImage: `url(${AboutUs1})` }}
              ></div>
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
  );
};

export default About;
