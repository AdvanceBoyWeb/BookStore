import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const About = () => {
  return (
    <>
    <Navbar/>
    <div className="max-w-4xl mx-auto p-6 mt-10">
      <div className="max-w-5xl mx-auto">
        {/* About Section */}
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-8">About Us</h2>

        <p className="text-black-300 text-lg leading-relaxed mb-10 text-center">
          Welcome to <span className="font-semibold ">BookStore</span> — your one-stop destination for all kinds of books.
          Whether you are a student, a passionate reader, or someone exploring new knowledge, we have something for everyone!
        </p>

        {/* Co-Founder Section */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-6">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="Co-Founder"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
          />
          <div>
            <h3 className="text-2xl font-semibold text-white">Armani Book store</h3>
            <p className="text-blue-400">Co-Founder & CEO</p>
            <p className="text-gray-300 mt-3">
              Armani founded Book Store with a vision to make books accessible to everyone.
              With a strong passion for reading and technology, he has built this platform to
              connect readers across the world.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    </>
  );

};

export default About;