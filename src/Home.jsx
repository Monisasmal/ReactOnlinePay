import React from 'react';
import Navbar from "./navbar";
import Header from "./Header";
import HowitWork from "./HowItWork";
import AboutUs from "./Aboutus";
import Services from "./Services";
import ContactUs from "./ContactUs";
import EndFooter from "./EndFooter"
// import ErrorComponent from './ErrorComponent';

const Home = () => {
  return (
    <>
    <Navbar />
      <Header />
      <HowitWork />
      <AboutUs />
      <Services />
       <ContactUs />
      <EndFooter />
     {/* <ErrorComponent/> */}
</>
  )
}

export default Home