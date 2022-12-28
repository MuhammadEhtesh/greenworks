import React from 'react'
import './Inspection.css'
import Image from '../../assets/Images/pic1.png'

const Inspection = () => {
  return (
    <>
      <div className='container col-xl-10 col-xxl-8 px-4 py-5 background'>
        <div className='row align-items-center py-5'>
          <div className='col-lg-7 text-center text-lg-start'>
            <h1 className='txt1'>
              WHAT'S
              <br /> INSPECTED?
            </h1>
          </div>
          <div className='col-md-10 col-lg-5 txt2'>
            GreenWorks provides a full scope of home inspection services to suit
            your needs. Whether you are purchasing a pre-owned home.GreenWorks
            provides a full scope of home inspection services to suit your
            needs.
          </div>
        </div>
        <div>
          <img src={Image} />
        </div>
      </div>
    </>
  )
}

export default Inspection
