"use client";
import React from "react";
import Footer from "../../components/footer/Footer";
import "./style.css";
export default function About() {
  return (
    <main className="h-100 flex justify-center content-center">
      <div className="p-[30px]  pt-[150px] md:pt-[50x] lg:p-[100px] flex justify-center content-center ">
        <div className="flex justify-center pb-10 about	">
          <div className="person flex mr-7 translateLeft">
            <img src="/person.jpg" className=" m-auto" />
          </div>

          <div className="flex flex-col justify-center  w-100 translateRight ">
            <h1 className="text-[25px] text-3xl  title  text-center md:text-left font-thin mt-10  md:pb-[10px] md:mt-0 ">
              Chantal Stanzione
            </h1>
            <p className="mt-10  title text-xl  text-left">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, non, deserunt tempore veritatis quae mollitia,
              aspernatur sequi consequuntur blanditiis voluptate expedita
              officiis tempora facere! Ullam quisquam illo facilis voluptatem
              voluptatibus.
            </p>
          </div>
        </div>
      </div>{" "}
      <div className="absolute w-100 bottom-0 left-0">
        <Footer />
      </div>
    </main>
  );
}
