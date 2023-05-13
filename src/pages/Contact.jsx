import React from "react";
import { toast } from "react-hot-toast";

const Contact = () => {
  const handleForm = (e) => {
    e.preventDefault();
    toast.success("Message sent");
    e.target.reset();
  };
  return (
    <section className=" backdrop-blur-sm bg-opacity-10 bg-white ">
      <div className="py-5 lg:py-5 px-4 mx-auto max-w-screen-md bg-black bg-opacity-20 ">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <form onSubmit={handleForm} action="#" className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 rounded-lg bg-gray-200 text-gray-800"
              placeholder="name@address.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full px-4 py-3 rounded-lg bg-gray-200 text-gray-800 "
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="w-full px-4 py-3 rounded-lg bg-gray-200 text-gray-800"
              placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="btn-warning btn">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
