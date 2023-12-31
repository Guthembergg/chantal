"use client";
import React, { useState } from "react";
import "./style.css";
import Footer from "../../components/footer/Footer";
const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/fb7d1c80-64db-11ee-94f4-efb6cbd494ee"; // TODO - update to the correct endpoint

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Form response was not ok");
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <>
        <div className="pt-[200px] flex flex-col m-auto w-[200px] ">
          <div className="text-2xl ">Thank you!</div>
          <div className="text-md">We will be in touch soon.</div>
        </div>
      </>
    );
  }

  return (
    <div className="h-100 flex justify-center">
      <div className=" formContact flex flex-col">
        <h2 className="mb-5 title font-thin">Leave a message</h2>
        <form
          className="w-[300px] md:w-[450px]"
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          method="POST"
        >
          <div className="pt-0 mb-3">
            <input
              type="text"
              placeholder="Your name"
              name="name"
              className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
              required
            />
          </div>
          <div className="pt-0 mb-3">
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
              required
            />
          </div>
          <div className="pt-0 mb-3">
            <textarea
              placeholder="Your message"
              name="message"
              className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
              required
            />
          </div>
          <div className="pt-0 mb-3">
            <button
              className="active:bg-gray-500 hover:shadow-lg focus:outline-none px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-gray-400 rounded shadow outline-none"
              type="submit"
            >
              Send a message
            </button>
          </div>
        </form>{" "}
        <div className="absolute w-100 bottom-0 left-0">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
