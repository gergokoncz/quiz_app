
import React from "react";
import Link from "next/link";
import Button from "./button";
import Logo from "./logo";

const Navigation = () => {
    return (
      <>
        <div className="w-full h-20 bg-dfds-main sticky top-0">
          <div className="container mx-auto px-4 h-full">
            <div className="flex justify-between items-center h-full">
              <Logo />
              <ul className="hidden md:flex gap-x-6 text-white">
                <li className="flex items-center h-12 rounded-lg bg-white font-bold px-5 align-middle hover:bg-dfds-mid"> 
                  <Link href="/admin" className="no-underline text-dfds-main">
                    <p>Create Quiz</p>
                  </Link>
                </li>
                <li className="flex items-center h-12 rounded-lg bg-white font-bold px-5 align-middle hover:bg-dfds-mid">
                  <Link href="/quiz" className="no-underline text-dfds-main">
                    <p>Take Quiz</p>
                  </Link>
                </li>
                <li className="flex items-center h-12 rounded-lg bg-white font-bold px-5 align-middle hover:bg-dfds-mid">
                  <Link href="/quiz" className="no-underline text-dfds-main">
                    <p>Run Quiz</p>
                  </Link>
                </li>
                <li className="flex items-center h-12 rounded-lg bg-white font-bold px-5 align-middle hover:bg-dfds-mid">
                  <Link href="/contact" className="no-underline text-dfds-main">
                    <p>Contact</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  };

export default Navigation;