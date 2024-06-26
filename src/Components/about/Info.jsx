import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i className="bx bx-award about__icon"></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">6 Months Experience</span>
        </div>

        <div className="about__box">
        <i className="bx bx-award about__icon"></i>
            <h3 className="about__title">Level</h3>
            <span className="about__subtitle">Intermediate</span>
        </div>

        <div className="about__box">
        <i className="bx bx-chevrons-up about__icon"></i>
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">Online 24/7</span>
        </div>

    </div>
  )
}

export default Info