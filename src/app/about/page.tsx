"use client";
import React from "react";
import Footer from "../../components/footer/Footer";
import "./style.css";
export default function About() {
  return (
    <>
      <main className="h-100 flex justify-center content-center flex-col overflow-x-hidden">
        <div className="p-5 md:mt-0 flex justify-center content-center h-100 marginTop">
          <div className="flex justify-center about	 pt-[70px]">
            <div className="person flex justify-center mr-7 translateLeft ">
              <img
                src="/person.jpg"
                className=" rounded-xl imageC aspect-square"
              />
            </div>
            <div className="flex flex-col justify-center  w-100 translateRight ">
              <h1 className="text-[25px] text-3xl  title   font-thin mt-10  md:pb-[10px] md:mt-0 ">
                Chantal Stanzione
              </h1>
              <p className="mt-10 text-[20px]  md:text-[20px] title text-xl  text-left">
                Chantal&apos;s paintings are a testament to her boundless
                creativity and dedication. Each stroke of her brush breathes
                life into her canvases, capturing the essence of her subjects
                with a rare and transcendent beauty. Her work ranges from
                exquisite portraits to evocative landscapes, all imbued with her
                signature style.
              </p>
            </div>
          </div>{" "}
        </div>{" "}
        <div className=" w-100 bottom-0 left-0 mt-[100px]">
          <Footer />
        </div>
      </main>{" "}
    </>
  );
}
