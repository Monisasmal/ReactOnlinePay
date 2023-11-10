import React from "react";

const Header = () => {
  return (
    <header>
      <section className="container main-hero-container">
        <div className="row">
          <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center 
          flex-column align-items-start order-lg-first order-last ">
            <h1 className="display-2">
              Online Payment Made
              <br /> Easy For You
            </h1>
            <p className="main-hero-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              facere ipsum illum est at sequi eum perferendis, enim repudiandae
              sint excepturi illo animi debitis accusantium? Animi soluta
              delectus mollitia veniam.
            </p>
            <h3>Get Early Access For You</h3>
            <div className="input-group mt-3">
              <input
                type="text"
                className="rounded-pill w-75 w-lg-75 me-3 p-2 form-control-text"
                placeholder="Enter your Email"
              />
              <div className="input-group-button">Get It Now</div>
            </div>
          </div>
          {/* For Right Side Column */}
          
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center 
            align-items-center main-herosection-images order-md-first order-sm-first">
                <img src="https://lottie.host/7e2f0b88-2dda-4b24-95bd-cb7983ab5fe6/hqGVZZwSBU.json"alt="heroImg" className="img-fluid"/>
                <img src="./Images/pic3.jpg"alt="heroImg" className="img-fluid main-hero-img3"/>
                <img src="./Images/pic2.jpg"alt="heroImg" className="img-fluid main-hero-img2"/>
            </div>
          </div>
        
      </section>
    </header>
  );
};

export default Header;
