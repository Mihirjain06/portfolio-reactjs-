import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Mihir Jain</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#projects" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#contact" className="footer__link">Contact</a>
                </li>
            </ul>

            <div className="footer__social">

                <a href="https://github.com/Mihirjain06" className="footer__social-link" target="blank">
                    <i className='bx bxl-github'></i>
                </a>

                <a href="https://www.linkedin.com/in/mihirjain04" className="footer__social-link" target="blank">
                    <i className='bx bxl-linkedin' ></i>
                </a>

                <a href="https://www.instagram.com/mihirjain_04/?igsh=MThyYWp1OHdtNDhycg%3D%3D" className="footer__social-link" target="blank">
                    <i className='bx bxl-instagram'></i>
                </a>
            </div>

            <span className="footer__copy">&copy; MihirJain. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer