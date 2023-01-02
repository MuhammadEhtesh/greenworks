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
          <div className=' col-lg-5 col-md-8 col-sm-10 mt-5 text-center'>
            <h5 style={{color:"#82F4A4"}}>
             TEXT . CHAT . CLICK . CALL
            </h5>
            <h1>
              AVAILABLE 7 DAYS A  <br /> WEEK
            </h1>
            <div className='d-flex justify-content-center text-center '>
              <div className='d-flex'>
              <IconButton style={{color:"#82F4A4"}} >
                <AddIcCallIcon fontSize='large' />
              </IconButton>
              <h3 className='mt-2 fw-bolder'> (210) 750-4833</h3>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Flagsection
