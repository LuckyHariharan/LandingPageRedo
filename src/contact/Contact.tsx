import type { ReactNode } from 'react';
import React from 'react';

interface ContactProps {
  button: ReactNode;
}

const Contact = ({ button }: ContactProps) => {
  return (
    <div id="Contact" className="">
      <div></div>
      <form
        action="https://getform.io/f/501c4b9f-b28b-46aa-a746-858fb243f3da"
        method="POST"
      >
        <div className="mt-4 flex flex-col space-y-4 text-2xl font-bold md:place-items-center lg:mx-40">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="Email"
            id="email"
            className="w-full border-4 p-2"
          />
          <label htmlFor="message">Message:</label>
          <textarea
            name="Message"
            id="message"
            className="h-40 w-full border-4 p-2"
          ></textarea>
          <div className="flex justify-between space-x-8 px-12 md:mr-12 md:space-x-12">
            <div className="flex justify-center">{button}</div>
            <div className="flex items-center justify-center rounded-md border-2 border-slate-500 px-2 text-center text-lg font-normal hover:bg-slate-500 hover:text-white">
              <button
                type="submit"
                className="flex justify-center "
                name="Submit"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
