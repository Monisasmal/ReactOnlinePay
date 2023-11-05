import React, { useState } from 'react'
import howToUseApp from "./API/howToUseAPI"
const Aboutus = () => {
    const [aboutData, setAboutData] = useState(howToUseApp);
  return (<>
    <section className='common-section our-services'>
        <div className='container mb-5'>
            <div className='row'>
                <div className='col-12 col-lg-5 text-center our-services-leftside-img'>
                    <img src='./Images/pic4.jpg'alt='aboutImg'></img>
                </div>
                {/* Right Side Person */}
                <div className='col-12 col-lg-7 our-services-list'>
                    <h3 className='mini-title'>
                        --AVAILABLE @ GOOGLE AND IOS APP STORE ONLY
                    </h3>
                    <h1 className='main-heading'>How to Use the App?</h1>
                    {aboutData.map((curElem)=>{
                        return(<>
                        <div className='row our-services-info' key={curElem.id}>
                        <div className='col-1 our-services-number'>{curElem.id}</div>
                        <div className='col-10 our-services-data'>
                            <h2>{curElem.title}</h2>
                            <p className='main-hero-para'>{curElem.info}</p>
                        </div>
                    </div>
                        </>)
                    })}
                    
                    <br/>
                    <button className='btn-style btn-style-border'>Learn More</button>
                </div>
            </div>
        </div>
    </section>

    {/* // 2 Part About Us Section */}
    <section className='common-section our-services-rightside'>
        <div className='container mb-5'>
            <div className='row'>
                
                {/* Left Side Person */}
                <div className='col-12 col-lg-7 our-services-rightside-content'>
                    <h3 className='mini-title'>
                        --AVAILABLE @ GOOGLE AND IOS APP STORE ONLY
                    </h3>
                    <h1 className='main-heading'>How to Use the App?</h1>
                    {aboutData.map((curElem)=>{
                        return(<>
                        <div className='row our-services-info' key={curElem.id}>
                        <div className='col-1 our-services-number'>{curElem.id}</div>
                        <div className='col-10 our-services-data'>
                            <h2>{curElem.title}</h2>
                            <p className='main-hero-para'>{curElem.info}</p>
                        </div>
                    </div>
                        </>)
                    })}
                    
                    <br/>
                    <button className='btn-style btn-style-border'>Learn More</button>
                </div>
                 {/* Right Side Part */}
                <div className='col-12 col-lg-5  our-services-rightside-img'>
                    <img src='./Images/pic5.jpg'alt='aboutImg'></img>
                </div>
            </div>
        </div>
    </section>

    </>
  )
}

export default Aboutus