import React from 'react'

import bgImage2 from '../../assets/Images/Group 56.png'
import './Flagsection.css'
import { IconButton } from '@mui/material'
import AddIcCallIcon from '@mui/icons-material/AddIcCall'

const Flagsection = () => {
  return (
    <>

      {/* Second Section Start */}
      <div className='bgFlagImage'>
        <div
          className='d-flex justify-content-end text-white py-5'
        >
          <div className=' col-lg-5 col-md-8 col-sm-10 mt-5 '>
            <h1>
              Get Peace of Mind <br /> with Greenworks
            </h1>
            <h4 className='text-success'>
              Residential & Commercial Inspection
            </h4>
            <div className='d-flex '>
              <IconButton className='text-success'>
                <AddIcCallIcon fontSize='large' />
              </IconButton>
              <h3 className='mt-2 fw-bolder'> (210) 750-4833</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Flagsection
