// src/pages/Home.jsx
import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import heroImage from '../images/image.png';
import logo from '../images/home.PNG';
import fb from '../images/fb.PNG';
import tw from '../images/tw.PNG';
import ig from '../images/ig.PNG';
import linkin from '../images/linkin.PNG';
import yt from '../images/yt.PNG';

const cards = [
  {
    title: 'Trainee Network Engineers',
    description:
      'We are hiring new training network engineers for SLTMobitel... fresh graduates are preferred.',
    requirements: [
      'No job experiences are needed.',
      'Networking knowledge.',
      'Operating systems knowledge.',
      'Network devices and security knowledge.',
      'Networking device configuration knowledge.',
    ],
  },
  {
    title: 'ACCOUNTANT-FINANCIAL ACCOUNTING',
    description:
      'Sri Lanka Telecom is in search of high caliber, result-oriented and qualified individuals... operational controls.',
    requirements: [
      'Associate Membership of ICASL/ACCA/CIMA',
      'Preference to prize winners',
      'Interpersonal and communication skills',
    ],
  },
  {
    title: 'ENGINEERS',
    description:
      'As an Engineer of the pioneering ICT solutions provider... maintaining our state of the art ICT infrastructure.',
    requirements: [
      'Four-year Engineering Degree',
      'Associate Member of IESL',
      'Knowledge in Cloud, Cybersecurity, and Digital Platforms',
    ],
  },
  {
    title: 'TECHNICIANS',
    description:
      'Technicians are mainly responsible in install, maintain and repair electronic communications equipment...',
    requirements: [
      '6 O/L passes with English and Maths',
      'NVQ Level 4 certification',
    ],
  },
];

const Home = () => {
  return (
    <div>
      <header>
        <div className="logo">
          <img src={logo} alt="SLTMobitel Logo" height="40" />
          <span className="logo-text">Training Program</span>
        </div>
        <nav>
          <a href="#">Home</a>
          <Link to="/AboutUs">About Us</Link>
          <a href="#">Vacancies</a>
          <Link to="/login">Login</Link>
        </nav>
      </header>

      <section className="hero">
        <img src={heroImage} alt="slt" width="1000px" />
      </section>

      <section className="card-section">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <ul>
              {card.requirements.map((req, i) => (
                <li key={i}>{req}</li>
              ))}
            </ul>
            <button className="apply-btn">Apply Now</button>
          </div>
        ))}
      </section>

      <footer>
        <div>
          <strong>ABOUT US</strong>
          <a href="https://slt.lk/en/about-us/corporate-responsibility">Corporate Responsibility</a>
          <a href="https://slt.lk/en/about-us/investors/financial-reports/annual">Investors</a>
          <a href="https://slt.lk/en/about-us/news">Media Center</a>
          <a href="https://slt.lk/en/careers">Careers</a>
        </div>
        <div>
          <strong>BUSINESS</strong>
          <a href="https://slt.lk/index.php/en/business">Enterprise</a>
          <a href="https://slt.lk/index.php/en/sme-micro-business">SME</a>
          <a href="https://slt.lk/index.php/en/wholesale">Wholesale</a>
          <a href="https://www.xyntac.com/">International</a>
        </div>
        <div>
          <strong>CONTACT US</strong><br />
          Sri Lanka Telecom PLC<br />
          Lotus Road, P.O.Box 503,<br />
          Colombo 01, Sri Lanka<br />
          Telephone: +94 112 021 000<br />
          Email: pr@slt.lk<br />
          (Monday to Friday - 9am to 5pm)
        </div>
        <div>
          <strong>CUSTOMER SUPPORT</strong><br />
          Email: <a href="mailto:1212@slt.com.lk">1212@slt.com.lk</a><br />
          <a href="mailto:1212@slt.com.lk">Self Service</a>: 1212 (Mon-Fri: 8am - 5pm)
        </div>
        <div className="social-icons">
          <img src={fb} alt="Facebook" />
          <img src={tw} alt="Twitter" />
          <img src={ig} alt="Instagram" />
          <img src={linkin} alt="LinkedIn" />
          <img src={yt} alt="YouTube" />
        </div>
      </footer>
    </div>
  );
};

export default Home;
