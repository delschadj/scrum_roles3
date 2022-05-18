import React from 'react'
import CV from "../../assets/cv.pdf"

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download PDF</a>
        <a href="#about" className='btn btn-primary'>Let´s Begin</a>
    </div>
  )
}

export default CTA