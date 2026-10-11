import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
          <i className="bx bx-award about__icon"></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">1+ Year Experience</span>
        </div>

        <div className="about__box">
          <i className="bx bx-briefcase about__icon"></i>
            <h3 className="about__title">Projects</h3>
            <span className="about__subtitle">6+ Projects Completed</span>
        </div>

        <div className="about__box">
          <i className="bx bx-chevrons-up about__icon"></i>
            <h3 className="about__title">Level</h3>
            <span className="about__subtitle">Intermediate – Advanced</span>
        </div>

    </div>
  )
}

export default Info