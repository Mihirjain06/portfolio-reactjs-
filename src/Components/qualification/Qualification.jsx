import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">

          {/* ====== EDUCATION TAB ====== */}
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* B.Tech CSE */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B.Tech — Computer Science & Engineering</h3>
                <span className="qualification__subtitle">
                  Uka Tarsadia University, Bardoli, Surat
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 – 2025
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* 12th */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Higher Secondary (12th) — Science</h3>
                <span className="qualification__subtitle">
                  Rajasthan State Board
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2020 – 2021
                </div>
              </div>
            </div>

            {/* 10th */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Secondary (10th)</h3>
                <span className="qualification__subtitle">
                  Rajasthan State Board
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2019 – 2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          {/* ====== EXPERIENCE TAB ====== */}
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* Job - UTU Full Stack Developer */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Full Stack Developer & Website Developer</h3>
                <span className="qualification__subtitle">
                  Uka Tarsadia University — Bardoli, Surat
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Sep 2025 – Aug 2026
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* Training - UTU */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">.Net MVC Developer — Training</h3>
                <span className="qualification__subtitle">
                  Uka Tarsadia University — Bardoli, Surat
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Jun 2025 – Aug 2025
                </div>
              </div>
            </div>

            {/* Freelance - Digital Wealth */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Freelance .Net MVC Developer</h3>
                <span className="qualification__subtitle">
                  Digital Wealth — Unlisted IPO Platform
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Freelancing Project
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* Internship - TeachReal */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Full Stack Development Intern</h3>
                <span className="qualification__subtitle">
                  TeachReal — Valsad, Gujarat
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Aug 2023 – Nov 2023
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
