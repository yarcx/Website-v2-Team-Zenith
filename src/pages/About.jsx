import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout'
import Picx from '../assets/images/IMG_6292.jpg'
import Hero from '../components/Hero'

const About = () => {
    return (
      <DefaultLayout>
        <Hero title={"About Us"} />
        <div className="container mt-5 mb-5 container__section">
          <div className="row boxes">
            <div className="col-sm-12 col-md-6 mb-sm-3 box1">
              <div className="text">
                <h1>
                  Why you should do your <span className="check">CSR</span> with
                  us
                </h1>
                <div className=" py-2">
                  <p className="">
                    DevCareer is a Non-Profit organization that's focused on
                    supporting upcoming developers with resources to excel into
                    world class
                  </p>

                  <p className="py-2">
                    Underdeveloped African countries are lacking when it comes
                    to adequate resources to dive into Tech. DevCareer is
                    focused on supporting these group of people.
                  </p>
                </div>

                <div className="">
                  <button className="button">View Report</button>
                </div>
              </div>
            </div>
            <div className="col-sm-12  col-md-6 box2">
              <div className="picture"></div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    )
}
 
export default About