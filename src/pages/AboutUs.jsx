import React from 'react';
import logo from '../images/home.PNG';
import aboutImage from '../images/about us.png';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div style={styles.body}>
      {/* Navbar */}
      <div style={styles.navbar}>
        <div style={styles.navbarLeft}>
          <img src={logo} alt="SLT Logo" style={styles.logo} />
          <h2 style={styles.title}>Training Program</h2>
        </div>
        <div style={styles.navbarRight}>
          <Link to="/home" style={styles.navLink}>Home</Link><span style={styles.separator}>|</span>
          <Link to="/about" style={styles.navLink}>About Us</Link><span style={styles.separator}>|</span>
          <Link to="/vacancies" style={styles.navLink}>Vacancies</Link><span style={styles.separator}>|</span>
          <Link to="/login" style={styles.navLink}>Login</Link>
        </div>
      </div>

      {/* About Section */}
      <div style={styles.aboutSection}>
        <div style={styles.aboutText}>
          <h2 style={styles.aboutHeading}>About Us</h2>
          <p style={styles.aboutParagraph}>
            "Established with a commitment to ensuring the highest quality outcomes for our 
            customers, we strive to deliver forward-thinking solutions, uncompromising integrity, 
            and long-term value. Our dedicated team of industry experts, creative thinkers, and technology 
            specialists is driven by a shared vision: to empower businesses and individuals through 
            transformative digital experiences. At SLT, we believe in a customer-first philosophy, 
            agile thinking, and continuous innovation. Join us on this exciting journey as we push 
            boundaries, challenge conventions, and set new standards in our field.
          </p>
          <button style={styles.button}>Learn more</button>
        </div>
        <div style={styles.aboutImageContainer}>
          <img src={aboutImage} alt="Team Illustration" style={styles.aboutImage} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  body: {
    backgroundColor: '#f7fbfd',
    padding: '1rem',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  navbar: {
    backgroundColor: 'white',
    borderRadius: '20px 20px 0 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    boxShadow: '0 1px 5px rgba(0, 0, 0, 0.1)',
    borderBottom: '2px solid #ccc',
  },
  navbarLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  logo: {
    height: '30px',
  },
  title: {
    fontSize: '1.2rem',
    color: '#0066cc',
  },
  navbarRight: {
    display: 'flex',
    gap: '2rem',
    fontSize: '1rem',
    alignItems: 'center',
  },
  navLink: {
    color: 'black',
    textDecoration: 'none',
    fontWeight: '500',
  },
  separator: {
    color: '#ccc',
  },
  aboutSection: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '2rem',
    backgroundColor: 'white',
    borderRadius: '0 0 20px 20px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
    flexWrap: 'wrap',
  },
  aboutText: {
    flex: '1',
    paddingRight: '2rem',
    minWidth: '280px',
  },
  aboutHeading: {
    fontSize: '2rem',
    color: '#0056a3',
    marginBottom: '1rem',
  },
  aboutParagraph: {
    fontSize: '1rem',
    lineHeight: '1.6',
    marginBottom: '2rem',
  },
  button: {
    padding: '0.7rem 1.5rem',
    backgroundColor: '#0056a3',
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  aboutImageContainer: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '280px',
  },
  aboutImage: {
    maxWidth: '100%',
    height: 'auto',
  },
};

export default AboutUs;
