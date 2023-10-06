"use client";

import gsap from "gsap";
import "./style.css";
import { createRef, useEffect, useMemo, useRef, useState } from "react";
import Toggle from "../darkMode/Toggle";
import { useMediaQuery } from "react-responsive";
import createPersistedState from "use-persisted-state";
import { useColorScheme } from "../darkMode/Remember";
/*--------------------
Items
--------------------*/

/*--------------------
Menu
--------------------*/
export default function Menu() {
  const [toggle, setToggle] = useState(false);

  const navLinks = [
    {
      id: "Home",
      title: "Home",
      href: "",
    },
    {
      id: "Portfolio",
      title: "Portfolio",
      href: "Portfolio",
    },
    {
      id: "Skills",
      title: "Skills",
      href: "Skills",
    },

    {
      id: "Contacts",
      title: "Contacts",
      href: "Contacts",
    },
  ];

  const items = [
    {
      name: "About",
      color: "#FAFAFA",
      href: "#",
    },
    {
      name: "Works",
      color: "#FAFAFA",
      href: "#",
    },

    {
      name: "Experience",
      color: "#FAFAFA",
      href: "#",
    },
    {
      name: "Contacts",
      color: "#FAFAFA",
      href: "#",
    },
  ];

  const $root = useRef();
  const $indicator1 = useRef();
  const $indicator2 = useRef();
  const $items = useRef(items.map(createRef));
  const [active, setActive] = useState(0);

  const { value, setIsDark } = useColorScheme();

  const animate = () => {
    const menuOffset = $root.current.getBoundingClientRect();
    const activeItem = $items.current[active].current;
    const { width, height, top, left } = activeItem.getBoundingClientRect();

    const settings = {
      x: left - menuOffset.x,
      y: top - menuOffset.y,
      width: width,
      height: height,
      backgroundColor: items[active].color,
      ease: "elastic.out(.7, .7)",
      duration: 0.8,
    };

    gsap.to($indicator1.current, {
      ...settings,
    });

    gsap.to($indicator2.current, {
      ...settings,
      duration: 1,
    });
  };

  useEffect(() => {
    console.log(value);
    animate();
    window.addEventListener("resize", animate);

    return () => {
      window.removeEventListener("resize", animate);
    };
  }, [active]);

  return (
    <div ref={$root} className="menu  ">
      {items.map((item, index) => (
        <a
          onClick={() => {}}
          key={item.name}
          ref={$items.current[index]}
          className={`item  sm:flex hidden ${active === index ? "active" : ""}`}
          onMouseEnter={() => {
            setActive(index);
            console.log(value);
          }}
          href={item.href}
        >
          {item.name}
        </a>
      ))}{" "}
      <div className="relative flex allToggle">
        {" "}
        <div className="scritta">
          <svg
            onClick={() => {
              console.log(value);
            }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        </div>
        <Toggle />
      </div>
      <div className="sm:hidden flex flex-1 justify-end allToggle">
        {toggle && (
          <>
            <span
              v-show="open"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </>
        )}
        {!toggle && (
          <>
            <span
              v-show="!open"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </span>
          </>
        )}

        {/* Sidebar */}
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-[40px] right-0 mx-4 my-2 min-w-[200px] min-h-[240px] rounded-xl sidebar bg-[#e6d8b8]`}
          style={{ zIndex: 1 }}
        >
          <ul className="list-none flex justify-center font-medium items-center jus flex-1 flex-col  ">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-thin text-xl cursor-pointer text-[16px] p-1 ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a className="" href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>{" "}
      <div ref={$indicator1} className="indicator" />
      <div ref={$indicator2} className="indicator" />
    </div>
  );
}
