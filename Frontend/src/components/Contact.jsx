import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 mt-10">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600 dark:text-blue-400">
          Contact Us
        </h1>

        <form className="bg-white dark:bg-slate-900 dark:text-white shadow-md rounded-lg p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mt-1 p-2 border border-gray-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 p-2 border border-gray-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Write your message"
              className="w-full mt-1 p-2 border border-gray-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-white"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
