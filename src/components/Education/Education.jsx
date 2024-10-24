import React from 'react'
import { education } from '../../portfolio'
import './Education.css'

const Education = () => (
  <section className='section education'>
    <h2 className='section__title'>Education</h2>
    <div className='education__list'>
      {education.map((edu, index) => (
        <div key={index} className='education__item'>
          <h3 className='education__period'>{edu.period}</h3>
          <h4 className='education__institution'>{edu.institution}</h4>
          <p className='education__degree'>{edu.degree}</p>
          {edu.gpa && <p className='education__gpa'>{edu.gpa}</p>}
          {edu.notable && <p className='education__notable'>{edu.notable}</p>}
        </div>
      ))}
    </div>
  </section>
)

export default Education