"use client";
import React from "react";
import "react-toggle/style.css"; // for ES6 modules
import Image from "next/image";
import { Gallery } from "react-grid-gallery";
import Toggle from "../components/darkMode/Toggle";
import Carousel from "../components/carousel/Carousel";
import Masonry from "../components/masonry/Masonry";

import Nav from "../components/navbar/Navbar";
const images = [
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    width: 320,
    height: 174,
    isSelected: true,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    width: 320,
    height: 212,
    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" },
    ],
    alt: "Boats (Jeshu John - designerspics.com)",
  },

  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    width: 320,
    height: 212,
  },
];

export default function Home() {
  const images = [
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      width: 320,
      height: 174,
      isSelected: true,
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      width: 320,
      height: 212,
      tags: [
        { value: "Ocean", title: "Ocean" },
        { value: "People", title: "People" },
      ],
      alt: "Boats (Jeshu John - designerspics.com)",
    },

    {
      src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
      width: 320,
      height: 212,
    },
  ];

  return (
    <main className="">
      {/*  <Gallery enableImageSelection={true} images={images} /> */}
      {/*    <Toggle />{" "}*/}
      <div className="p-[10%] pt-10">
        <div className="flex justify-center pb-10 mt-[100px]">
          <h1 className="text-[25px] md:text-4xl title font-thin">
            Chantal Stanzione
          </h1>
        </div>{" "}
        <Toggle />
        <Masonry />
      </div>
      <div className="w-[30%] m-auto"></div>
    </main>
  );
}
