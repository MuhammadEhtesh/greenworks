import React from 'react'
import './Certifications.css'
import img1 from '../../assets/Images/img1.jpg'
import img2 from '../../assets/Images/img2.jpg'
import img3 from '../../assets/Images/img3.jpg'
import img4 from '../../assets/Images/img4.jpg'
import img5 from '../../assets/Images/img5.jpg'
import img6 from '../../assets/Images/img6.jpg'
import img7 from '../../assets/Images/img7.jpg'
import img8 from '../../assets/Images/img8.jpg'
import img9 from '../../assets/Images/img9.jpg'
import img10 from '../../assets/Images/img10.jpg'

const Certifications = () => {
  return (
    <>
      <div className='px-5 mt-5 text-center'>
        <h1 className='fw-bold textStyle'>Our Certifications</h1>
      </div>
      <div className='container px-4 py-5' id='featured-3'>
        <div className='row g-4 py-5 row-cols-1 row-cols-lg-6'>
          <div className='feature col text-center'>
            <div className='feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 mb-3'>
              <img className='Svgimg' src={img1} />
            </div>
          </div>
          <div className='feature col text-center'>
            <div className='feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 mb-3'>
              <img className='Svgimg' src={img2} />
            </div>
          </div>
          <div className='feature col text-center'>
            <div className='feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3'>
              <img className='Svgimg' src={img3} />
            </div>
          </div>
          <div className='feature col text-center'>
            <div className='feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3'>
              <img className='Svgimg' src={img4} />
            </div>
          </div>
          <div className='feature col text-center'>
            <div className='feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3'>
              <img className='Svgimg' src={img5} />
            </div>
          </div>
          <div className='feature col text-center'>
            <div className='feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3'>
              <img className='Svgimg' src={img6} />
            </div>
          </div>
        </div>
      </div>
      <div className='container px-4 ' id='featured-3'>
        <div className='row g-4 py-5 row-cols-1 row-cols-lg-6 px-5 justify-content-center'>
          <div className='feature col text-center '>
            <div className='feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 pb-5'>
              <img className='Svgimg' src={img7} />
            </div>
          </div>
          <div className='feature col text-center'>
            <div className='feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 mb-3'>
              <img className='Svgimg' src={img8} />
            </div>
          </div>
          <div className='feature col text-center'>
            <div className='feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3'>
              <img className='Svgimg' src={img9} />
            </div>
          </div>
          <div className='feature col text-center'>
            <div className='feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3'>
              <img className='Svgimg' src={img10} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Certifications
