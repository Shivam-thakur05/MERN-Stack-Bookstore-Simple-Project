import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Course from "../components/Course";

const Courses = () => {
  return (
    <>
      <NavBar />
      <div className="min-h-screen">
      <Course />
      </div>
      <Footer />
    </>
  );
};

export default Courses;
