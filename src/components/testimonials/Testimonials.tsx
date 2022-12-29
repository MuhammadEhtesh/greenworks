import React from 'react'
import './Tesimonials.css'

const Testimonials = () => {
  return (
    <>
      <div className='container-fluid bg-color'>
        <div className='pricing-header p-3 pb-md-4 mx-auto text-center'>
          <h1 className='txtSzng'>Clients TESTIMONIALS</h1>
          <h1 className='txtSzng1'>What our client saying</h1>
        </div>
        <div className='row row-cols-1 row-cols-md-3 mb-3 text-center'>
          <div className='col-3 d-flex justify-content-end'>
            <div
              className='card mb-4 rounded-3 shadow-sm'
              style={{ width: '300px' }}
            >
              <div className='card-header py-3'>
                <h4 className='my-0 fw-normal'>Free</h4>
              </div>
              <div className='card-body'>
                <h1 className='card-title pricing-card-title'>
                  $0<small className='text-muted fw-light'>/mo</small>
                </h1>
                <ul className='list-unstyled mt-3 mb-4'>
                  <li>10 users included</li>
                  <li>2 GB of storage</li>
                  <li>Email support</li>
                  <li>Help center access</li>
                </ul>
                <button
                  type='button'
                  className='w-100 btn btn-lg btn-outline-primary'
                >
                  Sign up for free
                </button>
              </div>
            </div>
          </div>
          <div className='col-3 d-flex justify-content-center'>
            <div
              className='card mb-4 rounded-3 shadow-sm'
              style={{ width: '300px' }}
            >
              <div className='card-header py-3'>
                <h4 className='my-0 fw-normal'>Pro</h4>
              </div>
              <div className='card-body'>
                <h1 className='card-title pricing-card-title'>
                  $15<small className='text-muted fw-light'>/mo</small>
                </h1>
                <ul className='list-unstyled mt-3 mb-4'>
                  <li>20 users included</li>
                  <li>10 GB of storage</li>
                  <li>Priority email support</li>
                  <li>Help center access</li>
                </ul>
                <button type='button' className='w-100 btn btn-lg btn-primary'>
                  Get started
                </button>
              </div>
            </div>
          </div>
          <div className='col-3 d-flex justify-content-start'>
            <div
              className='card mb-4 rounded-3 shadow-sm'
              style={{ width: '300px' }}
            >
              <div className='card-header py-3'>
                <h4 className='my-0 fw-normal'>Pro</h4>
              </div>
              <div className='card-body'>
                <h1 className='card-title pricing-card-title'>
                  $15<small className='text-muted fw-light'>/mo</small>
                </h1>
                <ul className='list-unstyled mt-3 mb-4'>
                  <li>20 users included</li>
                  <li>10 GB of storage</li>
                  <li>Priority email support</li>
                  <li>Help center access</li>
                </ul>
                <button type='button' className='w-100 btn btn-lg btn-primary'>
                  Get started
                </button>
              </div>
            </div>
          </div>
          {/* <div className='col-3 d-flex justify-content-center'>
            <div
              className='card mb-4 rounded-3 shadow-sm border-primary'
              style={{ width: '300px', marginRight: '45%' }}
            >
              <div className='card-header py-3'>
                <h4 className='my-0 fw-normal'>Enterprise</h4>
              </div>
              <div className='card-body'>
                <h1 className='card-title pricing-card-title'>
                  $29<small className='text-muted fw-light'>/mo</small>
                </h1>
                <ul className='list-unstyled mt-3 mb-4'>
                  <li>30 users included</li>
                  <li>15 GB of storage</li>
                  <li>Phone and email support</li>
                  <li>Help center access</li>
                </ul>
                <button type='button' className='w-100 btn btn-lg'>
                  Contact us
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Testimonials
