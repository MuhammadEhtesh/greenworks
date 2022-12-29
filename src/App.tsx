import React from 'react'
import './App.css'
import Inspection from './components/Inspection/Inspection'
import Review from './components/Reviews/Review'
import ContactInfo from './components/contactinfo/ContactInfo'
import Testimonials from './components/testimonials/Testimonials'

function App() {
  return (
    <div>
      <Inspection />
      <Review />
      <ContactInfo />
      <Testimonials />
    </div>
  )
}

export default App
