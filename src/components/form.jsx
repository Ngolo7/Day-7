import React from "react";

function Form() {
  return (
    <form className="bg-gray-700 p-6 rounded-lg  text-slate-300 shadow-md w-96">
      <h3 className="text-xl font-semibold mb-4">Contact Form</h3>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Your name"
          className="h-12 rounded-lg p-5 input-bordered w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Your email"
          className="h-12 rounded-lg p-5 input-bordered w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message
        </label>
        <textarea
          id="message"
          placeholder="Your message"
          className="t h-20 rounded-lg p-5 w-full extarea textarea-bordered "
        />
      </div>
      <button type="submit" className="btn btn-primary w-full">
        Send
      </button>
    </form>
  );
}

export default Form;
