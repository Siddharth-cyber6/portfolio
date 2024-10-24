import React from 'react'
import { certifications } from '../../portfolio'
import './Certifications.css'

const Certifications = () => (
  <section className='section certifications'>
    <h2 className='section__title'>Certifications</h2>
    <ul className='certifications__list'>
      {certifications.map((cert, index) => (
        <li key={index} className='certifications__item'>
          {cert}
        </li>
      ))}
    </ul>
  </section>
)

export default Certifications