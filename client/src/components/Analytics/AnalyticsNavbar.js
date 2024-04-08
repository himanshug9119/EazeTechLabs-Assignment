import React from 'react'
import { Link } from "react-router-dom";

const AnalyticsNavbar = () => {
  return (
    <div className="flex flex-row  sm:flex-col md:flex-row lg:flex-row xl:flex-row items-center h-10">
      <Link
        to={"/createreport"}
        className="flex flex-row pr-3 pl-3 border rounded-2xl text-white"
        style={{
          fontFamily: "Poppins",
          fontSize: "17.7px",
          backgroundColor: "#2f667f",
        }}
      >
        <div className="flex flex-row justify-center items-center pr-3 pl-3 gap-1">
          <img
            src="/assets/icons/plus.svg"
            className="h-5 w-5 items-center"
            alt="Plus Icon"
          ></img>
          <p className="p-1">Create Report</p>
        </div>
      </Link>
      <Link
        to={"/"}
        className="flex flex-row pr-3 pl-3 border rounded-2xl "
        style={{
          fontFamily: "Poppins",
          fontSize: "17.7px",
          color: "#2f667f",
        }}
      >
        <p className="p-1">Share this dashboard</p>
      </Link>
      <Link
        to={"/"}
        className="flex flex-row pr-3 pl-3 border rounded-2xl "
        style={{
          fontFamily: "Poppins",
          fontSize: "17.7px",
        }}
      >
        <p className="p-1">Select Duration</p>
      </Link>
      <Link
        to={"/"}
        className="flex flex-row pr-3 pl-3 border rounded-2xl "
        style={{
          fontFamily: "Poppins",
          fontSize: "17.7px",
        }}
      >
        <p className="p-1">Compare with Duration</p>
      </Link>
    </div>
  );
}

export default AnalyticsNavbar
