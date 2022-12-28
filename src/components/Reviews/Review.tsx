import React from 'react'
import './Review.css'

const Review = () => {
  return (
    <>
      <div className='px-4 py-5 my-5 text-center'>
        <h1 className='fw-bold txt3'>With thousands of 5-star reviews</h1>
        <div className='col-lg-6 mx-auto'>
          <p className='fw-bold mb-4 txt4'>
            you can trust what you're buying. You want to choose the best
            inspectors in the industry for your clients
          </p>
        </div>
      </div>
      <div className='container px-4 py-5' id='featured-3'>
        <div className='row g-4 py-5 row-cols-1 row-cols-lg-3'>
          <div className='feature col'>
            <div className='feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3'>
              <svg
                width='122'
                height='122'
                viewBox='0 0 122 122'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect
                  x='-22'
                  y='-7'
                  width='164'
                  height='151'
                  fill='url(#paint0_linear_1_6795)'
                />
                <defs>
                  <linearGradient
                    id='paint0_linear_1_6795'
                    x1='60'
                    y1='-7'
                    x2='60'
                    y2='144'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stop-color='#43945B' />
                    <stop offset='1' stop-color='#7FE19C' />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h3 className='fs-2'>Featured title</h3>
            <p>
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
            <a href='#' className='icon-link d-inline-flex align-items-center'>
              Call to action
              <svg className='bi' width='1em' height='1em'></svg>
            </a>
          </div>
          <div className='feature col'>
            <div className='feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3'>
              <svg className='bi' width='1em' height='1em'></svg>
            </div>
            <h3 className='fs-2'>Featured title</h3>
            <p>
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
            <a href='#' className='icon-link d-inline-flex align-items-center'>
              Call to action
              <svg className='bi' width='1em' height='1em'></svg>
            </a>
          </div>
          <div className='feature col'>
            <div className='feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3'>
              <svg className='bi' width='1em' height='1em'></svg>
            </div>
            <h3 className='fs-2'>Featured title</h3>
            <p>
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
            <a href='#' className='icon-link d-inline-flex align-items-center'>
              Call to action
              <svg className='bi' width='1em' height='1em'></svg>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Review
