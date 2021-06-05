import React from "react";
import logo from "../../images/header/logo.png";
import logo1 from "../../images/header/logo1.png";
import logo2 from "../../images/header/logo2.png";
import logo3 from "../../images/header/logo3.png";
import logo4 from "../../images/header/logo4.png";

export default function Header() {
  return (
    <React.Fragment>
     <nav className="fixed w-full flex z-20 bg-white h-1/10">
     <section className="w-3/4 flex items-center">
        <div className="w-1/3">
          <img src={logo} alt={logo} />
        </div>
        <div className="w-2/3 relative">
          <svg
            className="w-6 h-6 absolute top-4 left-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>

          <input
            placeholder="Cari Makan Bang?"
            className="w-5/6 text-lg pl-16 pr-2 py-3  rounded-3xl bg-gray-100"
            type="text"
          />
        </div>
      </section>
      <section className="bg-gray-200 w-1/4 h-full pl-10 pr-3 flex items-center justify-between mr-7.5">
          <div>
            <img
             className="h-6 w-6"
             src={logo2} alt={logo2} />
          </div>
          <div>
            <img
             className="h-6 w-6"
             src={logo3} alt={logo3} />
          </div>
          <div>
            <img
             className="h-6 w-6"
             src={logo4} alt={logo4} />
          </div>
          <div>
            <img
             className="h-6 w-6"
             src={logo1} alt={logo1} />
          </div>
      </section>
     </nav>
    </React.Fragment>
  );
}
