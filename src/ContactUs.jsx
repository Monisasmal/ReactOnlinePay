import React, { useState } from "react";

const ContactUs = () => {
  const [userData, setUserData] = useState({
    firstName:"",
    lastName:"",
    phone:"",
    email:"",
    address:"",
    message:"",
  });
   let name,value;
   const postUserData = (event)=>{
    name = event.target.name;
    value = event.target.value;
    setUserData({...userData, [name]:value})
   };
    // Connect With FireBase

    const submitData = async(event) =>{
      event.preventDefault();
      const {firstName,
      lastName,
      phone,
      email,
      address,
      message
  } = userData;
  
  if( firstName && lastName && phone && email && address && message){
      const res = fetch('https://reactmultipage-bdba4-default-rtdb.firebaseio.com/userDataRecords.json',
      {
      method : "POST",
      Header :{
         "Content-Type" : "application/json", 
      },
      body : JSON.stringify({firstName,
        lastName,
        phone,
        email,
        address,
        message,})
    }
    );
    if(res){
      setUserData({
        firstName:"",
    lastName:"",
    phone:"",
    email:"",
    address:"",
    message:"",
      })
      alert("data stored")
    }
    else{
      alert("pls fill the Data")
    }
  }
  else{
    alert("Kindly fill the Data")
  }
  }
    
    
   
  return (
    <>
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className="main-heading">
                    Connect With Our  Excellent Team
                  </h1>
                  <p className="main-hero-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                    animi perferendis possimus repudiandae reiciendis aspernatur animi perferendis possimus repudiandae reiciendis aspernatur
                  </p>
                  <figure>
                    <img
                      src="./ReactOnlinePay/Images/Pic1.png"
                      alt="contactUs"
                      className="img-fluid"
                    />
                  </figure>
                </div>
                {/* For right Side Section */}
                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="firstName"
                          id=""
                          placeholder="First Name"
                          value={userData.firstName}
                          onChange={postUserData}
                          className="form-control"
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="lastName"
                          id=""
                          placeholder="Last Name"
                          value={userData.lastName}
                          onChange={postUserData}
                          className="form-control" 
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="phone"
                          id=""
                          placeholder="Phone Number"
                          value={userData.phone}
                          onChange={postUserData}
                          className="form-control"
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="email"
                          id=""
                          placeholder="Email Id"
                          value={userData.email}
                          onChange={postUserData}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-field">
                        <input
                          type="text"
                          name="address"
                          id=""
                          placeholder="Add Address"
                          value={userData.address}
                          onChange={postUserData}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-field">
                        <input
                          type="text"
                          name="message"
                          id=""
                          placeholder="Enter Your Message"
                          value={userData.message}
                          onChange={postUserData}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div class="form-check form-checkbox-style">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" className="main-hero-para">
                        I Agree For all this Condition 
                      </label>
                    </div>
                    <button type="submit" className="btn btn-style w-100"onClick={submitData}>Submit</button>
    .              </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
