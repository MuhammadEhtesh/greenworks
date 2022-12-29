import React from 'react'
import Rectangle from '../../assets/Images/Rectangle 99.jpg'
import Mask from '../../assets/Images/Mask group.svg'
import './ContactInfo.css'

const ContactInfo = () => {
  return (
    <>
      <div className='container-fluid bg-all-main'>
        <div className='bgmain position-absolute row '>
          <div className='bckgroundImg1 position-absolute'></div>
          <div className='bckgroundImg2 position-absolute'></div>
          <div className='row d-flex justify-content-end'>
            <div style={{ zIndex: '10' }} className='col-6 text-white'>
              <p className='txt1'>Text . Chat . Click . Call</p>
              {/* <h1 className='txt2 text-white fs-1'>
                Available 7 days a <br /> week
              </h1>
              <h2 className='txt3 fs-3'>from 8 am to 8 pm</h2>
              <img className='SvgImg' src={Mask} /> */}
            </div>
          </div>
        </div>
        <img style={{ width: '100%', height: '640px' }} src={Rectangle} />
      </div>
    </>
  )
}

export default ContactInfo
